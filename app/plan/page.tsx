"use client";

import React from "react";
import { Clock, MapPin, Coffee, Mic, Utensils, GlassWater } from "lucide-react";

export default function PlanPage() {
  // Placeholder data for the itinerary
  const itineraryItems = [
    {
      id: 1,
      time: "09:00 AM",
      title: "Arrival & Registration",
      location: "Main Campus Gates",
      desc: "Pick up your decennial badges, welcome kits, and grab a warm coffee before the day begins.",
      icon: Coffee,
      isActive: false,
    },
    {
      id: 2,
      time: "11:00 AM",
      title: "The Welcome Keynote",
      location: "University Auditorium",
      desc: "Opening remarks from the Dean and a nostalgic look back at the Class of 2016.",
      icon: Mic,
      isActive: true, // Highlights this node as the "current" or "featured" one
    },
    {
      id: 3,
      time: "01:30 PM",
      title: "Alumni Luncheon",
      location: "The OAT",
      desc: "Reconnect over a catered lunch with your old batchmates and professors.",
      icon: Utensils,
      isActive: false,
    },
    {
      id: 4,
      time: "07:00 PM",
      title: "Gala Dinner & Awards",
      location: "Grand Ballroom",
      desc: "Dress to impress. An evening of dining, awards, and dancing to celebrate a decade of excellence.",
      icon: GlassWater,
      isActive: false,
    },
  ];

  return (
    <div className="relative w-full max-w-[900px] mx-auto px-6 py-12 md:py-20 animate-in fade-in duration-1000">
      
      {/* Page Atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--color-mace-gold),transparent_70%)] opacity-[0.05] blur-[120px]" />
      </div>

      {/* Header */}
      <div className="mb-16 md:mb-24 text-center md:text-left">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--text)] shadow-sm">
          <Clock className="h-3 w-3 text-[var(--color-mace-gold)]" strokeWidth={2.5} />
          The Itinerary
        </div>
        <h1 className="font-serif text-[3rem] md:text-[4.5rem] leading-[1] tracking-tight text-[var(--color-mace-crimson)]">
          Plan of <span className="font-light italic text-[var(--color-mace-stone)]">Action</span>
        </h1>
        <p className="mt-4 text-lg font-medium text-[var(--text-muted)] max-w-lg mx-auto md:mx-0">
          Your complete schedule for the decennial reunion. Times and locations are subject to minor changes.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        
        {/* The Vertical Line */}
        <div className="absolute left-[27px] md:left-[39px] top-4 bottom-4 w-px bg-gradient-to-b from-[var(--border)] via-[var(--border)] to-transparent" />

        <div className="space-y-8 md:space-y-12">
          {itineraryItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="group relative flex items-start gap-6 md:gap-10">
                
                {/* Timeline Node (The Dot) */}
                <div className="relative z-10 flex flex-col items-center justify-start pt-6">
                  <div 
                    className={`w-4 h-4 rounded-full border-[3px] shadow-sm transition-all duration-500 group-hover:scale-125 ${
                      item.isActive 
                        ? "bg-[var(--color-mace-gold)] border-white shadow-[0_0_15px_rgba(200,160,80,0.4)]" 
                        : "bg-white border-[var(--border)] group-hover:border-[var(--color-mace-gold)]"
                    }`} 
                  />
                </div>

                {/* The Card */}
                <div className="flex-1 bg-white rounded-[1.5rem] md:rounded-[2rem] border border-[var(--border)] p-5 md:p-8 flex flex-col sm:flex-row gap-5 md:gap-8 shadow-[0_4px_20px_rgba(116,12,8,0.02)] transition-all duration-700 hover:shadow-[0_20px_40px_rgba(116,12,8,0.06)] hover:-translate-y-1">
                  
                  {/* Left Side: Image/Icon Placeholder (matching your reference image) */}
                  <div className="w-full sm:w-32 md:w-40 aspect-[4/3] sm:aspect-square shrink-0 rounded-[1rem] bg-[var(--surface-soft)] border border-[var(--border)] flex flex-col items-center justify-center gap-2 group-hover:bg-[var(--color-mace-gold)]/5 group-hover:border-[var(--color-mace-gold)]/30 transition-all duration-500 overflow-hidden relative">
                    {/* Optional: Add actual <img /> here later */}
                    <Icon className="h-8 w-8 text-[var(--color-mace-stone)]/50 group-hover:text-[var(--color-mace-gold)] transition-colors duration-500" strokeWidth={1.5} />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-mace-stone)]/50 group-hover:text-[var(--color-mace-gold)] transition-colors duration-500">
                      {item.time}
                    </span>
                  </div>

                  {/* Right Side: Content (matching the text lines in your reference) */}
                  <div className="flex flex-col justify-center flex-1 py-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-3 h-3 text-[var(--color-mace-rust)]" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-mace-rust)]">
                        {item.time}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-[var(--color-mace-crimson)] mb-2 group-hover:text-[var(--color-mace-rust)] transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 text-[var(--text-muted)] mb-4">
                      <MapPin className="w-4 h-4 opacity-70" />
                      <span className="text-sm font-medium">{item.location}</span>
                    </div>

                    {/* Simulating the placeholder grey lines from your reference when data is missing, but showing text since we have data */}
                    <p className="text-sm md:text-base leading-relaxed text-[var(--text-muted)] border-t border-[var(--border)]/50 pt-4">
                      {item.desc}
                    </p>
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
