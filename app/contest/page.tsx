"use client";

import React from "react";
import Link from "next/link";
import { 
  Trophy, 
  Lock, 
  ArrowRight, 
  Sparkles, 
  Palette, 
  Music, 
  Camera, 
  CalendarHeart,
  Star
} from "lucide-react";

export default function ContestsHubPage() {
  // Contest data structure
  const contests = [
    {
      id: 1,
      tag: "Contest #01",
      title: "The Naming",
      description: "Submit the winning title for our decennial homecoming and cement your legacy.",
      status: "active",
      href: "/contest/letsname",
      icon: Trophy,
    },
    {
      id: 2,
      tag: "Contest #02",
      title: "███ ██████",
      description: "██████ ███ ████████ ████ ███ ███████████ ████████ ███ ███ █████ ██████.",
      status: "locked",
      href: "#",
      icon: Palette,
    },
    {
      id: 3,
      tag: "Contest #03",
      title: "███ ██████",
      description: "████ ██ ██████ ██ ██████ ███ ████████ █████ ████ ████ ███ ███ █████.",
      status: "locked",
      href: "#",
      icon: Music,
    },
    {
      id: 4,
      tag: "Contest #04",
      title: "█████████ ████",
      description: "██████ ████ ████ ██████████ ██████ ████ ████-████ ███ ███ ████ ████████.",
      status: "locked",
      href: "#",
      icon: Camera,
    },
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/hero.jpg')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#151c3d]/90 via-[#1f295a]/95 to-[#151c3d]/95 backdrop-blur-[2px] z-0" />

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-4xl mx-auto flex flex-col">
        
        {/* Header Section */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top-6 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[10px] font-semibold uppercase tracking-[0.3em] mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Shape the Legacy
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 tracking-tight">
            Decennial <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 italic font-light">Contests</span>
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Participate in a series of community contests to help build our 2016 homecoming. Unlock exclusive rewards and earn your spot in the history books.
          </p>
        </div>

        {/* Contest Line Items */}
        <div className="space-y-4">
          {contests.map((contest, index) => {
            const isActive = contest.status === "active";
            const Icon = contest.icon;
            const animationDelay = `delay-[${index * 100}ms]`;

            return (
              <div 
                key={contest.id}
                className={`animate-in fade-in slide-in-from-bottom-4 duration-500 ${animationDelay}`}
              >
                {isActive ? (
                  /* ACTIVE CONTEST ITEM */
                  <Link 
                    href={contest.href}
                    className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 md:p-8 rounded-[2rem] bg-white/10 border border-amber-400/30 backdrop-blur-md shadow-[0_0_30px_rgba(251,191,36,0.1)] hover:bg-white/15 hover:border-amber-400/50 transition-all overflow-hidden active:scale-[0.98]"
                  >
                    {/* Active Glow Effect */}
                    <div className="absolute -top-20 -left-20 w-40 h-40 bg-amber-400/20 rounded-full blur-3xl group-hover:bg-amber-400/30 transition-colors"></div>

                    <div className="relative z-10 flex items-center gap-5 sm:gap-8">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/20">
                        <Icon className="w-6 h-6 text-[#1f295a]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 mb-1.5">
                          {contest.tag} <span className="text-white/40 mx-1">•</span> <span className="text-green-400">Open Now</span>
                        </p>
                        <h2 className="text-2xl font-serif font-bold text-white mb-1">
                          {contest.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-300 font-light max-w-md">
                          {contest.description}
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10 w-full sm:w-auto mt-2 sm:mt-0 flex-shrink-0">
                      <div className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1f295a] rounded-full text-[11px] font-bold uppercase tracking-[0.2em] group-hover:bg-amber-400 transition-colors">
                        Enter Now <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                ) : (
                  /* LOCKED CONTEST ITEM */
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 md:p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm opacity-75 grayscale-[30%]">
                    <div className="flex items-center gap-5 sm:gap-8">
                      <div className="w-14 h-14 rounded-full bg-[#151c3d] border border-white/10 flex items-center justify-center flex-shrink-0">
                        <Lock className="w-5 h-5 text-slate-500" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1.5">
                          {contest.tag} <span className="text-white/20 mx-1">•</span> Locked
                        </p>
                        <h2 className="text-xl font-serif font-bold text-slate-300 mb-1">
                          {contest.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-400 font-light max-w-md">
                          {contest.description}
                        </p>
                      </div>
                    </div>

                    <div className="w-full sm:w-auto mt-2 sm:mt-0 flex-shrink-0">
                      <div className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-white/10 text-slate-500 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] cursor-not-allowed">
                        <Lock className="w-3.5 h-3.5" /> Coming Soon
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
