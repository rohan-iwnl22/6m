"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 left-6 z-30">
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={toggle}
        className="group flex items-center gap-2 bg-[#0D0D0D]/80 backdrop-blur-sm border border-white/10 rounded-full px-3 py-2 text-xs tracking-wide text-[#B3B3B3] hover:text-white hover:border-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B0203A]"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-1"
            >
              <div className="flex items-end gap-0.5 h-3">
                <motion.div
                  animate={{ scaleY: [1, 1.8, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                  className="w-0.5 h-3 bg-[#B0203A] rounded-full origin-bottom"
                />
                <motion.div
                  animate={{ scaleY: [1, 1.4, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="w-0.5 h-3 bg-[#B0203A] rounded-full origin-bottom"
                />
                <motion.div
                  animate={{ scaleY: [1, 2, 1] }}
                  transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                  className="w-0.5 h-3 bg-[#B0203A] rounded-full origin-bottom"
                />
              </div>
              <span className="ml-1 hidden sm:inline">Music On</span>
            </motion.div>
          ) : (
            <motion.div
              key="muted"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-1"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
              <span className="hidden sm:inline">Music Off</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
