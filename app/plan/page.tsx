"use client";

import React from "react";
import {
  Clock,
  Zap,
  Coffee,
  Mic,
  Utensils,
  GlassWater,
  ArrowRight,
} from "lucide-react";

export default function PlanPage() {
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
        <div className="absolute right-0 top-[18%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle_at_center,var(--color-mace-rust),transparent_72%)] opacity-[0.04] blur-[100px]" />
      </div>

      {/* Header */}
      <div className="mb-20 md:mb-28 text-center md:text-left">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--text)] shadow-sm">
          <Zap className="h-3 w-3 text-[var(--color-mace-gold)]" strokeWidth={2.5} />
          The Roadmap
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 text-[var(--color-mace-crimson)] leading-[0.95]">
          The <span className="gradient-gold">Timetable</span>.
        </h1>

        <p className="text-lg text-[var(--text-muted)] max-w-2xl font-medium leading-relaxed">
          Let's get young for a day.
        </p>
      </div>

      {/* Main Timeline */}
      <div className="relative">
        {/* Continuous Vertical Line */}
        <div className="absolute left-[29px] md:left-[39px] top-6 bottom-6 w-px bg-gradient-to-b from-[var(--color-mace-gold)]/10 via-[var(--color-mace-rust)]/20 to-transparent" />

        <div className="space-y-16 md:space-y-24">
          {planTimeline.map((slot) => {
            const SlotIcon = slot.icon;

            return (
              <div
                key={slot.id}
                className="grid grid-cols-1 md:grid-cols-[auto,1fr] items-start gap-x-12 relative"
              >
                {/* Time Slot Column */}
                <div className="flex items-center md:flex-col md:items-center md:w-20 pt-6 relative z-10 gap-3 md:gap-0">
                  <div
                    className={`relative flex h-5 w-5 md:h-6 md:w-6 shrink-0 items-center justify-center rounded-full border bg-white ${
                      slot.isActive
                        ? "border-[var(--color-mace-gold)]/50 shadow-[0_0_24px_rgba(236,187,26,0.22)]"
                        : "border-[var(--border)]"
                    }`}
                  >
                    {slot.isActive && (
                      <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-mace-rust)] opacity-40"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-[var(--color-mace-rust)] opacity-80"></span>
                      </span>
                    )}
                  </div>

                  <div className="md:mt-4 text-[10px] font-black uppercase tracking-[0.25em] text-[var(--color-mace-crimson)]/60 tabular-nums">
                    {slot.time}
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex flex-col md:flex-row md:overflow-x-auto md:gap-6 pb-6 mt-6 md:mt-0 md:-mx-6 md:px-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden">
                  {[...Array(slot.subItemsCount)].map((_, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="group relative overflow-hidden bg-white rounded-[2rem] border border-[var(--border)] p-6 md:p-8 flex items-start gap-6 md:gap-7 shadow-[0_8px_30px_rgba(116,12,8,0.02)] transition-all duration-700 hover:shadow-[0_20px_40px_rgba(116,12,8,0.06)] hover:-translate-y-1 active:scale-[0.98] md:w-[480px] md:shrink-0 snap-center md:snap-start mb-6 md:mb-0"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,187,26,0.10),transparent_45%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                      {/* Icon Tile */}
                      <div className="relative w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-[1rem] bg-[linear-gradient(180deg,#ffffff_0%,var(--surface-soft)_100%)] border border-[var(--border)] flex items-center justify-center transition-all duration-500 overflow-hidden shadow-[inset_0_1px_4px_rgba(0,0,0,0.03),0_8px_18px_rgba(116,12,8,0.04)] group-hover:border-[var(--color-mace-gold)]/30">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,187,26,0.14),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <SlotIcon
                          className="relative h-5 w-5 md:h-7 md:w-7 text-[var(--color-mace-stone)]/50 group-hover:text-[var(--color-mace-gold)] transition-colors duration-500"
                          strokeWidth={1}
                        />
                      </div>

                      {/* Content Block */}
                      <div className="flex-1 py-1 space-y-4">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-[var(--color-mace-rust)]/60" />
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-mace-rust)]/60">
                            Status{" "}
                            <span className="text-[var(--color-mace-stone)]/40 font-medium">
                              TBD
                            </span>
                          </span>
                        </div>

                        <div className="w-3/5 h-6 bg-[var(--border)]/70 rounded-md animate-pulse delay-75 shadow-[inset_0_1px_3px_rgba(0,0,0,0.03)]" />

                        <div className="space-y-2.5 pt-1">
                          <div className="w-full h-3 bg-[var(--border)]/40 rounded shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]" />
                          <div className="w-4/5 h-3 bg-[var(--border)]/40 rounded shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]" />
                          <div className="w-2/3 h-3 bg-[var(--border)]/40 rounded shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]" />
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="hidden md:flex md:w-[100px] md:shrink-0 flex-col items-center justify-center gap-2 group cursor-pointer text-[var(--color-mace-stone)] hover:text-[var(--color-mace-gold)] transition-colors duration-500">
                    <div className="w-12 h-12 rounded-full border border-dashed border-[var(--border)] flex items-center justify-center group-hover:border-[var(--color-mace-gold)]/50 group-hover:bg-[var(--color-mace-gold)]/5 transition-all">
                      <ArrowRight className="h-5 w-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-center">
                      Next slot
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        .gradient-gold {
          background: linear-gradient(
            135deg,
            #b45309 0%,
            #f59e0b 50%,
            #fbbf24 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </div>
  );
}
