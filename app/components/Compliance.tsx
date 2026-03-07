"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const items = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>,
    title: "No auto-approve. Ever.",
    description: "Every claim requires explicit human sign-off. Watheeq assists — it never decides alone.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>,
    title: "Every suggestion shows clause & evidence.",
    description: "Full transparency: see exactly which policy clause, medical code, and document passage led to each recommendation.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    title: "Built for CHI, nphies workflows, and PDPL.",
    description: "Responses formatted per nphies specs. Data handling compliant with PDPL. Audit trails meet CHI inspection requirements.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
    title: "Zero cookies before consent.",
    description: "No tracking, analytics, or third-party scripts loaded until the user explicitly consents.",
  },
];

export default function Compliance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="compliance" className="section-padding bg-white" ref={ref}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="section-eyebrow">Human-in-the-Loop</p>
            <h2 className="section-heading">Trust Built Into Every Layer</h2>
            <p className="section-subheading">
              Watheeq AI is designed so your compliance team sleeps well.
              No black boxes, no autonomous decisions, no regulatory surprises.
            </p>
          </motion.div>

          <div className="space-y-4">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="flex gap-4 p-4 rounded-xl hover:bg-bg transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-text/[0.03] group-hover:bg-primary/8 flex items-center justify-center text-text/35 group-hover:text-primary flex-shrink-0 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-text text-[15px] mb-1">{item.title}</h3>
                  <p className="text-sm text-text/45 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
