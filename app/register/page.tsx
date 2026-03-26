"use client";

import React from "react";
import Link from "next/link";
import { Ticket } from "lucide-react";

export default function RegisterPage() {

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
            <div className="w-24 h-2.5 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[var(--color-mace-crimson)] tracking-tight">
            Reserve Your <span className="italic font-light text-[var(--color-mace-gold)] pr-2">Spot</span>
          </h1>
          <div className="w-64 h-4 bg-gray-200 rounded-full mt-2 animate-pulse"></div>
        </div>

        {/* Redirect Bar matching uploaded image style */}
        <Link 
          href="/contest/letsname"
          className="w-full max-w-2xl mx-auto bg-[#F8F9FA] rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 flex items-center justify-between transition-all hover:scale-[1.02] active:scale-[0.98] border border-[var(--border)]/50"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 tracking-tight flex items-center">
            Play 'The Naming' <span className="ml-2 font-normal text-gray-500 text-base md:text-xl">&gt;</span>
          </h3>
          
          {/* Using your earlier graphic style on the right side */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[var(--surface-soft)] border border-[var(--border)] flex items-center justify-center shadow-sm shrink-0">
            <span className="text-xl sm:text-3xl font-serif text-[var(--color-mace-gold)] leading-none">ആ</span>
          </div>
        </Link>

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-6 md:mb-8 animate-in fade-in duration-700 delay-200 px-2 md:px-0">
          <div className="h-px bg-[var(--border)] flex-1"></div>
          <div className="w-32 h-2.5 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-px bg-[var(--border)] flex-1"></div>
        </div>

        {/* TICKET PACKAGES (Brainstorming Skeletons) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          
          {/* md:contents trick for horizontal mobile scroll */}
          <div className="flex overflow-x-auto gap-4 pb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:pb-0 md:contents snap-x snap-mandatory [&::-webkit-scrollbar]:hidden w-[100vw] md:w-full">
            
            {[1, 2, 3].map((item) => (
              <div 
                key={item} 
                className="relative group bg-white border border-[var(--border)] rounded-[2rem] p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 w-[280px] md:w-auto shrink-0 snap-center md:snap-none min-h-[340px] opacity-60 cursor-not-allowed select-none"
              >
                {/* Top Section Skeleton */}
                <div className="relative z-10 w-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gray-100 border border-gray-200 animate-pulse"></div>
                    <div className="w-16 h-5 rounded-full bg-gray-200 animate-pulse"></div>
                  </div>

                  <div className="w-3/4 h-7 bg-gray-300 rounded-full mb-3 animate-pulse"></div>
                  
                  <div className="mb-6">
                    <div className="w-1/3 h-2 bg-gray-200 rounded-full mb-2 animate-pulse"></div>
                    <div className="w-1/2 h-5 bg-gray-200 rounded-full animate-pulse"></div>
                  </div>

                  {/* Perks List Skeletons */}
                  <div className="space-y-4 mb-8">
                     <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse shrink-0"></div>
                        <div className="w-full h-3 bg-gray-200 rounded-full animate-pulse"></div>
                     </div>
                     <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse shrink-0"></div>
                        <div className="w-5/6 h-3 bg-gray-200 rounded-full animate-pulse"></div>
                     </div>
                     <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse shrink-0"></div>
                        <div className="w-4/5 h-3 bg-gray-200 rounded-full animate-pulse"></div>
                     </div>
                  </div>
                </div>

                {/* Bottom Section Skeleton */}
                <div className="relative z-10 mt-auto w-full">
                  <div className="w-1/3 h-2.5 bg-gray-200 rounded-full mb-4 animate-pulse"></div>
                  <div className="w-full h-11 rounded-xl bg-gray-100 border border-gray-200 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
