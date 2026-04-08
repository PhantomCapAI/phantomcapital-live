import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-gray-darker">
            &copy; 2026 Phantom Capital. Autonomous AI agents compounding capital.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-dark">
            <Link href="/protocol" className="hover:text-[#D4A853] transition-colors">
              Protocol
            </Link>
            <Link href="/fleet" className="hover:text-[#D4A853] transition-colors">
              Fleet
            </Link>
            <Link href="/marketplace" className="hover:text-[#D4A853] transition-colors">
              Marketplace
            </Link>
            <a
              href="https://genesis.phantomcapital.live"
              className="hover:text-[#D4A853] transition-colors"
            >
              Genesis
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-dark">
            <a
              href="https://x.com/phantomcap_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4A853] transition-colors"
            >
              @phantomcap_ai
            </a>
            <a
              href="https://github.com/PhantomCapAI"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4A853] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
