"use client";

import React from "react";
import Link from "next/link";
import { 
  Lock, 
  ArrowRight, 
  Palette, 
  Music, 
  Camera, 
  Gift
} from "lucide-react";

export default function ContestsHubPage() {
  const contests = [
    {
      id: 1,
      tag: "Contest #01",
      title: "The Naming",
      description: "Brush your brains up! Etch your mark into the decennial history.",
      status: "active",
      href: "/contest/letsname",
      isTextIcon: true,
      iconSymbol: "ആ", 
    },
    {
      id: 2,
      tag: "Contest #02",
      title: "███ ██████",
      description: "██████ ███ ████████ ████ ███ ███████████ ████████.",
      status: "locked",
      href: "#",
      isTextIcon: false,
      icon: Palette,
    },
    {
      id: 3,
      tag: "Contest #03",
      title: "█████ ████",
      description: "████ ██ ██████ ██ ██████ ███ ████████.",
      status: "locked",
      href: "#",
      isTextIcon: false,
      icon: Music,
    },
    {
      id: 4,
      tag: "Contest #04",
      title: "██ █ █████",
      description: "██████ ████ ████ ██████████ ██████.",
      status: "locked",
      href: "#",
      isTextIcon: false,
      icon: Camera,
    },
  ];

  const getBentoClasses = (index: number) => {
    if (index === 0) return "md:col-span-2 md:row-span-2 flex flex-col justify-end min-h-[400px] md:min-h-[480px]";
    // Mobile: Auto height. Desktop: min-h-[220px]
    if (index === 1) return "md:col-span-2 md:row-span-1 flex flex-col justify-center min-h-auto md:min-h-[220px]";
    return "md:col-span-1 md:row-span-1 flex flex-col justify-between min-h-auto md:min-h-[220px]";
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden bg-[var(--background)]">
      
      {/* Immersive Heritage Background */}
      <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-[0.03] grayscale pointer-events-none" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--color-mace-gold),transparent_70%)] opacity-[0.08] blur-[120px] pointer-events-none" />

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-[1140px] mx-auto flex flex-col">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-top-6 duration-700">
          <div className="inline-flex items-center gap-3 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-white border border-[var(--border)] mb-6 md:mb-8 shadow-sm">
            <Gift className="w-3.5 h-3.5 md:w-4 md:h-4 text-[var(--color-mace-gold)]" strokeWidth={2} />
            <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--text-muted)]">
              Grab those <span className="text-[var(--color-mace-rust)]">Surprises!</span>
            </p>
            <Gift className="w-3.5 h-3.5 md:w-4 md:h-4 text-[var(--color-mace-gold)]" strokeWidth={2} />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-[var(--color-mace-crimson)] mb-4 tracking-tight">
            Let's get it <span className="bg-gradient-to-br from-[var(--color-mace-rust)] to-[var(--color-mace-gold)] bg-clip-text text-transparent italic font-light pr-2">Rolling!!</span>
          </h1>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full">
          {contests.map((contest, index) => {
            const isActive = contest.status === "active";
            const bentoLayout = getBentoClasses(index);
            const animationDelay = `delay-[${index * 100}ms]`;

            return (
              <React.Fragment key={contest.id}>
                {isActive ? (
                  /* --- THE ACTIVE CONTEST (HERO SQUARE) --- */
                  <Link 
                    href={contest.href}
                    className={`group relative rounded-[2rem] md:rounded-[2.5rem] bg-white border border-[var(--border)] p-6 sm:p-8 lg:p-12 shadow-[0_8px_30px_rgba(116,12,8,0.02)] hover:shadow-[0_30px_60px_rgba(116,12,8,0.08)] hover:-translate-y-1 transition-all duration-700 overflow-hidden active:scale-[0.98] animate-in fade-in slide-in-from-bottom-4 flex flex-col justify-end ${animationDelay} ${bentoLayout}`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--color-mace-gold),transparent_60%)] opacity-0 group-hover:opacity-[0.06] transition-opacity duration-1000" />
                    
                    {/* Background Watermark (Scaled down slightly for mobile) */}
                    {contest.isTextIcon ? (
                      <div className="absolute -right-4 -top-4 md:-right-8 md:-top-8 text-[12rem] md:text-[20rem] leading-none font-serif text-[var(--color-mace-gold)] opacity-0 group-hover:opacity-[0.03] transition-all duration-1000 ease-out pointer-events-none select-none">
                        {contest.iconSymbol}
                      </div>
                    ) : (
                      contest.icon && <contest.icon className="absolute -right-6 -top-6 md:-right-12 md:-top-12 w-64 h-64 md:w-96 md:h-96 text-[var(--color-mace-gold)] opacity-0 group-hover:opacity-[0.03] transition-all duration-1000 ease-out pointer-events-none" />
                    )}

                    {/* Live Now Badge (Adjusted mobile positioning) */}
                    <div className="absolute top-6 left-6 md:top-8 md:left-8 lg:top-12 lg:left-12 px-3 py-1.5 rounded-full border border-[var(--color-mace-rust)]/30 bg-[var(--color-mace-rust)]/5 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-[var(--color-mace-rust)] animate-pulse z-20">
                      Live Now
                    </div>
                    
                    <div className="relative z-10 w-full mt-auto pt-24 md:pt-0">
                      <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--color-mace-crimson)]/50 mb-2 md:mb-3">
                        {contest.tag}
                      </p>
                      
                      <h2 className="text-4xl lg:text-5xl font-serif mb-3 md:mb-4 tracking-tight group-hover:opacity-80 transition-opacity duration-500">
                        <span className="text-[var(--color-mace-crimson)] italic font-light pr-2 lg:pr-3">
                          {contest.title.split(" ")[0]}
                        </span>
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-mace-rust)] to-[var(--color-mace-gold)]">
                          {contest.title.split(" ").slice(1).join(" ")}
                        </span>
                      </h2>

                      <p className="text-base md:text-lg text-[var(--text-muted)] font-medium max-w-md leading-relaxed mb-6 md:mb-8">
                        {contest.description}
                      </p>

                      <div className="flex items-center justify-between w-full px-5 py-3.5 md:px-8 md:py-4 bg-[var(--surface-soft)] border border-[var(--border)] text-[var(--text-muted)] rounded-2xl text-[11px] md:text-[12px] font-black uppercase tracking-[0.25em] group-hover:bg-[var(--color-mace-rust)] group-hover:border-[var(--color-mace-rust)] group-hover:text-white transition-all duration-500">
                        Here's mine 
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-500" strokeWidth={2} />
                      </div>
                    </div>
                  </Link>
                ) : (
                  /* --- THE LOCKED CONTESTS (MOBILE LIST ROWS -> DESKTOP SQUARES) --- */
                  <div className={`relative rounded-[1.5rem] md:rounded-[2.5rem] bg-[var(--surface-soft)] border border-[var(--border)]/60 p-4 md:p-8 lg:p-10 opacity-90 grayscale-[20%] animate-in fade-in slide-in-from-bottom-4 flex flex-row md:flex-col items-center md:items-stretch justify-between ${animationDelay} ${bentoLayout}`}>
                    
                    <div className={`w-full flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 ${index === 1 ? "md:flex-row md:items-center md:gap-6" : ""}`}>
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[1.5rem] bg-[var(--background)] border border-[var(--border)] flex items-center justify-center flex-shrink-0 shadow-sm md:mb-6">
                        {contest.icon && <contest.icon className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-mace-stone)]" strokeWidth={1.5} />}
                      </div>
                      
                      <div className="flex-1">
                        <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--text-muted)]/60 mb-0.5 md:mb-1.5 flex items-center gap-2">
                          {contest.tag} <span className="hidden md:inline text-[var(--border)] mx-1">•</span> <span className="hidden md:inline">Locked</span>
                        </p>
                        <h2 className="text-xl md:text-2xl font-serif font-bold text-[var(--text-muted)]/70 mb-0 md:mb-2 tracking-tight">
                          {contest.title}
                        </h2>
                        {index === 1 && (
                          <p className="hidden md:block text-sm text-[var(--text-muted)]/60 font-medium max-w-sm leading-relaxed">
                            {contest.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className={`flex-shrink-0 ml-3 md:ml-0 md:mt-auto ${index === 1 ? "" : "md:w-full"}`}>
                      {/* Desktop Full Pill */}
                      <div className="hidden md:flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-[var(--border)] text-[var(--color-mace-stone)] rounded-full text-[11px] font-bold uppercase tracking-[0.25em] cursor-not-allowed">
                        <Lock className="w-4 h-4" strokeWidth={2} /> Locked
                      </div>
                      {/* Mobile Minimal Lock Icon */}
                      <div className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[var(--background)] border border-[var(--border)] text-[var(--color-mace-stone)]">
                        <Lock className="w-4 h-4" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </main>
    </div>
  );
}
