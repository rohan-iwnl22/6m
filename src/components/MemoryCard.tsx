"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Memory } from "@/types/memory";

type MemoryCardProps = {
  memory: Memory;
  index: number;
};

export default function MemoryCard({ memory, index }: MemoryCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative cursor-pointer"
    >
      <a
        href={`/memories/${memory.id}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B0203A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] rounded-lg"
        aria-label={`Open ${memory.title}`}
      >
        <motion.div
          animate={
            isHovered
              ? { scale: 1.03, y: -8 }
              : { scale: 1, y: 0 }
          }
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-lg bg-[#0D0D0D] shadow-lg shadow-black/50"
        >
          {/* Cover image */}
          <div className="relative aspect-[2/3] overflow-hidden">
            {!imageError ? (
              <Image
                src={memory.cover}
                alt={memory.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                onError={() => setImageError(true)}
                priority={index === 2}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1a1a2e] to-[#0D0D0D]">
                <div className="text-center px-4">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#B0203A]/10 flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#B0203A"
                      strokeWidth="1.5"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                  </div>
                  <p className="text-xs text-[#B3B3B3]/50 font-serif italic">
                    Add cover photo
                  </p>
                </div>
              </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Play icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="ml-0.5"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </motion.div>

            {/* Milestone badge */}
            <div className="absolute top-3 left-3">
              <span className="text-[10px] tracking-[0.2em] text-white/70 bg-black/40 backdrop-blur-sm px-2 py-1 rounded font-medium">
                {memory.milestone}
              </span>
            </div>
          </div>

          {/* Card info */}
          <div className="p-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] tracking-[0.15em] text-[#B0203A] font-medium">
                {memory.subtitle}
              </span>
            </div>
            <h3 className="font-serif text-lg font-semibold tracking-wide mb-1">
              {memory.title}
            </h3>
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={isHovered ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm text-[#B3B3B3] overflow-hidden"
            >
              {memory.description}
            </motion.p>
          </div>
        </motion.div>
      </a>
    </motion.div>
  );
}
