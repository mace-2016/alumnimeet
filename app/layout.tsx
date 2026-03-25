import "./globals.css";
import React from "react";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import { ChevronDown, Lock } from "lucide-react";

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
          
          {/* Header: Centered Logo with Expanded Navigation Below */}
          <header className="flex flex-col border-b border-slate-50 relative z-50">
            
            {/* Top Row: Centered Logo */}
            <div className="h-20 md:h-24 flex items-center justify-center mt-2 md:mt-4">
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
            </div>

            {/* Bottom Row: Expanded Navigation */}
            <nav className="flex items-center justify-center gap-6 md:gap-10 pb-5 px-4 flex-wrap">
              
              {/* 1. Home Link */}
              <Link 
                href="/" 
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-[#1f295a] transition-colors py-2"
              >
                Home
              </Link>

              {/* 2. Contests Dropdown */}
              <div className="relative group">
                <Link 
                  href="/contest" 
                  className="flex items-center gap-1.5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1f295a] hover:text-amber-500 transition-colors"
                >
                  Contests <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:-rotate-180" />
                </Link>

                {/* Dropdown Panel */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <div className="h-2 w-full"></div>
                  <div className="bg-white border border-slate-100 shadow-[0_15px_40px_-10px_rgba(31,41,90,0.1)] rounded-2xl overflow-hidden py-2">
                    <Link 
                      href="/contest/letsname" 
                      className="flex items-center gap-3 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1f295a] hover:bg-amber-50 hover:text-amber-600 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_5px_rgba(74,222,128,0.5)]"></span>
                      01: The Naming
                    </Link>
                    <div className="flex items-center gap-3 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 bg-slate-50/50 cursor-not-allowed">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                      02:███ ██████ <Lock className="w-3 h-3 opacity-50" />
                    </div>
                     <div className="flex items-center gap-3 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 bg-slate-50/50 cursor-not-allowed">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                      03:███ ██████ <Lock className="w-3 h-3 opacity-50" />
                    </div>
                     <div className="flex items-center gap-3 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 bg-slate-50/50 cursor-not-allowed">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                      04:█████████ ████ <Lock className="w-3 h-3 opacity-50" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Registration (Locked) */}
              <div 
                className="flex items-center gap-1.5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 cursor-not-allowed select-none"
                title="Opening Soon"
              >
                Registration <Lock className="w-3 h-3 opacity-50" />
              </div>


{/* 6. Itinerary (Locked - Hidden on very small screens to prevent clutter) */}
              <div 
                className="hidden md:flex items-center gap-1.5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 cursor-not-allowed select-none"
                title="Opening Soon"
              >
                The Master Plan <Lock className="w-3 h-3 opacity-50" />
              </div>
              

              {/* 4. Merchandise (Locked) */}
              <div 
                className="flex items-center gap-1.5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 cursor-not-allowed select-none"
                title="Opening Soon"
              >
                Merchandise <Lock className="w-3 h-3 opacity-50" />
              </div>

              {/* 5. Gallery (Locked - Hidden on very small screens to prevent clutter) */}
              <div 
                className="hidden sm:flex items-center gap-1.5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 cursor-not-allowed select-none"
                title="Opening Soon"
              >
                Gallery <Lock className="w-3 h-3 opacity-50" />
              </div>

              

            </nav>
          </header>

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
