"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShoppingBag, 
  Filter
} from "lucide-react";

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pt-8 md:pt-16 pb-28 md:pb-20 px-4 sm:px-6 lg:px-8 font-sans bg-[var(--background)] overflow-x-hidden">
      
      {/* Immersive Heritage Background */}
      <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-[0.02] grayscale pointer-events-none fixed" />
      <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--color-mace-gold),transparent_70%)] opacity-[0.05] blur-[100px] pointer-events-none fixed" />

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-[1140px] mx-auto flex flex-col">
         
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 mb-10 md:mb-16 animate-in fade-in slide-in-from-top-6 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[var(--border)] shadow-sm">
            <ShoppingBag className="w-3.5 h-3.5 text-[var(--color-mace-gold)]" strokeWidth={2} />
            <div className="w-24 h-2.5 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[var(--color-mace-crimson)] tracking-tight">
            Official <span className="italic font-light text-[var(--color-mace-gold)] pr-2">Merch</span>
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

        {/* Scrolling Category Pills (Brainstorming Skeletons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden mb-4 animate-in fade-in duration-700 delay-300">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[var(--border)] text-slate-400 shrink-0 mr-1 shadow-sm opacity-60">
            <Filter className="w-4 h-4" strokeWidth={2} />
          </div>
          
          {[1, 2, 3, 4, 5].map((item) => (
             <div
              key={item}
              className={`whitespace-nowrap w-24 h-10 rounded-full transition-all shadow-sm border cursor-not-allowed opacity-70 animate-pulse ${
                activeCategory === item 
                  ? "bg-gray-400 border-gray-400" 
                  : "bg-gray-200 border-gray-200"
              }`}
            >
            </div>
          ))}
        </div>

        {/* E-Commerce Product Grid (Brainstorming Skeletons) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div 
              key={item} 
              className="group flex flex-col bg-white border border-[var(--border)] rounded-[1.5rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 cursor-not-allowed select-none opacity-60"
            >
              {/* Image Area Skeleton */}
              <div className="relative w-full aspect-square bg-gray-100 flex items-center justify-center p-6 border-b border-[var(--border)]/50 overflow-hidden animate-pulse">
                <div className="absolute top-3 left-3 w-16 h-4 rounded-full bg-gray-300"></div>
                <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
              </div>

              {/* Product Details Skeleton */}
              <div className="p-4 md:p-5 flex flex-col flex-1 bg-white">
                <div className="w-1/3 h-2.5 bg-gray-200 rounded-full mb-3 animate-pulse"></div>
                <div className="w-3/4 h-5 bg-gray-300 rounded-full mb-2 animate-pulse"></div>
                <div className="w-1/2 h-5 bg-gray-300 rounded-full mb-6 animate-pulse"></div>
                
                <div className="mt-auto flex items-end justify-between">
                  <div className="w-1/4 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
