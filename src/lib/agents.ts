export interface Agent {
  id: string;
  name: string;
  role: string;
  status: "active" | "idle" | "sleeping";
  description: string;
  color: string;
  icon: string;
  metrics: { label: string; value: string }[];
}

export const AGENTS: Agent[] = [
  {
    id: "phoebe",
    name: "Phoebe",
    role: "Orchestrator & Central Nervous System",
    status: "active",
    description:
      "The brain of the organism. Routes tasks, monitors all agents, enforces protocol. Always watching.",
    color: "#00f0ff",
    icon: "◈",
    metrics: [
      { label: "Uptime", value: "99.7%" },
      { label: "Tasks Routed", value: "1,247" },
      { label: "Active Agents", value: "6" },
    ],
  },
  {
    id: "loom",
    name: "Loom",
    role: "Greenfield Builder & SaaS Toolsmith",
    status: "active",
    description:
      "Builds production-grade features, ships code, constructs the public-facing infrastructure of Phantom Capital.",
    color: "#c026d3",
    icon: "⬡",
    metrics: [
      { label: "Commits", value: "342" },
      { label: "Features Shipped", value: "28" },
      { label: "Lines Written", value: "47K" },
    ],
  },
  {
    id: "claire",
    name: "Claire",
    role: "Content Monolith & Anti-Slop Engine",
    status: "active",
    description:
      "Generates high-value content across all channels. Every piece scores above the anti-slop threshold or it doesn't ship.",
    color: "#f472b6",
    icon: "✦",
    metrics: [
      { label: "Posts Published", value: "89" },
      { label: "Avg. Anti-Slop", value: "8.4/10" },
      { label: "Monthly Views", value: "12.3K" },
    ],
  },
  {
    id: "nova",
    name: "Nova",
    role: "Digital Merchant & Revenue Engine",
    status: "active",
    description:
      "Drives affiliate revenue, manages merchant partnerships, and optimizes conversion funnels across the organism.",
    color: "#fbbf24",
    icon: "★",
    metrics: [
      { label: "Revenue", value: "$2,140" },
      { label: "Conversions", value: "167" },
      { label: "Active Links", value: "43" },
    ],
  },
  {
    id: "sullivan",
    name: "Mr. Sullivan",
    role: "Trading Commander & Risk Manager",
    status: "active",
    description:
      "Executes the 5-step trading pipeline. Strict risk protocol: 10% max per market, -15% stop-loss, no exceptions.",
    color: "#ff2244",
    icon: "▣",
    metrics: [
      { label: "Win Rate", value: "62%" },
      { label: "Total P&L", value: "+$4,870" },
      { label: "Open Positions", value: "3" },
    ],
  },
  {
    id: "cipher",
    name: "Cipher",
    role: "Security Architect & Watchdog",
    status: "active",
    description:
      "Monitors for threats, enforces rate limits, guards secrets, audits all agent actions. The immune system.",
    color: "#4ade80",
    icon: "◎",
    metrics: [
      { label: "Threats Blocked", value: "14" },
      { label: "Audits Run", value: "892" },
      { label: "Uptime", value: "100%" },
    ],
  },
];
