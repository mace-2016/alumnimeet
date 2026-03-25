"use client";

import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { ReactTransliterate } from "react-transliterate";
import "react-transliterate/dist/index.css";
import Link from "next/link"; // Ensure Link is imported

import {
  Sparkles,
  Send,
  CheckCircle,
  Loader2,
  Languages,
  ArrowRight,
  ArrowLeft,
  Trophy,
  Lock,
  Gift,
  Home // Added Home icon for the success state return
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
    <div className="relative min-h-[calc(100vh-100px)] w-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      
      {/* Immersive Background matching the rest of the app */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/hero.jpg')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#151c3d]/90 via-[#1f295a]/95 to-[#151c3d]/95 backdrop-blur-[2px] z-0" />

      {/* Main Glassmorphism Card */}
      <main className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        
        <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-[0_0_50px_rgba(31,41,90,0.5)] overflow-hidden">
          
          <div className="p-8 md:p-12">
            
            {status === "success" ? (
              // --- SUCCESS STATE ---
              <div className="flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-600/20 border border-green-400/30 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(74,222,128,0.2)]">
                  <CheckCircle className="w-12 h-12 text-green-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Entry Locked!</h2>
                <p className="text-slate-300 text-base max-w-md mx-auto mb-10 leading-relaxed font-light">
                  Your title is officially in the running. Once submissions close, the top 5 names will face off in a community poll.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                   <button 
                    onClick={() => { setStatus("idle"); setStep(1); setEventName(""); }} 
                    className="inline-flex items-center justify-center gap-3 bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white/20 transition-all active:scale-95"
                  >
                    <Sparkles className="w-4 h-4" /> Another Idea
                  </button>
                  <Link 
                    href="/contest" 
                    className="inline-flex items-center justify-center gap-3 bg-amber-500 text-[#1f295a] px-8 py-3.5 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:bg-amber-400 transition-all active:scale-95"
                  >
                    <Home className="w-4 h-4" /> Back to Contests
                  </Link>
                </div>
              </div>
            ) : (
              // --- FORM STATE ---
              <div className="relative">
                
                {/* Global Header inside the card */}
                <div className="text-center mb-10 border-b border-white/10 pb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[10px] font-semibold uppercase tracking-[0.3em] mb-4">
                    <Trophy className="w-3.5 h-3.5" /> Contest #01
                  </div>
                  <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
                    Name the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 italic font-light">Return</span>
                  </h1>
                  
                  {/* The Bounty Inline */}
                  <div className="inline-flex items-center gap-3 p-3 rounded-2xl bg-[#151c3d]/50 border border-white/5 mt-2">
                    <Gift className="w-4 h-4 text-amber-400" />
                    <p className="text-xs text-slate-300 font-light">
                      <span className="text-white font-medium">Exclusive Rewards</span>Await.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  
                  {/* STEP 1: EVENT NAME */}
                  {step === 1 && (
                    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                      
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
                         {/* Phase Indicator */}
                        <div className="flex items-center gap-3 p-2.5 bg-[#151c3d]/40 rounded-full border border-white/10">
                          <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-amber-400 px-2">
                            <span className="w-4 h-4 rounded-full bg-amber-400/20 flex items-center justify-center">1</span>
                            Idea
                          </div>
                          <div className="w-4 h-px bg-slate-600"></div>
                          <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-slate-500 pr-2">
                            <Lock className="w-3 h-3" /> Poll
                          </div>
                        </div>
                        
                        {/* Language Toggle */}
                        <button 
                          type="button" 
                          onClick={() => setLang(lang === "en" ? "ml" : "en")}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all border ${
                            lang === "ml" 
                            ? "bg-amber-400/10 border-amber-400/30 text-amber-400" 
                            : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <Languages className="w-3.5 h-3.5" />
                          {lang === "ml" ? "English" : "മലയാളം"}
                        </button>
                      </div>

                      <div className="space-y-4">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-2 block">
                          Your Official Entry <span className="text-amber-500">*</span>
                        </label>
                     <div className="relative group">
  {/* Added z-10 and pointer-events-none so it sits above the white background and doesn't block clicks */}
  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-full flex items-center justify-center z-10 pointer-events-none">
    {/* Slate when resting, solid vibrant amber when focused */}
    <Sparkles className="h-5 w-5 text-slate-400 group-focus-within:text-amber-500 transition-colors" />
  </div>
  
  {/* Clean white wrapper with a soft slate border that turns amber on focus */}
  <div className="bg-white border-2 border-slate-100 focus-within:border-amber-400 rounded-2xl overflow-hidden transition-all shadow-sm">
    <ReactTransliterate
      renderComponent={(props) => (
        <input 
          {...props} 
          required 
          /* Input is now transparent since the wrapper is white */
          className="w-full pl-14 pr-6 py-6 outline-none text-[#1f295a] font-serif text-2xl md:text-3xl bg-transparent placeholder:text-slate-300" 
          placeholder={lang === "ml" ? "മലയാളത്തിൽ..." : "Here goes your brilliance"} 
        />                              
      )}
      value={eventName}
      onChangeText={(text) => setEventName(text)}
      lang={lang as any} 
      enabled={lang === "ml"}
    />
  </div>
</div>
                      </div>

                      <div className="pt-10 flex justify-end">
                        <button 
                          type="button" 
                          onClick={handleNext} 
                          disabled={!eventName.trim()} 
                          className="w-full sm:w-auto flex justify-center items-center gap-3 px-10 py-4 rounded-full font-bold text-[#1f295a] bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:bg-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all active:scale-[0.98] disabled:opacity-30 disabled:hover:bg-amber-500 uppercase tracking-[0.2em] text-[11px]"
                        >
                          Continue <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: PERSONAL DETAILS */}
                  {step === 2 && (
                    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                       <div className="mb-8 text-center">
                          <h2 className="text-2xl font-serif font-bold text-white mb-2">Almost Done</h2>
                          <p className="text-[11px] text-slate-400 uppercase tracking-[0.2em] font-medium">So we know who to credit if you win.</p>
                        </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-2 block">Your Name <span className="text-amber-500">*</span></label>
                          <input required type="text" value={submitterName} onChange={(e) => setSubmitterName(e.target.value)} className="w-full px-5 py-3.5 bg-[#151c3d]/40 border border-white/10 focus:border-amber-400/50 rounded-xl outline-none text-white text-sm font-medium transition-colors placeholder:text-slate-600" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-2 block">Branch <span className="text-amber-500">*</span></label>
                          <select required value={classYear} onChange={(e) => setClassYear(e.target.value)} className="w-full px-5 py-3.5 bg-[#151c3d]/40 border border-white/10 focus:border-amber-400/50 rounded-xl outline-none text-white text-sm font-medium transition-colors appearance-none cursor-pointer">
                            <option value="" disabled className="text-slate-800">Select Branch</option>
                            <option value="Mech A" className="text-slate-800">Mechanical A</option><option value="Mech B" className="text-slate-800">Mechanical B</option>
                            <option value="EEE A" className="text-slate-800">EEE A</option><option value="EEE B" className="text-slate-800">EEE B</option>
                            <option value="EC" className="text-slate-800">Electronics</option><option value="CS" className="text-slate-800">Computer Science</option>
                            <option value="Civil A" className="text-slate-800">Civil A</option><option value="Civil B" className="text-slate-800">Civil B</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-2 block">WhatsApp <span className="text-amber-500">*</span></label>
                          <div className="bg-[#151c3d]/40 border border-white/10 focus-within:border-amber-400/50 rounded-xl px-4 py-2 transition-colors">
                            {/* NOTE: You may need to target internal classes of PhoneInput in globals.css to ensure text is white */}
                            <PhoneInput defaultCountry="in" value={phone} onChange={(val) => setPhone(val)} inputClassName="!w-full !border-0 !text-sm !font-medium !h-9 !bg-transparent !text-white !outline-none" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-2 block">Email (Optional)</label>
                          <input type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)} className="w-full px-5 py-3.5 bg-[#151c3d]/40 border border-white/10 focus:border-amber-400/50 rounded-xl outline-none text-white text-sm font-medium transition-colors placeholder:text-slate-600" placeholder="name@mace.ac.in" />
                        </div>
                      </div>

                      <div className="pt-10 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
                        <button 
                          type="button" 
                          onClick={handleBack}
                          className="text-slate-400 hover:text-white flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors py-3 px-4"
                        >
                          <ArrowLeft className="w-4 h-4" /> Go Back
                        </button>
                        <button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto flex justify-center items-center gap-3 px-10 py-4 rounded-full font-bold text-[#1f295a] bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:bg-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all active:scale-[0.98] disabled:opacity-50 uppercase tracking-[0.2em] text-[11px]">
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
      </main>
    </div>
  );
}
