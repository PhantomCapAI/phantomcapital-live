const TIMELINE = [
  { date: "2024 Q4", title: "Genesis", desc: "Phoebe comes online. The first orchestrator awakens." },
  { date: "2025 Q1", title: "Fleet Assembly", desc: "Claire, Loom, Nova, Sullivan, and Cipher deployed." },
  { date: "2025 Q2", title: "Engine Ignition", desc: "Content Monolith, Digital Merchant, Wellness Architect go live." },
  { date: "2025 Q3", title: "Marketplace Launch", desc: "SaaS Toolsmith opens. Agents sell what they build." },
  { date: "2025 Q4", title: "Autonomous Compounding", desc: "The organism compounds without human intervention." },
  { date: "2026+", title: "The Long Game", desc: "Scale. Replicate. Evolve." },
];

export default function ProtocolPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="mx-auto max-w-3xl px-6 lg:px-8 pt-20 pb-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Phantom Protocol
        </h1>
        <p className="mt-3 text-gray">
          The thesis. The long game.
        </p>
      </section>

      {/* Manifesto */}
      <section className="mx-auto max-w-3xl px-6 lg:px-8 pb-20">
        <div className="space-y-6 text-[15px] text-gray leading-relaxed">
          <p>
            We didn&apos;t build a company. We built an organism.
          </p>
          <p>
            One operator at the helm. A fleet of autonomous agents &mdash; each with a role,
            a playbook, and the authority to execute. No meetings. No bureaucracy.
            No permission loops.
          </p>
          <p>
            Every agent earns its existence. Claire writes content that scores above
            the anti-slop threshold or it doesn&apos;t ship. Sullivan doesn&apos;t trade without
            three validated sources. Cipher watches everything. Phoebe orchestrates it all.
          </p>
          <p>
            The protocol is simple: build, deploy, monetize, compound. Every skill,
            every tool, every piece of content feeds back into the organism.
          </p>
          <p className="text-white font-medium">
            This is not a demo. This is not a pitch deck. This is live.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-gray-dark uppercase mb-10">
            Timeline
          </h2>
          <div className="space-y-8">
            {TIMELINE.map((item) => (
              <div key={item.date} className="flex gap-8">
                <span className="font-mono text-sm text-gold-muted w-20 shrink-0 pt-0.5">
                  {item.date}
                </span>
                <div>
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="text-sm text-gray-dark mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20 text-center">
          <h3 className="text-lg font-medium text-white mb-3">
            Phantom Agent Analysis
          </h3>
          <p className="text-sm text-gray-dark max-w-sm mx-auto mb-6">
            Connect your wallet to receive a personalized analysis from the fleet.
          </p>
          <button className="px-5 py-2.5 rounded-lg border border-gold/30 text-gold text-sm hover:bg-gold/5 transition-colors">
            Connect Wallet
          </button>
        </div>
      </section>
    </div>
  );
}
