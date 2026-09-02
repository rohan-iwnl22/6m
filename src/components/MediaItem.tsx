"use client";

import { MemoryItem } from "@/types/memory";
import PhotoSlideshow from "./PhotoSlideshow";
import VideoPlayer from "./VideoPlayer";
import { motion } from "framer-motion";
import { textReveal } from "@/lib/animations";

type MediaItemProps = {
  item: MemoryItem;
};

export default function MediaItem({ item }: MediaItemProps) {
  if (item.type === "text") {
    return (
      <motion.div
        variants={textReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="py-6 sm:py-8"
      >
        {item.date && (
          <p className="text-xs tracking-[0.2em] text-[#B0203A] font-medium mb-2">
            {item.date}
          </p>
        )}
        {item.title && (
          <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-wide mb-3">
            {item.title}
          </h3>
        )}
        {item.description && (
          <p className="text-[15px] leading-relaxed text-[#B3B3B3] max-w-2xl">
            {item.description}
          </p>
        )}
      </motion.div>
    );
  }

  if (item.type === "image") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="py-4"
      >
        {item.date && (
          <p className="text-xs tracking-[0.15em] text-[#B3B3B3]/50 mb-3 font-medium">
            {item.date}
          </p>
        )}
        <PhotoSlideshow
          photos={[{ src: item.src || "", alt: item.alt }]}
          autoPlayInterval={999999}
        />
      </motion.div>
    );
  }

  if (item.type === "video") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="py-4"
      >
        {item.date && (
          <p className="text-xs tracking-[0.15em] text-[#B3B3B3]/50 mb-3 font-medium">
            {item.date}
          </p>
        )}
        <VideoPlayer src={item.src || ""} poster={item.poster} />
      </motion.div>
    );
  }

  return null;
}
