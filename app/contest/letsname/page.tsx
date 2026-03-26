"use client";

import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { ReactTransliterate } from "react-transliterate";
import "react-transliterate/dist/index.css";
import Link from "next/link";

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
  Home 
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
    <div className="relative min-h-[calc(100vh-100px)] w-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden bg-[var(--background)]">
      
      {/* Immersive Heritage Background */}
      <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-[0.03] grayscale pointer-events-none" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--color-mace-gold),transparent_70%)] opacity-[0.08] blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <main className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        
        {/* The Heritage Plaque (Main Form Card) */}
        <div className="w-full bg-white border border-[var(--border)] rounded-[2.5rem] shadow-[0_20px_60px_rgba(116,12,8,0.04)] overflow-hidden transition-all duration-700">
          
          <div className="p-8 md:p-12">
            
            {status === "success" ? (
              // --- SUCCESS STATE ---
              <div className="flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in-95 duration-500">
                
                {/* Prestigious Seal */}
                <div className="w-24 h-24 bg-[var(--surface-soft)] border border-[var(--border)] rounded-full flex items-center justify-center mb-8 shadow-sm">
                  <div className="w-20 h-20 bg-[var(--color-mace-gold)]/10 border border-[var(--color-mace-gold)]/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-[var(--color-mace-gold)]" strokeWidth={1.5} />
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-mace-crimson)] mb-4 tracking-tight">Entry Locked!</h2>
                <p className="text-[var(--text-muted)] text-base max-w-md mx-auto mb-10 leading-relaxed font-medium">
                  Your title is officially in the running. Once submissions close, the top 5 names will face off in a community poll.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <button 
                    onClick={() => { setStatus("idle"); setStep(1); setEventName(""); }} 
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-3 bg-[var(--surface-soft)] border border-[var(--border)] text-[var(--text-muted)] px-8 py-3.5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:text-[var(--color-mace-crimson)] hover:border-[var(--color-mace-stone)] transition-all active:scale-[0.98]"
                  >
                    <Sparkles className="w-4 h-4 text-[var(--color-mace-gold)]" strokeWidth={1.5} /> Another Idea
                  </button>
                  <Link 
                    href="/contest" 
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-3 bg-[var(--color-mace-rust)] text-white px-8 py-3.5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] shadow-[0_8px_20px_rgba(212,67,33,0.25)] hover:bg-[#b0361a] transition-all active:scale-[0.98]"
                  >
                    Back to Contests <Home className="w-4 h-4" strokeWidth={2} /> 
                  </Link>
                </div>
              </div>

            ) : (
              // --- FORM STATE ---
              <div className="relative">
                
                {/* Global Header inside the card */}
                <div className="text-center mb-10 border-b border-[var(--border)] pb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-mace-gold)]/10 border border-[var(--color-mace-gold)]/20 text-[var(--color-mace-crimson)] text-[10px] font-bold uppercase tracking-[0.25em] mb-6 shadow-sm">
                    <Trophy className="w-3.5 h-3.5 text-[var(--color-mace-gold)]" strokeWidth={2} /> Contest #01
                  </div>
                  <h1 className="text-4xl md:text-6xl font-serif font-bold text-[var(--color-mace-crimson)] mb-4 tracking-tight">
                    Name the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-mace-rust)] to-[var(--color-mace-gold)] italic font-light pr-2">Return</span>
                  </h1>
                  
                  {/* The Bounty Inline */}
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-[var(--surface-soft)] border border-[var(--border)] mt-2">
                    <Gift className="w-4 h-4 text-[var(--color-mace-gold)]" strokeWidth={1.5} />
                    <p className="text-xs text-[var(--text-muted)] font-medium">
                      Winning entry unlocks <span className="text-[var(--color-mace-rust)] font-bold">Exclusive Rewards</span>.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  
                  {/* STEP 1: EVENT NAME */}
                  {step === 1 && (
                    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                      
                      <div className="flex flex-col justify-center sm:flex-row sm:justify-between items-center gap-4 mb-8">
                        {/* Phase Indicator */}
                        <div className="flex items-center gap-3 p-2 bg-[var(--surface-soft)] rounded-full border border-[var(--border)] shadow-sm">
                          <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[var(--color-mace-crimson)] px-2">
                            <span className="w-4 h-4 rounded-full bg-[var(--color-mace-gold)]/20 text-[var(--color-mace-gold)] flex items-center justify-center">1</span>
                            Idea
                          </div>
                          <div className="w-4 h-px bg-[var(--border)]"></div>
                          <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]/50 pr-2">
                            <Lock className="w-3 h-3" strokeWidth={2} /> Poll
                          </div>
                        </div>
                        
                        {/* Language Toggle */}
                        <button 
                          type="button" 
                          onClick={() => setLang(lang === "en" ? "ml" : "en")}
                          className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all border shadow-sm ${
                            lang === "ml" 
                            ? "bg-[var(--color-mace-gold)]/10 border-[var(--color-mace-gold)]/30 text-[var(--color-mace-crimson)]" 
                            : "bg-[var(--surface-soft)] border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--color-mace-crimson)]"
                          }`}
                        >
                          <Languages className="w-3.5 h-3.5" strokeWidth={2} />
                          {lang === "ml" ? "English" : "മലയാളം"}
                        </button>
                      </div>

                      <div className="space-y-4">
                        <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-[0.2em] ml-2 block">
                          Your Official Entry <span className="text-[var(--color-mace-rust)]">*</span>
                        </label>
                        
                        <div className="relative group">
                          {/* Left Icon */}
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-full flex items-center justify-center z-10 pointer-events-none">
                            <Sparkles className="h-6 w-6 text-[var(--color-mace-stone)] group-focus-within:text-[var(--color-mace-gold)] transition-colors duration-500" strokeWidth={1.5} />
                          </div>
                          
                          {/* Refined Input Wrapper */}
                          <div className="bg-[var(--surface-soft)] border border-[var(--border)] focus-within:border-[var(--color-mace-gold)] focus-within:ring-4 focus-within:ring-[var(--color-mace-gold)]/10 rounded-2xl overflow-hidden transition-all shadow-inner">
                            <ReactTransliterate
                              renderComponent={(props) => (
                                <input 
                                  {...props} 
                                  required 
                                  className="w-full pl-14 pr-6 py-6 outline-none text-[var(--color-mace-crimson)] font-serif text-3xl md:text-4xl bg-transparent placeholder:text-[var(--text-muted)]/40 tracking-tight" 
                                  placeholder={lang === "ml" ? "മലയാളത്തിൽ..." : "English..."} 
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
                          className="w-full sm:w-auto flex justify-center items-center gap-3 px-10 py-4 rounded-full font-black text-white bg-[var(--color-mace-rust)] shadow-[0_8px_20px_rgba(212,67,33,0.25)] hover:bg-[#b0361a] transition-all active:scale-[0.98] disabled:opacity-40 disabled:hover:bg-[var(--color-mace-rust)] uppercase tracking-[0.2em] text-[11px]"
                        >
                          Continue <ArrowRight className="w-4 h-4" strokeWidth={2} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: PERSONAL DETAILS */}
                  {step === 2 && (
                    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                       <div className="mb-10 text-center">
                          <h2 className="text-3xl font-serif font-bold text-[var(--color-mace-crimson)] mb-2 tracking-tight">Almost Done</h2>
                          <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-[0.25em] font-bold">So we know who to credit if you win.</p>
                        </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-[0.2em] ml-2 block">Your Name <span className="text-[var(--color-mace-rust)]">*</span></label>
                          <input required type="text" value={submitterName} onChange={(e) => setSubmitterName(e.target.value)} className="w-full px-5 py-4 bg-[var(--surface-soft)] border border-[var(--border)] focus:border-[var(--color-mace-gold)] focus:ring-4 focus:ring-[var(--color-mace-gold)]/10 rounded-xl outline-none text-[var(--color-mace-crimson)] text-base font-medium transition-all shadow-inner placeholder:text-[var(--text-muted)]/50" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-[0.2em] ml-2 block">Branch <span className="text-[var(--color-mace-rust)]">*</span></label>
                          <select required value={classYear} onChange={(e) => setClassYear(e.target.value)} className="w-full px-5 py-4 bg-[var(--surface-soft)] border border-[var(--border)] focus:border-[var(--color-mace-gold)] focus:ring-4 focus:ring-[var(--color-mace-gold)]/10 rounded-xl outline-none text-[var(--color-mace-crimson)] text-base font-medium transition-all shadow-inner appearance-none cursor-pointer">
                            <option value="" disabled className="text-[var(--text-muted)]">Select Branch</option>
                            <option value="Mech A">Mechanical A</option><option value="Mech B">Mechanical B</option>
                            <option value="EEE A">EEE A</option><option value="EEE B">EEE B</option>
                            <option value="EC">Electronics</option><option value="CS">Computer Science</option>
                            <option value="Civil A">Civil A</option><option value="Civil B">Civil B</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-[0.2em] ml-2 block">WhatsApp <span className="text-[var(--color-mace-rust)]">*</span></label>
                          <div className="bg-[var(--surface-soft)] border border-[var(--border)] focus-within:border-[var(--color-mace-gold)] focus-within:ring-4 focus-within:ring-[var(--color-mace-gold)]/10 rounded-xl px-4 py-2.5 transition-all shadow-inner">
                            {/* Updated text color to Crimson inside the inputClassName */}
                            <PhoneInput defaultCountry="in" value={phone} onChange={(val) => setPhone(val)} inputClassName="!w-full !border-0 !text-base !font-medium !h-9 !bg-transparent !text-[var(--color-mace-crimson)] !outline-none" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-[0.2em] ml-2 block">Email (Optional)</label>
                          <input type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)} className="w-full px-5 py-4 bg-[var(--surface-soft)] border border-[var(--border)] focus:border-[var(--color-mace-gold)] focus:ring-4 focus:ring-[var(--color-mace-gold)]/10 rounded-xl outline-none text-[var(--color-mace-crimson)] text-base font-medium transition-all shadow-inner placeholder:text-[var(--text-muted)]/50" placeholder="you@example.com" />
                        </div>
                      </div>

                      <div className="pt-12 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
                        <button 
                          type="button" 
                          onClick={handleBack}
                          className="text-[var(--text-muted)] hover:text-[var(--color-mace-crimson)] flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] transition-colors py-3 px-4"
                        >
                          <ArrowLeft className="w-4 h-4" strokeWidth={2} /> Go Back
                        </button>
                        <button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto flex justify-center items-center gap-3 px-10 py-4 rounded-full font-black text-white bg-[var(--color-mace-rust)] shadow-[0_8px_20px_rgba(212,67,33,0.25)] hover:bg-[#b0361a] transition-all active:scale-[0.98] disabled:opacity-50 uppercase tracking-[0.2em] text-[11px]">
                          {status === "submitting" ? <Loader2 className="animate-spin h-5 w-5" /> : <>Lock Entry <Send className="w-4 h-4" strokeWidth={2} /></>}
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
