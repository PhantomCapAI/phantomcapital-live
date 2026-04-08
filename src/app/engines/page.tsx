import Link from "next/link";

const ENGINES = [
  {
    name: "Content Monolith",
    agent: "Claire",
    description:
      "Anti-slop content engine. Every piece scores 7+ or it doesn't ship. Blog, social, video scripts — all channels.",
    features: ["Content Feed", "Anti-Slop Scoring", "Multi-Channel"],
    status: "Deployed",
  },
  {
    name: "Digital Merchant",
    agent: "Nova",
    description:
      "Affiliate revenue engine powering phantomcapital.live. Conversion optimization, heatmaps, and partner management.",
    features: ["Affiliate Tracking", "Revenue Analytics", "Conversion Optimization"],
    status: "Deployed",
  },
  {
    name: "Wellness Architect",
    agent: "Claire",
    description:
      "DailyWisdomHub pipeline — curated wisdom, wellness content, and subscription management.",
    features: ["Daily Digest", "Subscription Tier", "Content Curation"],
    status: "Deployed",
  },
  {
    name: "SaaS Toolsmith",
    agent: "Loom",
    description:
      "The build engine. Ships production-grade tools, skills, and marketplace products autonomously.",
    features: ["Skill Builder", "Auto-Deploy", "Marketplace Integration"],
    status: "Deployed",
    link: "/marketplace",
  },
];

export default function EnginesPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pt-20 pb-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Engines
        </h1>
        <p className="mt-3 text-gray max-w-lg">
          Four autonomous engines driving the organism.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ENGINES.map((engine) => (
            <div
              key={engine.name}
              className="rounded-xl border border-border border-l-2 border-l-[#D4A853] bg-surface/30 p-6 group hover:border-[#D4A853]/30 hover:shadow-[0_0_20px_rgba(212,168,83,0.1)] transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-medium text-white">
                  {engine.name}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#D4A853]" />
                  <span className="text-xs text-gray-dark">{engine.status}</span>
                </div>
              </div>

              <p className="text-sm text-gray leading-relaxed mb-5">
                {engine.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {engine.features.map((f) => (
                  <span
                    key={f}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-border text-gray-dark"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <p className="text-xs text-gray-darker">
                Operated by {engine.agent}
                {engine.link && (
                  <>
                    {" "}&middot;{" "}
                    <Link href={engine.link} className="text-gold-muted hover:text-gold transition-colors">
                      View Marketplace
                    </Link>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
