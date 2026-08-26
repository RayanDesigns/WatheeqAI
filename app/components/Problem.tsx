"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pains = [
  {
    title: "Every claim is read by hand",
    description:
      "Examiners cross-reference medical reports against policy documents page by page. Careful work, but it doesn't scale.",
  },
  {
    title: "Decisions take too long",
    description:
      "Review cycles stretch from days into weeks while members and providers wait for an answer.",
  },
  {
    title: "Outcomes vary by examiner",
    description:
      "The same claim can be decided differently depending on who reviews it, inviting appeals and disputes.",
  },
  {
    title: "Audits mean archaeology",
    description:
      "When a regulator asks why a claim was denied, reconstructing the rationale means digging through files and inboxes.",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <p className="section-eyebrow">The Problem</p>
            <h2 className="section-heading">
              Claims operations are still a manual bottleneck
            </h2>
            <p className="section-subheading">
              Medical claims arrive faster than teams can carefully review them.
              The result is a daily trade-off between speed, consistency, and
              the documentation regulators expect.
            </p>
          </motion.div>

          <div className="lg:col-span-7 lg:pt-2">
            <ul className="divide-y divide-bg-border">
              {pains.map((pain, i) => (
                <motion.li
                  key={pain.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
                  className="flex gap-6 py-6 first:pt-0 last:pb-0"
                >
                  <span className="text-[13px] font-semibold text-text/20 pt-0.5 tabular-nums">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-text">{pain.title}</h3>
                    <p className="text-sm text-text/45 leading-relaxed mt-1.5 max-w-lg">
                      {pain.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
