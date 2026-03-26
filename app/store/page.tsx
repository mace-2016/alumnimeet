"use client";

import React, { useState } from "react";
import { 
  Search, 
  ShoppingBag, 
  Filter, 
  Shirt, 
  Coffee, 
  Watch, 
  BookOpen, 
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
        
        {/* Header & Search (Google Shopping Style) */}
        <div className="flex flex-col gap-6 mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-[var(--color-mace-crimson)] tracking-tight">
                Decennial <span className="italic font-light text-[var(--color-mace-gold)] pr-2">Store</span>
              </h1>
              <p className="text-sm md:text-base text-[var(--text-muted)] font-medium mt-1">Official merchandise is currently being curated.</p>
            </div>
            
            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white border border-[var(--border)] shadow-sm relative cursor-pointer hover:border-[var(--color-mace-gold)] transition-colors">
              <ShoppingBag className="w-5 h-5 text-[var(--color-mace-crimson)]" strokeWidth={1.5} />
            </div>
          </div>

          {/* Google-esque Giant Search Bar */}
          <div className="relative w-full max-w-2xl group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[var(--color-mace-crimson)] transition-colors">
              <Search className="w-5 h-5" strokeWidth={2} />
            </div>
            <input 
              type="text" 
              disabled
              placeholder="Merch dropping soon..." 
              className="w-full pl-12 pr-4 py-3.5 md:py-4 bg-white/50 border border-[var(--border)] rounded-full text-base font-medium text-[var(--color-mace-crimson)] shadow-sm placeholder:text-slate-400 outline-none cursor-not-allowed transition-all"
            />
          </div>
        </div>

        {/* Scrolling Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden mb-4 animate-in fade-in duration-700 delay-100">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[var(--border)] text-slate-500 shrink-0 mr-1 shadow-sm">
            <Filter className="w-4 h-4" strokeWidth={2} />
          </div>
          
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.15em] transition-all shadow-sm border ${
                activeCategory === category 
                  ? "bg-[var(--color-mace-crimson)] text-white border-[var(--color-mace-crimson)]" 
                  : "bg-white text-slate-500 border-[var(--border)] hover:bg-[var(--surface-soft)] hover:text-[var(--color-mace-crimson)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* E-Commerce Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group flex flex-col bg-white border border-[var(--border)] rounded-[1.5rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 cursor-not-allowed grayscale-[20%]"
            >
              
              {/* Product Image Area (Square, prominent) */}
              <div className={`relative w-full aspect-square ${product.bg} flex items-center justify-center p-6 border-b border-[var(--border)]/50 overflow-hidden`}>
                
                {/* Status Badges */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur border border-[var(--color-mace-gold)]/30 text-[8px] font-black uppercase tracking-widest text-[var(--color-mace-gold)] shadow-sm">
                  {product.status}
                </div>

                {/* Simulated Product Image via Lucide Icon */}
                <product.icon className={`w-24 h-24 md:w-32 md:h-32 ${product.color} opacity-40 transition-transform duration-700 ease-out`} strokeWidth={1} />
              </div>

              {/* Product Details (Google Shopping clean style) */}
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
