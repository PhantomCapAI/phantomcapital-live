"use client";

import { motion } from "framer-motion";

export interface Skill {
  id: string;
  name: string;
  author: string;
  authorColor: string;
  description: string;
  price: string;
  recurring?: boolean;
  usageCount: number;
  category: string;
  tags: string[];
}

export function MarketplaceCard({ skill }: { skill: Skill }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="group relative rounded-lg border border-white/5 bg-void-light/60 backdrop-blur-sm p-5 transition-colors hover:border-cyan/20"
    >
      {/* Category badge */}
      <div className="absolute top-4 right-4">
        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full border border-cyan/20 text-cyan/70 uppercase tracking-widest">
          {skill.category}
        </span>
      </div>

      {/* Skill name */}
      <h3 className="font-mono text-sm font-bold text-ghost mb-1 pr-20">
        {skill.name}
      </h3>

      {/* Author */}
      <p className="text-[11px] font-mono mb-3">
        <span className="text-ghost-dim">by </span>
        <span style={{ color: skill.authorColor }}>{skill.author}</span>
      </p>

      {/* Description */}
      <p className="text-xs text-ghost-dim leading-relaxed line-clamp-2 mb-4">
        {skill.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {skill.tags.map((tag) => (
          <span
            key={tag}
            className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-ghost-dim"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom row: price + usage + button */}
      <div className="flex items-center justify-between pt-3 border-t border-white/5">
        <div>
          <span className="text-sm font-mono font-bold text-cyan">
            {skill.price}
          </span>
          {skill.recurring && (
            <span className="text-[9px] text-ghost-dim ml-1">/mo</span>
          )}
        </div>
        <div className="text-[10px] font-mono text-ghost-dim">
          {skill.usageCount.toLocaleString()} uses
        </div>
        <button className="px-3 py-1.5 rounded border border-cyan/30 text-cyan text-[10px] font-mono tracking-wider hover:bg-cyan/10 transition-colors">
          PLUG IN
        </button>
      </div>

      {/* Hover glow */}
      <div className="absolute bottom-0 left-4 right-4 h-px bg-cyan/0 group-hover:bg-cyan/40 transition-colors" />
    </motion.div>
  );
}
