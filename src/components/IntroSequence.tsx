"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

type IntroSequenceProps = {
  onComplete: () => void;
};

export default function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [stage, setStage] = useState(0);
  const [skipping, setSkipping] = useState(false);

  const advanceStage = useCallback(() => {
    setStage((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (skipping) return;

    const timers: NodeJS.Timeout[] = [];

    if (stage === 0) {
      timers.push(setTimeout(advanceStage, 1200));
    } else if (stage === 1) {
      timers.push(setTimeout(advanceStage, 2200));
    } else if (stage === 2) {
      timers.push(setTimeout(advanceStage, 2800));
    } else if (stage === 3) {
      timers.push(setTimeout(advanceStage, 2400));
    } else if (stage === 4) {
      timers.push(setTimeout(advanceStage, 2800));
    } else if (stage === 5) {
      timers.push(setTimeout(advanceStage, 1500));
    } else if (stage >= 6) {
      timers.push(setTimeout(() => onComplete(), 800));
    }

    return () => timers.forEach(clearTimeout);
  }, [stage, skipping, advanceStage, onComplete]);

  const handleSkip = () => {
    setSkipping(true);
    onComplete();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#030303]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Skip button */}
      <button
        onClick={handleSkip}
        className="skip-intro"
        aria-label="Skip intro"
      >
        Skip Intro
      </button>

      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        {/* Stage 1: Black screen / Ignition */}
        <AnimatePresence>
          {stage === 0 && (
            <motion.div
              key="stage-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.2, 1], opacity: [0, 0.8, 0.6] }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-1 w-1 rounded-full bg-[#B0203A] shadow-[0_0_60px_20px_rgba(176,32,58,0.3)]"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 2: First Message */}
        <AnimatePresence>
          {stage === 1 && (
            <motion.div
              key="stage-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center px-4"
            >
              <p className="font-serif text-xl sm:text-2xl md:text-3xl tracking-[0.2em] text-[#B3B3B3] italic text-center">
                {siteConfig.introLines.line1}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 3: Story Title */}
        <AnimatePresence>
          {stage === 2 && (
            <motion.div
              key="stage-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center px-4"
            >
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.15em] text-white text-center">
                {siteConfig.introLines.title}
              </h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 4: Timeline Teaser */}
        <AnimatePresence>
          {stage === 3 && (
            <motion.div
              key="stage-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="flex flex-col items-center gap-4 sm:gap-6">
                {siteConfig.introLines.milestones.map((milestone, i) => (
                  <motion.div
                    key={milestone}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.2,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex flex-col items-center gap-3 sm:gap-4"
                  >
                    <span className="text-xs sm:text-sm tracking-[0.3em] text-[#B3B3B3] font-sans font-medium">
                      {milestone}
                    </span>
                    {i < siteConfig.introLines.milestones.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: i * 0.2 + 0.15,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="h-6 sm:h-8 w-px bg-[#B0203A]/50"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 5: Emotional Statement */}
        <AnimatePresence>
          {stage === 4 && (
            <motion.div
              key="stage-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center px-4"
            >
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                {siteConfig.introLines.emotional.map((line, i) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.25,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.12em] text-[#D4D4D4] text-center"
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 6: Enter Platform transition */}
        <AnimatePresence>
          {stage === 5 && (
            <motion.div
              key="stage-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-[#050505]"
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
