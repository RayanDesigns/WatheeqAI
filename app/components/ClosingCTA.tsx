"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ClosingCTA({ onDemoClick }: { onDemoClick: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto"
        >
          <h2 className="section-heading">Ready to decide claims faster?</h2>
          <p className="section-subheading mx-auto mb-9">
            Create an account in the Watheeq portal, or book a personalized
            walkthrough with your own claims.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://watheeq-ai.vercel.app/register"
              className="px-7 py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl text-[15px] transition-all shadow-lg hover:shadow-xl"
            >
              Start free
            </a>
            <button
              onClick={onDemoClick}
              className="px-7 py-3 bg-white hover:bg-primary/5 text-text/60 hover:text-text font-medium rounded-xl text-[15px] transition-all border border-bg-border"
            >
              Request Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
