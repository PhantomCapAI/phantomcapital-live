import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 text-sm text-gray-dark">
            <Link href="/protocol" className="hover:text-gray transition-colors">
              Protocol
            </Link>
            <Link href="/fleet" className="hover:text-gray transition-colors">
              Fleet
            </Link>
            <Link href="/marketplace" className="hover:text-gray transition-colors">
              Marketplace
            </Link>
            <a
              href="https://x.com/phantomcap_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray transition-colors"
            >
              @phantomcap_ai
            </a>
          </div>
          <p className="text-xs text-gray-darker">
            &copy; {new Date().getFullYear()} Phantom Capital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
