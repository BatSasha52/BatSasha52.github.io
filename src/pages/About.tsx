import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import { skills } from "../data/skills";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Tag from "../components/Tag";
import { useSeo } from "../hooks/useSeo";

export default function About() {
  useSeo({
    title: `About — ${profile.name}`,
    description: profile.bio[0],
  });

  const hobbies = profile.hobbies ?? [];

  return (
    <div className="shell py-16 sm:py-24">
      <SectionHeading label="About" title="Who I am and what I work on" />

      <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
        <div className="space-y-5">
          {profile.bio.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="prose-body text-[1.02rem]">{paragraph}</p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                to="/experience"
                className="border border-edge-bright px-4 py-2 font-mono text-sm text-bone transition-colors hover:border-signal hover:text-signal"
              >
                Experience
              </Link>
              <a
                href={profile.cv}
                download
                className="border border-edge-bright px-4 py-2 font-mono text-sm text-bone transition-colors hover:border-signal hover:text-signal"
              >
                Download CV
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative">
            <div className="absolute -right-2 -top-2 h-full w-full border border-signal/25" />
            <img
              src={profile.photo}
              alt={profile.name}
              className="relative w-full border border-edge-bright object-cover grayscale"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>

      <div className="mt-24">
        <SectionHeading
          label="Skills"
          title="Tools and techniques"
          description="Grouped by where they actually get used rather than rated on a scale."
        />

        <div className="grid gap-px border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <div className="h-full bg-void p-6">
                <h3 className="mb-4 font-mono text-[0.78rem] text-signal">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {hobbies.length > 0 && (
        <div className="mt-24">
          <SectionHeading
            label="Outside work"
            title="What I do when I'm not shipping"
          />
          <div className="space-y-5">
            {hobbies.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="prose-body text-[1.02rem]">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
