"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Camera, ArrowRight, Lock, Sparkles, Layers } from "lucide-react";

// --- MOCK DATA ---
const GALLERY_CATEGORIES = [
  {
    id: "the-hostels",
    title: "The Hostels",
    era: "golden",
    count: 142,
    description: "Memories we'd love to hold on to.",
  },
  {
    id: "convocation",
    title: "Convocation",
    era: "golden",
    count: 86,
    description: "And some that made it special.",
  },
  {
    id: "where-are-we",
    title: "Fiddling around all these while?",
    era: "present",
    count: 54,
    description: "Mini-reunions, weddings, and life updates across the globe.",
  },
  {
    id: "decennial-live",
    title: "And here we are!",
    era: "live",
    count: 0,
    locked: true,
    description: "Live updates dropping on Dec 19, 2026.",
  },
];

const generatePlaceholders = (count: number, year: string) =>
  Array.from({ length: count }).map((_, i) => ({
    id: `archive-${year}-${i}`, // Fixed: Using a string instead of just index to prevent hydration issues
    caption: "Archive Memory",
    year,
  }));

const TABS = [
  { id: "all", label: "All" },
  { id: "golden", label: "Those Days!" },
  { id: "present", label: "Where were we?" },
  { id: "live", label: "And here we stand" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all");
  // Use a ref array to track our section elements for the IntersectionObserver
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // 1. Setup IntersectionObserver for high-performance scroll spying
    const observerOptions = {
      root: null,
      // Triggers when the top of the section hits 150px below the viewport top (accounting for sticky header)
      rootMargin: "-150px 0px -70% 0px", 
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const era = entry.target.getAttribute("data-era");
          if (era) setActiveTab(era);
        }
      });
    }, observerOptions);

    // Observe all valid section refs
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // 2. Handle the specific "All" case when scrolled to the very top
    const handleTopScroll = () => {
      if (window.scrollY < 100) {
        setActiveTab("all");
      }
    };

    window.addEventListener("scroll", handleTopScroll, { passive: true });

    return () => {
      // Cleanup observer and listener on unmount
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      window.removeEventListener("scroll", handleTopScroll);
    };
  }, []);

  const handleTabClick = (eraId: string) => {
    setActiveTab(eraId);

    if (eraId === "all") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(`section[data-era="${eraId}"]`);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen pb-24 animate-in fade-in duration-1000">
      {/* --- ADD THIS OR MOVE TO GLOBALS.CSS --- */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* PAGE ATMOSPHERE */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--color-mace-gold),transparent_70%)] opacity-[0.06] blur-[120px]" />
        <div className="absolute right-0 top-[20%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle_at_center,var(--color-mace-rust),transparent_72%)] opacity-[0.04] blur-[100px]" />
      </div>

      {/* PAGE HEADER */}
      <div className="w-full max-w-[1140px] mx-auto px-6 pt-12 md:pt-20 pb-8 md:pb-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-mace-gold)]/30 bg-[var(--color-mace-gold)]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-mace-gold)] shadow-sm">
          <Sparkles className="h-3 w-3" strokeWidth={2.5} />
          The Master Archive
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 text-[var(--color-mace-crimson)] leading-[0.95]">
          {/* Fixed: Replaced custom styled-jsx with native Tailwind gradient */}
          A Decade in{" "}
          <span className="bg-gradient-to-br from-[#b45309] via-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
            Frame
          </span>
          .
        </h1>

        <p className="text-lg text-[var(--text-muted)] max-w-2xl font-medium leading-relaxed">
          Scroll through a decade of memories.
        </p>
      </div>

      {/* STICKY FILTER TABS */}
      <div className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[color:rgba(252,251,249,0.82)] backdrop-blur-xl mb-8 md:mb-12 transition-all">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex overflow-x-auto hide-scrollbar gap-2 py-4 snap-x">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`snap-start whitespace-nowrap px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 border ${
                  activeTab === tab.id
                    ? "bg-[var(--color-mace-crimson)] border-[var(--color-mace-crimson)] text-white shadow-[0_8px_20px_rgba(116,12,8,0.16)] scale-[1.03]"
                    : "bg-white/60 border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--color-mace-gold)]/50 hover:text-[var(--color-mace-crimson)] hover:bg-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* GALLERY ROWS (Grouped by Era) */}
      <div className="w-full max-w-[1140px] mx-auto space-y-16 md:space-y-24">
        {TABS.filter((tab) => tab.id !== "all").map((tab, tabIndex) => {
          // Find all categories that belong to this specific tab's era
          const sectionCategories = GALLERY_CATEGORIES.filter(
            (category) => category.era === tab.id
          );

          // If no categories match, skip rendering this section
          if (sectionCategories.length === 0) return null;

          return (
            <section
              key={tab.id}
              data-era={tab.id}
              // Connect this section to our IntersectionObserver
              ref={(el) => {
                 sectionRefs.current[tabIndex] = el;
              }}
              className="relative w-full transition-all duration-700"
              style={{ transform: "translateZ(0)" }}
            >
              {tabIndex !== 0 && (
                <div className="absolute left-6 right-6 -top-8 md:-top-12 h-px bg-gradient-to-r from-transparent via-[var(--color-mace-gold)]/20 to-transparent" />
              )}

              <div className="space-y-12 md:space-y-16">
                {sectionCategories.map((category) => (
                  <div key={category.id} className="relative">
                    {/* ROW HEADER */}
                    <div className="px-6 mb-6 flex items-end justify-between gap-4">
                      <div>
                        <h2 className="font-serif text-2xl md:text-3xl font-medium text-[var(--color-mace-crimson)] group flex items-center gap-3">
                          {category.title}
                          {!category.locked && (
                            <ArrowRight className="w-5 h-5 text-[var(--color-mace-gold)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                          )}
                        </h2>
                        <p className="text-sm text-[var(--text-muted)] mt-1">
                          {category.description}
                        </p>
                      </div>

                      {!category.locked && (
                        <Link
                          href={`/gallery/${category.id}`}
                          className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--color-mace-stone)] hover:text-[var(--color-mace-crimson)] transition-colors"
                        >
                          View {category.count} items
                        </Link>
                      )}
                    </div>

                    {/* SCROLL CONTAINER */}
                    <div className="relative w-full">
                      <div className="absolute top-0 right-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

                      <div className="flex overflow-x-auto hide-scrollbar gap-4 md:gap-6 px-6 pb-8 snap-x snap-mandatory">
                        {category.locked ? (
                          <div className="w-full max-w-sm rounded-[1.5rem] border border-dashed border-[var(--border)] bg-[var(--surface-soft)]/50 p-10 flex flex-col items-center justify-center text-center shrink-0">
                            <div className="w-12 h-12 rounded-full bg-white border border-[var(--border)] shadow-sm flex items-center justify-center mb-4 text-[var(--text-muted)]">
                              <Lock className="w-5 h-5" />
                            </div>
                            <p className="font-serif text-xl text-[var(--color-mace-crimson)] mb-2">
                              Vault Locked
                            </p>
                            <p className="text-sm text-[var(--text-muted)]">
                              Check back when the event begins.
                            </p>
                          </div>
                        ) : (
                          <>
                            {generatePlaceholders(
                              6,
                              category.era === "present" ? "2025" : "2016"
                            ).map((item) => (
                              <div
                                key={item.id}
                                className="group/card relative w-[220px] md:w-[260px] shrink-0 snap-start aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(116,12,8,0.08)] transition-all duration-500 cursor-pointer flex flex-col"
                              >
                                <div className="relative flex-1 w-full overflow-hidden border-b border-[var(--border)]">
                                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(236,187,26,0.15),transparent_60%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                                  <div className="w-full h-full bg-gradient-to-br from-[var(--background)] to-[var(--surface-soft)] flex items-center justify-center group-hover/card:bg-white transition-colors duration-500">
                                    <Camera
                                      className="w-10 h-10 text-[var(--border)] group-hover/card:text-[var(--color-mace-gold)]/60 transition-all duration-500 group-hover/card:scale-110"
                                      strokeWidth={1}
                                    />
                                  </div>
                                </div>

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

                            <Link
                              href={`/gallery/${category.id}`}
                              className="group/seeall relative w-[220px] md:w-[260px] shrink-0 snap-start aspect-[4/5] rounded-[1.5rem] border border-[var(--border)] bg-white shadow-sm hover:border-[var(--color-mace-gold)]/40 hover:shadow-[0_18px_40px_rgba(116,12,8,0.08)] transition-all duration-500 flex flex-col items-center justify-center p-6 text-center"
                            >
                              <div className="relative w-16 h-16 mb-6">
                                <div className="absolute inset-0 bg-[var(--surface-soft)] border border-[var(--border)] rounded-xl rotate-6 group-hover/seeall:rotate-12 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-[var(--surface-soft)] border border-[var(--border)] rounded-xl -rotate-6 group-hover/seeall:-rotate-12 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-white border border-[var(--color-mace-gold)]/30 rounded-xl flex items-center justify-center shadow-sm group-hover/seeall:-translate-y-1 transition-transform duration-500">
                                  <Layers
                                    className="w-6 h-6 text-[var(--color-mace-crimson)]"
                                    strokeWidth={1.5}
                                  />
                                </div>
                              </div>

                              <h4 className="font-serif text-xl text-[var(--color-mace-crimson)] mb-2 group-hover/seeall:text-[var(--color-mace-gold)] transition-colors">
                                Enter the Archive
                              </h4>

                              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                                View all {category.count} memories
                              </p>
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
