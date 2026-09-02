"use client";

import { motion } from "framer-motion";
import { memories } from "@/data/memories";
import MemoryCard from "./MemoryCard";
import { staggerContainer } from "@/lib/animations";

export default function MemoryGrid() {
  return (
    <section id="memories" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-12 sm:mb-16"
      >
        <p className="text-xs tracking-[0.3em] text-[#B0203A] font-medium mb-3 uppercase">
          Season 1
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.05em]">
          Our Episodes
        </h2>
        <p className="mt-4 text-sm text-[#B3B3B3] max-w-md mx-auto">
          Every chapter of our story, from the beginning to now.
        </p>
      </motion.div>

      {/* Memory cards grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {memories.map((memory, index) => (
          <MemoryCard key={memory.id} memory={memory} index={index} />
        ))}
      </motion.div>

      {/* Continue watching prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-16"
      >
        <p className="text-sm text-[#B3B3B3]/60 italic font-serif">
          More chapters coming soon...
        </p>
      </motion.div>
    </section>
  );
}
