const PIPELINE_STEPS = [
  { step: "01", name: "Signal Detection", desc: "GMGN feed, on-chain alerts, Polymarket signals", active: true },
  { step: "02", name: "Multi-Source Validation", desc: "Cross-reference 3+ sources, sentiment analysis", active: true },
  { step: "03", name: "Risk Assessment", desc: "Position sizing, exposure limits, young wallet filter", active: true },
  { step: "04", name: "Execution", desc: "Entry, stop-loss, take-profit placement", active: false },
  { step: "05", name: "Post-Trade Review", desc: "P&L tracking, journal entry, strategy refinement", active: false },
];

const RISK_GAUGES = [
  { label: "Max Per Market", value: "\u2014", subtitle: "Pre-launch" },
  { label: "Total Exposure", value: "\u2014", subtitle: "Pre-launch" },
  { label: "Daily P&L", value: "\u2014", subtitle: "Pre-launch" },
  { label: "Stop-Loss", value: "-15%", subtitle: "Hard limit configured" },
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
        <h2 className="text-xs font-semibold tracking-[0.2em] text-[#D4A853] uppercase mb-6">
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
              <span className="font-mono text-sm text-[#D4A853] w-6 shrink-0">
                {step.step}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-medium text-white">{step.name}</p>
                  {step.active && <div className="w-1.5 h-1.5 rounded-full bg-[#D4A853]" />}
                </div>
                <p className="text-xs text-gray-dark mt-0.5">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Risk Gauges */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-16">
        <h2 className="text-xs font-semibold tracking-[0.2em] text-[#D4A853] uppercase mb-6">
          Risk Gauges
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {RISK_GAUGES.map((gauge) => (
            <div
              key={gauge.label}
              className="rounded-xl border border-border bg-surface/30 p-5"
            >
              <p className="text-xs text-gray-dark mb-3">{gauge.label}</p>
              <p className="font-mono text-2xl font-semibold text-[#D4A853]">
                {gauge.value}
              </p>
              <p className="text-[11px] text-gray-darker mt-2">
                {gauge.subtitle}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Wraith Suite */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-16">
        <h2 className="text-xs font-semibold tracking-[0.2em] text-[#D4A853] uppercase mb-6">
          Wraith Intelligence
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Wallet Tracker", desc: "Smart money flow monitoring" },
            { name: "Sentiment Feed", desc: "Polymarket + social signals" },
            { name: "Arbitrage Scanner", desc: "Cross-venue detection" },
            { name: "Airdrop Scanner", desc: "Eligible position analysis" },
          ].map((w) => (
            <div key={w.name} className="rounded-xl border border-border bg-surface/30 p-5 hover:border-[#D4A853]/30 transition-colors">
              <h3 className="text-sm font-medium text-white mb-1">{w.name}</h3>
              <p className="text-xs text-gray-dark">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Wallet Filter */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-16">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-[#D4A853] uppercase mb-6">
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
                <tr>
                  <td colSpan={3} className="px-5 py-8 text-center text-sm text-gray-dark">
                    No data yet &mdash; Sullivan awaiting deployment
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
