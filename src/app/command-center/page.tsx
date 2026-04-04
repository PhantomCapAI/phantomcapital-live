"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const PIPELINE_STEPS = [
  { name: "Signal Detection", desc: "GMGN feed, on-chain alerts, Polymarket signals", status: "active" },
  { name: "Multi-Source Validation", desc: "Cross-reference 3+ sources, sentiment analysis", status: "active" },
  { name: "Risk Assessment", desc: "Position sizing, exposure limits, young wallet filter", status: "active" },
  { name: "Execution", desc: "Entry, stop-loss, take-profit placement", status: "idle" },
  { name: "Post-Trade Review", desc: "P&L tracking, journal entry, strategy refinement", status: "idle" },
];

const RISK_GAUGES = [
  { label: "Max Per Market", value: 10, max: 100, unit: "%", color: "#ff2244" },
  { label: "Total Exposure", value: 28, max: 40, unit: "%", color: "#fbbf24" },
  { label: "Daily P&L", value: -3.2, max: 10, unit: "%", color: "#4ade80" },
  { label: "Stop-Loss", value: -15, max: 15, unit: "%", color: "#ff2244" },
];

export default function CommandCenterPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen pt-20 pb-20 bg-void">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-mono text-2xl sm:text-3xl font-bold tracking-tight">
            <span className="text-blood glow-blood">Command Center</span>
          </h1>
          <p className="text-sm text-ghost-dim font-mono mt-2">
            Mr. Sullivan&apos;s Trading Terminal + Wraith Intelligence Suite
          </p>
        </div>

        {/* Terminal aesthetic wrapper */}
        <div className="rounded-xl border border-blood/15 bg-void-light/30 p-6 mb-8">
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
            <div className="w-2.5 h-2.5 rounded-full bg-blood/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            <span className="text-[10px] font-mono text-ghost-dim ml-3">
              sullivan@phantom:~/command-center $
            </span>
            <span className="text-[10px] font-mono text-blood cursor-blink">
              status --all
            </span>
          </div>

          {/* 5-step pipeline */}
          <div className="mb-8">
            <h3 className="text-xs font-mono text-ghost-dim tracking-widest uppercase mb-4">
              Trading Pipeline
            </h3>
            <div className="flex flex-col sm:flex-row gap-2">
              {PIPELINE_STEPS.map((step, i) => (
                <motion.button
                  key={step.name}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveStep(i)}
                  className={`flex-1 rounded-lg border p-3 text-left transition-all ${
                    activeStep === i
                      ? "border-blood/30 bg-blood/5"
                      : step.status === "active"
                        ? "border-blood/10 bg-void/60 hover:border-blood/20"
                        : "border-white/5 bg-void/40 opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${step.status === "active" ? "bg-blood animate-pulse" : "bg-white/20"}`} />
                    <span className="text-[10px] font-mono text-blood/70">
                      STEP {i + 1}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-ghost font-semibold">{step.name}</p>
                  {activeStep === i && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-[10px] text-ghost-dim mt-1"
                    >
                      {step.desc}
                    </motion.p>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Risk gauges */}
          <div className="mb-8">
            <h3 className="text-xs font-mono text-ghost-dim tracking-widest uppercase mb-4">
              Risk Gauges
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {RISK_GAUGES.map((gauge) => {
                const pct = Math.min(Math.abs(gauge.value) / gauge.max * 100, 100);
                return (
                  <div
                    key={gauge.label}
                    className="rounded-lg border border-white/5 bg-void/50 p-4"
                  >
                    <p className="text-[10px] font-mono text-ghost-dim mb-2">
                      {gauge.label}
                    </p>
                    <p
                      className="text-xl font-mono font-bold mb-2"
                      style={{ color: gauge.color }}
                    >
                      {gauge.value > 0 ? "+" : ""}{gauge.value}{gauge.unit}
                    </p>
                    <div className="w-full h-1.5 rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${pct}%`,
                          backgroundColor: gauge.color,
                          boxShadow: `0 0 8px ${gauge.color}40`,
                        }}
                      />
                    </div>
                    <p className="text-[9px] font-mono text-ghost-dim mt-1">
                      Max: {gauge.max}{gauge.unit}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Wraith Intelligence Widgets */}
          <div>
            <h3 className="text-xs font-mono text-ghost-dim tracking-widest uppercase mb-4">
              Wraith Intelligence Suite
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Wallet Tracker", desc: "Smart money flow monitoring", icon: "👁" },
                { name: "Sentiment Feed", desc: "Polymarket + social signals", icon: "📡" },
                { name: "Arbitrage Scanner", desc: "Cross-venue opportunity detection", icon: "⚡" },
                { name: "Airdrop Scanner", desc: "Eligible position analysis", icon: "🎯" },
              ].map((widget) => (
                <div
                  key={widget.name}
                  className="rounded-lg border border-blood/10 bg-void/40 p-4 hover:border-blood/20 transition-colors"
                >
                  <div className="text-2xl mb-2">{widget.icon}</div>
                  <h4 className="font-mono text-sm text-ghost font-semibold mb-1">
                    {widget.name}
                  </h4>
                  <p className="text-[11px] text-ghost-dim">{widget.desc}</p>
                  <div className="mt-3 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blood/40" />
                    <span className="text-[9px] font-mono text-ghost-dim">Connecting...</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Young wallet rejection visualizer */}
        <div className="rounded-lg border border-white/5 bg-void-light/30 p-6">
          <h3 className="text-xs font-mono text-ghost-dim tracking-widest uppercase mb-4">
            Young Wallet Rejection Filter
          </h3>
          <div className="space-y-2">
            {[
              { wallet: "0x7f2...a4c1", age: "2 days", status: "rejected", reason: "< 7 day threshold" },
              { wallet: "0x3d8...e912", age: "14 hours", status: "rejected", reason: "< 7 day threshold" },
              { wallet: "0xb1c...f723", age: "45 days", status: "passed", reason: "Meets minimum age" },
              { wallet: "0x9e4...d156", age: "3 days", status: "rejected", reason: "< 7 day threshold" },
            ].map((entry, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-4 py-2.5 rounded border text-xs font-mono ${
                  entry.status === "rejected"
                    ? "border-blood/15 bg-blood/5 text-blood/80"
                    : "border-green-500/15 bg-green-500/5 text-green-400/80"
                }`}
              >
                <span className="text-ghost-dim">{entry.wallet}</span>
                <span>{entry.age}</span>
                <span className="uppercase tracking-wider text-[9px]">{entry.status}</span>
                <span className="text-ghost-dim hidden sm:block">{entry.reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
