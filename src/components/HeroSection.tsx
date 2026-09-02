"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";



export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/media/hero/poster.jpg"
          alt="Hero background"
          onLoad={() => setImageLoaded(true)}
          className={`h-full w-full object-cover transition-opacity duration-1000 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#0D0D0D]" />
        )}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.1em] mb-4">
            {siteConfig.title.toUpperCase()}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl tracking-[0.15em] text-[#B3B3B3] font-light mb-2">
            {siteConfig.subtitle}
          </p>
          <p className="text-sm sm:text-base text-[#B3B3B3]/70 max-w-md mx-auto mt-4 leading-relaxed">
            {siteConfig.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href="#memories"
            className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded text-sm font-medium tracking-wide hover:bg-[#B0203A] hover:text-white transition-all duration-300"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="transition-transform group-hover:scale-110"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            {siteConfig.heroCta.primary}
          </a>
          <a
            href="#memories"
            className="flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded text-sm font-medium tracking-wide hover:border-white/50 hover:bg-white/5 transition-all duration-300"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            {siteConfig.heroCta.secondary}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
