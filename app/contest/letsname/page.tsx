"use client";

import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { ReactTransliterate } from "react-transliterate";
import "react-transliterate/dist/index.css";

import {
  Sparkles,
  Send,
  CheckCircle,
  Loader2,
  MapPin,
  Calendar,
  Languages,
  ArrowRight,
  ArrowLeft,
  Trophy,
  Lock,
  Gift,
} from "lucide-react";

export default function EventNamePage() {
  const [step, setStep] = useState(1);
  const [eventName, setEventName] = useState("");
  const [submitterName, setSubmitterName] = useState("");
  const [phone, setPhone] = useState("");
  const [emailId, setEmailId] = useState("");
  const [classYear, setClassYear] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [lang, setLang] = useState<"en" | "ml">("en");

  const handleNext = () => {
    if (eventName.trim()) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

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
    <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/hero.jpg')" }}>
      {/* Immersive Dark Overlay */}
      <div className="absolute inset-0 bg-[#151c3d]/80 backdrop-blur-sm z-0"></div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 bg-white/95 backdrop-blur-xl overflow-hidden rounded-3xl sm:rounded-[2rem] shadow-2xl border border-white/20">
        
        {/* Header Section */}
        <div className="lg:col-span-4 bg-gradient-to-br from-[#1f295a] to-[#151c3d] p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[10px] font-semibold uppercase tracking-[0.3em] mb-6 md:mb-10">
              <Trophy className="w-3.5 h-3.5" /> Contest #01 • Naming
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-4 md:mb-6 tracking-tight">
              Journey Back <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 italic font-light">to 2016</span>
            </h1>
            <p className="hidden sm:block text-slate-300 text-sm font-light leading-relaxed opacity-90 mb-6">
              Submit the winning title and cement your legacy. The countdown to our grand return begins here.
            </p>

            {/* "The Bounty" Rewards Callout */}
            <div className="hidden sm:flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-0 md:mb-4">
              <div className="p-2.5 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-400/20 shadow-[0_0_15px_rgba(251,191,36,0.15)] flex-shrink-0">
                <Gift className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-amber-400 font-bold mb-1">The Bounty</p>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  The selected entry unlocks <span className="text-white font-medium">exclusive rewards</span> and special VIP recognition at the homecoming.
                </p>
              </div>
            </div>
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
        <div className="lg:col-span-8 p-6 md:p-16 bg-white flex flex-col justify-center overflow-hidden">
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-[#1f295a] mb-3">Entry Confirmed!</h2>
              <p className="text-slate-500 text-base max-w-sm mx-auto mb-10 leading-relaxed">
                Your title is in the running. Once submissions close, the top 5 names will face off in a final community poll!
              </p>
              <button onClick={() => { setStatus("idle"); setStep(1); setEventName(""); }} className="inline-flex items-center gap-3 bg-[#1f295a] text-white px-10 py-4 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] shadow-[0_10px_20px_-10px_rgba(31,41,90,0.5)] hover:bg-amber-500 hover:shadow-[0_10px_20px_-10px_rgba(245,158,11,0.5)] transition-all active:scale-95">
                <Sparkles className="w-4 h-4" /> Submit Another Idea
              </button>
            </div>
          ) : (
            <div className="max-w-xl mx-auto lg:mx-0 w-full relative">
              <form onSubmit={handleSubmit}>
                
                {/* STEP 1: EVENT NAME */}
                {step === 1 && (
                  <div className="animate-in fade-in slide-in-from-right-8 duration-500 space-y-8">
                    
                    {/* Header area with Phase Timeline */}
                    <div className="mb-8">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <div>
                          <h2 className="text-2xl font-serif font-bold text-[#1f295a]">Contest 01: The Naming</h2>
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

                      {/* Phase Indicator */}
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100 inline-flex">
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#1f295a]">
                          <span className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center text-white">1</span>
                          Idea Submissions
                        </div>
                        <div className="w-4 h-[1px] bg-slate-300"></div>
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          <Lock className="w-3 h-3" />
                          Community Poll
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1 leading-tight">
                        Your Official Entry *
                        <span className="hidden lg:block normal-case tracking-normal text-[10px] text-slate-500 mt-1">
                          മലയാളത്തിലും പേരുകൾ നിർദ്ദേശിക്കാം.
                        </span>
                      </label>
                      <div className="relative group">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-full flex items-center justify-center">
                          <Trophy className="h-5 w-5 text-amber-500 opacity-50 group-focus-within:opacity-100 transition-opacity" />
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

                    <div className="pt-8 flex justify-end">
                      <button 
                        type="button" 
                        onClick={handleNext} 
                        disabled={!eventName.trim()} 
                        className="w-full sm:w-auto flex justify-center items-center gap-3 px-10 py-4 rounded-full font-bold text-white bg-amber-500 shadow-[0_10px_20px_-10px_rgba(31,41,90,0.5)] hover:bg-[#1f295a] hover:shadow-[0_10px_20px_-10px_rgba(245,158,11,0.5)] transition-all active:scale-[0.98] disabled:opacity-50 disabled:hover:bg-amber-500 uppercase tracking-[0.2em] text-[11px]"
                      >
                        Next Step <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: PERSONAL DETAILS */}
                {step === 2 && (
                  <div className="animate-in fade-in slide-in-from-right-8 duration-500 space-y-8">
                     <div className="mb-8 md:mb-10">
                        <h2 className="text-2xl font-serif font-bold text-[#1f295a]">Your Details</h2>
                        <p className="text-[11px] text-slate-400 uppercase tracking-[0.2em] font-medium mt-1">So we know who to credit if you win!</p>
                      </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Your Name *</label>
                        <input required type="text" value={submitterName} onChange={(e) => setSubmitterName(e.target.value)} className="w-full px-1 py-3 border-b-2 border-slate-100 focus:border-[#1f295a] outline-none text-sm font-medium transition-colors bg-transparent" placeholder="John Doe" />
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

                    <div className="pt-8 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
                      <button 
                        type="button" 
                        onClick={handleBack}
                        className="text-slate-400 hover:text-[#1f295a] flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors py-2"
                      >
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto flex justify-center items-center gap-3 px-10 py-4 rounded-full font-bold text-white bg-[#1f295a] shadow-[0_10px_20px_-10px_rgba(31,41,90,0.5)] hover:bg-amber-500 hover:shadow-[0_10px_20px_-10px_rgba(245,158,11,0.5)] transition-all active:scale-[0.98] disabled:opacity-50 uppercase tracking-[0.2em] text-[11px]">
                        {status === "submitting" ? <Loader2 className="animate-spin h-5 w-5" /> : <>Lock Entry <Send className="w-4 h-4" /></>}
                      </button>
                    </div>
                  </div>
                )}

              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
