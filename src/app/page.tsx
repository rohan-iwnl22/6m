"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import IntroSequence from "@/components/IntroSequence";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import MemoryGrid from "@/components/MemoryGrid";
import MusicToggle from "@/components/MusicToggle";

function getInitialIntroState() {
  if (typeof window === "undefined") {
    return { introComplete: false, showContent: false };
  }
  const seen = sessionStorage.getItem("intro-seen");
  return { introComplete: !!seen, showContent: !!seen };
}

export default function HomePage() {
  const [state, setState] = useState(getInitialIntroState);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem("intro-seen", "true");
    setState({ introComplete: true, showContent: false });
    setTimeout(() => {
      if (mounted.current) {
        setState({ introComplete: true, showContent: true });
      }
    }, 100);
  };

  return (
    <main className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {!state.introComplete && (
          <IntroSequence
            key="intro"
            onComplete={handleIntroComplete}
          />
        )}
      </AnimatePresence>

      {state.showContent && (
        <>
          <Navbar />
          <HeroSection />
          <MemoryGrid />
          <MusicToggle />
          <footer className="py-12 text-center text-sm text-[#B3B3B3] border-t border-[#1A1A1A]">
            <p className="font-serif italic tracking-wide">
              Built with love, for love.
            </p>
          </footer>
        </>
      )}
    </main>
  );
}
