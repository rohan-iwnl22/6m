"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Photo = {
  src: string;
  alt?: string;
  poster?: string;
};

type PhotoSlideshowProps = {
  photos: Photo[];
  autoPlayInterval?: number;
};

export default function PhotoSlideshow({
  photos,
  autoPlayInterval = 5000,
}: PhotoSlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos.length]);

  useEffect(() => {
    if (isPlaying && photos.length > 1) {
      intervalRef.current = setInterval(next, autoPlayInterval);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, next, autoPlayInterval, photos.length]);

  const handleInteraction = () => {
    setIsPlaying(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  if (photos.length === 0) return null;

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg bg-[#0D0D0D]"
      role="region"
      aria-label="Photo slideshow"
      aria-roledescription="carousel"
    >
      {/* Main image */}
      <div className="relative aspect-video sm:aspect-[16/10] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            {!imageErrors.has(current) ? (
              <Image
                src={photos[current].src}
                alt={photos[current].alt || `Photo ${current + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover"
                onError={() => {
                  setImageErrors((prev) => new Set(prev).add(current));
                }}
                priority={current === 0}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1a1a2e] to-[#0D0D0D]">
                <div className="text-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#B0203A"
                    strokeWidth="1"
                    className="mx-auto mb-3 opacity-50"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                  <p className="text-sm text-[#B3B3B3]/50 font-serif italic">
                    Photo unavailable
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Ken Burns subtle animation */}
        <motion.div
          key={`kb-${current}`}
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
          className="absolute inset-0 pointer-events-none"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Navigation arrows */}
        {photos.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleInteraction();
                prev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B0203A]"
              aria-label="Previous photo"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleInteraction();
                next();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B0203A]"
              aria-label="Next photo"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </>
        )}

        {/* Play/pause button */}
        {photos.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(!isPlaying);
            }}
            className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B0203A]"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <rect width="6" height="16" x="4" y="4" />
                <rect width="6" height="16" x="14" y="4" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        )}
      </div>

      {/* Progress dots */}
      {photos.length > 1 && (
        <div className="flex items-center justify-center gap-2 py-3 bg-[#0A0A0A]">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                handleInteraction();
                setCurrent(i);
              }}
              className={`rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B0203A] ${
                i === current
                  ? "w-6 h-1.5 bg-[#B0203A]"
                  : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to photo ${i + 1}`}
              aria-current={i === current ? "true" : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}
