import React from "react";
import { Camera } from "lucide-react";

interface ContributeSectionProps {
  // We pass the OneDrive link as a prop so the component stays reusable
  uploadLink?: string; 
}

export default function ContributeSection({ uploadLink = "#" }: ContributeSectionProps) {
  return (
    <section className="w-full max-w-[1140px] mx-auto px-6 mt-24 mb-12">
      <div className="relative w-full overflow-hidden rounded-[2rem] border border-[var(--color-mace-gold)]/30 bg-gradient-to-br from-[var(--color-mace-gold)]/10 to-[var(--surface-soft)] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-sm">
        
        {/* Background glow */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-[var(--color-mace-gold)] opacity-20 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-xl">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-[var(--color-mace-crimson)] mb-4">
            Have a memory to add?
          </h2>
          <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed">
            The archive is always growing. If you have photos from the golden days, mini-reunions, or life updates, drop them in our secure vault. We manually curate and add them to the gallery.
          </p>
        </div>

        <div className="relative z-10 shrink-0">
          <a 
            href={uploadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-mace-crimson)] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-[0_8px_20px_rgba(116,12,8,0.2)] hover:bg-[#8a100a] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(116,12,8,0.3)] transition-all duration-300"
          >
            <Camera className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Open the Vault
          </a>
        </div>
      </div>
    </section>
  );
}
