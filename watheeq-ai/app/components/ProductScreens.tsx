"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const screens = [
  {
    title: "Claims Queue",
    description: "AI-highlighted priority tags and missing-info alerts",
    rows: [
      { patient: "فاطمة الراشد", hospital: "King Faisal Specialist", tag: "Needs Info", tagColor: "amber" },
      { patient: "خالد العتيبي", hospital: "Al Habib Medical", tag: "AI Ready", tagColor: "primary" },
      { patient: "نورة السبيعي", hospital: "KFMC Riyadh", tag: "Approved", tagColor: "green" },
      { patient: "محمد الشهري", hospital: "Dr. Sulaiman Al Habib", tag: "In Review", tagColor: "secondary" },
    ],
  },
  {
    title: "Claim Detail + AI Pane",
    description: "Evidence summary alongside policy clause matches",
    insights: [
      { label: "Diagnosis", value: "M54.5 — Low back pain", confidence: "98%" },
      { label: "Procedure", value: "CPT 99213 — Office visit, est.", confidence: "95%" },
      { label: "Policy Match", value: "Section 3.2 — Outpatient coverage", confidence: "92%" },
      { label: "Exclusion Check", value: "No exclusions found", confidence: "100%" },
    ],
  },
  {
    title: "Clause Viewer",
    description: "Highlighted policy text linked to supporting evidence",
    clauses: [
      { text: "Outpatient consultations are covered under this policy for up to 12 visits per calendar year.", highlighted: true },
      { text: "The insured must obtain a referral from their primary care physician for specialist consultations.", highlighted: false },
      { text: "Coverage includes diagnostic imaging when ordered by the treating physician.", highlighted: true },
    ],
  },
];

const tagColors: Record<string, string> = {
  amber: "bg-amber-50 text-amber-600",
  primary: "bg-primary/10 text-primary",
  green: "bg-emerald-50 text-emerald-600",
  secondary: "bg-secondary/15 text-accent",
};

export default function ProductScreens() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-eyebrow">Product Preview</p>
          <h2 className="section-heading">See What Your Team Will Use</h2>
          <p className="section-subheading mx-auto">Real interfaces with Saudi-specific data — not generic mockups.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Claims Queue */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card overflow-hidden card-hover"
          >
            <div className="border-b border-bg-border px-4 py-2.5 flex items-center gap-2" style={{ background: "rgba(5,5,8,0.015)" }}>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-300/60" /><div className="w-2 h-2 rounded-full bg-amber-300/60" /><div className="w-2 h-2 rounded-full bg-green-300/60" />
              </div>
              <span className="text-[11px] font-medium text-text/35 ml-1">{screens[0].title}</span>
            </div>
            <div className="p-4 space-y-2.5">
              {screens[0].rows!.map((row, i) => (
                <div key={i} className="flex items-center justify-between gap-3 p-2.5 rounded-lg bg-bg/50 hover:bg-bg transition-colors">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-text truncate font-arabic">{row.patient}</p>
                    <p className="text-[10px] text-text/35">{row.hospital}</p>
                  </div>
                  <span className={`badge-label flex-shrink-0 ${tagColors[row.tagColor]}`}>{row.tag}</span>
                </div>
              ))}
            </div>
            <div className="px-4 pb-4"><p className="text-xs text-text/35">{screens[0].description}</p></div>
          </motion.div>

          {/* Claim Detail */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card overflow-hidden card-hover"
          >
            <div className="border-b border-bg-border px-4 py-2.5 flex items-center gap-2" style={{ background: "rgba(5,5,8,0.015)" }}>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-300/60" /><div className="w-2 h-2 rounded-full bg-amber-300/60" /><div className="w-2 h-2 rounded-full bg-green-300/60" />
              </div>
              <span className="text-[11px] font-medium text-text/35 ml-1">{screens[1].title}</span>
            </div>
            <div className="p-4 space-y-2.5">
              {screens[1].insights!.map((insight, i) => (
                <div key={i} className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-bg/50">
                  <div className="min-w-0">
                    <p className="text-[10px] text-text/35 uppercase tracking-wider">{insight.label}</p>
                    <p className="text-xs font-medium text-text truncate">{insight.value}</p>
                  </div>
                  <span className="text-[10px] font-bold text-primary bg-primary/8 px-2 py-0.5 rounded-full flex-shrink-0">{insight.confidence}</span>
                </div>
              ))}
            </div>
            <div className="px-4 pb-4"><p className="text-xs text-text/35">{screens[1].description}</p></div>
          </motion.div>

          {/* Clause Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card overflow-hidden card-hover"
          >
            <div className="border-b border-bg-border px-4 py-2.5 flex items-center gap-2" style={{ background: "rgba(5,5,8,0.015)" }}>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-300/60" /><div className="w-2 h-2 rounded-full bg-amber-300/60" /><div className="w-2 h-2 rounded-full bg-green-300/60" />
              </div>
              <span className="text-[11px] font-medium text-text/35 ml-1">{screens[2].title}</span>
            </div>
            <div className="p-4 space-y-2.5">
              {screens[2].clauses!.map((clause, i) => (
                <div key={i} className={`p-3 rounded-lg text-xs leading-relaxed ${
                  clause.highlighted ? "bg-primary/5 border border-primary/12 text-text/65" : "bg-bg/50 text-text/45"
                }`}>
                  {clause.highlighted && (
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-primary uppercase tracking-wider mb-1">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      Matched
                    </span>
                  )}
                  <p>{clause.text}</p>
                </div>
              ))}
            </div>
            <div className="px-4 pb-4"><p className="text-xs text-text/35">{screens[2].description}</p></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
