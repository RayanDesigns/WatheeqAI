"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const regions = ["Riyadh", "Jeddah", "Dammam", "Makkah", "Madinah", "Tabuk", "Other"];
const volumes = ["< 10,000 / month", "10,000 – 50,000 / month", "50,000 – 200,000 / month", "200,000+ / month"];

interface FormData { company: string; name: string; email: string; phone: string; role: string; region: string; volume: string; consent: boolean; }
const initial: FormData = { company: "", name: "", email: "", phone: "", role: "", region: "", volume: "", consent: false };

export default function DemoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.company.trim()) e.company = "Required";
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim() || !/^\+?966\d{8,9}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "Valid Saudi phone (+966…)";
    if (!form.role.trim()) e.role = "Required";
    if (!form.region) e.region = "Required";
    if (!form.volume) e.volume = "Required";
    if (!form.consent) e.consent = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => { ev.preventDefault(); if (validate()) setSubmitted(true); };
  const handleClose = () => { setSubmitted(false); setForm(initial); setErrors({}); onClose(); };

  const inputCls = (f: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl bg-white border text-text placeholder-text/30 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 ${errors[f] ? "border-red-300" : "border-bg-border"}`;

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={handleClose}>
          <div className="absolute inset-0 bg-text/20 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-bg-border"
            style={{ boxShadow: "0 8px 32px rgba(5,5,8,0.12)" }}
          >
            <button onClick={handleClose} className="absolute top-4 right-4 p-1 text-text/25 hover:text-text transition-colors z-10" aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="p-6 lg:p-8">
                <h3 className="text-xl font-bold text-text mb-1">Request a Demo</h3>
                <p className="text-text/40 text-sm mb-6">See Watheeq AI in action with your claims.</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><input type="text" placeholder="Full Name *" className={inputCls("name")} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />{errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}</div>
                    <div><input type="text" placeholder="Company *" className={inputCls("company")} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />{errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}</div>
                  </div>
                  <div><input type="email" placeholder="Work Email *" className={inputCls("email")} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />{errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}</div>
                  <div><input type="tel" placeholder="Phone (+966…) *" className={inputCls("phone")} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />{errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}</div>
                  <div><input type="text" placeholder="Job Title / Role *" className={inputCls("role")} value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} />{errors.role && <p className="text-red-400 text-xs mt-1">{errors.role}</p>}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><select className={inputCls("region")} value={form.region} onChange={(e) => setForm({ ...form, region: e.target.value })}><option value="" disabled>Region *</option>{regions.map((r) => <option key={r} value={r}>{r}</option>)}</select>{errors.region && <p className="text-red-400 text-xs mt-1">{errors.region}</p>}</div>
                    <div><select className={inputCls("volume")} value={form.volume} onChange={(e) => setForm({ ...form, volume: e.target.value })}><option value="" disabled>Claims Volume *</option>{volumes.map((v) => <option key={v} value={v}>{v}</option>)}</select>{errors.volume && <p className="text-red-400 text-xs mt-1">{errors.volume}</p>}</div>
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} className="mt-1 w-4 h-4 rounded accent-primary" />
                    <span className="text-xs text-text/35 group-hover:text-text/50 transition-colors">I consent to Watheeq AI processing my data per Saudi PDPL. *</span>
                  </label>
                  {errors.consent && <p className="text-red-400 text-xs -mt-2">{errors.consent}</p>}
                </div>
                <button type="submit" className="mt-6 w-full py-3.5 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg">Submit Request</button>
              </form>
            ) : (
              <div className="p-8 lg:p-12 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0004E8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-text mb-2">Thank You!</h3>
                <p className="text-text/45 mb-6">We&apos;ll reach out within 24 hours.</p>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary/8 hover:bg-primary/12 text-primary font-medium rounded-xl transition-all border border-primary/15">Schedule a Call Now</a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
