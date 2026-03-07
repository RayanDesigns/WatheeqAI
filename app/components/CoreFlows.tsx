"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface FlowStep { title: string; description: string; }
interface FlowTab { id: string; label: string; steps: FlowStep[]; mockTitle: string; mockItems: string[]; }

const tabs: FlowTab[] = [
  {
    id: "examiners", label: "For Claim Examiners",
    steps: [
      { title: "Claim & docs land in one view", description: "All supporting documents, medical records, and claim details aggregated automatically." },
      { title: "Watheeq summarizes evidence & matches clauses", description: "AI extracts key findings, maps to ICD/CPT codes, and cross-references policy terms." },
      { title: "Examiner reviews, edits, approves draft", description: "Full control to modify AI suggestions before sending the final response." },
    ],
    mockTitle: "Claims Examiner Queue",
    mockItems: [
      "Claim #4821 — AI: Coverage confirmed, 3 clauses matched",
      "Claim #4822 — AI: Missing lab report for Dx J18.9",
      "Claim #4823 — AI: Exclusion flagged (pre-existing, Sec 4.2)",
    ],
  },
  {
    id: "admins", label: "For Operations / Admins",
    steps: [
      { title: "Dashboard with real-time KPIs", description: "Processing times, denial rates, examiner workload, and bottleneck alerts at a glance." },
      { title: "Trend analytics & denial patterns", description: "Identify systemic issues: top denial reasons, provider-specific patterns, seasonal spikes." },
      { title: "Data-driven optimization", description: "Adjust staffing, refine policy templates, and improve turnaround with actionable insights." },
    ],
    mockTitle: "Operations Dashboard",
    mockItems: [
      "Avg. processing: 4.8 days (↓62% from baseline)",
      "Top denial: Missing referral letter — 23% of rejections",
      "Examiner utilization: 87% — 2 examiners at capacity",
    ],
  },
  {
    id: "compliance", label: "For Compliance",
    steps: [
      { title: "Full audit trail on every decision", description: "Every AI suggestion and human action logged with timestamps and reasoning." },
      { title: "CHI & nphies alignment checks", description: "Automated validation that responses meet regulatory formatting and content requirements." },
      { title: "PDPL data governance", description: "Data access controls, consent tracking, and retention policies built in." },
    ],
    mockTitle: "Compliance Audit Log",
    mockItems: [
      "Claim #4821 — 3 AI suggestions, 1 human edit, final approved",
      "nphies format validation: PASSED (all required fields)",
      "Data retention: Auto-archive after 36 months per PDPL",
    ],
  },
];

export default function CoreFlows() {
  const [activeTab, setActiveTab] = useState("examiners");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="flows" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="section-eyebrow">Core Flows</p>
          <h2 className="section-heading">Tailored for Every Role</h2>
          <p className="section-subheading mx-auto">See how Watheeq AI serves each stakeholder in your organization.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-1 mb-10 bg-bg-muted rounded-xl p-1.5 max-w-fit mx-auto"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-white text-text"
                  : "text-text/45 hover:text-text/65"
              }`}
              style={activeTab === tab.id ? { boxShadow: "0 1px 3px rgba(5,5,8,0.08)" } : undefined}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <div className="space-y-5">
              {active.steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-primary/8 border border-primary/15 flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">
                      {i + 1}
                    </div>
                    {i < active.steps.length - 1 && <div className="w-px flex-1 bg-primary/10 my-1.5" />}
                  </div>
                  <div className="pb-2">
                    <h3 className="font-semibold text-text mb-1">{step.title}</h3>
                    <p className="text-sm text-text/45 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="card p-0 overflow-hidden">
              <div className="border-b border-bg-border px-5 py-3 flex items-center gap-2" style={{ background: "rgba(5,5,8,0.02)" }}>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-300/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-300/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-300/60" />
                </div>
                <span className="text-xs font-medium text-text/35 ml-2">{active.mockTitle}</span>
              </div>
              <div className="p-5 space-y-3">
                {active.mockItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-bg hover:bg-bg-muted transition-colors">
                    <div className="w-6 h-6 rounded bg-primary/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0004E8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <p className="text-sm text-text/60 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
