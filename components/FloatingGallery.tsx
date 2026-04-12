"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

export type FloatingGalleryImage = {
  src: string;
  caption: string;
  year: string;
};

type FloatingGalleryProps = {
  images: FloatingGalleryImage[];
  isPaused?: boolean;
};

type TierKey = "far" | "mid" | "near";

type CardConfig = FloatingGalleryImage & {
  id: string;
  tier: TierKey;
  x: number;
  y: number;
  rotation: number;
  driftX: number;
  driftY: number;
  driftRotate: number;
  delay: number;
};

const TIERS: Record<TierKey, { size: string; opacity: string; blur: string; duration: number; z: string }> = {
  far: {
    size: "w-16 h-24 md:w-20 md:h-28",
    opacity: "opacity-[0.14] md:opacity-[0.18]",
    blur: "blur-[2px]",
    duration: 40,
    z: "z-[1]",
  },
  mid: {
    size: "w-24 h-32 md:w-28 md:h-40",
    opacity: "opacity-[0.20] md:opacity-[0.30]",
    blur: "blur-[1px]",
    duration: 28,
    z: "z-[2]",
  },
  near: {
    size: "w-32 h-44 md:w-40 md:h-56",
    opacity: "opacity-[0.32] md:opacity-[0.48]",
    blur: "blur-0",
    duration: 20,
    z: "z-[3]",
  },
};

const DESKTOP_SLOTS = [
  { x: 7, y: 10 },
  { x: 20, y: 26 },
  { x: 10, y: 63 },
  { x: 22, y: 78 },
  { x: 32, y: 12 },
  { x: 78, y: 9 },
  { x: 88, y: 24 },
  { x: 76, y: 65 },
  { x: 86, y: 80 },
  { x: 67, y: 13 },
  { x: 6, y: 40 },
  { x: 92, y: 49 },
];

const MOBILE_SLOTS = [
  { x: 6, y: 10 },
  { x: 20, y: 30 },
  { x: 10, y: 72 },
  { x: 78, y: 12 },
  { x: 86, y: 34 },
  { x: 80, y: 74 },
  { x: 4, y: 48 },
  { x: 90, y: 56 },
];

function seeded(seed: number) {
  const value = Math.sin(seed * 999) * 10000;
  return value - Math.floor(value);
}

export default function FloatingGallery({ images, isPaused = false }: FloatingGalleryProps) {
  const cards = useMemo<CardConfig[]>(() => {
    const source = images.length >= 12 ? images : [...images, ...images];
    const desktopCards = source.slice(0, 12).map((img, i) => {
      const slot = DESKTOP_SLOTS[i % DESKTOP_SLOTS.length];
      const tierOrder: TierKey[] = ["far", "mid", "near", "mid"];
      const tier = tierOrder[i % tierOrder.length];
      const xJitter = (seeded(i + 1) - 0.5) * 4;
      const yJitter = (seeded(i + 21) - 0.5) * 5;
      const rotation = (seeded(i + 51) - 0.5) * 16;
      const driftX = (seeded(i + 81) - 0.5) * 18;
      const driftY = 10 + seeded(i + 101) * 18;
      const driftRotate = (seeded(i + 121) - 0.5) * 8;
      const delay = seeded(i + 141) * 6;
      return {
        ...img,
        id: `desktop-${i}`,
        tier,
        x: slot.x + xJitter,
        y: slot.y + yJitter,
        rotation,
        driftX,
        driftY,
        driftRotate,
        delay,
      };
    });

    const mobileCards = source.slice(0, 8).map((img, i) => {
      const slot = MOBILE_SLOTS[i % MOBILE_SLOTS.length];
      const tierOrder: TierKey[] = ["far", "mid", "near", "mid"];
      const tier = tierOrder[i % tierOrder.length];
      const xJitter = (seeded(i + 301) - 0.5) * 3;
      const yJitter = (seeded(i + 321) - 0.5) * 4;
      const rotation = (seeded(i + 351) - 0.5) * 12;
      const driftX = (seeded(i + 381) - 0.5) * 12;
      const driftY = 8 + seeded(i + 401) * 12;
      const driftRotate = (seeded(i + 421) - 0.5) * 6;
      const delay = seeded(i + 441) * 4;
      return {
        ...img,
        id: `mobile-${i}`,
        tier,
        x: slot.x + xJitter,
        y: slot.y + yJitter,
        rotation,
        driftX,
        driftY,
        driftRotate,
        delay,
      };
    });

    return [...desktopCards, ...mobileCards];
  }, [images]);

  return (
    <div className="relative h-[420px] md:h-[560px] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-white/50 bg-[#f6f3ef] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0)_22%,rgba(255,255,255,0.72)_64%,rgba(255,255,255,0.95)_100%)] z-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.06)_28%,rgba(255,255,255,0.22)_100%)] z-10 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 z-20 h-[48%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.78),rgba(255,255,255,0.42)_58%,rgba(255,255,255,0)_100%)] blur-xl pointer-events-none" />

      <div className="absolute inset-0">
        {cards.map((card) => {
          const tier = TIERS[card.tier];
          const isDesktop = card.id.startsWith("desktop");
          return (
            <motion.div
              key={card.id}
              initial={{
                x: `${card.x}%`,
                y: `${card.y}%`,
                rotate: card.rotation,
              }}
              animate={
                isPaused
                  ? {
                      x: `${card.x}%`,
                      y: `${card.y}%`,
                      rotate: card.rotation,
                    }
                  : {
                      x: [`${card.x}%`, `${card.x + card.driftX / 10}%`, `${card.x}%`],
                      y: [`${card.y}%`, `${card.y + card.driftY / 10}%`, `${card.y}%`],
                      rotate: [card.rotation, card.rotation + card.driftRotate, card.rotation],
                    }
              }
              transition={{
                duration: tier.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: card.delay,
              }}
              className={[
                "absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-[1.4rem] md:rounded-[1.6rem] overflow-hidden border border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.08)] will-change-transform",
                tier.size,
                tier.opacity,
                tier.blur,
                tier.z,
                isDesktop ? "hidden md:block" : "block md:hidden",
              ].join(" ")}
            >
              <img src={card.src} alt={card.caption} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(0,0,0,0.02)_100%)]" />
            </motion.div>
          );
        })}
      </div>

      <div className="absolute inset-x-0 top-4 z-30 hidden md:flex items-center justify-center pointer-events-none">
        <div className="rounded-full border border-white/70 bg-white/50 px-4 py-1.5 backdrop-blur-md shadow-sm">
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-mace-crimson)]/70">
            Dream with us.
          </span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-30 h-24 bg-[linear-gradient(180deg,rgba(246,243,239,0)_0%,rgba(246,243,239,0.9)_70%,rgba(246,243,239,1)_100%)] pointer-events-none" />
    </div>
  );
}
