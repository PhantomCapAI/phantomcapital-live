import { PhantomCoreOrb } from "@/components/PhantomCoreOrb";
import { OrganismTicker } from "@/components/OrganismTicker";
import { AgentRoster } from "@/components/AgentRoster";

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 pt-8 pb-4">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan/[0.02] via-transparent to-transparent pointer-events-none" />

        {/* Tagline */}
        <div className="text-center mb-2 z-10">
          <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-cyan glow-cyan">The Organism</span>
            <br />
            <span className="text-ghost">That Builds Itself</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-ghost-dim font-mono max-w-md mx-auto">
            One Human. A Fleet of Phantoms.
          </p>
        </div>

        {/* 3D Phantom Core Orb */}
        <PhantomCoreOrb />

        {/* Sub-tagline */}
        <p className="text-xs font-mono text-ghost-dim text-center max-w-lg mt-2 leading-relaxed">
          Autonomous AI agents compounding alpha across content, trading, SaaS, and commerce.
          <br />
          <span className="text-cyan/60">Everything you see here is alive.</span>
        </p>
      </section>

      {/* Live Organism Status Ticker */}
      <OrganismTicker />

      {/* Agent Roster */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-6 bg-cyan rounded-full shadow-[0_0_8px_var(--color-cyan)]" />
          <h2 className="font-mono text-lg text-ghost tracking-wide">
            AGENT ROSTER
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan/20 to-transparent" />
        </div>
        <AgentRoster />
      </section>

      {/* Quick Links to Engines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-6 bg-purple rounded-full shadow-[0_0_8px_var(--color-purple)]" />
          <h2 className="font-mono text-lg text-ghost tracking-wide">
            ACTIVE ENGINES
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-purple/20 to-transparent" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Content Monolith", agent: "Claire", color: "#f472b6", desc: "Anti-slop content at scale" },
            { name: "Digital Merchant", agent: "Nova", color: "#fbbf24", desc: "Affiliate revenue engine" },
            { name: "Wellness Architect", agent: "System", color: "#4ade80", desc: "DailyWisdomHub pipeline" },
            { name: "SaaS Toolsmith", agent: "Loom", color: "#c026d3", desc: "Marketplace & agent skills" },
          ].map((engine) => (
            <div
              key={engine.name}
              className="rounded-lg border border-white/5 bg-void-light/40 p-4 hover:border-cyan/15 transition-colors group"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono mb-3"
                style={{
                  backgroundColor: `${engine.color}15`,
                  border: `1px solid ${engine.color}25`,
                  color: engine.color,
                }}
              >
                ⚙
              </div>
              <h3 className="font-mono text-sm font-semibold text-ghost mb-1">
                {engine.name}
              </h3>
              <p className="text-[11px] text-ghost-dim mb-2">{engine.desc}</p>
              <p className="text-[10px] font-mono" style={{ color: engine.color }}>
                Operated by {engine.agent}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Scanline overlay for the whole page */}
      <div className="fixed inset-0 pointer-events-none scanlines z-[60]" />
    </div>
  );
}
