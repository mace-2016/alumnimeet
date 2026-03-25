"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles, ChevronDown } from "lucide-react";

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Targeted to Dec 19, 2026
    const targetDate = new Date("2026-12-19T00:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) { clearInterval(timer); return; }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-80px)] w-full flex flex-col items-center justify-center overflow-hidden font-sans">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero.jpg')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1f295a]/60 via-[#1f295a]/85 to-[#1f295a]/95 backdrop-blur-[1px]" />

      <main className="relative z-10 w-full max-w-6xl px-6 text-center text-white pt-10 pb-20">
        <div className="animate-in fade-in slide-in-from-top-4 duration-1000 text-center">
  <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-amber-500 mb-6 opacity-90">
    The Decennial Celebration
  </p>

  <h1 className="text-6xl md:text-9xl font-serif leading-[0.85] mb-8">
    <span className="block font-bold tracking-tight text-white">Journey Back</span>
    <span className="text-amber-400 italic font-light lowercase text-5xl md:text-8xl mt-2 block">
      to 2016
    </span>
  </h1>

  {/* Your Updated Section - Minimal & Clean */}
  <div className="space-y-4 mb-16">
    <p className="text-sm md:text-base text-slate-300 max-w-lg mx-auto font-light tracking-wide leading-relaxed px-4">
      Reconnecting with decade-old memories.
    </p>
    
    <div className="flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.3em] text-amber-500/80 font-semibold">
      <span>Dec 19</span>
      <span className="opacity-20 text-white">|</span>
      <span>The OAT</span>
    </div>
  </div>
</div>

        {/* Countdown Grid: Lightened Weights */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 mb-20 animate-in fade-in zoom-in duration-1000 delay-300">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Mins", value: timeLeft.minutes },
            { label: "Secs", value: timeLeft.seconds },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-serif font-bold text-white mb-2 leading-none">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase tracking-[0.5em] text-amber-500/80 font-semibold">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500">
          <Link
            href="/eventname"
            className="group px-12 py-4 bg-white text-[#1f295a] rounded-full font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-amber-400 transition-all flex items-center gap-3 shadow-xl active:scale-95"
          >
            Name the Reunion <ArrowRight className="w-4 h-4" />
          </Link>

          <button className="px-12 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center gap-3 active:scale-95">
            <MessageCircle className="w-4 h-4 text-green-400" />
            WhatsApp
          </button>
        </div>
      </main>

      <div className="absolute bottom-8 animate-bounce opacity-30 hidden md:block">
        <ChevronDown className="text-white w-5 h-5" />
      </div>
    </div>
  );
}
