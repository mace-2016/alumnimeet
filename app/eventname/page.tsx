"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { ReactTransliterate } from "react-transliterate";
import "react-transliterate/dist/index.css";

import {
  Sparkles,
  Send,
  CheckCircle,
  Loader2,
  Home,
  MapPin,
  Calendar,
  Languages,
} from "lucide-react";

const MERCH_POSITIONS = [
  { top: '8%', left: '4%', rot: '-12deg', type: 'tshirt', size: 'w-56', delay: '0s', duration: '6s' },
  { top: '55%', left: '8%', rot: '8deg', type: 'mug', size: 'w-40', delay: '1.5s', duration: '7s' },
  { top: '15%', right: '6%', rot: '12deg', type: 'tote', size: 'w-48', delay: '0.7s', duration: '6.5s' },
  { bottom: '12%', right: '10%', rot: '-8deg', type: 'cap', size: 'w-44', delay: '2s', duration: '5.5s' },
];

const FloatingMerch = ({ currentText }: { currentText: string }) => {
  const displayText = currentText.trim() === "" ? "The Grand Return" : currentText;

  return (
    <>
      {/* Global styles for the organic floating animation */}
      <style>{`
        @keyframes organicFloat {
          0% { transform: translateY(0px) rotate(var(--rot)); }
          50% { transform: translateY(-15px) rotate(calc(var(--rot) + 3deg)); }
          100% { transform: translateY(0px) rotate(var(--rot)); }
        }
        .merch-item {
          animation: organicFloat var(--dur) ease-in-out infinite;
          animation-delay: var(--del);
        }
      `}</style>

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-90 hidden xl:block">
        {MERCH_POSITIONS.map((pos, index) => (
          <div 
            key={index}
            className="absolute merch-item drop-shadow-2xl transition-all"
            style={{ 
              top: pos.top, left: pos.left, right: pos.right, bottom: pos.bottom,
              '--rot': pos.rot, '--del': pos.delay, '--dur': pos.duration 
            } as React.CSSProperties}
          >
            {/* 1. T-SHIRT */}
            {pos.type === 'tshirt' && (
               <div className={`${pos.size} relative flex flex-col items-center`}>
                 {/* Sleeves */}
                 <div className="absolute top-6 -left-4 w-12 h-16 bg-gradient-to-br from-white to-slate-100 rounded-l-3xl shadow-inner -rotate-12"></div>
                 <div className="absolute top-6 -right-4 w-12 h-16 bg-gradient-to-bl from-white to-slate-100 rounded-r-3xl shadow-inner rotate-12"></div>
                 {/* Main Body */}
                 <div className="relative z-10 w-full aspect-[4/5] bg-gradient-to-b from-white via-slate-50 to-slate-100 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border border-white/60 flex flex-col items-center pt-10 overflow-hidden">
                   {/* Neck Cutout */}
                   <div className="absolute -top-6 w-20 h-14 bg-transparent shadow-[0_10px_0_0_rgba(255,255,255,1)] border-b border-black/5 rounded-b-full"></div>
                   {/* Text printed on shirt */}
                   <div className="w-3/4 text-center mt-6 font-serif font-bold text-slate-800 text-xl leading-tight break-words mix-blend-multiply opacity-80">
                      {displayText}
                   </div>
                 </div>
               </div>
            )}

            {/* 2. MUG */}
            {pos.type === 'mug' && (
               <div className={`${pos.size} relative`}>
                 {/* Mug Handle */}
                 <div className="absolute top-1/2 -right-6 w-12 h-16 -translate-y-1/2 border-[8px] border-white rounded-r-full shadow-lg"></div>
                 {/* Mug Body */}
                 <div className="relative z-10 w-full aspect-square bg-gradient-to-br from-white via-slate-50 to-slate-200 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border border-white flex flex-col items-center justify-center p-4">
                    {/* Inner Rim */}
                    <div className="absolute top-0 w-full h-5 bg-gradient-to-b from-slate-200 to-slate-100 rounded-t-2xl shadow-inner border-b border-black/5"></div>
                    {/* Printed Text */}
                    <div className="w-4/5 text-center font-serif font-black text-amber-600 text-base leading-tight break-words mix-blend-multiply mt-2 rotate-[-4deg]">
                      {displayText}
                   </div>
                 </div>
               </div>
            )}

            {/* 3. TOTE BAG */}
            {pos.type === 'tote' && (
               <div className={`${pos.size} relative mt-10`}>
                 {/* Handles */}
                 <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-16 border-t-[6px] border-x-[6px] border-[#d4c5b0] rounded-t-full shadow-sm"></div>
                 <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-16 border-t-[6px] border-x-[6px] border-[#e8ddcb] rounded-t-full -z-10 opacity-70"></div>
                 {/* Tote Body */}
                 <div className="relative z-10 w-full aspect-[3/4] bg-[#fdfaf5] rounded-b-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white/50 flex items-center justify-center overflow-hidden">
                    {/* Fabric Texture/Lighting Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent"></div>
                    {/* Printed Text */}
                    <div className="relative z-20 w-4/5 text-center font-serif font-bold text-[#1f295a] text-2xl uppercase tracking-tighter break-words mix-blend-multiply opacity-90">
                      {displayText}
                   </div>
                 </div>
               </div>
            )}

            {/* 4. CAP */}
            {pos.type === 'cap' && (
               <div className={`${pos.size} relative flex flex-col justify-end pb-4`}>
                 {/* Crown */}
                 <div className="relative z-10 w-4/5 aspect-[4/3] bg-gradient-to-br from-[#2a3775] to-[#151c3d] mx-auto rounded-t-full shadow-xl border-t border-white/20 flex flex-col items-center justify-end pb-3">
                    {/* Top Button */}
                    <div className="absolute -top-2 w-4 h-3 bg-[#151c3d] rounded-t-full"></div>
                    {/* Front Seam */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-black/10"></div>
                    {/* Embroidered Text */}
                    <div className="relative z-20 w-3/4 text-center font-sans font-bold text-white text-[11px] leading-tight break-words drop-shadow-md">
                      {displayText}
                   </div>
                 </div>
                 {/* Brim */}
                 <div className="absolute bottom-2 left-0 w-full h-8 bg-[#0f142b] rounded-full shadow-[0_20px_25px_-5px_rgba(0,0,0,0.6)] z-0 transform translate-y-2 border-t border-white/10"></div>
               </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default function EventNamePage() {
  const [eventName, setEventName] = useState("");
  const [submitterName, setSubmitterName] = useState("");
  const [phone, setPhone] = useState("");
  const [emailId, setEmailId] = useState("");
  const [classYear, setClassYear] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [lang, setLang] = useState<"en" | "ml">("en");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!phone || phone.replace(/\D/g, "").length < 8) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const GOOGLE_FORM_ACTION_URL =
      "https://docs.google.com/forms/d/e/1FAIpQLSfnoLHOkLXWmxgspb4-te3c5UqdgieNhXUjEgRmKLBnm9FCwA/formResponse";

    const formData = new FormData();
    formData.append("entry.1424149438", eventName);
    formData.append("entry.520789514", submitterName);
    formData.append("entry.1669338403", phone);
    formData.append("entry.797828323", classYear);

    if (emailId.trim()) {
      formData.append("entry.1841428817", emailId.trim());
    }

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-0 sm:p-6 lg:p-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero.jpg')" }}>
      {/* Immersive Overlay */}
      <div className="absolute inset-0 bg-[#1f295a]/65 backdrop-blur-[2px]"></div>

      {/* NEW: Premium Floating Merch Component */}
      <FloatingMerch currentText={eventName} />

      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 bg-white/95 backdrop-blur-md overflow-hidden sm:rounded-[2rem] shadow-2xl border border-white/20">
        
        {/* Header Section */}
        <div className="lg:col-span-4 bg-[#1f295a]/90 p-6 md:p-12 text-white flex flex-col justify-center">
          <div className="animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[9px] font-semibold uppercase tracking-[0.3em] mb-4 md:mb-8">
              <Sparkles className="w-3 h-3" /> Decennial
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-3 md:mb-6 tracking-tight">
              Journey Back <br className="hidden md:block" />
              <span className="text-amber-400 italic font-light">to 2016</span>
            </h1>
            <p className="hidden sm:block text-slate-300 text-sm font-light leading-relaxed opacity-80 mb-0 md:mb-10">
              Reminisce together & re-live a legacy of memories. <br className="hidden lg:block" />
              മലയാളത്തിലും പേരുകൾ നിർദ്ദേശിക്കാം.
            </p>
          </div>

          <div className="hidden lg:grid grid-cols-1 gap-6 pt-10 border-t border-white/10 mt-6">
            <div className="flex items-center gap-4">
              <Calendar className="w-5 h-5 text-amber-500" />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Commences</p>
                <p className="text-xs font-medium">Dec 19, 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-amber-500" />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Location</p>
                <p className="text-xs font-medium">The Cherished OAT</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:col-span-8 p-6 md:p-16 bg-white">
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in zoom-in duration-500">
              <CheckCircle className="w-16 h-16 text-green-500 mb-6" />
              <h2 className="text-3xl font-serif font-bold text-[#1f295a] mb-2">Success!</h2>
              <p className="text-slate-500 text-sm max-w-xs mx-auto mb-10 leading-relaxed">
                Thank you! Your suggestion has been recorded.
              </p>
              <Link href="/" className="inline-flex items-center gap-3 bg-[#1f295a] text-white px-10 py-4 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] shadow-xl hover:bg-amber-500 transition-all active:scale-95">
                <Home className="w-4 h-4" /> Return Home
              </Link>
            </div>
          ) : (
            <div className="max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10 md:mb-12">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-[#1f295a]">Title Naming</h2>
                  <p className="text-[11px] text-slate-400 uppercase tracking-[0.2em] font-medium mt-1">What should we call our homecoming?</p>
                </div>
                
                <button 
                  type="button" 
                  onClick={() => setLang(lang === "en" ? "ml" : "en")}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-semibold uppercase tracking-widest transition-all border ${
                    lang === "ml" 
                    ? "bg-amber-400 border-amber-400 text-[#1f295a] shadow-lg shadow-amber-100" 
                    : "bg-slate-50 border-slate-200 text-slate-500"
                  }`}
                >
                  <Languages className="w-3.5 h-3.5" />
                  {lang === "ml" ? "English Mode" : "Malayalam Mode"}
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.2em] ml-1">Proposed Title *</label>
                  <div className="relative">
                    <Sparkles className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-5 text-amber-500 z-10 opacity-30" />
                    <ReactTransliterate
                      renderComponent={(props) => (
                        <input {...props} required className="w-full pl-9 py-4 border-b border-slate-200 focus:border-[#1f295a] outline-none text-[#1f295a] font-serif text-2xl md:text-3xl transition-all placeholder:text-slate-100 bg-transparent" placeholder={lang === "ml" ? "മലയാളത്തിൽ..." : "The Grand Return"} />
                      )}
                      value={eventName}
                      onChangeText={(text) => setEventName(text)}
                      lang={lang as any} 
                      enabled={lang === "ml"}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.2em]">Your Name *</label>
                    <input required type="text" value={submitterName} onChange={(e) => setSubmitterName(e.target.value)} className="w-full py-2 border-b border-slate-100 focus:border-[#1f295a] outline-none text-sm font-medium transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.2em]">Branch *</label>
                    <select required value={classYear} onChange={(e) => setClassYear(e.target.value)} className="w-full py-2 border-b border-slate-100 focus:border-[#1f295a] outline-none text-sm font-medium bg-transparent appearance-none">
                      <option value="" disabled>Select Branch</option>
                      <option value="Mech A">Mechanical A</option><option value="Mech B">Mechanical B</option>
                      <option value="EEE A">EEE A</option><option value="EEE B">EEE B</option>
                      <option value="EC">Electronics</option><option value="CS">Computer Science</option>
                      <option value="Civil A">Civil A</option><option value="Civil B">Civil B</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.2em]">WhatsApp Number *</label>
                    <div className="border-b border-slate-100 focus-within:border-[#1f295a] transition-all pt-1">
                      <PhoneInput defaultCountry="in" value={phone} onChange={(val) => setPhone(val)} inputClassName="!w-full !border-0 !text-sm !font-medium !h-10 !bg-transparent" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.2em]">Email (Optional)</label>
                    <input type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)} className="w-full py-2 border-b border-slate-100 focus:border-[#1f295a] outline-none text-sm font-medium transition-all" placeholder="name@mace.ac.in" />
                  </div>
                </div>

                <div className="pt-6">
                  <button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto flex justify-center items-center gap-3 px-12 py-5 rounded-full font-bold text-white bg-[#1f295a] hover:bg-amber-500 shadow-xl transition-all active:scale-[0.98] disabled:opacity-50 uppercase tracking-[0.3em] text-[10px]">
                    {status === "submitting" ? <Loader2 className="animate-spin h-5 w-5" /> : <>Submit Idea <Send className="w-3.5 h-3.5" /></>}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
