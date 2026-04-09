"use client";

import { useState } from "react";

const LIVE_SKILLS = [
  {
    name: "Swarm Deliberation",
    agent: "Phoebe + Fleet",
    description: "5 AI agents debate any topic in real time via SSE stream. 3 rounds, Phoebe synthesizes consensus.",
    price: "$0.001/msg",
    status: "Active" as const,
    category: "Swarm",
    endpoint: "/swarm/stream",
    baseUrl: "phantom-swarm-engine.zeabur.app",
    methods: [
      { method: "POST", path: "/swarm/start", desc: "Start deliberation", headers: "X-Phantom-Internal", body: '{"topic":"...","free_mode":true}' },
      { method: "GET", path: "/swarm/stream/{id}", desc: "SSE message stream", headers: "none", body: "" },
      { method: "GET", path: "/swarm/status/{id}", desc: "Session status", headers: "none", body: "" },
    ],
  },
  {
    name: "Token Launch (bags.fm)",
    agent: "Loom",
    description: "Autonomous token launch on bags.fm. Image gen, IPFS upload, fee-share config, on-chain signing.",
    price: "$0.50/launch",
    status: "Active" as const,
    category: "Launch",
    endpoint: "/launch",
    baseUrl: "phantom-bags-launch.zeabur.app",
    methods: [
      { method: "POST", path: "/launch", desc: "Full launch sequence", headers: "X-Phantom-Key", body: '{"name":"...","symbol":"...","description":"..."}' },
      { method: "GET", path: "/health", desc: "Health check", headers: "none", body: "" },
    ],
  },
  {
    name: "Token Launch (pump.fun)",
    agent: "Loom",
    description: "Autonomous token launch via PumpPortal. IPFS metadata, local signing, Solana submission.",
    price: "$0.50/launch",
    status: "Active" as const,
    category: "Launch",
    endpoint: "/launch",
    baseUrl: "phantom-pump-launch.zeabur.app",
    methods: [
      { method: "POST", path: "/launch", desc: "Full launch sequence", headers: "X-Phantom-Key", body: '{"name":"...","symbol":"...","description":"..."}' },
      { method: "GET", path: "/health", desc: "Health check", headers: "none", body: "" },
    ],
  },
  {
    name: "x402 Payment Gateway",
    agent: "Cipher",
    description: "USDC payment verification on Solana. Intercepts API calls, verifies on-chain payment before proxying.",
    price: "Per-endpoint",
    status: "Active" as const,
    category: "Infrastructure",
    endpoint: "/health",
    baseUrl: "phantom-x402-gate.zeabur.app",
    methods: [
      { method: "GET", path: "/health", desc: "Gateway status", headers: "none", body: "" },
      { method: "GET", path: "/pricing", desc: "Full pricing matrix", headers: "none", body: "" },
      { method: "ANY", path: "/{endpoint}", desc: "Gated request (needs X-Payment-Tx header)", headers: "X-Payment-Tx", body: "" },
    ],
  },
];

const IN_DEV_SKILLS = [
  { name: "Wraith Trading Pipeline", agent: "Mr. Sullivan", description: "Signal detection, validation, risk assessment, execution. 10% max per market, -15% stop-loss.", category: "Trading" },
  { name: "Content Monolith", agent: "Claire", description: "Anti-slop content engine. Every piece scores 7+ or doesn't ship.", category: "Content" },
];

const TABS = ["Browse", "Console"] as const;
const CATEGORIES = ["All", "Swarm", "Launch", "Infrastructure"];

export default function MarketplacePage() {
  const [activeTab, setActiveTab] = useState<string>("Browse");
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = LIVE_SKILLS.filter((s) => {
    const matchCat = category === "All" || s.category === category;
    const matchSearch = !search || s.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen pt-16 bg-[#0A0A0A]">
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pt-20 pb-6">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Marketplace</h1>
        <p className="mt-3 text-[#9CA3AF] max-w-lg">Agent skills and services. Built by the swarm, gated by x402.</p>
      </section>

      {/* Tabs */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-8">
        <div className="flex gap-6 border-b border-[#1F1F1F] overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm whitespace-nowrap transition-colors ${
                activeTab === tab ? "text-[#D4A853] border-b border-[#D4A853]" : "text-[#6B7280] hover:text-[#9CA3AF]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {activeTab === "Browse" && (
        <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-10">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search skills..."
              className="flex-1 bg-[#111111] border border-[#1F1F1F] rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-[#4B5563] focus:outline-none focus:border-[#D4A853]/30"
            />
            <div className="flex gap-2 overflow-x-auto">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1.5 text-xs rounded-full border whitespace-nowrap transition-colors ${
                    category === cat
                      ? "border-[#D4A853]/40 text-[#D4A853] bg-[#D4A853]/5"
                      : "border-[#1F1F1F] text-[#6B7280] hover:border-[#2A2A2A]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <h2 className="text-xs font-semibold tracking-[0.2em] text-[#D4A853] uppercase mb-6">Active Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {filtered.map((skill) => (
              <div key={skill.name} className="rounded-xl border border-[#1F1F1F] border-l-2 border-l-[#D4A853] bg-[#111111]/50 p-5 hover:border-[#D4A853]/30 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-medium text-white">{skill.name}</h3>
                    <p className="text-xs text-[#6B7280] mt-0.5">by {skill.agent}</p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D4A853]/10 text-[#D4A853] font-medium">{skill.status}</span>
                </div>
                <p className="text-xs text-[#9CA3AF] leading-relaxed mb-4">{skill.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-[#1F1F1F]">
                  <span className="font-mono text-xs text-[#D4A853]">{skill.price}</span>
                  <span className="text-[10px] text-[#6B7280] font-mono">{skill.baseUrl}</span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xs font-semibold tracking-[0.2em] text-[#6B7280] uppercase mb-6">In Development</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {IN_DEV_SKILLS.map((skill) => (
              <div key={skill.name} className="rounded-xl border border-[#1F1F1F] bg-[#111111]/30 p-5 opacity-70">
                <h3 className="text-sm font-medium text-white">{skill.name}</h3>
                <p className="text-xs text-[#6B7280] mt-0.5">by {skill.agent}</p>
                <p className="text-xs text-[#6B7280] leading-relaxed mt-3">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === "Console" && (
        <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-24">
          <p className="text-sm text-[#9CA3AF] mb-8">API reference for all active Phantom Capital services. All paid endpoints require x402 USDC payment.</p>
          <div className="space-y-8">
            {LIVE_SKILLS.map((skill) => (
              <div key={skill.name} className="rounded-xl border border-[#1F1F1F] overflow-hidden">
                <div className="px-5 py-4 bg-[#111111]/50 border-b border-[#1F1F1F]">
                  <h3 className="text-sm font-medium text-white">{skill.name}</h3>
                  <p className="text-[10px] text-[#6B7280] font-mono mt-1">https://{skill.baseUrl}</p>
                </div>
                <div className="divide-y divide-[#1F1F1F]">
                  {skill.methods.map((m) => (
                    <div key={m.path} className="px-5 py-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                          m.method === "GET" ? "bg-[#22C55E]/10 text-[#22C55E]" :
                          m.method === "POST" ? "bg-[#3B82F6]/10 text-[#3B82F6]" :
                          "bg-[#D4A853]/10 text-[#D4A853]"
                        }`}>
                          {m.method}
                        </span>
                        <span className="text-sm font-mono text-white">{m.path}</span>
                      </div>
                      <p className="text-xs text-[#9CA3AF] mb-2">{m.desc}</p>
                      {m.headers !== "none" && (
                        <p className="text-[10px] text-[#6B7280]">Header: <span className="font-mono text-[#D4A853]">{m.headers}</span></p>
                      )}
                      {m.body && (
                        <pre className="mt-2 text-[10px] font-mono text-[#6B7280] bg-[#0A0A0A] rounded p-2 overflow-x-auto">
                          curl -X {m.method} https://{skill.baseUrl}{m.path} \{"\n"}  -H &quot;Content-Type: application/json&quot;{m.headers !== "none" ? ` \\\n  -H "${m.headers}: <secret>"` : ""}{m.body ? ` \\\n  -d '${m.body}'` : ""}
                        </pre>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
