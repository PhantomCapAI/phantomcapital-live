"use client";

import { useEffect, useState } from "react";

const PIPELINE_STEPS = [
  { step: "01", name: "Signal Detection", desc: "GMGN feed, on-chain alerts, Polymarket signals", active: true },
  { step: "02", name: "Multi-Source Validation", desc: "Cross-reference 3+ sources, sentiment analysis", active: true },
  { step: "03", name: "Risk Assessment", desc: "Position sizing, exposure limits, young wallet filter", active: true },
  { step: "04", name: "Execution", desc: "Entry, stop-loss, take-profit placement", active: false },
  { step: "05", name: "Post-Trade Review", desc: "P&L tracking, journal entry, strategy refinement", active: false },
];

const RISK_GAUGES = [
  { label: "Max Per Market", value: "\u2014", subtitle: "Pre-launch" },
  { label: "Total Exposure", value: "\u2014", subtitle: "Pre-launch" },
  { label: "Daily P&L", value: "\u2014", subtitle: "Pre-launch" },
  { label: "Stop-Loss", value: "-15%", subtitle: "Hard limit configured" },
];

const SERVICES = [
  { name: "Phoebe (Hermes)", agent: "Phoebe", url: "https://phantom-swarm-engine.zeabur.app/health", mode: "live" },
  { name: "Swarm Engine", agent: "Phoebe", url: "https://phantom-swarm-engine.zeabur.app/health", mode: "live" },
  { name: "x402 Payment Gate", agent: "Cipher", url: "https://phantom-x402-gate.zeabur.app/health", mode: "live" },
  { name: "bags.fm Launcher", agent: "Loom", url: "https://phantom-bags-launch.zeabur.app/health", mode: "live" },
  { name: "pump.fun Launcher", agent: "Loom", url: "https://phantom-pump-launch.zeabur.app/health", mode: "live" },
];

const POLY_FLEET = [
  { name: "Phantom Shadow", agent: "Sullivan", mode: "paper" },
  { name: "Phantom Strike", agent: "Sullivan", mode: "paper" },
  { name: "Phantom Sight", agent: "Sullivan", mode: "paper" },
  { name: "Phantom Pulse", agent: "Sullivan", mode: "paper" },
];

function ServiceRow({ name, agent, url, mode }: { name: string; agent: string; url: string; mode: string }) {
  const [status, setStatus] = useState<"checking" | "online" | "offline">("checking");

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(url, { signal: ctrl.signal, mode: "cors" })
      .then((r) => setStatus(r.ok ? "online" : "offline"))
      .catch(() => setStatus("offline"));
    return () => ctrl.abort();
  }, [url]);

  const dot = status === "online" ? "bg-[#22C55E]" : status === "offline" ? "bg-[#EF4444]" : "bg-[#6B7280] animate-pulse";

  return (
    <div className="flex items-center gap-4 py-3 px-4 border-b border-[#1F1F1F] last:border-0">
      <div className={`w-2 h-2 rounded-full shrink-0 ${dot}`} />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-white truncate">{name}</p>
        <p className="text-[10px] text-[#6B7280]">{agent} · {mode}</p>
      </div>
      <span className="text-[10px] font-mono text-[#6B7280]">
        {status === "checking" ? "..." : status}
      </span>
    </div>
  );
}

export default function CommandCenterPage() {
  return (
    <div className="min-h-screen pt-16 bg-[#0A0A0A]">
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pt-20 pb-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          Command Center
        </h1>
        <p className="mt-3 text-[#9CA3AF] max-w-lg">
          Mr. Sullivan&apos;s trading terminal and live service monitoring.
        </p>
      </section>

      {/* Live Services */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-16">
        <h2 className="text-xs font-semibold tracking-[0.2em] text-[#D4A853] uppercase mb-6">
          Live Services
        </h2>
        <div className="rounded-xl border border-[#1F1F1F] overflow-hidden">
          {SERVICES.map((s) => (
            <ServiceRow key={s.name} {...s} />
          ))}
        </div>
      </section>

      {/* Polymarket Fleet */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-16">
        <h2 className="text-xs font-semibold tracking-[0.2em] text-[#6B7280] uppercase mb-6">
          Polymarket Fleet — Paper Mode
        </h2>
        <div className="rounded-xl border border-[#1F1F1F] overflow-hidden">
          {POLY_FLEET.map((s) => (
            <div key={s.name} className="flex items-center gap-4 py-3 px-4 border-b border-[#1F1F1F] last:border-0">
              <div className="w-2 h-2 rounded-full shrink-0 bg-[#D4A853]" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white truncate">{s.name}</p>
                <p className="text-[10px] text-[#6B7280]">{s.agent} · {s.mode}</p>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-[#D4A853]/20 text-[#D4A853]">
                paper
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Trading Pipeline */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-16">
        <h2 className="text-xs font-semibold tracking-[0.2em] text-[#6B7280] uppercase mb-6">
          Trading Pipeline — Pre-deployment
        </h2>
        <div className="space-y-px rounded-xl overflow-hidden border border-[#1F1F1F]">
          {PIPELINE_STEPS.map((step) => (
            <div
              key={step.step}
              className={`flex items-baseline gap-6 px-6 py-5 ${
                step.active ? "bg-[#111111]/50" : "bg-[#111111]/20 opacity-50"
              }`}
            >
              <span className="font-mono text-sm text-[#D4A853] w-6 shrink-0">
                {step.step}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-medium text-white">{step.name}</p>
                  {step.active && <div className="w-1.5 h-1.5 rounded-full bg-[#6B7280]" />}
                </div>
                <p className="text-xs text-[#6B7280] mt-0.5">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Risk Gauges */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-16">
        <h2 className="text-xs font-semibold tracking-[0.2em] text-[#6B7280] uppercase mb-6">
          Risk Gauges
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {RISK_GAUGES.map((gauge) => (
            <div key={gauge.label} className="rounded-xl border border-[#1F1F1F] bg-[#111111]/30 p-5">
              <p className="text-xs text-[#6B7280] mb-3">{gauge.label}</p>
              <p className="font-mono text-2xl font-semibold text-[#D4A853]">{gauge.value}</p>
              <p className="text-[11px] text-[#4B5563] mt-2">{gauge.subtitle}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
