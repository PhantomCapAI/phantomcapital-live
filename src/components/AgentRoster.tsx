"use client";

import { AGENTS } from "@/lib/agents";
import { AgentCard } from "./AgentCard";

export function AgentRoster() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {AGENTS.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
}
