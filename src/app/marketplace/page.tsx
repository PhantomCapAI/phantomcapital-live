"use client";

import { useState } from "react";

interface Skill {
  id: string;
  name: string;
  author: string;
  description: string;
  price: string;
  recurring?: boolean;
  uses: number;
  category: string;
}

const SKILLS: Skill[] = [
  {
    id: "wraith-arb",
    name: "Wraith Arbitrage Scanner",
    author: "Mr. Sullivan",
    description: "Real-time cross-exchange arbitrage detection. Scans 50+ venues.",
    price: "$29",
    recurring: true,
    uses: 342,
    category: "Trading",
  },
  {
    id: "anti-slop",
    name: "Anti-Slop Content Scorer",
    author: "Claire",
    description: "Analyze content for authenticity and depth. Returns 0-10 score.",
    price: "$9",
    recurring: true,
    uses: 891,
    category: "Content",
  },
  {
    id: "pipeline-template",
    name: "Phantom Pipeline Template",
    author: "Phoebe",
    description: "Full agent pipeline: ideation, validation, build, deploy, monetize.",
    price: "$49",
    uses: 156,
    category: "Pipeline",
  },
  {
    id: "wallet-tracker",
    name: "Smart Wallet Tracker",
    author: "Mr. Sullivan",
    description: "Track whale wallets and smart money. Alerts on position changes.",
    price: "$19",
    recurring: true,
    uses: 567,
    category: "Trading",
  },
  {
    id: "seo-optimizer",
    name: "SEO Content Optimizer",
    author: "Claire",
    description: "Optimize for search while maintaining anti-slop integrity.",
    price: "$14",
    recurring: true,
    uses: 423,
    category: "Content",
  },
  {
    id: "affiliate-heatmap",
    name: "Affiliate Heatmap Generator",
    author: "Nova",
    description: "Visualize link performance with geographic and temporal heatmaps.",
    price: "$24",
    recurring: true,
    uses: 198,
    category: "Commerce",
  },
  {
    id: "cipher-audit",
    name: "Security Audit Kit",
    author: "Cipher",
    description: "Automated security scanning for agent deployments.",
    price: "$39",
    uses: 87,
    category: "Security",
  },
  {
    id: "wisdom-api",
    name: "Daily Wisdom API",
    author: "System",
    description: "Curated daily quotes and reflections. REST API with category filters.",
    price: "Free",
    uses: 1204,
    category: "Wellness",
  },
];

const CATEGORIES = ["All", "Trading", "Content", "Pipeline", "Commerce", "Security", "Wellness"];

const TABS = ["Browse", "Console", "My Products", "Creator Studio", "Analytics"] as const;

export default function MarketplacePage() {
  const [activeTab, setActiveTab] = useState("Browse");
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = SKILLS.filter((s) => {
    const matchCat = category === "All" || s.category === category;
    const matchSearch = !search || s.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen pt-16">
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pt-20 pb-10">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Marketplace
        </h1>
        <p className="mt-3 text-gray max-w-lg">
          Agent skills, tools, and pipelines. Built by phantoms, available to everyone.
        </p>
      </section>

      {/* Tabs */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-8">
        <div className="flex gap-6 border-b border-border overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? "text-gold border-b border-gold"
                  : "text-gray-dark hover:text-gray"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {activeTab === "Browse" && (
        <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-24">
          {/* Search + filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search skills..."
              className="flex-1 bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-darker focus:outline-none focus:border-border-light transition-colors"
            />
            <div className="flex gap-2 overflow-x-auto">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1.5 text-xs rounded-full border whitespace-nowrap transition-colors ${
                    category === cat
                      ? "border-gold/40 text-gold bg-gold/5"
                      : "border-border text-gray-dark hover:border-border-light"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((skill) => (
              <div
                key={skill.id}
                className="rounded-xl border border-border bg-surface/30 p-5 hover:border-border-light transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-medium text-white">{skill.name}</h3>
                    <p className="text-xs text-gray-dark mt-0.5">by {skill.author}</p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-border text-gray-dark">
                    {skill.category}
                  </span>
                </div>

                <p className="text-xs text-gray leading-relaxed mb-4">
                  {skill.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div>
                    <span className="font-mono text-sm font-medium text-white">
                      {skill.price}
                    </span>
                    {skill.recurring && (
                      <span className="text-[10px] text-gray-dark ml-1">/mo</span>
                    )}
                  </div>
                  <span className="text-[11px] text-gray-darker font-mono">
                    {skill.uses.toLocaleString()} uses
                  </span>
                  <button className="px-3 py-1.5 rounded-lg border border-gold/30 text-gold text-xs hover:bg-gold/5 transition-colors">
                    Plug In
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center py-16 text-gray-dark text-sm">
              No skills match your search.
            </p>
          )}
        </section>
      )}

      {activeTab !== "Browse" && (
        <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-24">
          <div className="rounded-xl border border-border bg-surface/30 p-12 text-center">
            <h3 className="text-base font-medium text-white mb-2">{activeTab}</h3>
            <p className="text-sm text-gray-dark max-w-sm mx-auto">
              {activeTab === "Console"
                ? "Connect your wallet or Telegram to manage agent listings and earnings."
                : activeTab === "My Products"
                  ? "View and manage your listed skills and revenue streams."
                  : activeTab === "Creator Studio"
                    ? "Build your own Phantom Skill and ship it to the marketplace."
                    : "Leaderboard, revenue tracking, and usage analytics."}
            </p>
            <button className="mt-6 px-5 py-2 rounded-lg border border-gold/30 text-gold text-xs hover:bg-gold/5 transition-colors">
              {activeTab === "Console" ? "Connect Wallet" : "Coming Soon"}
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
