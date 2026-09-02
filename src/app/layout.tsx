import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Our Story — Six Months of Us",
  description:
    "A cinematic streaming experience built with love. Six months of memories, one story.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white antialiased">{children}</body>
    </html>
  );
}
