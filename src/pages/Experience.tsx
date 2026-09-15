import { experience } from "../data/experience";
import { profile } from "../data/profile";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { useSeo } from "../hooks/useSeo";

export default function Experience() {
  useSeo({
    title: `Experience — ${profile.name}`,
    description:
      "Work experience and education: Activision Central Tech, Cenoir Studios, PJATK.",
  });

  const work = experience.filter((e) => e.kind === "work");
  const education = experience.filter((e) => e.kind === "education");

  const renderGroup = (label: string, entries: typeof experience) => (
    <div className="mb-20 last:mb-0">
      <p className="rule-label mb-8 flex items-center gap-3">
        <span className="inline-block h-px w-8 bg-signal" />
        {label}
      </p>

      <div className="relative border-l border-edge pl-8 sm:pl-10">
        {entries.map((entry, i) => (
          <Reveal key={`${entry.org}-${entry.role}`} delay={i * 0.07}>
            <div className="relative mb-14 last:mb-0">
              <span className="absolute -left-[41px] top-2 h-2 w-2 -translate-x-1/2 rotate-45 border border-signal bg-void sm:-left-[49px]" />

              <div className="mb-1 flex flex-wrap items-baseline gap-x-3">
                <h3 className="text-xl text-bone">{entry.role}</h3>
                <span className="font-mono text-sm text-signal">{entry.org}</span>
              </div>

              <p className="mb-5 font-mono text-[0.75rem] text-dim">
                {entry.start} — {entry.end} · {entry.location}
              </p>

              <ul className="space-y-2.5">
                {entry.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-ash">
                    <span className="mt-2 h-px w-3 shrink-0 bg-edge-bright" />
                    <span className="max-w-[62ch]">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );

  return (
    <div className="shell py-16 sm:py-24">
      <SectionHeading
        label="Experience"
        title="Where I have worked and studied"
      />
      {renderGroup("Work", work)}
      {renderGroup("Education", education)}
    </div>
  );
}
