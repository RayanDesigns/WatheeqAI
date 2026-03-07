"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const problems = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="15" x2="15" y2="15" /></svg>,
    title: "Missing Documents", stat: "46% of denials",
    description: "Claims rejected due to incomplete supporting documents, requiring costly resubmissions.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
    title: "Manual Clause Checks", stat: "15-day average",
    description: "Examiners cross-reference policies, codes, and records manually — slow and error-prone.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>,
    title: "Opaque Decisions", stat: "25% denial rate",
    description: "Lack of transparency in reasoning strains provider relationships and invites regulatory scrutiny.",
  },
];

const solutions = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><polyline points="16 13 12 17 8 13" /></svg>,
    title: "Evidence Extraction",
    description: "AI reads and structures documents, flags what's missing before submission.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
    title: "Coverage Mapping",
    description: "Automated clause matching against policy terms, exclusions, and CHI guidelines.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>,
    title: "Draft Replies",
    description: "nphies-formatted responses with audit trails, ready for examiner sign-off.",
  },
];

export default function ProblemSolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="section-padding bg-white" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-eyebrow">Problem → Solution</p>
          <h2 className="section-heading">How Watheeq AI Fits Into Your Workflow</h2>
          <p className="section-subheading mx-auto">
            Every pain point in claims processing mapped to a concrete AI-assisted solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-0 items-start">
          <div className="space-y-4">
            <p className="text-xs font-semibold text-text/30 uppercase tracking-widest mb-2 lg:text-right">
              Today&apos;s Reality
            </p>
            {problems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="card p-5 card-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-400 flex-shrink-0 group-hover:bg-red-100 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-text text-sm">{item.title}</h3>
                      <span className="text-[10px] font-semibold text-red-400 bg-red-50 px-2 py-0.5 rounded-full">{item.stat}</span>
                    </div>
                    <p className="text-sm text-text/45 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:flex flex-col items-center justify-around py-10 px-8 gap-4 self-stretch">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.12 }}
                className="flex items-center"
              >
                <div className="w-8 h-px bg-text/10" />
                <div className="w-8 h-8 rounded-full bg-primary/8 border border-primary/15 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0004E8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
                <div className="w-8 h-px bg-text/10" />
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold text-text/30 uppercase tracking-widest mb-2">With Watheeq AI</p>
            {solutions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="card p-5 card-hover group border-primary/8 hover:border-primary/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-text text-sm mb-1">{item.title}</h3>
                    <p className="text-sm text-text/45 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
