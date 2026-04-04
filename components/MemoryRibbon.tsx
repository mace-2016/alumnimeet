"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link"; 
import { Calendar, ArrowUpRight, Film, Play, Pause } from "lucide-react";

const RIBBON_IMAGES = [
  { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop", caption: "Graduation Day", year: "2016" },
  { src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop", caption: "Senior Prom", year: "2016" },
  { src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800&auto=format&fit=crop", caption: "Campus Days", year: "2015" },
  { src: "https://images.unsplash.com/photo-1493225457224-eda0e6fdca6e?q=80&w=800&auto=format&fit=crop", caption: "The Big Game", year: "2014" },
  { src: "https://images.unsplash.com/photo-1525926472898-0bc0006764df?q=80&w=800&auto=format&fit=crop", caption: "Spring Break", year: "2015" },
  { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop", caption: "Final Exams", year: "2016" },
  { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop", caption: "Tech Club", year: "2013" },
  { src: "https://images.unsplash.com/photo-1506869640319-fea5a16a0359?q=80&w=800&auto=format&fit=crop", caption: "Winter Formal", year: "2014" },
];

export default function MemoryRibbon() {
  const [isPaused, setIsPaused] = useState(false);
  const displayImages = [...RIBBON_IMAGES, ...RIBBON_IMAGES];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsPaused(true);
    }
  }, []);

  return (
    // UX MAGIC: Changed to bg-white/70 backdrop-blur-xl for a premium frosted glass effect!
    <div className="group relative w-full bg-white/70 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] border border-white/50 p-6 md:p-10 lg:p-12 flex flex-col overflow-hidden shadow-[0_8px_30px_rgba(116,12,8,0.02)] hover:shadow-[0_40px_80px_rgba(116,12,8,0.08)] transition-all duration-700">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,var(--color-mace-gold),transparent_40%)] opacity-0 group-hover:opacity-[0.06] transition-opacity duration-1000 pointer-events-none" />

      {/* HEADER */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 md:mb-10 w-full">
        <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
          <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-2xl md:rounded-[1.5rem] bg-white/50 border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-mace-gold)] group-hover:border-[var(--color-mace-gold)] group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] group-hover:scale-105 transition-all duration-700 shadow-sm">
            <Film className="h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 text-[var(--color-mace-gold)] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} aria-hidden="true" />
          </div>
          
          <div>
            <div className="mb-1 md:mb-2 flex flex-wrap items-center gap-3 md:gap-4 transition-transform duration-700 group-hover:translate-x-2">
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-[var(--color-mace-crimson)]">
                The <span className="bg-gradient-to-r from-[var(--color-mace-gold)] via-[var(--color-mace-rust)] to-[var(--color-mace-gold)] bg-[length:200%_auto] bg-clip-text text-transparent font-semibold" style={{ animation: "shimmer 6s linear infinite" }}>Gallery</span>
              </h3>
              <div className="hidden md:block px-3 py-1.5 rounded-full border border-[var(--color-mace-gold)]/30 bg-[var(--color-mace-gold)]/10 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-mace-gold)] whitespace-nowrap">
                The Archive
              </div>
            </div>
            <p className="max-w-md text-sm md:text-base lg:text-lg font-medium text-[var(--text-muted)] leading-relaxed transition-transform duration-700 group-hover:translate-x-2">
              Scroll through a decade of memories.
            </p>
          </div>
        </div>

        <Link 
          href="/gallery" 
          aria-label="View the full photo gallery"
          className="hidden md:flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-[var(--text-muted)] group-hover:text-[var(--color-mace-gold)] transition-colors duration-500 relative z-10 shrink-0 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-mace-gold)] focus-visible:ring-offset-2 rounded-full"
        >
          <div className="w-10 h-10 rounded-full bg-white/50 border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--color-mace-gold)]/10 group-hover:border-[var(--color-mace-gold)]/20 transition-all duration-500 backdrop-blur-sm">
            <ArrowUpRight className="h-5 w-5 text-[var(--color-mace-crimson)] group-hover:text-[var(--color-mace-gold)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} aria-hidden="true" />
          </div>
        </Link>
      </div>

      {/* THE RIBBON */}
      <div className="relative -mx-6 md:-mx-10 lg:-mx-12 py-2 overflow-hidden" aria-label="Scrolling image gallery teaser">
        {/* Softened the fade edges to blend with the frosted glass */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 z-20 bg-gradient-to-r from-white/80 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 z-20 bg-gradient-to-l from-white/80 to-transparent pointer-events-none" />

        <div 
          className="flex w-max gap-4 md:gap-6 animate-ribbon-scroll px-6 md:px-10 lg:px-12 will-change-transform" 
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {displayImages.map((item, idx) => (
            <div key={idx} className="relative flex-shrink-0 w-[180px] h-[240px] md:w-[260px] md:h-[340px] overflow-hidden rounded-[1.5rem] border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(116,12,8,0.15)] group/card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.caption} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover/card:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-40 group-hover/card:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute bottom-4 left-4 right-4 md:bottom-5 md:left-5 md:right-5 opacity-0 group-hover/card:opacity-100 transition-all duration-700 translate-y-4 group-hover/card:translate-y-0">
                 <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                   <Calendar className="w-3 h-3 text-[var(--color-mace-gold)]" aria-hidden="true" />
                   <span className="text-[var(--color-mace-gold)] text-[9px] md:text-[10px] font-bold tracking-widest uppercase">{item.year}</span>
                 </div>
                 <h4 className="text-white font-serif text-base md:text-lg leading-tight">{item.caption}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE CONTROLS */}
      <div className="mt-6 md:mt-8 flex items-center justify-between md:justify-center relative z-10">
        
        <button
          onClick={() => setIsPaused(!isPaused)}
          aria-pressed={isPaused}
          aria-label={isPaused ? "Play animation" : "Pause animation"}
          className="flex items-center justify-center gap-2 px-5 py-2 md:px-6 md:py-2.5 rounded-full border border-[var(--border)] bg-white/50 backdrop-blur-sm hover:bg-[var(--surface-soft)] text-[var(--color-mace-stone)] hover:text-[var(--color-mace-crimson)] transition-all shadow-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-mace-crimson)] focus-visible:ring-offset-2"
        >
          {isPaused ? (
            <>
              <Play className="w-4 h-4 ml-0.5 fill-current" aria-hidden="true" />
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">Play</span>
            </>
          ) : (
            <>
              <Pause className="w-4 h-4 fill-current" aria-hidden="true" />
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">Pause</span>
            </>
          )}
        </button>

        <Link 
          href="/gallery" 
          aria-label="View the full photo gallery"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border)] bg-white/50 backdrop-blur-sm shadow-sm active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-mace-crimson)] focus-visible:ring-offset-2"
        >
          <ArrowUpRight className="h-5 w-5 text-[var(--color-mace-crimson)]" strokeWidth={1.5} aria-hidden="true" />
        </Link>
      </div>

      <style jsx global>{`
        @keyframes ribbon-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 0.5rem)); } 
        }
        .animate-ribbon-scroll {
          animation: ribbon-scroll 50s linear infinite;
        }
        .animate-ribbon-scroll:hover {
          animation-play-state: paused;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-ribbon-scroll {
            animation-play-state: paused !important;
          }
        }
      `}</style>
    </div>
  );
}
