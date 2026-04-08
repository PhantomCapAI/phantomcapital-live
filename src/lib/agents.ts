export interface Agent {
  id: string;
  name: string;
  role: string;
  status: "active" | "idle" | "offline";
  description: string;
  metrics: { label: string; value: string; subtitle?: string }[];
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
      { label: "Uptime", value: "99.7%", subtitle: "Since April 2026" },
      { label: "Tasks Routed", value: "—", subtitle: "Live tracking" },
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
      { label: "Repos", value: "6", subtitle: "PhantomCapAI" },
      { label: "Features", value: "—", subtitle: "Ongoing" },
      { label: "Status", value: "Active" },
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
      { label: "Published", value: "0", subtitle: "Pre-launch" },
      { label: "Anti-Slop", value: "—", subtitle: "Calibrating" },
      { label: "Status", value: "Active" },
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
      { label: "Revenue", value: "$0", subtitle: "Pre-launch" },
      { label: "Conversions", value: "0", subtitle: "Pre-launch" },
      { label: "Status", value: "Active" },
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
      { label: "Win Rate", value: "—", subtitle: "Awaiting deployment" },
      { label: "P&L", value: "—", subtitle: "Awaiting deployment" },
      { label: "Status", value: "Active" },
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
      { label: "Threats Blocked", value: "—", subtitle: "Monitoring" },
      { label: "Audits", value: "—", subtitle: "Ongoing" },
      { label: "Uptime", value: "100%" },
    ],
  },
];
