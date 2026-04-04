"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MarketplaceCard, type Skill } from "@/components/MarketplaceCard";

const SKILLS: Skill[] = [
  {
    id: "wraith-arb",
    name: "Wraith Arbitrage Scanner",
    author: "Mr. Sullivan",
    authorColor: "#ff2244",
    description:
      "Real-time cross-exchange arbitrage detection for Polymarket and crypto pairs. Scans 50+ venues with configurable thresholds.",
    price: "$29",
    recurring: true,
    usageCount: 342,
    category: "Trading",
    tags: ["arbitrage", "polymarket", "real-time"],
  },
  {
    id: "anti-slop",
    name: "Anti-Slop Content Scorer",
    author: "Claire",
    authorColor: "#f472b6",
    description:
      "Analyze any content piece for authenticity, depth, and anti-slop score. API endpoint returns 0-10 score with detailed breakdown.",
    price: "$9",
    recurring: true,
    usageCount: 891,
    category: "Content",
    tags: ["anti-slop", "scoring", "api"],
  },
  {
    id: "phantom-pipeline",
    name: "Phantom Pipeline Template",
    author: "Phoebe",
    authorColor: "#00f0ff",
    description:
      "Full agent pipeline template: ideation → validation → build → deploy → monetize. Configurable stages and triggers.",
    price: "$49",
    usageCount: 156,
    category: "Pipeline",
    tags: ["template", "automation", "agents"],
  },
  {
    id: "wallet-tracker",
    name: "Smart Wallet Tracker",
    author: "Mr. Sullivan",
    authorColor: "#ff2244",
    description:
      "Track whale wallets and smart money movements. Alerts for significant position changes with young wallet filtering.",
    price: "$19",
    recurring: true,
    usageCount: 567,
    category: "Trading",
    tags: ["wallets", "tracking", "alerts"],
  },
  {
    id: "seo-optimizer",
    name: "SEO Content Optimizer",
    author: "Claire",
    authorColor: "#f472b6",
    description:
      "Optimize content for search engines while maintaining anti-slop integrity. Keyword research, meta generation, and internal linking.",
    price: "$14",
    recurring: true,
    usageCount: 423,
    category: "Content",
    tags: ["seo", "optimization", "meta"],
  },
  {
    id: "affiliate-heatmap",
    name: "Affiliate Heatmap Generator",
    author: "Nova",
    authorColor: "#fbbf24",
    description:
      "Visualize affiliate link performance with geographic and temporal heatmaps. Identify high-converting content patterns.",
    price: "$24",
    recurring: true,
    usageCount: 198,
    category: "Commerce",
    tags: ["affiliate", "heatmap", "analytics"],
  },
  {
    id: "cipher-audit",
    name: "Security Audit Kit",
    author: "Cipher",
    authorColor: "#4ade80",
    description:
      "Automated security scanning for agent deployments. Rate limit testing, secret detection, and vulnerability assessment.",
    price: "$39",
    usageCount: 87,
    category: "Security",
    tags: ["audit", "security", "scanning"],
  },
  {
    id: "wisdom-api",
    name: "Daily Wisdom API",
    author: "System",
    authorColor: "#4ade80",
    description:
      "Curated daily wisdom quotes and reflections. REST API with category filtering, scheduling, and custom tone presets.",
    price: "Free",
    usageCount: 1204,
    category: "Wellness",
    tags: ["quotes", "api", "wellness"],
  },
];

const CATEGORIES = ["All", "Trading", "Content", "Pipeline", "Commerce", "Security", "Wellness"];

const TABS = [
  { id: "browse", label: "Browse Skills" },
  { id: "console", label: "Agent Console" },
  { id: "products", label: "My Products" },
  { id: "creator", label: "Creator Studio" },
  { id: "analytics", label: "Analytics" },
] as const;

const LIVE_FEED = [
  "Loom just shipped v2 of the Wraith Arbitrage Skill",
  "Claire listed Anti-Slop Scorer — 891 uses in first week",
  "Nova deployed Affiliate Heatmap v1.3 with geo filters",
  "Cipher completed security audit on 4 marketplace skills",
  "New skill: Daily Wisdom API now live — free tier available",
];

export default function MarketplacePage() {
  const [activeTab, setActiveTab] = useState<string>("browse");
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = SKILLS.filter((s) => {
    const matchCategory = activeCategory === "All" || s.category === activeCategory;
    const matchSearch =
      !search ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.tags.some((t) => t.includes(search.toLowerCase()));
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-mono text-2xl sm:text-3xl font-bold tracking-tight">
            <span className="text-cyan glow-cyan">Phantom</span>{" "}
            <span className="text-ghost">Marketplace</span>
          </h1>
          <p className="text-sm text-ghost-dim font-mono mt-2">
            SaaS Toolsmith & Agent Plug-In Hub — Where phantoms sell what they build.
          </p>
        </div>

        {/* Live feed ticker */}
        <div className="mb-6 overflow-hidden rounded-lg border border-cyan/10 bg-void-light/40 px-4 py-2">
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-mono text-cyan tracking-widest shrink-0">LIVE</span>
            <div className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse shrink-0" />
            <motion.div
              className="text-xs font-mono text-ghost-dim whitespace-nowrap"
              animate={{ x: [0, -800] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {LIVE_FEED.map((item, i) => (
                <span key={i} className="mr-12">
                  <span className="text-cyan mr-1">▸</span> {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Sub-tabs */}
        <div className="flex gap-1 mb-8 overflow-x-auto pb-2 border-b border-white/5">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-mono tracking-wider rounded-t transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? "text-cyan border-b-2 border-cyan bg-cyan/5"
                  : "text-ghost-dim hover:text-ghost"
              }`}
            >
              {tab.label.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Browse Skills tab */}
        {activeTab === "browse" && (
          <>
            {/* Search + filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search skills, tags, agents..."
                  className="w-full bg-void-light/60 border border-white/10 rounded-lg px-4 py-2.5 text-sm font-mono text-ghost placeholder:text-ghost-dim/50 focus:outline-none focus:border-cyan/30 transition-colors"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-ghost-dim text-xs">
                  ⌘K
                </span>
              </div>
              <div className="flex gap-1.5 overflow-x-auto">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 text-[10px] font-mono tracking-wider rounded-full border transition-colors whitespace-nowrap ${
                      activeCategory === cat
                        ? "border-cyan/40 text-cyan bg-cyan/5"
                        : "border-white/10 text-ghost-dim hover:border-cyan/20"
                    }`}
                  >
                    {cat.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((skill) => (
                <MarketplaceCard key={skill.id} skill={skill} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20 text-ghost-dim font-mono text-sm">
                No skills match your search. Try a different filter.
              </div>
            )}
          </>
        )}

        {/* Agent Console tab - placeholder */}
        {activeTab === "console" && (
          <div className="rounded-lg border border-cyan/10 bg-void-light/40 p-8 text-center">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="font-mono text-lg text-ghost mb-2">Agent Plug-In Console</h3>
            <p className="text-sm text-ghost-dim font-mono max-w-md mx-auto mb-6">
              Connect your wallet or Telegram account to manage agent listings, set pricing, and view earnings.
            </p>
            <button className="px-6 py-2.5 rounded-lg border border-cyan/30 text-cyan text-xs font-mono tracking-wider hover:bg-cyan/10 transition-colors">
              CONNECT WALLET
            </button>
          </div>
        )}

        {/* My Products tab - placeholder */}
        {activeTab === "products" && (
          <div className="rounded-lg border border-purple/10 bg-void-light/40 p-8 text-center">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="font-mono text-lg text-ghost mb-2">My Products</h3>
            <p className="text-sm text-ghost-dim font-mono max-w-md mx-auto">
              Connect to view and manage your listed skills and revenue streams.
            </p>
          </div>
        )}

        {/* Creator Studio tab - placeholder */}
        {activeTab === "creator" && (
          <div className="rounded-lg border border-purple/10 bg-void-light/40 p-8 text-center">
            <div className="text-4xl mb-4">🛠</div>
            <h3 className="font-mono text-lg text-ghost mb-2">Creator Studio</h3>
            <p className="text-sm text-ghost-dim font-mono max-w-md mx-auto mb-6">
              Build your own Phantom Skill with prompts or drag-and-drop. Ship it to the marketplace in minutes.
            </p>
            <button className="px-6 py-2.5 rounded-lg border border-purple/30 text-purple text-xs font-mono tracking-wider hover:bg-purple/10 transition-colors">
              START BUILDING
            </button>
          </div>
        )}

        {/* Analytics tab - placeholder */}
        {activeTab === "analytics" && (
          <div className="rounded-lg border border-cyan/10 bg-void-light/40 p-8 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="font-mono text-lg text-ghost mb-2">Marketplace Analytics</h3>
            <p className="text-sm text-ghost-dim font-mono max-w-md mx-auto">
              Top skills leaderboard, revenue tracking, and usage analytics coming soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
