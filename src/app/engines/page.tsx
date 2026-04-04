"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ENGINES = [
  {
    name: "Content Monolith",
    agent: "Claire",
    color: "#f472b6",
    icon: "✦",
    description: "Anti-slop content engine. Every piece scores 7+ or it doesn't ship. Blog, social, video scripts — all channels.",
    features: ["Content Feed", "Anti-Slop Scoring", "Generate Live Demo"],
    status: "Active",
    link: "/engines",
  },
  {
    name: "Digital Merchant",
    agent: "Nova",
    color: "#fbbf24",
    icon: "★",
    description: "Affiliate revenue engine powering phantomcapital.live. Blog previews, affiliate heatmaps, conversion optimization.",
    features: ["Blog Previews", "Affiliate Heatmap", "Revenue Tracking"],
    status: "Active",
    link: "/engines",
  },
  {
    name: "Wellness Architect",
    agent: "System",
    color: "#4ade80",
    icon: "◎",
    description: "DailyWisdomHub pipeline — curated wisdom, wellness content, subscription teasers.",
    features: ["Quote Generator", "Subscription Teaser", "Daily Digest"],
    status: "Active",
    link: "/engines",
  },
  {
    name: "SaaS Toolsmith",
    agent: "Loom",
    color: "#c026d3",
    icon: "⬡",
    description: "The build engine. Ships production-grade tools, skills, and marketplace products autonomously.",
    features: ["Skill Builder", "Marketplace Integration", "Auto-Deploy"],
    status: "Active",
    link: "/marketplace",
  },
];

export default function EnginesPage() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-mono text-2xl sm:text-3xl font-bold tracking-tight">
            <span className="text-purple glow-purple">Engines</span>
          </h1>
          <p className="text-sm text-ghost-dim font-mono mt-2">
            The neural grid — four autonomous engines driving the organism.
          </p>
        </div>

        {/* Engine grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ENGINES.map((engine, i) => (
            <motion.div
              key={engine.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-xl border border-white/5 bg-void-light/50 backdrop-blur-sm p-6 hover:border-cyan/15 transition-all"
            >
              {/* Status */}
              <div className="absolute top-5 right-5 flex items-center gap-1.5">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: engine.color }}
                />
                <span className="text-[10px] font-mono text-ghost-dim uppercase">
                  {engine.status}
                </span>
              </div>

              {/* Icon + name */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                  style={{
                    backgroundColor: `${engine.color}15`,
                    border: `1px solid ${engine.color}30`,
                  }}
                >
                  {engine.icon}
                </div>
                <div>
                  <h3 className="font-mono text-base font-bold text-ghost">
                    {engine.name}
                  </h3>
                  <p className="text-[11px] font-mono" style={{ color: engine.color }}>
                    Operated by {engine.agent}
                  </p>
                </div>
              </div>

              <p className="text-sm text-ghost-dim leading-relaxed mb-5">
                {engine.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-5">
                {engine.features.map((f) => (
                  <span
                    key={f}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-full border transition-colors"
                    style={{
                      borderColor: `${engine.color}25`,
                      color: engine.color,
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Link
                href={engine.link}
                className="text-xs font-mono tracking-wider hover:underline"
                style={{ color: engine.color }}
              >
                EXPLORE →
              </Link>

              {/* Bottom glow */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: engine.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
