"use client";

import React from "react";
import Link from "next/link";
import { 
  Ticket, 
  Lock, 
  Sparkles, 
  Users, 
  Flame,
  ArrowRight
} from "lucide-react";

export default function RegisterPage() {

  const ticketTiers = [
    {
      id: 1,
      name: "The Alumni Pass",
      price: "TBA",
      perks: ["Main Event Access", "Gala Dinner", "Decennial Merch Kit", "Alumni Directory"],
      status: "Opening Soon",
      icon: Ticket,
      accent: "var(--color-mace-gold)",
      interest: "248 waiting"
    },
    {
      id: 2,
      name: "The Plus-One Pass",
      price: "TBA",
      perks: ["2x Event Access", "Gala Dinner for Two", "Decennial Merch Kit", "Couples Photo Booth"],
      status: "Finalizing",
      icon: Sparkles,
      accent: "var(--color-mace-crimson)",
      interest: "185 waiting"
    },
    {
      id: 3,
      name: "The Family Pass",
      price: "TBA",
      perks: ["Family Event Access", "Kids Zone Entry", "Family Dinner Table", "Commemorative Gift"],
      status: "Curating",
      icon: Users,
      accent: "var(--color-mace-rust)",
      interest: "94 waiting"
    }
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pt-8 md:pt-16 pb-28 md:pb-20 px-4 sm:px-6 lg:px-8 font-sans bg-[var(--background)] overflow-x-hidden">
      
      {/* Immersive Heritage Background */}
      <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-[0.02] grayscale pointer-events-none fixed" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--color-mace-gold),transparent_70%)] opacity-[0.05] blur-[100px] pointer-events-none fixed" />

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-[1140px] mx-auto flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 mb-10 md:mb-16 animate-in fade-in slide-in-from-top-6 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[var(--border)] shadow-sm">
            <Ticket className="w-3.5 h-3.5 text-[var(--color-mace-gold)]" strokeWidth={2} />
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--text-muted)]">
              The Registry
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[var(--color-mace-crimson)] tracking-tight">
            Reserve Your <span className="italic font-light text-[var(--color-mace-gold)] pr-2">Spot</span>
          </h1>
          <p className="max-w-md text-sm md:text-base text-[var(--text-muted)] font-medium leading-relaxed mt-2">
            The official guestlist for the Class of 2016 Decennial is currently being finalized.
          </p>
        </div>

        {/* The Naming Call To Action (The ONLY Clickable Action) */}
        <div className="w-full max-w-2xl mx-auto bg-white border border-[var(--border)] rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-[0_20px_40px_rgba(116,12,8,0.03)] mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 relative overflow-hidden flex flex-col items-center text-center">
          
          {/* Subtle background bloom */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-mace-gold)]/5 rounded-full blur-3xl -z-10 animate-pulse pointer-events-none"></div>

          <div className="w-14 h-14 rounded-2xl bg-[var(--surface-soft)] border border-[var(--border)] flex items-center justify-center mb-5 shadow-sm">
            <span className="text-2xl font-serif text-[var(--color-mace-gold)] leading-none">ആ</span>
          </div>
          
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-mace-rust)] mb-2">While you wait</p>
          <h3 className="font-serif text-3xl font-bold text-[var(--color-mace-crimson)] mb-3 tracking-tight">Cement Your Legacy</h3>
          <p className="text-[var(--text-muted)] text-sm md:text-base font-medium max-w-md mb-8 leading-relaxed">
            Ticketing operations are currently under wraps. In the meantime, join our very first decennial event and etch your mark into history.
          </p>

          <Link 
            href="/contest/letsname"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[var(--color-mace-rust)] text-white text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_8px_20px_rgba(212,67,33,0.25)] hover:bg-[#b0361a] transition-all active:scale-[0.98] shrink-0"
          >
            Play 'The Naming' <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-6 md:mb-8 animate-in fade-in duration-700 delay-200 px-2 md:px-0">
          <div className="h-px bg-[var(--border)] flex-1"></div>
          <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-muted)]">Preview Packages</p>
          <div className="h-px bg-[var(--border)] flex-1"></div>
        </div>

        {/* TICKET PACKAGES (Locked) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          
          {/* md:contents trick for horizontal mobile scroll */}
          <div className="flex overflow-x-auto gap-4 pb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:pb-0 md:contents snap-x snap-mandatory [&::-webkit-scrollbar]:hidden w-[100vw] md:w-full">
            
            {ticketTiers.map((tier) => (
              <div 
                key={tier.id} 
                className="relative group bg-white border border-[var(--border)] rounded-[2rem] p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 w-[280px] md:w-auto shrink-0 snap-center md:snap-none min-h-[340px] grayscale-[15%] cursor-not-allowed select-none"
              >
                {/* Background Ticket Graphic */}
                <div className="absolute -right-8 -bottom-8 opacity-[0.02] pointer-events-none">
                  <Ticket className="w-48 h-48 text-[var(--color-mace-crimson)]" strokeWidth={1} />
                </div>

                {/* Top Section */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center shadow-sm">
                      <tier.icon className="w-5 h-5 text-[var(--color-mace-stone)]" strokeWidth={1.5} />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-[var(--surface-soft)] border border-[var(--border)] text-[8px] font-black uppercase tracking-widest text-[var(--text-muted)]">
                      {tier.status}
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[var(--color-mace-crimson)] mb-2 tracking-tight">
                    {tier.name}
                  </h3>
                  
                  <div className="mb-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]/60 mb-1">Starting from</p>
                    <p className="text-xl font-bold text-[var(--color-mace-crimson)] opacity-50">{tier.price}</p>
                  </div>

                  {/* Perks List */}
                  <ul className="space-y-2.5 mb-8">
                    {tier.perks.map((perk, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-[var(--text-muted)] font-medium">
                        <div className="w-1.5 h-1.5 rounded-full opacity-40 shrink-0" style={{ backgroundColor: tier.accent }}></div>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Section (Social Proof + Action) */}
                <div className="relative z-10 mt-auto w-full">
                  {/* Fire/Interest Indicator */}
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-[var(--color-mace-rust)] mb-3">
                    <Flame className="w-3.5 h-3.5" strokeWidth={2.5} />
                    {tier.interest}
                  </div>

                  <div className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[var(--surface-soft)] border border-[var(--border)] text-[var(--color-mace-stone)] text-[10px] font-black uppercase tracking-[0.2em]">
                    <Lock className="w-3.5 h-3.5" strokeWidth={2} /> Locked
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>

      </main>
    </div>
  );
}
