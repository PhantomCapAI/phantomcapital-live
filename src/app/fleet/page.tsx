import { AGENTS } from "@/lib/agents";
import { AgentCard } from "@/components/AgentCard";

const PIPELINE_STAGES = [
  { step: "01", name: "Signal Detection", desc: "Identify opportunities from feeds and on-chain data" },
  { step: "02", name: "Validation", desc: "Cross-reference sources, sentiment analysis, scoring" },
  { step: "03", name: "Build", desc: "Code, content, or strategy creation" },
  { step: "04", name: "Deploy", desc: "Ship to production" },
  { step: "05", name: "Monetize", desc: "Revenue generation and compounding" },
];

export default function FleetPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pt-20 pb-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          The Fleet
        </h1>
        <p className="mt-3 text-gray max-w-lg">
          Every autonomous agent in the organism. Each with a role, a playbook, and the authority to execute.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AGENTS.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-20">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-[#D4A853] uppercase mb-10">
            Phantom Pipeline
          </h2>
          <div className="space-y-px rounded-xl overflow-hidden border border-border">
            {PIPELINE_STAGES.map((stage) => (
              <div
                key={stage.step}
                className="flex items-baseline gap-6 bg-surface/30 px-6 py-5"
              >
                <span className="font-mono text-sm text-[#D4A853] w-6 shrink-0">
                  {stage.step}
                </span>
                <div>
                  <p className="text-sm font-medium text-white">{stage.name}</p>
                  <p className="text-xs text-gray-dark mt-0.5">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
