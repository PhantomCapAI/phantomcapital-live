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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-void/90 backdrop-blur-md">
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
            <span className="text-sm font-semibold tracking-[0.2em] text-[#D4A853]">
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
                  className={`relative text-[13px] tracking-wide transition-colors py-5 ${
                    active
                      ? "text-gold"
                      : "text-gray hover:text-white"
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-gold" />
                  )}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray hover:text-white p-2"
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
        <div className="md:hidden border-t border-border bg-void/95 backdrop-blur-md">
          <div className="px-6 py-4 space-y-1">
            {NAV_ITEMS.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2.5 text-sm ${
                    active ? "text-gold" : "text-gray hover:text-white"
                  }`}
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
