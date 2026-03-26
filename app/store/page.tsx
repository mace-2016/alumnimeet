"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShoppingBag, 
  Filter, 
  Shirt, 
  Coffee, 
  Watch, 
  BookOpen, 
  Lock,
  ArrowRight
} from "lucide-react";

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Sourcing...", "Curating...", "In Design...", "TBA"];

  const products = [
    {
      id: 1,
      name: "Still Sourcing...",
      price: "TBA",
      category: "Sourcing...",
      status: "In Progress",
      icon: Shirt,
      color: "text-[var(--color-mace-crimson)]",
      bg: "bg-[var(--color-mace-crimson)]/5"
    },
    {
      id: 2,
      name: "Curating Options...",
      price: "TBA",
      category: "Curating...",
      status: "Pending",
      icon: Coffee,
      color: "text-[var(--color-mace-stone)]",
      bg: "bg-[var(--background)]"
    },
    {
      id: 3,
      name: "In Design Phase...",
      price: "TBA",
      category: "In Design...",
      status: "Drafting",
      icon: Watch,
      color: "text-[var(--color-mace-gold)]",
      bg: "bg-[var(--color-mace-gold)]/10"
    },
    {
      id: 4,
      name: "Exploring Materials...",
      price: "TBA",
      category: "Sourcing...",
      status: "Curating",
      icon: BookOpen,
      color: "text-[var(--color-mace-rust)]",
      bg: "bg-[var(--color-mace-rust)]/5"
    },
    {
      id: 5,
      name: "Mockups Pending...",
      price: "TBA",
      category: "In Design...",
      status: "TBA",
      icon: Shirt,
      color: "text-slate-700",
      bg: "bg-slate-100"
    },
    {
      id: 6,
      name: "Finalizing Details...",
      price: "TBA",
      category: "TBA",
      status: "Coming Soon",
      icon: Coffee,
      color: "text-[var(--text-muted)]",
      bg: "bg-[var(--surface-soft)]"
    },
  ];

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
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--text-muted)]">
              Decennial Store
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[var(--color-mace-crimson)] tracking-tight">
            Official <span className="italic font-light text-[var(--color-mace-gold)] pr-2">Merch</span>
          </h1>
          <p className="max-w-md text-sm md:text-base text-[var(--text-muted)] font-medium leading-relaxed mt-2">
            The exclusive merchandise collection for the Class of 2016 is currently being curated.
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
            Merchandising operations are currently under wraps. In the meantime, join our very first decennial event and etch your mark into history.
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
          <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-muted)]">Preview Collection</p>
          <div className="h-px bg-[var(--border)] flex-1"></div>
        </div>

        {/* Scrolling Category Pills (Disabled state) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden mb-4 animate-in fade-in duration-700 delay-300">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[var(--border)] text-slate-400 shrink-0 mr-1 shadow-sm opacity-60">
            <Filter className="w-4 h-4" strokeWidth={2} />
          </div>
          
          {categories.map((category) => (
            <div
              key={category}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.15em] transition-all shadow-sm border cursor-not-allowed opacity-70 ${
                activeCategory === category 
                  ? "bg-[var(--color-mace-crimson)] text-white border-[var(--color-mace-crimson)]" 
                  : "bg-white text-slate-400 border-[var(--border)]"
              }`}
            >
              {category}
            </div>
          ))}
        </div>

        {/* E-Commerce Product Grid (Locked) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group flex flex-col bg-white border border-[var(--border)] rounded-[1.5rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 cursor-not-allowed grayscale-[20%] select-none"
            >
              
              {/* Product Image Area */}
              <div className={`relative w-full aspect-square ${product.bg} flex items-center justify-center p-6 border-b border-[var(--border)]/50 overflow-hidden`}>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur border border-[var(--color-mace-gold)]/30 text-[8px] font-black uppercase tracking-widest text-[var(--color-mace-gold)] shadow-sm">
                  {product.status}
                </div>
                <product.icon className={`w-24 h-24 md:w-32 md:h-32 ${product.color} opacity-40 transition-transform duration-700 ease-out`} strokeWidth={1} />
              </div>

              {/* Product Details */}
              <div className="p-4 md:p-5 flex flex-col flex-1 bg-white">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-1.5">
                  {product.category}
                </p>
                
                <h3 className="font-serif font-bold text-base md:text-lg text-[var(--color-mace-crimson)] leading-tight mb-3 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="mt-auto flex items-end justify-between opacity-50">
                  <p className="text-lg md:text-xl font-bold tracking-tight text-[var(--color-mace-crimson)]">
                    {product.price}
                  </p>
                  <div className="w-8 h-8 rounded-full bg-[var(--surface-soft)] border border-[var(--border)] flex items-center justify-center">
                    <Lock className="w-3.5 h-3.5 text-[var(--text-muted)]" strokeWidth={2.5} />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
