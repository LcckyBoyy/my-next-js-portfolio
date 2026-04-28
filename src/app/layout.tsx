import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bene — Web Developer",
  description:
    "Junior web developer building internal tools with .NET and exploring the modern web stack.",
  openGraph: {
    title: "Bene — Web Developer",
    description:
      "Junior web developer building internal tools with .NET and exploring the modern web stack.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body className="min-h-screen bg-bg text-fg">{children}</body>
    </html>
  );
}
