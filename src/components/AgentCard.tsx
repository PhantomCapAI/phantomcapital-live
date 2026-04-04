"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Agent } from "@/lib/agents";

export function AgentCard({ agent }: { agent: Agent }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setExpanded(true)}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="relative group text-left w-full rounded-lg border border-white/5 bg-void-light/60 backdrop-blur-sm p-5 transition-colors hover:border-cyan/20"
        style={{
          boxShadow: `0 0 0 0 ${agent.color}00`,
        }}
      >
        {/* Status indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5">
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: agent.color }}
          />
          <span className="text-[10px] font-mono text-ghost-dim uppercase">
            {agent.status}
          </span>
        </div>

        {/* Agent identity */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
            style={{
              backgroundColor: `${agent.color}15`,
              border: `1px solid ${agent.color}30`,
            }}
          >
            {agent.icon}
          </div>
          <div>
            <h3
              className="font-mono text-sm font-bold tracking-wide"
              style={{ color: agent.color }}
            >
              {agent.name}
            </h3>
            <p className="text-[11px] text-ghost-dim">{agent.role}</p>
          </div>
        </div>

        <p className="text-xs text-ghost-dim leading-relaxed line-clamp-2">
          {agent.description}
        </p>

        {/* Mini metrics */}
        <div className="mt-3 flex gap-4">
          {agent.metrics.slice(0, 2).map((m) => (
            <div key={m.label} className="text-[10px] font-mono">
              <span className="text-ghost-dim">{m.label}: </span>
              <span style={{ color: agent.color }}>{m.value}</span>
            </div>
          ))}
        </div>

        {/* Bottom glow line */}
        <div
          className="absolute bottom-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: agent.color }}
        />
      </motion.button>

      {/* Holographic modal */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-xl border bg-void-light/95 backdrop-blur-xl p-6 scanlines"
              style={{ borderColor: `${agent.color}30` }}
            >
              {/* Close button */}
              <button
                onClick={() => setExpanded(false)}
                className="absolute top-4 right-4 text-ghost-dim hover:text-ghost text-sm"
              >
                ✕
              </button>

              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                  style={{
                    backgroundColor: `${agent.color}15`,
                    border: `1px solid ${agent.color}40`,
                    boxShadow: `0 0 20px ${agent.color}20`,
                  }}
                >
                  {agent.icon}
                </div>
                <div>
                  <h2
                    className="font-mono text-lg font-bold tracking-wide"
                    style={{ color: agent.color }}
                  >
                    {agent.name}
                  </h2>
                  <p className="text-xs text-ghost-dim">{agent.role}</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: agent.color }}
                    />
                    <span className="text-[10px] font-mono uppercase" style={{ color: agent.color }}>
                      {agent.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-ghost-dim leading-relaxed mb-5">
                {agent.description}
              </p>

              {/* Metrics grid */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {agent.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-white/5 bg-void/50 p-3 text-center"
                  >
                    <div
                      className="text-lg font-mono font-bold"
                      style={{ color: agent.color }}
                    >
                      {m.value}
                    </div>
                    <div className="text-[10px] text-ghost-dim mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Simulated activity feed */}
              <div className="border-t border-white/5 pt-4">
                <h4 className="text-[10px] font-mono text-ghost-dim mb-2 tracking-widest uppercase">
                  Recent Activity
                </h4>
                <div className="space-y-2 text-xs font-mono text-ghost-dim">
                  <div className="flex gap-2">
                    <span style={{ color: agent.color }}>▸</span>
                    <span>Pipeline task completed — 2m ago</span>
                  </div>
                  <div className="flex gap-2">
                    <span style={{ color: agent.color }}>▸</span>
                    <span>Health check passed — 5m ago</span>
                  </div>
                  <div className="flex gap-2">
                    <span style={{ color: agent.color }}>▸</span>
                    <span>Metrics synced to dashboard — 12m ago</span>
                  </div>
                </div>
              </div>

              {/* Talk to Agent teaser */}
              <button
                className="mt-5 w-full rounded-lg border py-2.5 text-xs font-mono tracking-wider transition-colors hover:bg-cyan/5"
                style={{
                  borderColor: `${agent.color}30`,
                  color: agent.color,
                }}
              >
                TALK TO {agent.name.toUpperCase()} →
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
