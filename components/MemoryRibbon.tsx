"use client";

import React, { useState } from "react";
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

  return (
    /* Added group/gallery to the parent to trigger internal animations on hover */
    <div className="group/gallery relative w-full overflow-hidden bg-white rounded-[2rem] md:rounded-[2.5rem] border border-[var(--border)] p-8 md:p-10 lg:p-12 shadow-[0_8px_30px_rgba(116,12,8,0.02)] transition-all duration-700 hover:shadow-[0_40px_80px_rgba(116,12,8,0.08)] hover:-translate-y-1.5">
      
      {/* HEADER SECTION */}
      <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-center gap-6 lg:gap-8">
          {/* SYNCED ICON BOX: Changes to gold on gallery hover, matching the Trophy block */}
          <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-2xl md:rounded-[1.5rem] bg-[var(--surface-soft)] border border-[var(--border)] flex items-center justify-center shrink-0 transition-all duration-700 group-hover/gallery:bg-[var(--color-mace-gold)] group-hover/gallery:border-[var(--color-mace-gold)] group-hover/gallery:scale-105 shadow-sm">
            <Film 
              className="h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 text-[var(--color-mace-gold)] group-hover/gallery:text-white transition-colors duration-500" 
              strokeWidth={1.5} 
            />
          </div>
          
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-3 md:gap-4">
              <h3 className="font-serif text-3xl lg:text-4xl font-medium tracking-tight text-[var(--color-mace-crimson)]">
  The <span className="gradient-gold font-semibold">Gallery</span>
</h3>
              <div className="px-3 py-1.5 rounded-full border border-[var(--color-mace-gold)]/30 bg-[var(--color-mace-gold)]/10 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-mace-gold)] whitespace-nowrap">
                All Those In The Archive
              </div>
            </div>
            <p className="max-w-xl text-base lg:text-lg font-medium text-[var(--text-muted)] leading-relaxed">
              Scroll through a decade of memories.
            </p>
          </div>
        </div>

        {/* SYNCED ARROW: Slides up-right when the whole gallery card is hovered */}
        <Link 
          href="/gallery" 
          className="shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-[var(--border)] bg-white hover:border-[var(--color-mace-gold)]/20 hover:bg-[var(--color-mace-gold)]/10 transition-all duration-300 shadow-sm"
        >
          <ArrowUpRight 
            className="h-5 w-5 text-[var(--color-mace-stone)] group-hover/gallery:text-[var(--color-mace-gold)] group-hover/gallery:translate-x-0.5 group-hover/gallery:-translate-y-0.5 transition-all duration-500" 
            strokeWidth={1.5} 
          />
        </Link>
      </div>

      {/* RIBBON CONTENT */}
      <div className="relative flex flex-col items-center -mx-8 md:-mx-10 lg:-mx-12 py-4">
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 z-[40] bg-gradient-to-r from-white via-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 z-[40] bg-gradient-to-l from-white via-white to-transparent pointer-events-none" />

        <div 
          className="flex w-max gap-4 md:gap-6 animate-ribbon-scroll px-8 md:px-10 lg:px-12"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {displayImages.map((item, idx) => (
            <div 
              key={idx} 
              className="relative flex-shrink-0 w-[200px] h-[260px] md:w-[260px] md:h-[340px] overflow-hidden rounded-[1.5rem] border border-[var(--border)] shadow-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-xl group/card"
            >
              <img src={item.src} alt={item.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-5 left-5 right-5 opacity-0 group-hover/card:opacity-100 transition-all duration-500 translate-y-2 group-hover/card:translate-y-0">
                 <div className="flex items-center gap-2 mb-1">
                   <Calendar className="w-3 h-3 text-[var(--color-mace-gold)]" />
                   <span className="text-[var(--color-mace-gold)] text-[10px] font-bold tracking-widest uppercase">{item.year}</span>
                 </div>
                 <h4 className="text-white font-serif text-lg leading-tight">{item.caption}</h4>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setIsPaused(!isPaused)}
          className="mt-10 relative z-50 flex items-center gap-2 px-6 py-2 rounded-full border border-[var(--border)] bg-white hover:bg-[var(--surface-soft)] text-[var(--color-mace-stone)] hover:text-[var(--color-mace-crimson)] transition-all shadow-sm active:scale-95"
        >
          {isPaused ? (
            <><Play className="w-3 h-3 fill-current" /><span className="text-[10px] font-bold uppercase tracking-[0.2em]">Play</span></>
          ) : (
            <><Pause className="w-3 h-3 fill-current" /><span className="text-[10px] font-bold uppercase tracking-[0.2em]">Pause</span></>
          )}
        </button>
      </div>

      <style jsx global>{`
        @keyframes ribbon-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-ribbon-scroll {
          animation: ribbon-scroll 60s linear infinite;
        }
        .animate-ribbon-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
