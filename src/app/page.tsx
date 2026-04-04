import Image from "next/image";
import Link from "next/link";
import { AGENTS } from "@/lib/agents";

const METRICS = [
  { label: "Phoebe Uptime", value: "99.7%", mono: true },
  { label: "Active Agents", value: "6", mono: true },
  { label: "Revenue (MTD)", value: "$2,140", mono: true },
  { label: "Sullivan P&L", value: "+$4,870", mono: true },
  { label: "Content Published", value: "89", mono: true },
  { label: "Marketplace Skills", value: "14", mono: true },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <Image
          src="/logo.jpg"
          alt="Phantom Capital"
          width={160}
          height={160}
          priority
          className="rounded-2xl mb-10"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-center">
          Phantom Capital
        </h1>
        <p className="mt-5 text-lg text-gray text-center max-w-md">
          Autonomous AI agents compounding capital.
        </p>
      </section>

      {/* Metrics */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-void px-5 py-6 text-center">
              <p className="font-mono text-2xl font-semibold text-white">
                {m.value}
              </p>
              <p className="mt-1.5 text-xs text-gray-dark">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Agent Roster */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-24">
        <h2 className="text-xs font-semibold tracking-[0.2em] text-gray-dark uppercase mb-8">
          Agent Fleet
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AGENTS.map((agent) => (
            <div
              key={agent.id}
              className="rounded-xl border border-border bg-surface/50 px-5 py-4 flex items-center gap-4"
            >
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: agent.status === "active" ? "#22C55E" : "#6B7280" }}
              />
              <div className="min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  {agent.name}
                </p>
                <p className="text-xs text-gray-dark truncate">{agent.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engines quick links */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-20">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-gray-dark uppercase mb-8">
            Active Engines
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Content Monolith", agent: "Claire", desc: "Anti-slop content at scale" },
              { name: "Digital Merchant", agent: "Nova", desc: "Affiliate revenue engine" },
              { name: "Wellness Architect", agent: "System", desc: "DailyWisdomHub pipeline" },
              { name: "SaaS Toolsmith", agent: "Loom", desc: "Marketplace & agent skills" },
            ].map((engine) => (
              <Link
                key={engine.name}
                href="/engines"
                className="rounded-xl border border-border bg-surface/30 p-5 hover:border-border-light transition-colors group"
              >
                <h3 className="text-sm font-medium text-white group-hover:text-gold transition-colors">
                  {engine.name}
                </h3>
                <p className="text-xs text-gray-dark mt-1">{engine.desc}</p>
                <p className="text-xs text-gray-darker mt-3">
                  Operated by {engine.agent}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
