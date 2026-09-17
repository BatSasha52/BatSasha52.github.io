import { profile } from "../data/profile";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { useSeo } from "../hooks/useSeo";

export default function Contact() {
  useSeo({
    title: `Contact — ${profile.name}`,
    description: `Get in touch with ${profile.name} — ${profile.role} based in Warsaw, Poland.`,
  });

  const links = profile.contacts.filter((c) => c.url);

  return (
    <div className="shell py-16 sm:py-24">
      <SectionHeading
        label="Contact"
        title="Get in touch"
        description="Open to gameplay, engine and tooling roles. The fastest way to reach me is email."
      />

      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <div className="divide-y divide-edge border-y border-edge">
          {links.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <a
                href={c.url}
                target={c.url.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between gap-6 py-5 transition-colors"
              >
                <span className="font-mono text-[0.75rem] text-dim">{c.label}</span>
                <span className="text-right text-base text-bone transition-colors group-hover:text-signal sm:text-lg">
                  {c.value}
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="border border-edge bg-surface/60 p-7">
            <h2 className="mb-3 text-lg text-bone">Curriculum vitae</h2>
            <p className="mb-6 text-sm text-ash">
              Full CV as a PDF: experience, projects, education and skills on two pages.
            </p>
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full border border-signal bg-signal px-5 py-3 text-center font-mono text-sm text-void transition-colors hover:bg-transparent hover:text-signal"
            >
              Download CV
            </a>
            <p className="mt-6 border-t border-edge pt-5 font-mono text-[0.72rem] text-dim">
              {profile.location}
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
