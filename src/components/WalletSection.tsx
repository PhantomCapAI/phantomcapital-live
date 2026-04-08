"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export function WalletSection() {
  const { publicKey, disconnect, connected } = useWallet();

  return (
    <div className="text-center">
      <h3 className="text-lg font-medium text-white mb-3">
        Phantom Agent Analysis
      </h3>
      <p className="text-sm text-gray-dark max-w-sm mx-auto mb-2">
        Connect your wallet to receive a personalized analysis from the fleet.
      </p>
      <p className="text-xs text-[#D4A853]/60 mb-6">
        Read-only access — we never request signing permission
      </p>

      <div className="flex justify-center mb-8">
        {connected && publicKey ? (
          <div className="flex flex-col items-center gap-3">
            <div className="px-4 py-2 rounded-lg bg-surface border border-border font-mono text-sm text-white">
              {publicKey.toBase58().slice(0, 6)}...{publicKey.toBase58().slice(-4)}
            </div>
            <button
              onClick={() => disconnect()}
              className="text-xs text-gray-dark hover:text-white transition-colors"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <WalletMultiButton />
        )}
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface/50 border border-border text-left">
          <span className="text-[#D4A853]">&#x1f512;</span>
          <span className="text-[11px] text-gray-dark">Protected by Solana Wallet Adapter</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface/50 border border-border text-left">
          <span className="text-[#D4A853]">&#x1f441;</span>
          <span className="text-[11px] text-gray-dark">Read-only — no signing permissions</span>
        </div>
        <a
          href="https://github.com/PhantomCapAI/phantomcapital-live"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface/50 border border-border text-left hover:border-[#D4A853]/30 transition-colors"
        >
          <span className="text-[#D4A853]">&#x1f4bb;</span>
          <span className="text-[11px] text-gray-dark">Open source — verify our code</span>
        </a>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface/50 border border-border text-left">
          <span className="text-[#D4A853]">&#x1f6e1;</span>
          <span className="text-[11px] text-gray-dark">Security monitored by Cipher</span>
        </div>
      </div>
    </div>
  );
}
