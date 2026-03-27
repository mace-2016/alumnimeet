"use client";

import React from "react";
import { MapPin, Calendar } from "lucide-react";

// High-quality placeholders using Unsplash matching a "school/friends/reunion" vibe
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
  // Duplicate the array once. The animation will slide exactly 50% of the total width,
  // creating a flawless, math-free infinite loop.
  const displayImages = [...RIBBON_IMAGES, ...RIBBON_IMAGES];

  return (
    <div className="relative w-full overflow-hidden py-12 md:py-20 border-t border-[var(--border)] bg-[var(--background)]">
      
      {/* Editorial Header 
      <div className="max-w-[1140px] mx-auto px-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
       
        <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-mace-gold)]/30 bg-[var(--color-mace-gold)]/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-mace-gold)] opacity-40"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-mace-gold)] opacity-80"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-mace-gold)]">
            Interactive Gallery
          </span>
        </div>
      </div> */}

      {/* Ribbon Container */}
      <div className="relative flex w-full overflow-hidden group/ribbon">
        
        {/* Edge Fades for the infinite illusion */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 z-20 bg-gradient-to-r from-[var(--background)] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 z-20 bg-gradient-to-l from-[var(--background)] to-transparent pointer-events-none" />

        {/* The Scrolling Track */}
        <div className="flex w-max gap-4 md:gap-6 px-4 md:px-6 animate-ribbon-scroll hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing transition-all duration-500">
          {displayImages.map((item, idx) => (
            <div 
              key={idx} 
              className="relative flex-shrink-0 w-[220px] h-[300px] md:w-[280px] md:h-[380px] overflow-hidden rounded-[1.5rem] border border-[var(--border)] shadow-sm group/card transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(116,12,8,0.12)] hover:border-[var(--color-mace-gold)]/40"
            >
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/90 via-[var(--background)]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[var(--color-mace-rust)]/10 mix-blend-overlay transition-opacity duration-500" />

              {/* Hover Content (Caption & Year) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-3 h-3 text-[var(--color-mace-gold)]" strokeWidth={2.5} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-mace-gold)] drop-shadow-md">
                    {item.year}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-medium text-white drop-shadow-lg leading-tight">
                  {item.caption}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes ribbon-scroll {
          0% { transform: translateX(0); }
          /* Translates exactly half the width of the track to create the loop */
          100% { transform: translateX(-50%); } 
        }
        .animate-ribbon-scroll {
          /* 40 seconds provides a smooth, elegant crawl */
          animation: ribbon-scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
