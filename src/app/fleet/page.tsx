"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AGENTS, type Agent } from "@/lib/agents";
import { AgentCard } from "@/components/AgentCard";

const PIPELINE_STAGES = [
  { name: "Ideation", desc: "Signal detected, opportunity identified" },
  { name: "Validation", desc: "Research, scoring, risk assessment" },
  { name: "Build", desc: "Code, content, or strategy creation" },
  { name: "Deploy", desc: "Ship to production, go live" },
  { name: "Monetize", desc: "Revenue generation, compounding" },
];

export default function FleetPage() {
  const [search, setSearch] = useState("");
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const filtered = AGENTS.filter(
    (a) =>
      !search ||
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-mono text-2xl sm:text-3xl font-bold tracking-tight">
            <span className="text-cyan glow-cyan">The Fleet</span>
          </h1>
          <p className="text-sm text-ghost-dim font-mono mt-2">
            Full interactive roster of every autonomous agent in the organism.
          </p>
        </div>

        {/* Search */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search agents..."
          className="w-full max-w-md bg-void-light/60 border border-white/10 rounded-lg px-4 py-2.5 text-sm font-mono text-ghost placeholder:text-ghost-dim/50 focus:outline-none focus:border-cyan/30 transition-colors mb-8"
        />

        {/* Agent cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {filtered.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

        {/* Phantom Pipeline Timeline */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-purple rounded-full shadow-[0_0_8px_var(--color-purple)]" />
            <h2 className="font-mono text-lg text-ghost tracking-wide">
              PHANTOM PIPELINE
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple/20 to-transparent" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {PIPELINE_STAGES.map((stage, i) => (
              <motion.button
                key={stage.name}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveStage(activeStage === i ? null : i)}
                className={`flex-1 rounded-lg border p-4 text-left transition-colors ${
                  activeStage === i
                    ? "border-cyan/30 bg-cyan/5"
                    : "border-white/5 bg-void-light/40 hover:border-cyan/15"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono text-cyan/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-sm text-ghost font-semibold">
                    {stage.name}
                  </span>
                </div>
                <p className="text-[11px] text-ghost-dim">{stage.desc}</p>
                {activeStage === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="mt-3 pt-3 border-t border-white/5 text-xs text-ghost-dim font-mono"
                  >
                    Stage {i + 1} is currently processing across all active agents.
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
