export type MemoryItemType = "image" | "video" | "text";

export type MemoryItem = {
  type: MemoryItemType;
  src?: string;
  poster?: string;
  alt?: string;
  title?: string;
  description?: string;
  date?: string;
};

export type Memory = {
  id: string;
  milestone: string;
  title: string;
  subtitle: string;
  cover: string;
  description: string;
  episodeNumber: number;
  items: MemoryItem[];
};
