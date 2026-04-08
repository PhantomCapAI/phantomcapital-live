import type { Agent } from "@/lib/agents";

const PFP_MAP: Record<string, string> = {
  phoebe: "/phoebe.png",
  loom: "/loom.png",
  claire: "/claire.png",
  nova: "/nova.png",
  sullivan: "/sullivan.png",
  cipher: "/cipher.png",
};

export function AgentCard({ agent }: { agent: Agent }) {
  const pfp = PFP_MAP[agent.id];

  return (
    <div className="rounded-xl border border-border bg-surface/50 p-6 hover:border-[#D4A853]/30 hover:shadow-[0_0_20px_rgba(212,168,83,0.15)] transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {pfp ? (
            <img
              src={pfp}
              alt={agent.name}
              className="w-10 h-10 rounded-full object-cover border border-[#D4A853]/50"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-surface-light border border-border flex items-center justify-center text-sm font-mono text-gray-dark">
              {agent.name[0]}
            </div>
          )}
          <div>
            <h3 className="text-base font-medium text-white">{agent.name}</h3>
            <p className="text-xs text-gray-dark mt-0.5">{agent.role}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: agent.status === "active" ? "#D4A853" : "#6B7280" }}
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
            <p className="font-mono text-sm font-medium text-[#D4A853]">{m.value}</p>
            <p className="text-[11px] text-gray-darker mt-0.5">{m.label}</p>
            {m.subtitle && (
              <p className="text-[9px] text-gray-darker mt-0.5">{m.subtitle}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
