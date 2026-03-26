"use client";

import React from "react";
import {
  Clock,
  Sparkles,
  Zap,
  Coffee,
  Mic,
  Utensils,
  GlassWater,
  ArrowRight,
} from "lucide-react";

export default function PlanPage() {
  // Simplified placeholder data reflecting only the structure and active state
  // We don't need titles or descriptions as they are greyed out skeleton lines.
  const planTimeline = [
    { id: 1, time: "09:00 AM", isActive: false, subItemsCount: 3, icon: Coffee },
    { id: 2, time: "11:00 AM", isActive: true, subItemsCount: 2, icon: Mic },
    { id: 3, time: "01:30 PM", isActive: false, subItemsCount: 2, icon: Utensils },
    { id: 4, time: "07:00 PM", isActive: false, subItemsCount: 4, icon: GlassWater },
  ];

  return (
    <div className="relative w-full max-w-[1140px] mx-auto px-6 py-12 md:py-20 animate-in fade-in duration-1000">
      
      {/* Page Atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--color-mace-gold),transparent_70%)] opacity-[0.05] blur-[120px]" />
      </div>

      {/* Header */}
      <div className="mb-20 md:mb-28 text-center md:text-left">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--text)] shadow-sm">
          <Zap className="h-3 w-3 text-[var(--color-mace-gold)]" strokeWidth={2.5} />
          The Roadmap
        </div>
        
        {/* The Decennial typography style */}
        <h1 className="font-serif text-[4rem] md:text-[5rem] lg:text-[6rem] leading-[0.85] tracking-tight text-[var(--color-mace-crimson)]">
          Plan of<br />
          <span className="font-light italic text-[var(--color-mace-stone)]">
            Action
          </span>
        </h1>
        <p className="mt-8 text-lg font-medium text-[var(--text-muted)] max-w-lg mx-auto md:mx-0 leading-relaxed">
          The official schedule for the Class of 2016 Decennial reunion. Timelines and locations are preliminary and subject to minor adjustments.
        </p>
      </div>

      {/* Main Timeline and Scrollable Sections */}
      <div className="relative">
        
        {/* 1. CONTINUOUS VERTICAL LINE (Minimal, thin) */}
        <div className="absolute left-[29px] md:left-[39px] top-6 bottom-6 w-px bg-gradient-to-b from-[var(--border)] via-[var(--border)] to-transparent opacity-80" />

        <div className="space-y-16 md:space-y-24">
          {planTimeline.map((slot, idx) => {
            const SlotIcon = slot.icon;
            
            return (
              <div key={slot.id} className="grid grid-cols-1 md:grid-cols-[auto,1fr] items-start gap-x-12 relative">
                
                {/* A. VERTICAL TIME SLOT COLUMN (Left side) */}
                <div className="flex items-center md:flex-col md:items-center md:w-20 pt-6 relative z-10 gap-3 md:gap-0">
                  
                  {/* Timeline Node (Minimal, like reference) */}
                  <div className={`relative flex h-5 w-5 md:h-6 md:w-6 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-white ${
                    slot.isActive 
                      ? "shadow-[0_0_20px_rgba(200,160,80,0.3)]" 
                      : ""
                  }`}>
                    {slot.isActive && (
                      <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-mace-rust)] opacity-40"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-[var(--color-mace-rust)] opacity-80"></span>
                      </span>
                    )}
                  </div>
                  
                  {/* Time label (Minimal, uppercase) */}
                  <div className="md:mt-4 text-[10px] font-black uppercase tracking-[0.25em] text-[var(--color-mace-crimson)]/60 tabular-nums">
                    {slot.time}
                  </div>
                </div>

                {/* B. HORIZONTAL SCROLLABLE SECTION (Against the vertical time slot) */}
                {/* flex-col on mobile, flex-row on desktop with overflow */}
                <div className="flex flex-col md:flex-row md:overflow-x-auto md:gap-6 pb-6 mt-6 md:mt-0 md:-mx-6 md:px-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden">
                  
                  {[...Array(slot.subItemsCount)].map((_, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      className="group relative bg-white rounded-[2rem] border border-[var(--border)] p-6 md:p-8 flex items-start gap-6 md:gap-7 shadow-[0_8px_30px_rgba(116,12,8,0.02)] transition-all duration-700 hover:shadow-[0_20px_40px_rgba(116,12,8,0.06)] hover:-translate-y-1 active:scale-[0.98] md:w-[480px] md:shrink-0 snap-center md:snap-start mb-6 md:mb-0"
                    >
                      
                      {/* 2. RECONSIDERED IMAGE SIZE (Ultra Small & Precise like reference) */}
                      {/* w-12 h-12 on mobile, w-16 h-16 on desktop */}
                      <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-[1rem] bg-[var(--surface-soft)] border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--color-mace-gold)]/5 group-hover:border-[var(--color-mace-gold)]/30 transition-all duration-500 overflow-hidden shadow-[inset_0_1px_4px_rgba(0,0,0,0.03)]">
                        <SlotIcon className="h-5 w-5 md:h-7 md:w-7 text-[var(--color-mace-stone)]/50 group-hover:text-[var(--color-mace-gold)] transition-colors duration-500" strokeWidth={1} />
                      </div>

                      {/* CONTENT BLOCK */}
                      <div className="flex-1 py-1 space-y-4">
                        
                        {/* Status Label (Minimal, uppercase) */}
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-[var(--color-mace-rust)]/60" />
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-mace-rust)]/60">
                            Status <span className="text-[var(--color-mace-stone)]/40 font-medium">TBD</span>
                          </span>
                        </div>
                        
                        {/* 3. GREYED OUT CONTENT (Skeleton loaders from reference) */}
                        {/* Small grey title line */}
                        <div className="w-3/5 h-6 bg-[var(--border)]/70 rounded-md animate-pulse delay-75 shadow-[inset_0_1px_3px_rgba(0,0,0,0.03)]" />
                        
                        {/* Small grey descriptive lines of varying lengths */}
                        <div className="space-y-2.5 pt-1">
                          <div className="w-full h-3 bg-[var(--border)]/40 rounded shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]" />
                          <div className="w-4/5 h-3 bg-[var(--border)]/40 rounded shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]" />
                          <div className="w-2/3 h-3 bg-[var(--border)]/40 rounded shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]" />
                        </div>

                      </div>
                    </div>
                  ))}

                  {/* Optional: 'End of slot' indicator or 'Show more' */}
                  <div className="hidden md:flex md:w-[100px] md:shrink-0 flex-col items-center justify-center gap-2 group cursor-pointer text-[var(--color-mace-stone)] hover:text-[var(--color-mace-gold)] transition-colors duration-500">
                    <div className="w-12 h-12 rounded-full border border-dashed border-[var(--border)] flex items-center justify-center group-hover:border-[var(--color-mace-gold)]/50 group-hover:bg-[var(--color-mace-gold)]/5 transition-all">
                      <ArrowRight className="h-5 w-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-center">Next slot</span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
