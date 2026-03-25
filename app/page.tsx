"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles, ChevronDown, Calendar, MapPin } from "lucide-react";
export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true); // Prevents Next.js hydration mismatch on the timer
    
    // Targeted to Dec 19, 2026
    const targetDate = new Date("2026-12-19T00:00:00").getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) { 
        clearInterval(timer); 
        return; 
      }
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
      
      {/* Background matches the Contest Hub depth perfectly */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero.jpg')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#151c3d]/80 via-[#1f295a]/90 to-[#151c3d]/95 backdrop-blur-[2px]" />

      <main className="relative z-10 w-full max-w-6xl px-6 text-center text-white pt-10 pb-20">
        
        <div className="animate-in fade-in slide-in-from-top-4 duration-1000 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-amber-500 mb-6 opacity-90 flex items-center justify-center gap-3">
            <Sparkles className="w-3.5 h-3.5" /> The Decennial Celebration
          </p>

          <h1 className="text-6xl md:text-9xl font-serif leading-[0.85] mb-8 drop-shadow-2xl">
            <span className="block font-bold tracking-tight text-white">Journey Back</span>
            <span className="text-amber-400 italic font-light lowercase text-5xl md:text-8xl mt-2 block drop-shadow-[0_0_30px_rgba(251,191,36,0.2)]">
              to 2016
            </span>
          </h1>

          <div className="space-y-4 mb-16">
            <p className="text-sm md:text-base text-slate-300 max-w-lg mx-auto font-light tracking-wide leading-relaxed px-4">
              Reconnecting with decade-old memories.
            </p>
            
            <div className="flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.3em] text-amber-500/80 font-semibold bg-white/5 inline-flex px-6 py-2 rounded-full border border-white/10">
  <span className="flex items-center gap-2">
    <Calendar className="w-3 h-3" /> Dec 19
  </span>
  <span className="opacity-30 text-white">|</span>
  <span className="flex items-center gap-2">
    <MapPin className="w-3 h-3" /> The OAT
  </span>
</div>
          </div>
        </div>

        {/* Enhanced Glassmorphism Countdown Grid */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-20 animate-in fade-in zoom-in duration-1000 delay-300">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Mins", value: timeLeft.minutes },
            { label: "Secs", value: timeLeft.seconds },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center justify-center bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl w-20 h-24 sm:w-28 sm:h-32 md:w-32 md:h-36 shadow-xl"
            >
              <span className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-1 md:mb-2 leading-none">
                {mounted ? String(item.value).padStart(2, '0') : "00"}
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em] text-amber-500/80 font-semibold">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500">
          
          {/* Primary CTA with Pulsing Indicator */}
          <Link
  href="/contest"
  className="group relative px-12 py-4 bg-white text-[#1f295a] rounded-full font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-amber-400 transition-all flex items-center gap-3 shadow-xl hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] active:scale-95"
>
  {/* Live Pulse Dot */}
  <span className="absolute top-0 right-4 -translate-y-1/2 flex h-3.5 w-3.5">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    {/* Notice the border-white that changes to border-amber-400 on group hover */}
    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 border-2 border-white group-hover:border-amber-400 transition-colors"></span>
  </span>
  Explore Contests <ArrowRight className="w-4 h-4" />
</Link>

          {/* Functional WhatsApp Link */}
          <a 
            href="https://chat.whatsapp.com/YOUR_GROUP_LINK_HERE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-12 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center gap-3 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-green-400" />
            Join WhatsApp
          </a>
          
        </div>
      </main>

      <div className="absolute bottom-8 animate-bounce opacity-30 hidden md:block">
        <ChevronDown className="text-white w-5 h-5" />
      </div>
    </div>
  );
}
