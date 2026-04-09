"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Dashboard" },
  { href: "/fleet", label: "Fleet" },
  { href: "/engines", label: "Engines" },
  { href: "/command-center", label: "Command Center" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/protocol", label: "Protocol" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1F1F1F] bg-[#0A0A0A]/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Phantom Capital"
              width={32}
              height={32}
              className="rounded"
            />
            <span
              className="text-sm font-semibold tracking-[0.2em]"
              style={{
                background: "linear-gradient(135deg, #D4A853 0%, #F5E6A3 50%, #D4A853 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 8px rgba(212,168,83,0.3))",
              }}
            >
              PHANTOM CAPITAL
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  data-active={active ? "true" : undefined}
                  className="relative text-[13px] tracking-wide py-5"
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-[#D4A853]" />
                  )}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 transition-colors"
            style={{ color: "#9CA3AF" }}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#1F1F1F] bg-[#0A0A0A]/95 backdrop-blur-md">
          <div className="px-6 py-4 space-y-1">
            {NAV_ITEMS.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  data-active={active ? "true" : undefined}
                  className="block py-2.5 text-sm"
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
