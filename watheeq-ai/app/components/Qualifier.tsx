"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const valueIf = [
  "You process 10,000+ claims per month",
  "You have a team of examiners reviewing claims daily",
  "Denial rates or processing times are a strategic concern",
  "Regulatory audits require documented decision trails",
  "You need nphies-formatted responses at scale",
];

const notFor = [
  "Not a fully autonomous system — humans always decide",
  "Not a consumer-facing patient app",
  "Not a replacement for your claims management system",
  "Not a generic chatbot — purpose-built for health claims",
];

export default function Qualifier() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-14">
          <p className="section-eyebrow">Is It Right for You?</p>
          <h2 className="section-heading">Honest About What Watheeq Is — and Isn&apos;t</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="card p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0004E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <h3 className="font-bold text-text">You&apos;ll get value if…</h3>
            </div>
            <ul className="space-y-3.5">
              {valueIf.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0004E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12" /></svg>
                  <span className="text-sm text-text/55 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="card p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-text/[0.04] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050508" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
              </div>
              <h3 className="font-bold text-text">What Watheeq is not…</h3>
            </div>
            <ul className="space-y-3.5">
              {notFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-text/18 flex-shrink-0 mt-2" />
                  <span className="text-sm text-text/45 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
