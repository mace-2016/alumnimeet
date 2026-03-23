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

// NEW: Dynamic Stage Banner Component
const StageBanner = ({ currentText }: { currentText: string }) => {
  const displayText = currentText.trim() === "" ? "The Grand Return" : currentText;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative z-20 -mb-6 sm:-mb-12 mt-4 sm:mt-8">
      <style>{`
        @keyframes gentleSway {
          0% { transform: rotateX(2deg) rotateY(0deg) translateY(0); }
          50% { transform: rotateX(-1deg) rotateY(1deg) translateY(-2px); }
          100% { transform: rotateX(2deg) rotateY(0deg) translateY(0); }
        }
        .banner-sway {
          animation: gentleSway 6s ease-in-out infinite;
          transform-origin: top center;
        }
      `}</style>

      {/* Ropes/Cables hanging from the "ceiling" */}
      <div className="absolute -top-12 left-[15%] w-[2px] h-16 bg-gradient-to-b from-transparent to-slate-400 z-10"></div>
      <div className="absolute -top-12 right-[15%] w-[2px] h-16 bg-gradient-to-b from-transparent to-slate-400 z-10"></div>

      {/* The Banner Itself */}
      <div className="banner-sway relative w-full bg-[#fdfbf7] rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border-t border-b border-white overflow-hidden flex items-center justify-center min-h-[140px] md:min-h-[220px]">
        
        {/* Grommets (Metal eyelets) */}
        <div className="absolute top-3 left-[15%] -translate-x-1/2 w-4 h-4 rounded-full bg-slate-200 border-2 border-slate-400 shadow-inner z-20"></div>
        <div className="absolute top-3 right-[15%] translate-x-1/2 w-4 h-4 rounded-full bg-slate-200 border-2 border-slate-400 shadow-inner z-20"></div>

        {/* Ambient Stage Lighting & Fabric Folds */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.9)_0%,_transparent_70%)] pointer-events-none z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10 pointer-events-none z-10"></div>

        {/* Dynamic Text */}
        <div className="relative z-20 w-10/12 text-center py-8">
          <h2 
            className="font-serif font-black text-[#1f295a] text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight mix-blend-multiply opacity-90 break-words drop-shadow-sm transition-all duration-200"
            style={{ 
              textShadow: "0px 2px 4px rgba(255,255,255,0.8)" 
            }}
          >
            {displayText}
          </h2>
        </div>
      </div>
    </div>
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
    <div className="relative min-h-screen flex flex-col items-center justify-center p-0 sm:p-6 lg:p-10 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/hero.jpg')" }}>
      {/* Immersive Dark Overlay */}
      <div className="absolute inset-0 bg-[#151c3d]/80 backdrop-blur-sm z-0"></div>

      {/* NEW: The hanging stage banner sitting above the form */}
      <StageBanner currentText={eventName} />

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 bg-white/95 backdrop-blur-xl overflow-hidden sm:rounded-[2rem] shadow-2xl border border-white/20 mt-8">
        
        {/* Header Section */}
        <div className="lg:col-span-4 bg-gradient-to-br from-[#1f295a] to-[#151c3d] p-6 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
          {/* Subtle background decoration inside the dark panel */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[10px] font-semibold uppercase tracking-[0.3em] mb-6 md:mb-10">
              <Sparkles className="w-3.5 h-3.5" /> Decennial
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-4 md:mb-6 tracking-tight">
              Journey Back <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 italic font-light">to 2016</span>
            </h1>
            <p className="hidden sm:block text-slate-300 text-sm font-light leading-relaxed opacity-90 mb-0 md:mb-10">
              Reminisce together & re-live a legacy of memories. <br className="hidden lg:block mt-2" />
              മലയാളത്തിലും പേരുകൾ നിർദ്ദേശിക്കാം.
            </p>
          </div>

          <div className="hidden lg:grid grid-cols-1 gap-6 pt-10 border-t border-white/10 mt-6 relative z-10">
            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-amber-400/10 transition-colors">
                <Calendar className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-1">Commences</p>
                <p className="text-sm font-medium tracking-wide">Dec 19, 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-amber-400/10 transition-colors">
                <MapPin className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-1">Location</p>
                <p className="text-sm font-medium tracking-wide">The Cherished OAT</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:col-span-8 p-6 md:p-16 bg-white">
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-[#1f295a] mb-3">Idea Submitted!</h2>
              <p className="text-slate-500 text-base max-w-sm mx-auto mb-10 leading-relaxed">
                Thank you for contributing. We'll review your suggestion for the grand return.
              </p>
              <Link href="/" className="inline-flex items-center gap-3 bg-[#1f295a] text-white px-10 py-4 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] shadow-[0_10px_20px_-10px_rgba(31,41,90,0.5)] hover:bg-amber-500 hover:shadow-[0_10px_20px_-10px_rgba(245,158,11,0.5)] transition-all active:scale-95">
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
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${
                    lang === "ml" 
                    ? "bg-amber-400 border-amber-400 text-[#1f295a] shadow-[0_8px_16px_-6px_rgba(251,191,36,0.5)]" 
                    : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  <Languages className="w-3.5 h-3.5" />
                  {lang === "ml" ? "English Mode" : "Malayalam Mode"}
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Proposed Title *</label>
                  <div className="relative group">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-full flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-amber-500 opacity-50 group-focus-within:opacity-100 transition-opacity" />
                    </div>
                    <ReactTransliterate
                      renderComponent={(props) => (
                        <input {...props} required className="w-full pl-12 py-4 border-b-2 border-slate-100 focus:border-[#1f295a] outline-none text-[#1f295a] font-serif text-2xl md:text-3xl transition-colors placeholder:text-slate-200 bg-transparent" placeholder={lang === "ml" ? "മലയാളത്തിൽ..." : "The Grand Return"} />
                      )}
                      value={eventName}
                      onChangeText={(text) => setEventName(text)}
                      lang={lang as any} 
                      enabled={lang === "ml"}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pt-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Your Name *</label>
                    <input required type="text" value={submitterName} onChange={(e) => setSubmitterName(e.target.value)} className="w-full px-1 py-3 border-b-2 border-slate-100 focus:border-[#1f295a] outline-none text-sm font-medium transition-colors bg-transparent" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Branch *</label>
                    <select required value={classYear} onChange={(e) => setClassYear(e.target.value)} className="w-full px-1 py-3 border-b-2 border-slate-100 focus:border-[#1f295a] outline-none text-sm font-medium bg-transparent appearance-none transition-colors cursor-pointer">
                      <option value="" disabled>Select Branch</option>
                      <option value="Mech A">Mechanical A</option><option value="Mech B">Mechanical B</option>
                      <option value="EEE A">EEE A</option><option value="EEE B">EEE B</option>
                      <option value="EC">Electronics</option><option value="CS">Computer Science</option>
                      <option value="Civil A">Civil A</option><option value="Civil B">Civil B</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">WhatsApp Number *</label>
                    <div className="border-b-2 border-slate-100 focus-within:border-[#1f295a] transition-colors pt-2 pb-1 px-1">
                      <PhoneInput defaultCountry="in" value={phone} onChange={(val) => setPhone(val)} inputClassName="!w-full !border-0 !text-sm !font-medium !h-8 !bg-transparent !outline-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Email (Optional)</label>
                    <input type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)} className="w-full px-1 py-3 border-b-2 border-slate-100 focus:border-[#1f295a] outline-none text-sm font-medium transition-colors bg-transparent placeholder:text-slate-300" placeholder="name@mace.ac.in" />
                  </div>
                </div>

                <div className="pt-8 flex justify-end">
                  <button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto flex justify-center items-center gap-3 px-10 py-4 rounded-full font-bold text-white bg-[#1f295a] shadow-[0_10px_20px_-10px_rgba(31,41,90,0.5)] hover:bg-amber-500 hover:shadow-[0_10px_20px_-10px_rgba(245,158,11,0.5)] transition-all active:scale-[0.98] disabled:opacity-50 uppercase tracking-[0.2em] text-[11px]">
                    {status === "submitting" ? <Loader2 className="animate-spin h-5 w-5" /> : <>Submit Idea <Send className="w-4 h-4" /></>}
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
