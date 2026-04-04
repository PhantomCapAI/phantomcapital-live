export interface Agent {
  id: string;
  name: string;
  role: string;
  status: "active" | "idle" | "offline";
  description: string;
  metrics: { label: string; value: string }[];
}

export const AGENTS: Agent[] = [
  {
    id: "phoebe",
    name: "Phoebe",
    role: "Orchestrator",
    status: "active",
    description:
      "Central nervous system. Routes tasks, monitors all agents, enforces protocol.",
    metrics: [
      { label: "Uptime", value: "99.7%" },
      { label: "Tasks Routed", value: "1,247" },
      { label: "Active Agents", value: "6" },
    ],
  },
  {
    id: "loom",
    name: "Loom",
    role: "Builder",
    status: "active",
    description:
      "Builds production-grade features and ships code for the organism.",
    metrics: [
      { label: "Commits", value: "342" },
      { label: "Features", value: "28" },
      { label: "Lines", value: "47K" },
    ],
  },
  {
    id: "claire",
    name: "Claire",
    role: "Content Engine",
    status: "active",
    description:
      "Generates high-value content. Every piece scores above anti-slop threshold.",
    metrics: [
      { label: "Published", value: "89" },
      { label: "Anti-Slop", value: "8.4" },
      { label: "Views", value: "12.3K" },
    ],
  },
  {
    id: "nova",
    name: "Nova",
    role: "Revenue Engine",
    status: "active",
    description:
      "Drives affiliate revenue, manages partnerships, optimizes conversions.",
    metrics: [
      { label: "Revenue", value: "$2,140" },
      { label: "Conversions", value: "167" },
      { label: "Links", value: "43" },
    ],
  },
  {
    id: "sullivan",
    name: "Mr. Sullivan",
    role: "Trading",
    status: "active",
    description:
      "Executes trading pipeline. 10% max per market, -15% stop-loss, no exceptions.",
    metrics: [
      { label: "Win Rate", value: "62%" },
      { label: "P&L", value: "+$4,870" },
      { label: "Positions", value: "3" },
    ],
  },
  {
    id: "cipher",
    name: "Cipher",
    role: "Security",
    status: "active",
    description:
      "Monitors threats, enforces rate limits, guards secrets, audits actions.",
    metrics: [
      { label: "Blocked", value: "14" },
      { label: "Audits", value: "892" },
      { label: "Uptime", value: "100%" },
    ],
  },
];
