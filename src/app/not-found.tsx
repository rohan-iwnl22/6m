import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505]">
      <div className="text-center px-4">
        <h1 className="font-serif text-5xl font-bold tracking-[0.08em] mb-4">
          404
        </h1>
        <p className="text-[#B3B3B3] mb-2 text-lg">
          This chapter doesn&apos;t exist yet.
        </p>
        <p className="text-[#B3B3B3]/50 text-sm mb-8">
          Maybe it&apos;s a story waiting to be written.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#B0203A] hover:text-[#D42F50] transition-colors duration-300"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Back to Our Story
        </Link>
      </div>
    </div>
  );
}
