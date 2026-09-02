"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function FinaleSequence() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0508] to-[#050505]" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        {/* 6 MONTHS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs tracking-[0.3em] text-[#B0203A] font-medium mb-4 uppercase">
            {siteConfig.memories["6-months"].subtitle}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.08em] mb-12">
            6 MONTHS
          </h2>
        </motion.div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <p className="font-serif text-xl sm:text-2xl md:text-3xl leading-relaxed tracking-wide text-[#D4D4D4] italic">
            {siteConfig.finalMessage}
          </p>
        </motion.div>

        {/* Season tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="text-sm tracking-[0.15em] text-[#B3B3B3]/70">
            {siteConfig.seasonTag}
          </p>
        </motion.div>

        {/* Heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#B0203A"
              className="mx-auto"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Return link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#B3B3B3] hover:text-white transition-colors duration-300 tracking-wide group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform group-hover:-translate-x-1"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            Back to Our Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
