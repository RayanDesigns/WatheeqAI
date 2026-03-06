"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const volumeOptions = ["< 10,000 / month", "10,000 – 50,000 / month", "50,000 – 200,000 / month", "200,000+ / month"];
const roleOptions = ["Claims Manager", "Operations Lead", "CTO / CIO", "Medical Director", "Compliance Officer", "Other"];

interface FormData { name: string; email: string; organization: string; role: string; volume: string; }

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState<FormData>({ name: "", email: "", organization: "", role: "", volume: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid work email required";
    if (!form.organization.trim()) e.organization = "Required";
    if (!form.role) e.role = "Required";
    if (!form.volume) e.volume = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => { ev.preventDefault(); if (validate()) setSubmitted(true); };

  const inputCls = (f: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl bg-white border text-text placeholder-text/30 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 ${errors[f] ? "border-red-300" : "border-bg-border"}`;

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="max-w-xl mx-auto">
          {!submitted ? (
            <>
              <div className="text-center mb-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-text mb-3">See your own claims in Watheeq</h2>
                <p className="text-text/45 text-base">Leave your details and we&apos;ll set up a personalized demo with your data.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input type="text" placeholder="Full Name" className={inputCls("name")} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input type="email" placeholder="Work Email" className={inputCls("email")} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <input type="text" placeholder="Organization" className={inputCls("organization")} value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} />
                  {errors.organization && <p className="text-red-400 text-xs mt-1">{errors.organization}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <select className={inputCls("role")} value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
                      <option value="" disabled>Your Role</option>
                      {roleOptions.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                    {errors.role && <p className="text-red-400 text-xs mt-1">{errors.role}</p>}
                  </div>
                  <div>
                    <select className={inputCls("volume")} value={form.volume} onChange={(e) => setForm({ ...form, volume: e.target.value })}>
                      <option value="" disabled>Monthly Claims Volume</option>
                      {volumeOptions.map((v) => <option key={v} value={v}>{v}</option>)}
                    </select>
                    {errors.volume && <p className="text-red-400 text-xs mt-1">{errors.volume}</p>}
                  </div>
                </div>
                <button type="submit" className="w-full py-3.5 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl text-base transition-all duration-200 shadow-md hover:shadow-lg mt-2">
                  Request Personalized Demo
                </button>
                <p className="text-[11px] text-text/30 text-center leading-relaxed">
                  Your data is processed in accordance with Saudi PDPL. We&apos;ll only use it to schedule your demo.
                </p>
              </form>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0004E8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-text mb-2">Thank You!</h3>
              <p className="text-text/45 mb-8">We&apos;ve received your request. Expect a reply within 24 hours.</p>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary/8 hover:bg-primary/12 text-primary font-medium rounded-xl transition-all border border-primary/15">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                Schedule a Call Now
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
