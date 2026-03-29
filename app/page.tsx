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
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  const timerItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <div className="relative w-full max-w-[1140px] mx-auto px-6 py-12 md:py-20 animate-in fade-in duration-1000">
      {/* Page Atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--color-mace-gold),transparent_70%)] opacity-[0.07] blur-[120px]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 lg:gap-8">
        {/* HERO BLOCK */}
        <div className="group relative md:col-span-2 md:row-span-2 min-h-[400px] overflow-hidden rounded-[2.5rem] border border-[var(--border)] bg-white p-8 md:p-10 lg:p-14 shadow-[0_8px_30px_rgba(116,12,8,0.03)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(116,12,8,0.08)]">
          <Image
            src="/hero.jpg"
            alt="Class of 2016"
            fill
            priority
            className="object-cover object-center opacity-20 grayscale transition-opacity duration-1000 group-hover:opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-[var(--background)]/90" />

          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="mb-10 md:mb-12 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--text)] shadow-sm">
                <Sparkles
                  className="h-3 w-3 text-[var(--color-mace-gold)]"
                  strokeWidth={2.5}
                />
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

            <p className="max-w-[320px] text-base md:text-lg leading-relaxed font-medium text-[var(--text-muted)] tracking-tight mt-8">
              A decade later. Reconnecting with the memories, the people, and the
              legacy.
            </p>
          </div>
        </div>

        {/* TIMER BLOCK */}
        <div className="group relative md:col-span-2 bg-gradient-to-br from-white to-[var(--surface-soft)] rounded-[2.5rem] border border-[var(--border)] p-6 md:p-8 lg:p-10 flex flex-col justify-center overflow-hidden shadow-[0_8px_30px_rgba(116,12,8,0.02)] transition-all duration-700 hover:shadow-[0_30px_60px_rgba(116,12,8,0.06)] hover:-translate-y-1.5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,var(--color-mace-rust),transparent_70%)] opacity-[0.03]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_bottom_left,var(--color-mace-gold),transparent_70%)] opacity-[0.03]" />

          <div className="absolute -right-24 -top-24 w-72 h-72 border border-[var(--color-mace-gold)]/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" />
          <div className="absolute -right-12 -top-12 w-48 h-48 border border-[var(--color-mace-gold)]/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 delay-75 ease-out" />

          <div className="relative z-10">
            <div className="mb-6 md:mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-mace-crimson)]/60">
                <Clock className="h-4 w-4" strokeWidth={1.5} />
                Countdown
              </div>

              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-[var(--border)] shadow-sm">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--color-mace-stone)]">
                  Live
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-mace-rust)] opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-mace-rust)] opacity-80"></span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 md:gap-3 lg:gap-4 md:flex md:items-center w-full">
              {timerItems.map((item, idx) => (
                <React.Fragment key={idx}>
                  <div className="relative flex flex-col items-center justify-center gap-1 w-full md:flex-1 py-3 md:py-4 bg-white md:bg-white/50 border border-[var(--border)]/60 rounded-2xl md:rounded-[1.25rem] shadow-[0_4px_12px_rgba(116,12,8,0.02)] md:shadow-[inset_0_2px_10px_rgba(0,0,0,0.01)] backdrop-blur-sm group-hover:border-[var(--color-mace-gold)]/20 transition-colors duration-500">
                    <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[var(--color-mace-crimson)] tabular-nums tracking-tighter drop-shadow-sm">
                      {String(item.value).padStart(2, "0")}
                    </span>
                    <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] w-full text-center">
                      {item.label}
                    </span>
                  </div>

                  {idx !== timerItems.length - 1 && (
                    <div className="hidden md:flex flex-col justify-center text-2xl lg:text-3xl font-serif font-light text-[var(--color-mace-stone)]/30 px-1">
                      :
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE CAROUSEL / DESKTOP GRID CONNECTOR */}
        <div className="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 md:contents snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {/* LOCATION BLOCK */}
          <a
            href="#map"
            className="group relative bg-white rounded-[2rem] md:rounded-[2.5rem] border border-[var(--border)] p-6 md:p-8 lg:p-10 flex flex-col justify-between overflow-hidden shadow-[0_8px_30px_rgba(116,12,8,0.02)] hover:shadow-[0_20px_40px_rgba(116,12,8,0.06)] hover:-translate-y-1 active:scale-[0.98] transition-all duration-500 w-[240px] md:w-auto shrink-0 snap-start md:snap-none aspect-square md:aspect-auto min-h-[220px]"
          >
            <MapPin className="absolute -right-6 -bottom-6 md:-right-8 md:-bottom-8 w-32 h-32 md:w-40 md:h-40 text-[var(--color-mace-gold)] opacity-[0.02] md:opacity-0 md:group-hover:opacity-[0.02] group-active:-translate-x-1 group-active:-translate-y-1 md:group-hover:-translate-x-1 md:group-hover:-translate-y-1 transition-all duration-1000 ease-out pointer-events-none" />

            <div className="flex justify-between items-start relative z-10 w-full">
              <div className="w-14 h-14 rounded-2xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--color-mace-gold)]/30 group-hover:bg-[var(--color-mace-gold)]/10 transition-all duration-500 shadow-sm group-hover:scale-105">
                <MapPin
                  className="h-6 w-6 text-[var(--text-muted)] group-hover:text-[var(--color-mace-gold)] transition-colors duration-500"
                  strokeWidth={1.5}
                />
              </div>
              <ArrowUpRight className="hidden md:block h-6 w-6 text-[var(--color-mace-stone)] opacity-0 group-hover:opacity-100 group-hover:text-[var(--color-mace-gold)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
            </div>

            <div className="relative z-10 w-full mt-auto">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--text-muted)] group-hover:text-[var(--color-mace-crimson)]/70 transition-colors duration-500">
                Location
              </p>
              <p className="font-serif text-2xl lg:text-3xl font-medium tracking-tight text-[var(--color-mace-crimson)]">
                The OAT
              </p>
            </div>
          </a>

          {/* DATE BLOCK */}
          <a
            href="#calendar"
            className="group relative bg-white rounded-[2rem] md:rounded-[2.5rem] border border-[var(--border)] p-6 md:p-8 lg:p-10 flex flex-col justify-between overflow-hidden shadow-[0_8px_30px_rgba(116,12,8,0.02)] hover:shadow-[0_20px_40px_rgba(116,12,8,0.06)] hover:-translate-y-1 active:scale-[0.98] transition-all duration-500 w-[240px] md:w-auto shrink-0 snap-start md:snap-none aspect-square md:aspect-auto min-h-[220px]"
          >
            <Calendar className="absolute -right-6 -bottom-6 md:-right-8 md:-bottom-8 w-32 h-32 md:w-40 md:h-40 text-[var(--color-mace-rust)] opacity-[0.02] md:opacity-0 md:group-hover:opacity-[0.02] group-active:-translate-x-1 group-active:-translate-y-1 md:group-hover:-translate-x-1 md:group-hover:-translate-y-1 transition-all duration-1000 ease-out pointer-events-none" />

            <div className="flex justify-between items-start relative z-10 w-full">
              <div className="w-14 h-14 rounded-2xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--color-mace-rust)]/30 group-hover:bg-[var(--color-mace-rust)]/10 transition-all duration-500 shadow-sm group-hover:scale-105">
                <Calendar
                  className="h-6 w-6 text-[var(--text-muted)] group-hover:text-[var(--color-mace-rust)] transition-colors duration-500"
                  strokeWidth={1.5}
                />
              </div>
              <ArrowUpRight className="hidden md:block h-6 w-6 text-[var(--color-mace-stone)] opacity-0 group-hover:opacity-100 group-hover:text-[var(--color-mace-rust)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
            </div>

            <div className="relative z-10 w-full mt-auto">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--text-muted)] group-hover:text-[var(--color-mace-crimson)]/70 transition-colors duration-500">
                Date
              </p>
              <p className="font-serif text-2xl lg:text-3xl font-medium tracking-tight text-[var(--color-mace-crimson)]">
                Dec 19, 2026
              </p>
            </div>
          </a>

          {/* WHATSAPP BLOCK */}
          <a
            href="https://chat.whatsapp.com/LCGlyEIPzLMCTfBe2zosaE?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-[2rem] md:rounded-[2.5rem] border border-[var(--border)] p-6 md:p-8 lg:p-10 flex flex-col justify-between overflow-hidden shadow-[0_8px_30px_rgba(116,12,8,0.02)] hover:shadow-[0_20px_40px_rgba(116,12,8,0.06)] hover:-translate-y-1 active:scale-[0.98] transition-all duration-500 w-[240px] md:w-auto shrink-0 snap-start md:snap-none aspect-square md:aspect-auto min-h-[220px]"
          >
            <MessageCircle className="absolute -right-6 -bottom-6 md:-right-8 md:-bottom-8 w-32 h-32 md:w-40 md:h-40 text-[var(--color-mace-crimson)] opacity-[0.02] md:opacity-0 md:group-hover:opacity-[0.02] group-active:-translate-x-1 group-active:-translate-y-1 md:group-hover:-translate-x-1 md:group-hover:-translate-y-1 transition-all duration-1000 ease-out pointer-events-none" />

            <div className="flex justify-between items-start relative z-10 w-full">
              <div className="w-14 h-14 rounded-2xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--color-mace-crimson)]/30 group-hover:bg-[var(--color-mace-crimson)]/5 transition-all duration-500 shadow-sm group-hover:scale-105">
                <MessageCircle
                  className="h-6 w-6 text-[var(--text-muted)] group-hover:text-[var(--color-mace-crimson)] transition-colors duration-500"
                  strokeWidth={1.5}
                />
              </div>

              <div className="md:hidden mt-2 px-3 py-1.5 rounded-full border border-[var(--color-mace-crimson)]/20 bg-[var(--color-mace-crimson)]/5 text-[8px] font-black uppercase tracking-widest text-[var(--color-mace-crimson)] whitespace-nowrap">
                Tap to Join
              </div>
            </div>

            <div className="relative z-10 w-full mt-auto">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--text-muted)] group-hover:text-[var(--color-mace-crimson)]/70 transition-colors duration-500">
                Comms
              </p>
              <p className="font-serif text-2xl lg:text-3xl font-medium tracking-tight text-[var(--color-mace-crimson)]">
                WhatsApp
              </p>
            </div>
          </a>
        </div>

        {/* CONTESTS BLOCK */}
        <Link
          href="/contest"
          className="group relative md:col-span-3 bg-white rounded-[2rem] md:rounded-[2.5rem] border border-[var(--border)] p-8 md:p-10 lg:p-12 flex flex-col md:flex-row md:items-center justify-between overflow-hidden shadow-[0_8px_30px_rgba(116,12,8,0.02)] hover:shadow-[0_40px_80px_rgba(116,12,8,0.08)] hover:-translate-y-1.5 transition-all duration-700 active:scale-[0.98]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,var(--color-mace-gold),transparent_40%)] opacity-0 group-hover:opacity-[0.06] transition-opacity duration-1000" />
          <Trophy className="absolute -right-8 -bottom-12 w-64 h-64 text-[var(--color-mace-gold)] opacity-0 group-hover:opacity-[0.03] group-hover:-translate-x-4 group-hover:-translate-y-4 transition-all duration-1000 ease-out pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center gap-6 lg:gap-8 relative z-10">
            <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-2xl md:rounded-[1.5rem] bg-[var(--surface-soft)] border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--color-mace-gold)] group-hover:border-[var(--color-mace-gold)] transition-all duration-700 shadow-sm shrink-0 group-hover:scale-105">
              <Trophy
                className="h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 text-[var(--color-mace-gold)] group-hover:text-white transition-colors duration-500"
                strokeWidth={1.5}
              />
            </div>

            <div>
              <div className="mb-2 flex flex-wrap items-center gap-3 md:gap-4">
                <h3 className="font-serif text-3xl lg:text-4xl font-medium tracking-tight text-[var(--color-mace-crimson)]">
                  The <span className="gradient-gold font-semibold">Contests</span>
                </h3>
                <div className="px-3 py-1.5 rounded-full border border-[var(--color-mace-gold)]/30 bg-[var(--color-mace-gold)]/10 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-mace-gold)] whitespace-nowrap">
                  Let&apos;s Get Rolling!
                </div>
              </div>
              <p className="max-w-md text-base lg:text-lg font-medium text-[var(--text-muted)] leading-relaxed">
                Step back in. Create. Compete.
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-0 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-[var(--text-muted)] group-hover:text-[var(--color-mace-gold)] transition-colors duration-500 relative z-10 w-fit">
            <div className="w-10 h-10 rounded-full bg-[var(--surface-soft)] border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--color-mace-gold)]/10 group-hover:border-[var(--color-mace-gold)]/20 transition-all duration-500">
              <ArrowUpRight
                className="h-5 w-5 text-[var(--color-mace-crimson)] group-hover:text-[var(--color-mace-gold)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </Link>
      </div>

      {/* MEMORY RIBBON SECTION */}
      <div className="mt-6 lg:mt-8 w-full">
        <MemoryRibbon />
      </div>
    </div>
  );
}
