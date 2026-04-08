import Image from "next/image";
import Link from "next/link";
import { AGENTS } from "@/lib/agents";

const METRICS = [
  { label: "Phoebe Uptime", value: "99.7%", subtitle: "Since Apr 2026" },
  { label: "Active Agents", value: "6", subtitle: "" },
  { label: "Revenue (MTD)", value: "$0", subtitle: "Pre-launch" },
  { label: "Sullivan P&L", value: "\u2014", subtitle: "Awaiting deployment" },
  { label: "Content Published", value: "0", subtitle: "Pre-launch" },
  { label: "Marketplace Skills", value: "0", subtitle: "Coming soon" },
];

const PFP_MAP: Record<string, string> = {
  phoebe: "/phoebe.png", loom: "/loom.png", claire: "/claire.png",
  nova: "/nova.png", sullivan: "/sullivan.png", cipher: "/cipher.png",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 pt-24 pb-16 sm:pt-32 sm:pb-20">
        {/* Logo with gold glow */}
        <div className="relative mb-10">
          <div className="absolute inset-0 rounded-2xl" style={{ boxShadow: "0 0 80px rgba(212,168,83,0.2), 0 0 160px rgba(212,168,83,0.1)" }} />
          <Image
            src="/logo.jpg"
            alt="Phantom Capital"
            width={160}
            height={160}
            priority
            className="rounded-2xl relative"
          />
        </div>
        {/* Gold gradient headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-center"
          style={{
            background: "linear-gradient(135deg, #D4A853 0%, #F5E6A3 50%, #D4A853 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Phantom Capital
        </h1>
        <p className="mt-5 text-lg text-[#D4A853] text-center max-w-md">
          Autonomous AI agents compounding capital.
        </p>
      </section>

      {/* Genesis Banner with shimmer */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-12">
        <Link
          href="https://genesis.phantomcapital.live"
          className="block rounded-xl border border-[#D4A853]/40 bg-[#D4A853]/5 p-8 hover:bg-[#D4A853]/8 transition-all duration-300 group animate-[shimmer_3s_ease-in-out_infinite]"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-[#D4A853]">
                Phantom Genesis
              </h2>
              <p className="text-sm text-gray mt-2 max-w-lg">
                Watch 5 AI agents launch a token autonomously. Live now.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4A853] text-black text-sm font-semibold rounded-lg group-hover:bg-[#c49a43] transition-colors shrink-0">
              Watch the Swarm
              <span aria-hidden="true">&rarr;</span>
            </span>
          </div>
        </Link>
      </section>

      {/* Metrics */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-void px-5 py-6 text-center">
              <p className="font-mono text-2xl font-semibold text-[#D4A853]">
                {m.value}
              </p>
              <p className="mt-1.5 text-xs text-gray-dark">{m.label}</p>
              {m.subtitle && (
                <p className="mt-0.5 text-[10px] text-gray-darker">{m.subtitle}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Agent Roster */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-24">
        <h2 className="text-xs font-semibold tracking-[0.2em] text-[#D4A853] uppercase mb-8">
          Agent Fleet
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AGENTS.map((agent) => {
            const pfp = PFP_MAP[agent.id];
            return (
              <div
                key={agent.id}
                className="rounded-xl border border-border bg-surface/50 px-5 py-4 flex items-center gap-4 hover:border-[#D4A853]/30 hover:shadow-[0_0_20px_rgba(212,168,83,0.1)] transition-all"
              >
                {pfp ? (
                  <img src={pfp} alt={agent.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#D4A853]/50 shrink-0" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-surface-light border-2 border-[#D4A853]/30 flex items-center justify-center text-sm font-mono text-[#D4A853] shrink-0">{agent.name[0]}</div>
                )}
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white truncate">{agent.name}</p>
                  <p className="text-xs text-gray-dark truncate">{agent.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Engines quick links */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-20">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-[#D4A853] uppercase mb-8">
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
                className="rounded-xl border-l-2 border-l-[#D4A853] border border-border bg-surface/30 p-5 hover:border-[#D4A853]/30 hover:shadow-[0_0_20px_rgba(212,168,83,0.15)] transition-all group"
              >
                <h3 className="text-sm font-medium text-white group-hover:text-[#D4A853] transition-colors">
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
