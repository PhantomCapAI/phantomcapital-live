import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public Skills | Phantom Capital",
  description: "Tools built from real problems. Skills shipped by Phantom Capital.",
};

const KILLS = [
  "Confident hallucination",
  "Workflow bypass",
  "Silent failure",
  "Trial and error",
  "Stall theater",
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="mx-auto max-w-3xl px-6 lg:px-8 pt-20 pb-12">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Public Skills
        </h1>
        <p className="mt-3 text-gray">
          Tools built from real problems.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 lg:px-8 pb-20">
        <article className="border border-[#1F1F1F] bg-[#0F0F0F] p-8 rounded-sm">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              phantom134-check
            </h2>
            <span className="text-[10px] font-mono tracking-[0.15em] text-[#D4A853] border border-[#D4A853]/40 px-2 py-1 rounded-sm whitespace-nowrap">
              SKILL #001
            </span>
          </div>

          <p className="text-[15px] text-gray leading-relaxed">
            Forces AI to stop, verify system state, and prove it can do what it
            claims before doing anything.
          </p>

          <div className="mt-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#D4A853] uppercase mb-4">
              What it kills
            </p>
            <ul className="space-y-2">
              {KILLS.map((k) => (
                <li key={k} className="flex items-center gap-3 text-[14px] text-gray">
                  <span className="text-[#D4A853]">&times;</span>
                  {k}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="https://github.com/PhantomCapAI/phantom134-check"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium tracking-wide bg-[#D4A853] text-[#0A0A0A] hover:bg-[#F5E6A3] transition-colors rounded-sm"
            >
              GitHub &rarr;
            </a>
            <a
              href="/skills/phantom134-check.skill.md"
              download="SKILL.md"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium tracking-wide border border-[#D4A853]/40 text-[#D4A853] hover:bg-[#D4A853]/10 transition-colors rounded-sm"
            >
              Download .skill
            </a>
          </div>
        </article>

        <p className="mt-12 text-center text-xs font-mono tracking-[0.2em] text-[#6B7280] uppercase">
          More skills shipping soon.
        </p>
      </section>
    </div>
  );
}
