import "./globals.css";
import React from "react";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased font-sans bg-white text-[#1f295a]">
        <div className="min-h-screen flex flex-col">
          {/* Header: Fully Clickable & Cohesive Typography */}
          <nav className="h-20 md:h-24 flex items-center justify-center border-b border-slate-50">
            <Link href="/" className="flex items-center gap-4 group transition-opacity hover:opacity-80">
              <img
                src="https://mace.ac.in/wp-content/uploads/2025/01/logo-2.svg"
                alt="MACE Logo"
                className="h-8 md:h-10 w-auto grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
              />
              <div className="h-6 w-px bg-slate-200"></div>
              <span className="font-serif font-bold text-xl md:text-2xl tracking-tight text-[#1f295a]">
                MACE <span className="text-amber-500 tracking-tighter">’16</span>
              </span>
            </Link>
          </nav>

          <main className="flex-grow">{children}</main>

          {/* Footer: Unified Serif Signature */}
          <footer className="py-16 border-t border-slate-50 text-center px-6">
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="font-serif text-2xl md:text-3xl text-[#1f295a] tracking-tight">
                Journey Back <span className="italic text-amber-500 font-medium">to 2016</span>
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-[9px] uppercase tracking-[0.3em] font-black text-slate-400">
                <span>Mar Athanasius College of Engineering</span>
                <span className="hidden md:block opacity-30">•</span>
                <span>Class of 2016 Alumni</span>
                <span className="hidden md:block opacity-30">•</span>
                <span>© 2026</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}