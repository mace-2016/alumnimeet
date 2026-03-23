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
  { top: '10%', left: '5%', rotate: '-rotate-12', type: 'tshirt', size: 'w-48' },
  { top: '60%', left: '10%', rotate: 'rotate-6', type: 'mug', size: 'w-32' },
  { top: '20%', right: '10%', rotate: 'rotate-12', type: 'tote', size: 'w-40' },
  { bottom: '10%', right: '15%', rotate: '-rotate-6', type: 'cap', size: 'w-36' },
];

const FloatingMerch = ({ currentText }: { currentText: string }) => {
  const displayText = currentText.trim() === "" ? "The Grand Return" : currentText;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-40 hidden md:block">
      {MERCH_POSITIONS.map((pos, index) => (
        <div 
          key={index}
          className={`absolute ${pos.rotate} ${pos.size} transition-all duration-300 ease-out`}
          style={{ top: pos.top, left: pos.left, right: pos.right, bottom: pos.bottom }}
        >
          {pos.type === 'tshirt' && (
             <div className="relative w-full aspect-square bg-slate-200 rounded-2xl shadow-sm flex items-center justify-center border border-slate-300">
               <span className="text-xs text-slate-400 absolute top-2">T-Shirt Print</span>
               <div className="w-3/4 text-center font-serif font-bold text-[#1f295a] text-lg leading-tight break-words">
                  {displayText}
               </div>
             </div>
          )}
          {pos.type === 'mug' && (
             <div className="relative w-full aspect-square bg-white rounded-lg shadow-md flex items-center justify-center border-l-8 border-slate-300">
                <div className="w-2/3 text-center font-serif font-bold text-amber-600 text-sm leading-tight break-words">
                  {displayText}
               </div>
             </div>
          )}
          {pos.type === 'tote' && (
             <div className="relative w-full aspect-[3/4] bg-[#fdfbf7] rounded-sm shadow-sm flex items-center justify-center border-2 border-slate-200 border-t-8">
                <div className="w-4/5 text-center font-serif font-black text-[#1f295a] text-xl uppercase tracking-tighter break-words">
                  {displayText}
               </div>
             </div>
          )}
          {pos.type === 'cap' && (
             <div className="relative w-full aspect-[2/1] bg-navy-900 bg-[#1f295a] rounded-t-full shadow-sm flex items-end justify-center pb-2">
                <div className="w-1/2 text-center font-sans font-bold text-white text-[10px] leading-tight break-words">
                  {displayText}
               </div>
             </div>
          )}
        </div>
      ))}
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
    <div className="relative min-h-screen flex items-center justify-center p-0 sm:p-6 lg:p-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero.jpg')" }}>
      {/* Immersive Overlay */}
      <div className="absolute inset-0 bg-[#1f295a]/65 backdrop-blur-[2px]"></div>

      {/* NEW: The Floating Merch Background Component */}
      <FloatingMerch currentText={eventName} />

      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 bg-white/95 backdrop-blur-md overflow-hidden sm:rounded-[2rem] shadow-2xl border border-white/20">
        
        {/* Header Section: Compact on mobile, sidebar on desktop */}
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

        {/* Form Section: Fluid padding for mobile comfort */}
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
