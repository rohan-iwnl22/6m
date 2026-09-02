"use client";

import { MemoryItem } from "@/types/memory";
import MediaItem from "./MediaItem";

type MemoryTimelineProps = {
  items: MemoryItem[];
};

export default function MemoryTimeline({ items }: MemoryTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#B0203A]/30 via-[#B0203A]/10 to-transparent" />

      {/* Timeline items */}
      <div className="space-y-8 sm:space-y-12">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative pl-12 sm:pl-16"
          >
            {/* Timeline dot */}
            <div className="absolute left-3 sm:left-5 top-6 w-2.5 h-2.5 rounded-full bg-[#050505] border-2 border-[#B0203A]/50" />

            <MediaItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
