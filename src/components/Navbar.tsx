"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { href: "/", label: "Dashboard", icon: "◈" },
  { href: "/fleet", label: "The Fleet", icon: "⬡" },
  { href: "/engines", label: "Engines", icon: "⚙" },
  { href: "/command-center", label: "Command Center", icon: "▣" },
  { href: "/marketplace", label: "Marketplace", icon: "◉" },
  { href: "/protocol", label: "Protocol", icon: "Ψ" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-cyan/10 bg-void/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-8 w-8 rounded-full bg-cyan/20 flex items-center justify-center box-glow-cyan group-hover:bg-cyan/30 transition-colors">
              <span className="text-cyan text-sm font-bold">P</span>
              <div className="absolute inset-0 rounded-full border border-cyan/30 animate-[pulse-ring_3s_ease-in-out_infinite]" />
            </div>
            <span className="font-mono text-cyan text-sm tracking-widest glow-cyan hidden sm:block">
              PHANTOM CAPITAL
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(({ href, label, icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-3 py-2 text-xs font-mono tracking-wider transition-colors rounded ${
                    active
                      ? "text-cyan glow-cyan"
                      : "text-ghost-dim hover:text-cyan"
                  }`}
                >
                  <span className="mr-1.5 opacity-60">{icon}</span>
                  {label.toUpperCase()}
                  {active && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-px bg-cyan shadow-[0_0_8px_var(--color-cyan)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-cyan p-2"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {mobileOpen ? (
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" fill="none" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-cyan/10 bg-void/95 backdrop-blur-xl"
          >
            <div className="px-4 py-3 space-y-1">
              {NAV_ITEMS.map(({ href, label, icon }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2 text-xs font-mono tracking-wider rounded ${
                      active
                        ? "text-cyan glow-cyan bg-cyan/5"
                        : "text-ghost-dim hover:text-cyan"
                    }`}
                  >
                    <span className="mr-2 opacity-60">{icon}</span>
                    {label.toUpperCase()}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
