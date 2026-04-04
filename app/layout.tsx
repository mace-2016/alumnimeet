"use client";

import "./globals.css";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Playfair_Display, Inter } from "next/font/google";
import {
  Lock,
  Home,
  Trophy,
  Map,
  ShoppingBag,
  Image as ImageIcon,
  Ticket,
} from "lucide-react";

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
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isContests = pathname.startsWith("/contest");
  const isPlan = pathname.startsWith("/plan");
  const isGallery = pathname.startsWith("/gallery");

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased font-sans bg-[#FCFCFD] text-[#1f295a]">
        
        {/* --- CINEMATIC SUNRISE MESH BACKGROUND (ANIMATED WITH EMBERS) --- */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          
          {/* 1. The Breathing Sun Core */}
          <div className="absolute -bottom-[40%] left-1/2 -translate-x-1/2 w-[100vw] h-[100vw] rounded-full bg-gradient-to-t from-amber-400 via-orange-400 to-rose-500/30 blur-[120px] animate-breathe" />

          {/* 2. The Horizon (Bleeding out to the bottom left and right) */}
          <div className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[50vw] rounded-full bg-red-500/15 blur-[140px]" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[50vw] rounded-full bg-pink-500/15 blur-[140px]" />

          {/* 3. Cinematic Sun Rays (Slowly Rotating) */}
          <div className="absolute -bottom-[50%] left-1/2 -translate-x-1/2 w-[200vw] h-[200vw] opacity-20 mix-blend-overlay blur-[60px] animate-slow-spin">
            <div 
              className="w-full h-full rounded-full"
              style={{ backgroundImage: 'repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, #f59e0b 15deg, transparent 30deg)' }}
            />
          </div>

          {/* 4. The Atmosphere (Subtle top glow) */}
          <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] rounded-full bg-blue-400/5 blur-[100px]" />

          {/* 5. NEW: Cinematic Embers / Fireflies */}
          <div className="absolute inset-0">
             <div className="absolute top-[60%] left-[20%] w-2 h-2 rounded-full bg-amber-200/60 blur-[1px] animate-float-1" />
             <div className="absolute top-[80%] left-[70%] w-3 h-3 rounded-full bg-orange-300/40 blur-[2px] animate-float-2" />
             <div className="absolute top-[40%] left-[80%] w-1.5 h-1.5 rounded-full bg-amber-100/50 blur-[1px] animate-float-3" />
             <div className="absolute top-[70%] left-[40%] w-4 h-4 rounded-full bg-rose-300/30 blur-[3px] animate-float-1" style={{ animationDelay: '2s' }} />
             <div className="absolute top-[30%] left-[10%] w-2 h-2 rounded-full bg-amber-400/40 blur-[1px] animate-float-2" style={{ animationDelay: '4s' }} />
          </div>

          {/* 6. Film Grain */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />

          {/* MAGIC CSS: Pure CSS Animations for the background */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes slow-spin {
              from { transform: translateX(-50%) rotate(0deg); }
              to { transform: translateX(-50%) rotate(360deg); }
            }
            @keyframes breathe {
              0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.35; }
              50% { transform: translateX(-50%) scale(1.05) translateY(-2%); opacity: 0.45; }
            }
            
            /* Embers drifting upwards and fading */
            @keyframes float-up-1 {
              0% { transform: translateY(0) scale(1); opacity: 0; }
              20% { opacity: 1; }
              80% { opacity: 1; }
              100% { transform: translateY(-20vh) scale(1.5); opacity: 0; }
            }
            @keyframes float-up-2 {
              0% { transform: translateY(0) scale(1) translateX(0); opacity: 0; }
              20% { opacity: 0.8; }
              80% { opacity: 0.8; }
              100% { transform: translateY(-25vh) scale(0.8) translateX(5vw); opacity: 0; }
            }
            @keyframes float-up-3 {
              0% { transform: translateY(0) scale(1) translateX(0); opacity: 0; }
              20% { opacity: 0.6; }
              80% { opacity: 0.6; }
              100% { transform: translateY(-15vh) scale(1.2) translateX(-3vw); opacity: 0; }
            }

            .animate-slow-spin {
              animation: slow-spin 120s linear infinite;
              transform-origin: center center;
            }
            .animate-breathe {
              animation: breathe 12s ease-in-out infinite;
            }
            .animate-float-1 { animation: float-up-1 10s ease-in-out infinite; }
            .animate-float-2 { animation: float-up-2 14s ease-in-out infinite; }
            .animate-float-3 { animation: float-up-3 12s ease-in-out infinite; }

            /* Accessibility Compliance: Pause all motion if requested */
            @media (prefers-reduced-motion: reduce) {
              .animate-slow-spin, .animate-breathe, 
              .animate-float-1, .animate-float-2, .animate-float-3 {
                animation: none !important;
                opacity: 0.5; /* Keep elements visible but static */
              }
            }
          `}} />
        </div>

        {/* --- MAIN CONTENT WRAPPER (Elevated with relative z-10) --- */}
        <div className="relative z-10 min-h-screen flex flex-col pb-[76px] md:pb-0">
          
          {/* TOP HEADER (Upgraded to frosted glass so the sky bleeds through) */}
          <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/60 shadow-sm flex flex-col">
            <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-10 relative">
              {/* Left: Logo Area */}
              <div className="flex-1 flex items-center">
                <Link
                  href="/"
                  className="flex items-center gap-3 group transition-opacity hover:opacity-80"
                >
                  <img
                    src="https://mace.ac.in/wp-content/uploads/2025/01/logo-2.svg"
                    alt="MACE Logo"
                    className="h-8 md:h-9 w-auto grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="hidden lg:block h-5 w-px bg-slate-200"></div>
                  <span className="hidden lg:block font-serif font-bold text-xl tracking-tight text-[#1f295a]">
                    MACE <span className="text-amber-500 tracking-tighter">’16</span>
                  </span>
                </Link>
              </div>

              {/* Center: Desktop Navigation */}
              <nav className="hidden md:flex flex-1 items-center justify-center gap-10 h-full absolute left-1/2 -translate-x-1/2">
                <Link href="/" className="relative flex items-center gap-2.5 h-full group cursor-pointer">
                  <Home
                    className={`w-5 h-5 transition-all duration-300 ${
                      isHome
                        ? "stroke-[#1f295a] fill-[#1f295a]/10"
                        : "stroke-slate-400 fill-slate-50 group-hover:stroke-[#1f295a] group-hover:fill-[#1f295a]/10"
                    }`}
                    strokeWidth={1.5}
                  />
                  <span
                    className={`text-sm transition-colors ${
                      isHome
                        ? "text-[#1f295a] font-semibold"
                        : "text-slate-500 font-medium group-hover:text-[#1f295a]"
                    }`}
                  >
                    Home
                  </span>
                  <div
                    className={`absolute bottom-0 left-0 w-full h-[3px] rounded-t-md transition-colors ${
                      isHome ? "bg-[#1f295a]" : "bg-transparent group-hover:bg-slate-200"
                    }`}
                  ></div>
                </Link>

                <div className="relative group h-full">
                  <Link href="/contest" className="relative flex items-center gap-2.5 h-full transition-colors duration-300">
                    <Trophy
                      className={`w-5 h-5 transition-all duration-300 ${
                        isContests
                          ? "stroke-amber-500 fill-amber-400/20"
                          : "stroke-slate-400 fill-slate-50 group-hover:stroke-amber-500 group-hover:fill-amber-400/20"
                      }`}
                      strokeWidth={1.5}
                    />
                    <span
                      className={`text-sm transition-colors ${
                        isContests
                          ? "text-[#1f295a] font-semibold"
                          : "text-slate-500 font-medium group-hover:text-[#1f295a]"
                      }`}
                    >
                      Contests
                    </span>

                    <span className="absolute top-3.5 -right-5 flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                    </span>

                    <div
                      className={`absolute bottom-0 left-0 w-full h-[3px] rounded-t-md transition-colors ${
                        isContests ? "bg-amber-500" : "bg-transparent group-hover:bg-slate-200"
                      }`}
                    ></div>
                  </Link>

                  <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <div className="bg-white border border-slate-100 shadow-[0_15px_40px_-10px_rgba(31,41,90,0.1)] rounded-2xl overflow-hidden py-2">
                      <Link
                        href="/contest/letsname"
                        className="flex items-center gap-3 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1f295a] hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.6)]"></span>
                        01: The Naming
                      </Link>
                      <div className="flex items-center gap-3 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 bg-slate-50/50 cursor-not-allowed">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                        02:███ ██████ <Lock className="w-3 h-3 opacity-50" />
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/plan" className="relative flex items-center gap-2.5 h-full group transition-colors duration-300">
                  <Map
                    className={`w-5 h-5 transition-all duration-300 ${
                      isPlan
                        ? "stroke-amber-500 fill-amber-400/20"
                        : "stroke-slate-400 fill-slate-50 group-hover:stroke-amber-500 group-hover:fill-amber-400/20"
                    }`}
                    strokeWidth={1.5}
                  />
                  <span
                    className={`text-sm transition-colors ${
                      isPlan
                        ? "text-[#1f295a] font-semibold"
                        : "text-slate-500 font-medium group-hover:text-[#1f295a]"
                    }`}
                  >
                    Master Plan
                  </span>
                  <div
                    className={`absolute bottom-0 left-0 w-full h-[3px] rounded-t-md transition-colors ${
                      isPlan ? "bg-amber-500" : "bg-transparent group-hover:bg-slate-200"
                    }`}
                  ></div>
                </Link>

                <Link href="/gallery" className="relative flex items-center gap-2.5 h-full group transition-colors duration-300">
                  <ImageIcon
                    className={`w-5 h-5 transition-all duration-300 ${
                      isGallery
                        ? "stroke-amber-500 fill-amber-400/20"
                        : "stroke-slate-400 fill-slate-50 group-hover:stroke-amber-500 group-hover:fill-amber-400/20"
                    }`}
                    strokeWidth={1.5}
                  />
                  <span
                    className={`text-sm transition-colors ${
                      isGallery
                        ? "text-[#1f295a] font-semibold"
                        : "text-slate-500 font-medium group-hover:text-[#1f295a]"
                    }`}
                  >
                    Gallery
                  </span>
                  <div
                    className={`absolute bottom-0 left-0 w-full h-[3px] rounded-t-md transition-colors ${
                      isGallery ? "bg-amber-500" : "bg-transparent group-hover:bg-slate-200"
                    }`}
                  ></div>
                </Link>
              </nav>

              {/* Right: Actions Cluster */}
              <div className="flex-1 flex items-center justify-end gap-2 md:gap-3">
                <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-full border border-slate-100 bg-slate-50 text-slate-400 cursor-not-allowed select-none transition-colors hover:bg-slate-100">
                  <ShoppingBag className="w-4 h-4 stroke-slate-400" strokeWidth={1.5} />
                  <span className="text-[13px] font-semibold hidden lg:block">Store</span>
                </div>
                <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-full border border-slate-100 bg-slate-50 text-slate-400 cursor-not-allowed select-none transition-colors hover:bg-slate-100">
                  <Ticket className="w-4 h-4 stroke-slate-400" strokeWidth={1.5} />
                  <span className="text-[13px] font-semibold hidden lg:block">Register</span>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-grow">{children}</main>

          {/* FOOTER (Removed bg-white so it sits natively on the sunset gradient) */}
          <footer className="bg-white/80 backdrop-blur-md py-16 border-t border-slate-200/60 text-center px-6 relative z-10">
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="font-serif text-2xl md:text-3xl text-[#1f295a] tracking-tight">
                Journey Back <span className="italic text-amber-500 font-medium">to 2016</span>
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-[9px] uppercase tracking-[0.3em] font-black text-slate-500">
                <span>Mar Athanasius College of Engineering</span>
                <span className="hidden md:block opacity-30">•</span>
                <span>Class of 2016 Alumni</span>
                <span className="hidden md:block opacity-30">•</span>
                <span>© 2026</span>
              </div>
            </div>
          </footer>
        </div>

        {/* BOTTOM TAB BAR (MOBILE ONLY) */}
        <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-200/60 z-50 flex items-center justify-around h-[76px] px-2 shadow-[0_-10px_30px_rgba(0,0,0,0.04)] [padding-bottom:env(safe-area-inset-bottom)]">
          <Link href="/" className="relative flex flex-col items-center justify-center w-full h-full group">
            <div className="mb-1">
              <Home
                className={`w-[24px] h-[24px] transition-colors ${
                  isHome ? "stroke-[#1f295a] fill-[#1f295a]/10" : "stroke-slate-400 fill-slate-50"
                }`}
                strokeWidth={1.5}
              />
            </div>
            <span
              className={`text-[10px] transition-colors ${
                isHome ? "text-[#1f295a] font-bold" : "text-slate-500 font-medium"
              }`}
            >
              Home
            </span>
          </Link>

          <Link href="/contest" className="relative flex flex-col items-center justify-center w-full h-full group">
            <div className="relative mb-1">
              <Trophy
                className={`w-[24px] h-[24px] transition-colors ${
                  isContests ? "stroke-amber-500 fill-amber-400/20" : "stroke-slate-400 fill-slate-50"
                }`}
                strokeWidth={1.5}
              />
              <span className="absolute -top-1 -right-4 bg-slate-700 text-white text-[7px] font-bold px-1 py-[1px] rounded shadow-sm uppercase tracking-wider border border-slate-600/50">
                NEW
              </span>
            </div>
            <span
              className={`text-[10px] transition-colors ${
                isContests ? "text-[#1f295a] font-bold" : "text-slate-500 font-medium"
              }`}
            >
              Contests
            </span>
          </Link>

          <Link href="/plan" className="relative flex flex-col items-center justify-center w-full h-full group">
            <div className="mb-1">
              <Map
                className={`w-[24px] h-[24px] transition-colors ${
                  isPlan ? "stroke-amber-500 fill-amber-400/20" : "stroke-slate-400 fill-slate-50"
                }`}
                strokeWidth={1.5}
              />
            </div>
            <span
              className={`text-[10px] transition-colors ${
                isPlan ? "text-[#1f295a] font-bold" : "text-slate-500 font-medium"
              }`}
            >
              Plan
            </span>
          </Link>

          <Link href="/gallery" className="relative flex flex-col items-center justify-center w-full h-full group">
            <div className="mb-1">
              <ImageIcon
                className={`w-[24px] h-[24px] transition-colors ${
                  isGallery ? "stroke-amber-500 fill-amber-400/20" : "stroke-slate-400 fill-slate-50"
                }`}
                strokeWidth={1.5}
              />
            </div>
            <span
              className={`text-[10px] transition-colors ${
                isGallery ? "text-[#1f295a] font-bold" : "text-slate-500 font-medium"
              }`}
            >
              Gallery
            </span>
          </Link>
        </nav>
      </body>
    </html>
  );
}
