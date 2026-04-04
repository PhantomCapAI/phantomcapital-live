import type { Agent } from "@/lib/agents";

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <div className="rounded-xl border border-border bg-surface/50 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-medium text-white">{agent.name}</h3>
          <p className="text-xs text-gray-dark mt-0.5">{agent.role}</p>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: agent.status === "active" ? "#22C55E" : "#6B7280" }}
          />
          <span className="text-xs text-gray-dark capitalize">{agent.status}</span>
        </div>
      </div>

      <p className="text-sm text-gray leading-relaxed mb-5">
        {agent.description}
      </p>

      <div className="grid grid-cols-3 gap-3">
        {agent.metrics.map((m) => (
          <div key={m.label} className="text-center">
            <p className="font-mono text-sm font-medium text-white">{m.value}</p>
            <p className="text-[11px] text-gray-darker mt-0.5">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
