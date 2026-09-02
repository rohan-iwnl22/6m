"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { memories } from "@/data/memories";
import { siteConfig } from "@/config/site";
import MemoryTimeline from "@/components/MemoryTimeline";
import FinaleSequence from "@/components/FinaleSequence";

export default function MemoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const memory = memories.find((m) => m.id === resolvedParams.id);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!memory) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505]">
        <div className="text-center px-4">
          <h1 className="font-serif text-3xl mb-4">Memory Not Found</h1>
          <p className="text-[#B3B3B3] mb-6">
            This chapter hasn&apos;t been written yet.
          </p>
          <Link
            href="/"
            className="text-sm text-[#B0203A] hover:text-[#D42F50] transition-colors"
          >
            &larr; Back to Our Story
          </Link>
        </div>
      </div>
    );
  }

  const isFinale = memory.id === "6-months";
  const config = siteConfig.memories[memory.id as keyof typeof siteConfig.memories];

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={memory.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="min-h-screen bg-[#050505]"
      >
        {/* Hero section */}
        <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat scale-105"
              style={{ backgroundImage: `url(${memory.cover})` }}
            />
            <div className="absolute inset-0 bg-[#050505]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
          </div>

          {/* Back button */}
          <div className="absolute top-6 left-6 z-20">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/"
                className="flex items-center gap-2 text-sm text-[#B3B3B3] hover:text-white transition-colors duration-300 bg-black/20 backdrop-blur-sm px-3 py-2 rounded-full border border-white/10"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5" />
                  <path d="M12 19l-7-7 7-7" />
                </svg>
                Our Story
              </Link>
            </motion.div>
          </div>

          {/* Title */}
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={showContent ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-xs tracking-[0.25em] text-[#B0203A] font-medium mb-2">
                  {config?.subtitle || memory.subtitle}
                </p>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.05em] mb-2">
                  {config?.title || memory.title}
                </h1>
                <p className="text-sm text-[#B3B3B3]/70 max-w-md">
                  {config?.description || memory.description}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <MemoryTimeline items={memory.items} />
        </section>

        {/* Finale sequence for 6-months */}
        {isFinale && <FinaleSequence />}

        {/* Footer */}
        <footer className="py-12 text-center text-sm text-[#B3B3B3]/50 border-t border-[#1A1A1A]">
          <Link href="/" className="hover:text-white transition-colors">
            &larr; Back to Our Story
          </Link>
        </footer>
      </motion.main>
    </AnimatePresence>
  );
}
