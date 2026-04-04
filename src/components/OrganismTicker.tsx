"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TickerItem {
  label: string;
  value: string;
  color: string;
  trend?: "up" | "down" | "neutral";
}

const INITIAL_METRICS: TickerItem[] = [
  { label: "Phoebe Uptime", value: "99.7%", color: "#00f0ff", trend: "up" },
  { label: "Claire Views", value: "12,340", color: "#f472b6", trend: "up" },
  { label: "Sullivan P&L", value: "+$4,870", color: "#ff2244", trend: "up" },
  { label: "Nova Revenue", value: "$2,140", color: "#fbbf24", trend: "up" },
  { label: "Loom Deploys", value: "28", color: "#c026d3", trend: "neutral" },
  { label: "Cipher Threats", value: "0 Active", color: "#4ade80", trend: "neutral" },
  { label: "Marketplace Skills", value: "14", color: "#00f0ff", trend: "up" },
  { label: "Total Agents", value: "6 Online", color: "#00f0ff", trend: "neutral" },
];

export function OrganismTicker() {
  const [metrics, setMetrics] = useState(INITIAL_METRICS);

  // Simulate live metric fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((m) => {
          if (m.label === "Claire Views") {
            const base = 12340;
            const jitter = Math.floor(Math.random() * 50);
            return { ...m, value: (base + jitter).toLocaleString() };
          }
          return m;
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden border-y border-cyan/10 bg-void-light/50 backdrop-blur-sm">
      <motion.div
        className="flex gap-8 py-3 px-4 whitespace-nowrap"
        animate={{ x: [0, -1200] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {/* Double the items for seamless loop */}
        {[...metrics, ...metrics].map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-xs font-mono">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: item.color, boxShadow: `0 0 6px ${item.color}` }}
            />
            <span className="text-ghost-dim">{item.label}</span>
            <span style={{ color: item.color }} className="font-semibold">
              {item.value}
            </span>
            {item.trend === "up" && <span className="text-green-400 text-[10px]">▲</span>}
            {item.trend === "down" && <span className="text-red-400 text-[10px]">▼</span>}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
