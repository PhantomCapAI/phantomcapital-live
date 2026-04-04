const PIPELINE_STEPS = [
  { step: "01", name: "Signal Detection", desc: "GMGN feed, on-chain alerts, Polymarket signals", active: true },
  { step: "02", name: "Multi-Source Validation", desc: "Cross-reference 3+ sources, sentiment analysis", active: true },
  { step: "03", name: "Risk Assessment", desc: "Position sizing, exposure limits, young wallet filter", active: true },
  { step: "04", name: "Execution", desc: "Entry, stop-loss, take-profit placement", active: false },
  { step: "05", name: "Post-Trade Review", desc: "P&L tracking, journal entry, strategy refinement", active: false },
];

const RISK_GAUGES = [
  { label: "Max Per Market", value: "10%", current: 10, max: 100 },
  { label: "Total Exposure", value: "28%", current: 28, max: 40 },
  { label: "Daily P&L", value: "-3.2%", current: 3.2, max: 10 },
  { label: "Stop-Loss", value: "-15%", current: 15, max: 15 },
];

const WALLETS = [
  { address: "0x7f2...a4c1", age: "2 days", status: "rejected" as const },
  { address: "0x3d8...e912", age: "14 hours", status: "rejected" as const },
  { address: "0xb1c...f723", age: "45 days", status: "passed" as const },
  { address: "0x9e4...d156", age: "3 days", status: "rejected" as const },
];

export default function CommandCenterPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pt-20 pb-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Command Center
        </h1>
        <p className="mt-3 text-gray max-w-lg">
          Mr. Sullivan&apos;s trading terminal and Wraith intelligence suite.
        </p>
      </section>

      {/* Trading Pipeline */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-16">
        <h2 className="text-xs font-semibold tracking-[0.2em] text-gray-dark uppercase mb-6">
          Trading Pipeline
        </h2>
        <div className="space-y-px rounded-xl overflow-hidden border border-border">
          {PIPELINE_STEPS.map((step) => (
            <div
              key={step.step}
              className={`flex items-baseline gap-6 px-6 py-5 ${
                step.active ? "bg-surface/50" : "bg-surface/20 opacity-50"
              }`}
            >
              <span className="font-mono text-sm text-gold-muted w-6 shrink-0">
                {step.step}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-medium text-white">{step.name}</p>
                  {step.active && <div className="w-1.5 h-1.5 rounded-full bg-green" />}
                </div>
                <p className="text-xs text-gray-dark mt-0.5">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Risk Gauges */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-16">
        <h2 className="text-xs font-semibold tracking-[0.2em] text-gray-dark uppercase mb-6">
          Risk Gauges
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {RISK_GAUGES.map((gauge) => {
            const pct = Math.min((gauge.current / gauge.max) * 100, 100);
            const danger = pct > 80;
            return (
              <div
                key={gauge.label}
                className="rounded-xl border border-border bg-surface/30 p-5"
              >
                <p className="text-xs text-gray-dark mb-3">{gauge.label}</p>
                <p className={`font-mono text-2xl font-semibold ${danger ? "text-red" : "text-white"}`}>
                  {gauge.value}
                </p>
                <div className="mt-3 w-full h-1 rounded-full bg-border">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: danger ? "#EF4444" : "#D4A853",
                    }}
                  />
                </div>
                <p className="text-[11px] text-gray-darker mt-2">
                  Limit: {gauge.max}%
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Wraith Suite */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-16">
        <h2 className="text-xs font-semibold tracking-[0.2em] text-gray-dark uppercase mb-6">
          Wraith Intelligence
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Wallet Tracker", desc: "Smart money flow monitoring" },
            { name: "Sentiment Feed", desc: "Polymarket + social signals" },
            { name: "Arbitrage Scanner", desc: "Cross-venue detection" },
            { name: "Airdrop Scanner", desc: "Eligible position analysis" },
          ].map((w) => (
            <div key={w.name} className="rounded-xl border border-border bg-surface/30 p-5">
              <h3 className="text-sm font-medium text-white mb-1">{w.name}</h3>
              <p className="text-xs text-gray-dark">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Wallet Filter */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-16">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-gray-dark uppercase mb-6">
            Young Wallet Filter
          </h2>
          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface/30">
                  <th className="text-left px-5 py-3 text-xs text-gray-dark font-medium">Wallet</th>
                  <th className="text-left px-5 py-3 text-xs text-gray-dark font-medium">Age</th>
                  <th className="text-left px-5 py-3 text-xs text-gray-dark font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {WALLETS.map((w, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="px-5 py-3 font-mono text-xs text-gray">{w.address}</td>
                    <td className="px-5 py-3 font-mono text-xs text-gray">{w.age}</td>
                    <td className="px-5 py-3">
                      <span className={`text-xs font-medium ${
                        w.status === "passed" ? "text-green" : "text-red"
                      }`}>
                        {w.status === "passed" ? "Passed" : "Rejected"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
