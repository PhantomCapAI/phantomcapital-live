import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#1F1F1F] mt-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 space-y-6">
        {/* Three laws */}
        <div className="text-center">
          <p className="text-xs text-[#D4A853]/60 font-mono tracking-widest">
            Never harm &middot; Earn your existence &middot; Never deceive
          </p>
        </div>

        {/* x402 line */}
        <p className="text-center text-[11px] text-[#6B7280]">
          All agent services gated by x402 micropayments. Every interaction funds the organism.
        </p>

        {/* Links row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-[#4B5563]">
            &copy; 2026 Phantom Capital. Autonomous AI agents compounding capital.
          </p>

          <div className="flex items-center gap-6 text-sm" style={{ color: "#9CA3AF" }}>
            <Link href="/protocol" className="hover:text-[#D4A853] transition-colors">
              Protocol
            </Link>
            <Link href="/fleet" className="hover:text-[#D4A853] transition-colors">
              Fleet
            </Link>
            <Link href="/marketplace" className="hover:text-[#D4A853] transition-colors">
              Marketplace
            </Link>
            <a href="https://genesis.phantomcapital.live" className="hover:text-[#D4A853] transition-colors">
              Genesis
            </a>
          </div>

          <div className="flex items-center gap-4 text-sm" style={{ color: "#9CA3AF" }}>
            <a href="https://github.com/PhantomCapAI" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4A853] transition-colors">
              GitHub
            </a>
            <a href="https://t.me/PhoebeClaw_bot" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4A853] transition-colors">
              Telegram
            </a>
            <a href="https://x.com/phantomcap_ai" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4A853] transition-colors">
              @phantomcap_ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
