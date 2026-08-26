"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

/* Horizontal connector (lg+): request lane flows right, response lane flows left */
function ConnectorH() {
  return (
    <svg
      viewBox="0 0 160 64"
      className="hidden lg:block w-28 xl:w-40 h-16 flex-shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* request lane → */}
      <line x1="6" y1="24" x2="146" y2="24" stroke="#d5d5ff" strokeWidth="1.5" />
      <path d="M154 24 L146 20 L146 28 Z" fill="#ababff" />
      {/* response lane ← */}
      <line x1="14" y1="40" x2="154" y2="40" stroke="#d5d5ff" strokeWidth="1.5" />
      <path d="M6 40 L14 36 L14 44 Z" fill="#ababff" />
      {/* animated flow (visible on hover) */}
      <g className="flow-dots">
        <line x1="6" y1="24" x2="146" y2="24" stroke="rgba(0,4,232,0.35)" strokeWidth="1.5" strokeDasharray="4 6" style={{ animation: "dash-flow 0.9s linear infinite" }} />
        <line x1="14" y1="40" x2="154" y2="40" stroke="rgba(74,77,233,0.3)" strokeWidth="1.5" strokeDasharray="4 6" style={{ animation: "dash-flow-rev 0.9s linear infinite" }} />
        <circle cx="6" cy="24" r="3" fill="#0004E8" style={{ animation: "flow-x 1.8s linear infinite" }} />
        <circle cx="6" cy="24" r="3" fill="#0004E8" style={{ animation: "flow-x 1.8s linear infinite", animationDelay: "0.9s" }} />
        <circle cx="154" cy="40" r="3" fill="#4a4de9" style={{ animation: "flow-x-rev 1.8s linear infinite" }} />
        <circle cx="154" cy="40" r="3" fill="#4a4de9" style={{ animation: "flow-x-rev 1.8s linear infinite", animationDelay: "0.9s" }} />
      </g>
    </svg>
  );
}

/* Vertical connector (below lg): request lane flows down, response lane flows up */
function ConnectorV() {
  return (
    <svg
      viewBox="0 0 64 88"
      className="lg:hidden w-16 h-[88px] flex-shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* request lane ↓ */}
      <line x1="24" y1="6" x2="24" y2="72" stroke="#d5d5ff" strokeWidth="1.5" />
      <path d="M24 80 L20 72 L28 72 Z" fill="#ababff" />
      {/* response lane ↑ */}
      <line x1="40" y1="14" x2="40" y2="82" stroke="#d5d5ff" strokeWidth="1.5" />
      <path d="M40 6 L36 14 L44 14 Z" fill="#ababff" />
      <g className="flow-dots">
        <line x1="24" y1="6" x2="24" y2="72" stroke="rgba(0,4,232,0.35)" strokeWidth="1.5" strokeDasharray="4 6" style={{ animation: "dash-flow-rev 0.9s linear infinite" }} />
        <line x1="40" y1="14" x2="40" y2="82" stroke="rgba(74,77,233,0.3)" strokeWidth="1.5" strokeDasharray="4 6" style={{ animation: "dash-flow 0.9s linear infinite" }} />
        <circle cx="24" cy="6" r="3" fill="#0004E8" style={{ animation: "flow-y 1.8s linear infinite" }} />
        <circle cx="24" cy="6" r="3" fill="#0004E8" style={{ animation: "flow-y 1.8s linear infinite", animationDelay: "0.9s" }} />
        <circle cx="40" cy="82" r="3" fill="#4a4de9" style={{ animation: "flow-y-rev 1.8s linear infinite" }} />
        <circle cx="40" cy="82" r="3" fill="#4a4de9" style={{ animation: "flow-y-rev 1.8s linear infinite", animationDelay: "0.9s" }} />
      </g>
    </svg>
  );
}

function Connector() {
  return (
    <>
      <ConnectorH />
      <ConnectorV />
    </>
  );
}

interface NodeProps {
  side: string;
  title: string;
  sub: string;
  icon: React.ReactNode;
  hub?: boolean;
  integration?: boolean;
}

function Node({ side, title, sub, icon, hub, integration }: NodeProps) {
  return (
    <div
      className={`card w-full max-w-[280px] lg:w-[250px] px-6 py-6 text-center relative ${
        hub ? "border-primary/25" : ""
      }`}
    >
      <div className="w-11 h-11 mx-auto rounded-xl bg-primary/8 text-primary flex items-center justify-center mb-3">
        {icon}
      </div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text/30 mb-1">{side}</p>
      <h3 className="font-semibold text-text text-[15px] leading-snug">{title}</h3>
      <p className="text-[13px] text-text/40 leading-relaxed mt-1.5">{sub}</p>
      {integration && (
        <div className="mt-4 rounded-xl border border-bg-border bg-bg px-3 py-3">
          <div className="flex items-center justify-center gap-1.5 text-[12px] font-medium text-text/55">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-text/35">
              <rect x="2" y="4" width="20" height="7" rx="2" />
              <rect x="2" y="13" width="20" height="7" rx="2" />
              <line x1="6" y1="7.5" x2="6.01" y2="7.5" />
              <line x1="6" y1="16.5" x2="6.01" y2="16.5" />
            </svg>
            Internal claims system
          </div>
          {/* internal link, same lanes and hover animation as the main connectors */}
          <div className="flex justify-center my-1">
            <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <line x1="9" y1="2" x2="9" y2="19" stroke="#d5d5ff" strokeWidth="1.5" />
              <path d="M9 25 L6 19 L12 19 Z" fill="#ababff" />
              <line x1="15" y1="7" x2="15" y2="24" stroke="#d5d5ff" strokeWidth="1.5" />
              <path d="M15 1 L12 7 L18 7 Z" fill="#ababff" />
              <g className="flow-dots">
                <line x1="9" y1="2" x2="9" y2="19" stroke="rgba(0,4,232,0.35)" strokeWidth="1.5" strokeDasharray="4 6" style={{ animation: "dash-flow 0.9s linear infinite" }} />
                <line x1="15" y1="7" x2="15" y2="24" stroke="rgba(74,77,233,0.3)" strokeWidth="1.5" strokeDasharray="4 6" style={{ animation: "dash-flow-rev 0.9s linear infinite" }} />
              </g>
            </svg>
          </div>
          <a
            href="/"
            className="flex items-center justify-center gap-2 rounded-lg bg-primary-50 border border-primary-100 px-3 py-2 transition-colors hover:bg-primary-100"
          >
            <Image src="/logo.svg" alt="Watheeq AI" width={74} height={15} />
          </a>
        </div>
      )}
    </div>
  );
}

export default function SystemDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="compliance" className="section-padding bg-white" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="section-eyebrow">System Placement</p>
          <h2 className="section-heading">Where Watheeq sits</h2>
          <p className="section-subheading mx-auto">
            In the Saudi health insurance ecosystem, claims move between healthcare providers and
            insurers through NPHIES, the national exchange. Watheeq integrates with your internal
            claims system on the insurer side. It doesn&apos;t replace it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="diagram-hover flex flex-col lg:flex-row items-center justify-center">
            <Node
              side="Healthcare Provider Side"
              title="Hospitals & Clinics"
              sub="Information systems (HIS) where care is delivered and claims originate"
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18" />
                  <path d="M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14" />
                  <path d="M12 8v4" />
                  <path d="M10 10h4" />
                  <path d="M9 21v-4h6v4" />
                </svg>
              }
            />
            <Connector />
            <Node
              hub
              side="Government Side"
              title="NPHIES"
              sub="The national platform every claim and response passes through"
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="4.5" cy="6" r="2" />
                  <circle cx="19.5" cy="6" r="2" />
                  <circle cx="4.5" cy="18" r="2" />
                  <circle cx="19.5" cy="18" r="2" />
                  <line x1="6.3" y1="7.2" x2="9.8" y2="10.2" />
                  <line x1="17.7" y1="7.2" x2="14.2" y2="10.2" />
                  <line x1="6.3" y1="16.8" x2="9.8" y2="13.8" />
                  <line x1="17.7" y1="16.8" x2="14.2" y2="13.8" />
                </svg>
              }
            />
            <Connector />
            <Node
              integration
              side="Insurance Provider Side"
              title="Insurance Company"
              sub="Watheeq works alongside the systems your team already runs"
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              }
            />
          </div>

        </motion.div>
      </div>
    </section>
  );
}
