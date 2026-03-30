"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MemoryRibbon from "../components/MemoryRibbon";
import {
  ArrowUpRight,
  MessageCircle,
  MapPin,
  Calendar,
  Trophy,
  Sparkles,
  Clock,
} from "lucide-react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);

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

  const timerItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    // UX MAGIC: Smooth fade-in instead of returning null, avoiding layout shifts
    <div 
      className={`relative w-full max-w-[1140px] mx-auto px-6 py-12 md:py-20 transition-opacity duration-1000 ease-out ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Page Atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--color-mace-gold),transparent_70%)] opacity-[0.07] blur-[120px]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 lg:gap-8">
        
        {/* HERO BLOCK */}
        <div className="group relative md:col-span-2 md:row-span-2 min-h-[400px] overflow-hidden rounded-[2.5rem] border border-[var(--border)] bg-white p-8 md:p-10 lg:p-14 shadow-[0_8px_30px_rgba(116,12,8,0.03)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(116,12,8,0.08)]">
          {/* UX MAGIC: Added scale-105 for a slow, immersive parallax effect on hover */}
          <Image
            src="/hero.jpg"
            alt="Class of 2016 reunion background"
            fill
            priority
            className="object-cover object-center opacity-20 grayscale transition-all duration-1000 ease-out group-hover:scale-105 group-hover:opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-[var(--background)]/90" />

          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="mb-8 md:mb-12 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--text)] shadow-sm backdrop-blur-sm">
                <Sparkles className="h-3 w-3 text-[var(--color-mace-gold)]" strokeWidth={2.5} aria-hidden="true" />
                The Decennial
              </div>

              <h1 className="font-serif text-[3.25rem] sm:text-[4rem] lg:text-[6rem] leading-[0.85] tracking-tight text-[var(--color-mace-crimson)]">
                <span className="font-light">Class of</span>
                <br />
                <span className="bg-gradient-to-br from-[var(--color-mace-rust)] to-[var(--color-mace-gold)] bg-clip-text text-transparent font-bold pr-4">
                  2016
                </span>
              </h1>
            </div>

            <div className="mt-8">
              <p className="max-w-[320px] text-base md:text-lg leading-relaxed font-medium text-[var(--text-muted)] tracking-tight">
                A decade later. Reconnecting with the memories, the people, and the legacy.
              </p>

              {/* MOBILE COMPACT TIMER */}
              <div className="mt-6 flex w-full items-center justify-between rounded-2xl border border-[var(--border)] bg-white/60 p-4 shadow-sm backdrop-blur-md md:hidden">
                {timerItems.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center justify-center">
                      {/* UX MAGIC: tabular-nums prevents jittering as numbers change width */}
                      <span className="font-serif text-2xl font-medium tabular-nums tracking-tighter text-[var(--color-mace-crimson)]">
                        {mounted ? String(item.value).padStart(2, "0") : "--"}
                      </span>
                      <span className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                        {item.label}
                      </span>
                    </div>
                    {idx !== timerItems.length - 1 && (
                      <div className="font-serif text-xl font-light text-[var(--color-mace-stone)]/30" aria-hidden="true">:</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* TIMER BLOCK (Hidden on mobile, visible on desktop) */}
        <div className="group relative md:col-span-2 bg-gradient-to-br from-white to-[var(--surface-soft)] rounded-[2.5rem] border border-[var(--border)] p-6 md:p-8 lg:p-10 hidden md:flex flex-col justify-center overflow-hidden shadow-[0_8px_30px_rgba(116,12,8,0.02)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_30px_60px_rgba(116,12,8,0.06)] hover:-translate-y-1.5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,var(--color-mace-rust),transparent_70%)] opacity-[0.03]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_bottom_left,var(--color-mace-gold),transparent_70%)] opacity-[0.03]" />

          <div className="absolute -right-24 -top-24 w-72 h-72 border border-[var(--color-mace-gold)]/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" />
          <div className="absolute -right-12 -top-12 w-48 h-48 border border-[var(--color-mace-gold)]/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 delay-75 ease-out" />

          <div className="relative z-10">
            <div className="mb-6 md:mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-mace-crimson)]/60">
                <Clock className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                Countdown
              </div>

              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-[var(--border)] shadow-sm">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--color-mace-stone)]">
                  Live
                </span>
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-mace-rust)] opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-mace-rust)] opacity-80"></span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 md:gap-3 lg:gap-4 md:flex md:items-center w-full" aria-label="Countdown Timer">
              {timerItems.map((item, idx) => (
                <React.Fragment key={idx}>
                  <div className="relative flex flex-col items-center justify-center gap-1 w-full md:flex-1 py-3 md:py-4 bg-white md:bg-white/50 border border-[var(--border)]/60 rounded-2xl md:rounded-[1.25rem] shadow-[0_4px_12px_rgba(116,12,8,0.02)] md:shadow-[inset_0_2px_10px_rgba(0,0,0,0.01)] backdrop-blur-sm group-hover:border-[var(--color-mace-gold)]/30 transition-all duration-500">
                    <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[var(--color-mace-crimson)] tabular-nums tracking-tighter drop-shadow-sm">
                      {mounted ? String(item.value).padStart(2, "0") : "--"}
                    </span>
                    <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] w-full text-center">
                      {item.label}
                    </span>
                  </div>

                  {idx !== timerItems.length - 1 && (
                    <div className="hidden md:flex flex-col justify-center text-2xl lg:text-3xl font-serif font-light text-[var(--color-mace-stone)]/30 px-1" aria-hidden="true">
                      :
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE BENTO GRID / DESKTOP GRID CONNECTOR */}
        <div className="grid grid-cols-2 gap-4 md:contents">
          
          {/* LOCATION BLOCK */}
          {/* UX MAGIC: Added focus-visible for keyboard accessibility, aria-label for screen readers */}
          <a
            href="#map"
            aria-label="View location details for The OAT"
            className="col-span-1 md:col-auto group relative bg-white rounded-[2rem] md:rounded-[2.5rem] border border-[var(--border)] p-5 md:p-8 lg:p-10 flex flex-col justify-between overflow-hidden shadow-[0_8px_30px_rgba(116,12,8,0.02)] hover:shadow-[0_20px_40px_rgba(116,12,8,0.06)] hover:-translate-y-1 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-mace-gold)] focus-visible:ring-offset-2 transition-all duration-500 ease-out min-h-[180px] md:min-h-[220px]"
          >
            <MapPin className="absolute -right-4 -bottom-4 md:-right-8 md:-bottom-8 w-24 h-24 md:w-40 md:h-40 text-[var(--color-mace-gold)] opacity-[0.03] md:opacity-0 md:group-hover:opacity-[0.02] group-active:-translate-x-1 group-active:-translate-y-1 md:group-hover:-translate-x-2 md:group-hover:-translate-y-2 transition-all duration-700 ease-out pointer-events-none" aria-hidden="true" />

            <div className="flex justify-between items-start relative z-10 w-full">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-[1rem] md:rounded-2xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--color-mace-gold)]/30 group-hover:bg-[var(--color-mace-gold)]/10 transition-all duration-500 shadow-sm group-hover:scale-110">
                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-[var(--text-muted)] group-hover:text-[var(--color-mace-gold)] transition-colors duration-500" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <ArrowUpRight className="hidden md:block h-6 w-6 text-[var(--color-mace-stone)] opacity-0 group-hover:opacity-100 group-hover:text-[var(--color-mace-gold)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" aria-hidden="true" />
            </div>

            <div className="relative z-10 w-full mt-auto">
              <p className="mb-1 md:mb-2 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--text-muted)] group-hover:text-[var(--color-mace-crimson)]/70 transition-colors duration-500">
                Location
              </p>
              <p className="font-serif text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-[var(--color-mace-crimson)]">
                The OAT
              </p>
            </div>
          </a>

          {/* DATE BLOCK */}
          <a
            href="#calendar"
            aria-label="View event calendar for December 19, 2026"
            className="col-span-1 md:col-auto group relative bg-white rounded-[2rem] md:rounded-[2.5rem] border border-[var(--border)] p-5 md:p-8 lg:p-10 flex flex-col justify-between overflow-hidden shadow-[0_8px_30px_rgba(116,12,8,0.02)] hover:shadow-[0_20px_40px_rgba(116,12,8,0.06)] hover:-translate-y-1 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-mace-rust)] focus-visible:ring-offset-2 transition-all duration-500 ease-out min-h-[180px] md:min-h-[220px]"
          >
            <Calendar className="absolute -right-4 -bottom-4 md:-right-8 md:-bottom-8 w-24 h-24 md:w-40 md:h-40 text-[var(--color-mace-rust)] opacity-[0.03] md:opacity-0 md:group-hover:opacity-[0.02] group-active:-translate-x-1 group-active:-translate-y-1 md:group-hover:-translate-x-2 md:group-hover:-translate-y-2 transition-all duration-700 ease-out pointer-events-none" aria-hidden="true" />

            <div className="flex justify-between items-start relative z-10 w-full">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-[1rem] md:rounded-2xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--color-mace-rust)]/30 group-hover:bg-[var(--color-mace-rust)]/10 transition-all duration-500 shadow-sm group-hover:scale-110">
                <Calendar className="h-5 w-5 md:h-6 md:w-6 text-[var(--text-muted)] group-hover:text-[var(--color-mace-rust)] transition-colors duration-500" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <ArrowUpRight className="hidden md:block h-6 w-6 text-[var(--color-mace-stone)] opacity-0 group-hover:opacity-100 group-hover:text-[var(--color-mace-rust)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" aria-hidden="true" />
            </div>

            <div className="relative z-10 w-full mt-auto">
              <p className="mb-1 md:mb-2 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--text-muted)] group-hover:text-[var(--color-mace-crimson)]/70 transition-colors duration-500">
                Date
              </p>
              <p className="font-serif text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-[var(--color-mace-crimson)]">
                Dec 19, '26
              </p>
            </div>
          </a>

          {/* WHATSAPP BLOCK */}
          <a
            href="https://chat.whatsapp.com/LCGlyEIPzLMCTfBe2zosaE?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join the Class of 2016 WhatsApp community"
            className="col-span-2 md:col-auto group relative bg-gradient-to-br from-[var(--color-mace-crimson)] to-[var(--color-mace-rust)] md:bg-none md:bg-white rounded-[2rem] md:rounded-[2.5rem] border-none md:border md:border-[var(--border)] p-6 md:p-8 lg:p-10 flex flex-col md:flex-col justify-between overflow-hidden shadow-[0_12px_30px_rgba(116,12,8,0.15)] md:shadow-[0_8px_30px_rgba(116,12,8,0.02)] hover:-translate-y-1 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-mace-crimson)] focus-visible:ring-offset-2 transition-all duration-500 ease-out min-h-[140px] md:min-h-[220px]"
          >
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 md:hidden mix-blend-overlay"></div>
            
            <MessageCircle className="absolute -right-4 -bottom-4 md:-right-8 md:-bottom-8 w-32 h-32 md:w-40 md:h-40 text-white/10 md:text-[var(--color-mace-crimson)] md:opacity-0 pointer-events-none" aria-hidden="true" />

            <div className="flex justify-between items-center md:items-start relative z-10 w-full mb-4 md:mb-0">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-[1rem] md:rounded-2xl bg-white/20 md:bg-[var(--background)] border border-white/20 md:border-[var(--border)] flex items-center justify-center backdrop-blur-sm shrink-0 group-hover:scale-110 transition-transform duration-500">
                <MessageCircle className="h-6 w-6 text-white md:text-[var(--text-muted)] md:group-hover:text-[var(--color-mace-crimson)] transition-colors duration-500" strokeWidth={1.5} aria-hidden="true" />
              </div>

              <div className="md:hidden px-4 py-2 rounded-full border border-white/30 bg-white/20 text-[9px] font-black uppercase tracking-widest text-white whitespace-nowrap flex items-center gap-1.5 backdrop-blur-md group-active:bg-white/30 transition-colors">
                Tap to Join <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
              </div>
            </div>

            <div className="relative z-10 w-full mt-auto flex flex-col md:block">
              <p className="mb-1 md:mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/70 md:text-[var(--text-muted)] md:group-hover:text-[var(--color-mace-crimson)]/70 transition-colors duration-500">
                Comms
              </p>
              <p className="font-serif text-2xl lg:text-3xl font-medium tracking-tight text-white md:text-[var(--color-mace-crimson)]">
                WhatsApp
              </p>
            </div>
          </a>
        </div>

        {/* CONTESTS BLOCK */}
        <Link
          href="/contest"
          aria-label="View Decennial contests and activities"
          className="group relative md:col-span-3 bg-white rounded-[2rem] md:rounded-[2.5rem] border border-[var(--border)] p-6 md:p-10 lg:p-12 flex flex-col md:flex-row md:items-center justify-between overflow-hidden shadow-[0_8px_30px_rgba(116,12,8,0.02)] hover:shadow-[0_40px_80px_rgba(116,12,8,0.08)] hover:-translate-y-1.5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-mace-gold)] focus-visible:ring-offset-2"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,var(--color-mace-gold),transparent_40%)] opacity-0 group-hover:opacity-[0.06] transition-opacity duration-1000" />
          <Trophy className="absolute -right-4 -bottom-12 md:-right-8 md:-bottom-12 w-48 h-48 md:w-64 md:h-64 text-[var(--color-mace-gold)] opacity-[0.03] md:opacity-0 group-hover:opacity-[0.03] group-hover:-translate-x-4 group-hover:-translate-y-4 transition-all duration-1000 ease-out pointer-events-none" aria-hidden="true" />

          <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-6 lg:gap-8 relative z-10 w-full">
            <div className="flex justify-between items-start w-full md:w-auto">
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-[1rem] md:rounded-[1.5rem] bg-[var(--surface-soft)] border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--color-mace-gold)] group-hover:border-[var(--color-mace-gold)] transition-all duration-700 shadow-sm shrink-0 group-hover:scale-105">
                <Trophy className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-[var(--color-mace-gold)] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} aria-hidden="true" />
              </div>

              {/* MOBILE ARROW */}
              <div className="md:hidden w-10 h-10 rounded-full bg-[var(--surface-soft)] border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--color-mace-gold)]/10 group-hover:border-[var(--color-mace-gold)]/20 transition-all duration-500">
                <ArrowUpRight className="h-5 w-5 text-[var(--color-mace-crimson)] group-hover:text-[var(--color-mace-gold)] transition-all" strokeWidth={1.5} aria-hidden="true" />
              </div>
            </div>

            <div className="mt-2 md:mt-0">
              <div className="mb-2 flex flex-wrap items-center gap-2 md:gap-4">
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-[var(--color-mace-crimson)]">
                  The <span className="bg-gradient-to-r from-[var(--color-mace-gold)] to-[var(--color-mace-rust)] bg-clip-text text-transparent font-semibold">Contests</span>
                </h3>
                <div className="px-3 py-1.5 rounded-full border border-[var(--color-mace-gold)]/30 bg-[var(--color-mace-gold)]/10 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-mace-gold)] whitespace-nowrap">
                  Let&apos;s Get Rolling!
                </div>
              </div>
              <p className="max-w-md text-sm md:text-base lg:text-lg font-medium text-[var(--text-muted)] leading-relaxed">
                Step back in. Create. Compete.
              </p>
            </div>
          </div>

          {/* DESKTOP ARROW */}
          <div className="hidden md:flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-[var(--text-muted)] group-hover:text-[var(--color-mace-gold)] transition-colors duration-500 relative z-10 shrink-0">
            <div className="w-10 h-10 rounded-full bg-[var(--surface-soft)] border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--color-mace-gold)]/10 group-hover:border-[var(--color-mace-gold)]/20 transition-all duration-500">
              <ArrowUpRight className="h-5 w-5 text-[var(--color-mace-crimson)] group-hover:text-[var(--color-mace-gold)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} aria-hidden="true" />
            </div>
          </div>
        </Link>
      </div>

      {/* MEMORY RIBBON SECTION */}
      <div className="mt-6 lg:mt-8 w-full">
        {/* Make sure your MemoryRibbon component also supports keyboard navigation if it's interactive! */}
        <MemoryRibbon />
      </div>
    </div>
  );
}
