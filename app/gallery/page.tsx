"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Camera, ArrowRight, Lock, Sparkles, Layers } from "lucide-react";

// --- MOCK DATA ---
// You can easily add to this array whenever a new idea strikes.
const GALLERY_CATEGORIES = [
  { 
    id: "the-hostels", 
    title: "The Hostel Diaries", 
    era: "golden", 
    count: 142,
    description: "Late nights, Maggi, and memories we'll never forget."
  },
  { 
    id: "convocation", 
    title: "Convocation 2016", 
    era: "golden", 
    count: 86,
    description: "The day we officially became alumni."
  },
  { 
    id: "where-are-we", 
    title: "Where Are We Now?", 
    era: "present", 
    count: 54,
    description: "Mini-reunions, weddings, and life updates across the globe."
  },
  { 
    id: "decennial-live", 
    title: "The Decennial Event", 
    era: "live", 
    count: 0,
    locked: true,
    description: "Live updates dropping on Dec 19, 2026."
  },
];

// Helper to generate empty placeholder cards for the rows
const generatePlaceholders = (count: number, year: string) => 
  Array.from({ length: count }).map((_, i) => ({ id: i, caption: "Archive Memory", year }));

const TABS = [
  { id: "all", label: "All Archives" },
  { id: "golden", label: "The Golden Years ('12-'16)" },
  { id: "present", label: "Present Day" },
  { id: "live", label: "Decennial Live" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all");

  // Filter categories based on the selected tab
  const filteredCategories = GALLERY_CATEGORIES.filter(cat => 
    activeTab === "all" ? true : cat.era === activeTab
  );

  return (
    <div className="min-h-screen pb-24 animate-in fade-in duration-1000">
      
      {/* --- PAGE HEADER --- */}
      <div className="w-full max-w-[1140px] mx-auto px-6 pt-12 md:pt-20 pb-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-mace-gold)]/30 bg-[var(--color-mace-gold)]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-mace-gold)] shadow-sm">
          <Sparkles className="h-3 w-3" strokeWidth={2.5} />
          The Master Archive
        </div>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-mace-crimson)] tracking-tight mb-4">
          A Decade in Focus.
        </h1>
        <p className="text-lg text-[var(--text-muted)] max-w-2xl font-medium leading-relaxed">
          Browse through the eras. From the golden days on campus to where we are now, leading up to the main event.
        </p>
      </div>

      {/* --- STICKY FILTER TABS --- */}
      <div className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[var(--border)] mb-8 md:mb-12">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex overflow-x-auto hide-scrollbar gap-2 py-4 snap-x">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`snap-start whitespace-nowrap px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 border ${
                  activeTab === tab.id 
                    ? "bg-[var(--color-mace-crimson)] border-[var(--color-mace-crimson)] text-white shadow-md" 
                    : "bg-transparent border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--color-mace-gold)]/50 hover:text-[var(--color-mace-crimson)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- GALLERY ROWS --- */}
      <div className="w-full max-w-[1140px] mx-auto space-y-16 md:space-y-24">
        {filteredCategories.map((category) => (
          <section key={category.id} className="relative w-full">
            
            {/* Row Header */}
            <div className="px-6 mb-6 flex items-end justify-between gap-4">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-[var(--color-mace-crimson)] group flex items-center gap-3">
                  {category.title}
                  {!category.locked && (
                    <ArrowRight className="w-5 h-5 text-[var(--color-mace-gold)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  )}
                </h2>
                <p className="text-sm text-[var(--text-muted)] mt-1">{category.description}</p>
              </div>
              
              {/* Desktop "See All" Text Link */}
              {!category.locked && (
                <Link href={`/gallery/${category.id}`} className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--color-mace-stone)] hover:text-[var(--color-mace-crimson)] transition-colors">
                  View {category.count} items
                </Link>
              )}
            </div>

            {/* The Horizontal Scroll Container */}
            <div className="relative w-full">
              {/* Edge fade mask for smooth scrolling visuals */}
              <div className="absolute top-0 right-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

              <div className="flex overflow-x-auto hide-scrollbar gap-4 md:gap-6 px-6 pb-8 snap-x snap-mandatory">
                
                {/* LOCKED STATE */}
                {category.locked ? (
                  <div className="w-full max-w-sm rounded-[1.5rem] border border-dashed border-[var(--border)] bg-[var(--surface-soft)]/50 p-10 flex flex-col items-center justify-center text-center shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white border border-[var(--border)] shadow-sm flex items-center justify-center mb-4 text-[var(--text-muted)]">
                      <Lock className="w-5 h-5" />
                    </div>
                    <p className="font-serif text-xl text-[var(--color-mace-crimson)] mb-2">Vault Locked</p>
                    <p className="text-sm text-[var(--text-muted)]">Check back when the event begins.</p>
                  </div>
                ) : (
                  /* NORMAL CARDS */
                  <>
                    {generatePlaceholders(6, category.era === "present" ? "2025" : "2016").map((item) => (
                      <div 
                        key={item.id}
                        className="group/card relative w-[220px] md:w-[260px] shrink-0 snap-start aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(116,12,8,0.08)] transition-all duration-500 cursor-pointer flex flex-col"
                      >
                        {/* Placeholder Image Area */}
                        <div className="flex-1 w-full bg-gradient-to-br from-[var(--background)] to-[var(--surface-soft)] flex items-center justify-center border-b border-[var(--border)] group-hover/card:bg-white transition-colors duration-500 relative overflow-hidden">
                          <Camera className="w-10 h-10 text-[var(--border)] group-hover/card:text-[var(--color-mace-gold)]/50 transition-colors duration-500 group-hover/card:scale-110" strokeWidth={1} />
                        </div>
                        
                        {/* Card Footer */}
                        <div className="p-4 bg-white">
                           <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--color-mace-gold)] mb-1">
                             {item.year}
                           </div>
                           <h4 className="font-serif text-base text-[var(--color-mace-crimson)] truncate">
                             {item.caption}
                           </h4>
                        </div>
                      </div>
                    ))}

                    {/* "SEE ALL" STACKED CARD */}
                    <Link 
                      href={`/gallery/${category.id}`}
                      className="group/seeall relative w-[220px] md:w-[260px] shrink-0 snap-start aspect-[4/5] rounded-[1.5rem] border border-[var(--border)] bg-white shadow-sm hover:border-[var(--color-mace-gold)]/40 hover:shadow-xl transition-all duration-500 flex flex-col items-center justify-center p-6 text-center"
                    >
                      <div className="relative w-16 h-16 mb-6">
                        <div className="absolute inset-0 bg-[var(--surface-soft)] border border-[var(--border)] rounded-xl rotate-6 group-hover/seeall:rotate-12 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-[var(--surface-soft)] border border-[var(--border)] rounded-xl -rotate-6 group-hover/seeall:-rotate-12 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-white border border-[var(--color-mace-gold)]/30 rounded-xl flex items-center justify-center shadow-sm group-hover/seeall:-translate-y-1 transition-transform duration-500">
                          <Layers className="w-6 h-6 text-[var(--color-mace-crimson)]" strokeWidth={1.5} />
                        </div>
                      </div>
                      <h4 className="font-serif text-xl text-[var(--color-mace-crimson)] mb-2 group-hover/seeall:text-[var(--color-mace-gold)] transition-colors">
                        Explore Full Vault
                      </h4>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                        {category.count} Photos
                      </p>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>

      <style jsx global>{`
        /* Utility to hide scrollbar but keep functionality */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
