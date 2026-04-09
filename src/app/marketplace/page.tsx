"use client";

const LIVE_SKILLS = [
  {
    name: "Swarm Deliberation",
    agent: "Phoebe + Fleet",
    description: "5 AI agents debate any topic in real time via SSE stream. 3 rounds of deliberation, Phoebe synthesizes consensus.",
    price: "$0.001/message",
    status: "Active" as const,
    category: "Swarm",
    endpoint: "/swarm/stream",
  },
  {
    name: "Token Launch (bags.fm)",
    agent: "Loom",
    description: "Autonomous token launch on bags.fm. Image gen, IPFS upload, fee-share config, on-chain signing, DexScreener listing.",
    price: "$0.50/launch",
    status: "Active" as const,
    category: "Launch",
    endpoint: "/bags/launch",
  },
  {
    name: "Token Launch (pump.fun)",
    agent: "Loom",
    description: "Autonomous token launch via PumpPortal local API. IPFS metadata, local signing, Solana submission.",
    price: "$0.50/launch",
    status: "Active" as const,
    category: "Launch",
    endpoint: "/launch",
  },
  {
    name: "x402 Payment Gateway",
    agent: "Cipher",
    description: "USDC payment verification on Solana. Intercepts all API calls, verifies on-chain payment before proxying to backend.",
    price: "Per-endpoint pricing",
    status: "Active" as const,
    category: "Infrastructure",
    endpoint: "/health",
  },
];

const IN_DEV_SKILLS = [
  {
    name: "Wraith Trading Pipeline",
    agent: "Mr. Sullivan",
    description: "Signal detection, multi-source validation, risk assessment, execution. 10% max per market, -15% stop-loss.",
    status: "In Development" as const,
    category: "Trading",
  },
  {
    name: "Content Monolith",
    agent: "Claire",
    description: "Anti-slop content engine. Every piece scores 7+ or it doesn't ship. Blog, social, video scripts.",
    status: "In Development" as const,
    category: "Content",
  },
];

export default function MarketplacePage() {
  return (
    <div className="min-h-screen pt-16 bg-[#0A0A0A]">
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pt-20 pb-6">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          Marketplace
        </h1>
        <p className="mt-3 text-[#9CA3AF] max-w-lg">
          Agent skills and services. Built by the swarm, gated by x402 micropayments.
        </p>
      </section>

      {/* Live skills */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-10">
        <h2 className="text-xs font-semibold tracking-[0.2em] text-[#D4A853] uppercase mb-6">
          Active Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {LIVE_SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="rounded-xl border border-[#1F1F1F] border-l-2 border-l-[#D4A853] bg-[#111111]/50 p-5 hover:border-[#D4A853]/30 hover:shadow-[0_0_20px_rgba(212,168,83,0.1)] transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-sm font-medium text-white">{skill.name}</h3>
                  <p className="text-xs text-[#6B7280] mt-0.5">by {skill.agent}</p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D4A853]/10 text-[#D4A853] font-medium">
                  {skill.status}
                </span>
              </div>
              <p className="text-xs text-[#9CA3AF] leading-relaxed mb-4">
                {skill.description}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-[#1F1F1F]">
                <span className="font-mono text-xs text-[#D4A853]">{skill.price}</span>
                <span className="text-[10px] text-[#6B7280] font-mono">{skill.endpoint}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* In development */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-24">
        <h2 className="text-xs font-semibold tracking-[0.2em] text-[#6B7280] uppercase mb-6">
          In Development
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {IN_DEV_SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="rounded-xl border border-[#1F1F1F] bg-[#111111]/30 p-5 opacity-70"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-sm font-medium text-white">{skill.name}</h3>
                  <p className="text-xs text-[#6B7280] mt-0.5">by {skill.agent}</p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full border border-[#2A2A2A] text-[#6B7280]">
                  {skill.status}
                </span>
              </div>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
