"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    title: "Claims come in",
    description:
      "Claims and their supporting documents arrive in one organized queue, with nothing scattered across inboxes.",
  },
  {
    title: "Watheeq prepares the review",
    description:
      "Each claim is checked against the member's policy, with a recommendation and a drafted reply ready for your team.",
  },
  {
    title: "Your team decides",
    description:
      "An examiner confirms or adjusts, and the decision goes out with its rationale, recorded for audit.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="flows" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-14"
        >
          <p className="section-eyebrow">How It Works</p>
          <h2 className="section-heading">Three steps from claim to decision</h2>
          <p className="section-subheading">
            A workflow your team already understands: Watheeq takes the reading,
            your examiners keep the judgment.
          </p>
        </motion.div>

        <ol className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
              className="flex gap-5 md:block"
            >
              {/* Number tile + connector */}
              <div className="flex flex-col items-center md:flex-row">
                <div className="w-11 h-11 rounded-xl bg-primary-50 text-primary flex items-center justify-center font-bold text-[15px] flex-shrink-0">
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <>
                    <div className="md:hidden w-px flex-1 my-2" style={{ background: "#d5d5ff" }} />
                    <div className="hidden md:block flex-1 h-px ml-4" style={{ background: "#d5d5ff" }} />
                  </>
                )}
              </div>
              <div className={`md:mt-5 ${i < steps.length - 1 ? "pb-10 md:pb-0" : ""}`}>
                <h3 className="text-[15px] font-semibold text-text">{step.title}</h3>
                <p className="text-sm text-text/45 leading-relaxed mt-2 max-w-xs">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
