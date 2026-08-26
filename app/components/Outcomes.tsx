"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const supportingPoints = [
  "Clause-level citations on every recommendation",
  "A complete audit trail behind every decision",
];

const outcomes = [
  {
    title: "Minutes, not days",
    description:
      "Watheeq reviews the evidence and prepares a recommendation before your examiner opens the file.",
  },
  {
    title: "Consistent outcomes",
    description:
      "The same policy language, applied the same way, on every claim. Fewer appeals, fewer disputes.",
  },
  {
    title: "Experts stay in control",
    description:
      "Watheeq recommends. Your examiners make every final decision, and nothing goes out without human sign-off.",
  },
  {
    title: "Operational visibility",
    description:
      "Claim volumes, decision rates, and team throughput in one view, so leaders can manage the pipeline.",
  },
];

/* Illustrative claim-review vignette, built from the shared card tokens */
function ReviewVignette() {
  return (
    <div className="card p-6 lg:p-7 w-full max-w-[460px] lg:ml-auto" aria-hidden="true">
      <div className="flex items-center justify-between mb-5">
        <span className="text-[13px] font-semibold text-text/50">
          Claim CLM-2418 · Outpatient
        </span>
        <span className="px-2.5 py-1 rounded-full bg-primary/8 text-primary text-[11px] font-semibold uppercase tracking-wide">
          Covered
        </span>
      </div>

      <div className="mb-5">
        <div className="flex items-center justify-between text-[12px] mb-1.5">
          <span className="text-text/40">Confidence</span>
          <span className="font-semibold text-text/60">High</span>
        </div>
        <div className="h-1.5 rounded-full bg-bg-muted overflow-hidden">
          <div className="h-full w-[88%] rounded-full bg-primary" />
        </div>
      </div>

      <div className="rounded-xl border border-bg-border bg-bg p-4 mb-5">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-primary mb-1.5">
          Cited clause · Section 4.2
        </p>
        <p className="text-[13px] text-text/55 leading-relaxed">
          &ldquo;Outpatient consultations and diagnostic procedures are covered
          when referred by a licensed physician&hellip;&rdquo;
        </p>
      </div>

      <div className="flex items-center gap-2 text-[13px] text-text/45">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0004E8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        Reviewed and approved by your examiner
      </div>
    </div>
  );
}

export default function Outcomes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="section-padding" ref={ref}>
      <div className="section-container">
        {/* Lead outcome, paired with a visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="section-eyebrow">Why Watheeq</p>
            <h2 className="section-heading">
              Every decision cites the policy behind it
            </h2>
            <p className="section-subheading mb-7">
              Watheeq reads each claim against the member&apos;s actual policy and
              shows the exact clauses behind its recommendation, so every
              decision is explainable to members, providers, and regulators.
            </p>
            <ul className="space-y-3">
              {supportingPoints.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-[15px] text-text/60">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0004E8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" style={{ opacity: 0.7 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <ReviewVignette />
          </motion.div>
        </div>

        {/* Supporting outcomes: typographic, no card boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mt-20 lg:mt-24">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
              className="border-t border-bg-border pt-5"
            >
              <h3 className="text-[15px] font-semibold text-text">{outcome.title}</h3>
              <p className="text-sm text-text/45 leading-relaxed mt-2">
                {outcome.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
