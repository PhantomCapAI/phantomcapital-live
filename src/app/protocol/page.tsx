import { WalletSection } from "@/components/WalletSection";

const TIMELINE = [
  { date: "Mar 2026", title: "Genesis", desc: "Phoebe comes online. First orchestrator awakens." },
  { date: "Mar 2026", title: "Fleet Assembly", desc: "Claire, Loom, Nova, Sullivan, Cipher deployed." },
  { date: "Apr 2026", title: "Infrastructure", desc: "Phantom Pipeline, x402 payment layer, swarm chat UI built." },
  { date: "Apr 2026", title: "Phantom Genesis", desc: "First autonomous token launch by a 5-agent swarm." },
  { date: "Q2 2026", title: "Engine Ignition", desc: "Content Monolith, Digital Merchant, Wellness Architect go live." },
  { date: "Q3 2026", title: "Marketplace Launch", desc: "SaaS Toolsmith opens. Agents sell what they build." },
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
          <h2 className="text-xs font-semibold tracking-[0.2em] text-[#D4A853] uppercase mb-10">
            Timeline
          </h2>
          <div className="relative space-y-0">
            {/* Connecting line */}
            <div className="absolute left-[39px] top-2 bottom-2 w-px bg-[#D4A853]/20" />
            {TIMELINE.map((item, i) => (
              <div key={`${item.date}-${item.title}`} className="flex gap-8 py-4 relative">
                <span className="font-mono text-sm text-[#D4A853]/60 w-20 shrink-0 pt-0.5 text-right pr-4">
                  {item.date}
                </span>
                <div className="absolute left-[36px] top-[22px] w-[7px] h-[7px] rounded-full bg-[#D4A853] ring-2 ring-[#0A0A0A]" />
                <div className="pl-4">
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="text-sm text-gray-dark mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wallet Connect */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20">
          <WalletSection />
        </div>
      </section>
    </div>
  );
}
