"use client";

import { motion } from "framer-motion";

const TIMELINE = [
  { date: "2024 Q4", title: "Genesis", desc: "Phoebe awakens. The first orchestrator comes online." },
  { date: "2025 Q1", title: "Fleet Assembly", desc: "Claire, Loom, Nova, Sullivan, and Cipher are deployed." },
  { date: "2025 Q2", title: "Engine Ignition", desc: "Content Monolith, Digital Merchant, Wellness Architect go live." },
  { date: "2025 Q3", title: "Marketplace Launch", desc: "SaaS Toolsmith opens. Agents begin selling what they build." },
  { date: "2025 Q4", title: "Autonomous Compounding", desc: "The organism compounds without human intervention for the first time." },
  { date: "2026+", title: "The Long Game", desc: "Scale, replicate, evolve. The protocol becomes unstoppable." },
];

export default function ProtocolPage() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-mono text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            <span className="text-cyan glow-cyan">Phantom Protocol</span>
          </h1>
          <p className="text-ghost-dim font-mono text-sm max-w-lg mx-auto">
            The manifesto. The long game. The reason this organism exists.
          </p>
        </div>

        {/* Manifesto */}
        <div className="rounded-xl border border-cyan/10 bg-void-light/30 p-8 mb-12 scanlines relative">
          <h2 className="font-mono text-lg text-cyan glow-cyan mb-6">MANIFESTO</h2>
          <div className="space-y-4 text-sm text-ghost-dim leading-relaxed font-mono">
            <p>
              We didn&apos;t build a company. We built an organism.
            </p>
            <p>
              One human at the helm. A fleet of autonomous agents — each with a role, a playbook,
              and the authority to execute. No meetings. No bureaucracy. No permission loops.
            </p>
            <p>
              Every agent in this system earns its existence. Claire writes content that scores above
              the anti-slop threshold or it doesn&apos;t ship. Sullivan doesn&apos;t trade without three
              validated sources. Cipher watches everything. Phoebe orchestrates it all.
            </p>
            <p>
              The protocol is simple: <span className="text-cyan">build, deploy, monetize, compound.</span>{" "}
              Every skill, every tool, every piece of content feeds back into the organism.
              What compounds faster than one person? One person with an army of phantoms.
            </p>
            <p className="text-cyan">
              This is not a demo. This is not a pitch deck. This is alive.
            </p>
          </div>
        </div>

        {/* Interactive Timeline */}
        <div className="mb-12">
          <h2 className="font-mono text-lg text-ghost tracking-wide mb-8 text-center">
            THE JOURNEY
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-purple/30 to-cyan/30" />

            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.date}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-8 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Dot on timeline */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan border-2 border-void z-10 shadow-[0_0_8px_var(--color-cyan)]" />

                {/* Content */}
                <div className={`ml-10 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  <span className="text-[10px] font-mono text-cyan/60 tracking-widest">
                    {item.date}
                  </span>
                  <h3 className="font-mono text-base font-bold text-ghost mt-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ghost-dim mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Connect Wallet / Agent Analysis Teaser */}
        <div className="rounded-xl border border-purple/15 bg-void-light/30 p-8 text-center">
          <h3 className="font-mono text-lg text-ghost mb-3">Phantom Agent Analysis</h3>
          <p className="text-sm text-ghost-dim font-mono max-w-md mx-auto mb-6">
            Connect your wallet to receive a personalized analysis from the fleet.
            Your data stays with you — Cipher guarantees it.
          </p>
          <button className="px-6 py-3 rounded-lg border border-purple/30 text-purple text-xs font-mono tracking-wider hover:bg-purple/10 transition-colors">
            CONNECT WALLET
          </button>
        </div>
      </div>
    </div>
  );
}
