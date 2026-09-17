import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { featuredProjects } from "../data/projects";
import GridBackdrop from "../components/GridBackdrop";
import Reveal from "../components/Reveal";
import Tag from "../components/Tag";
import { useSeo } from "../hooks/useSeo";

export default function Home() {
  useSeo({
    title: `${profile.name} — ${profile.role}`,
    description: profile.intro,
  });

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <>
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
        <GridBackdrop />

        <div className="shell relative flex min-h-[calc(100vh-4rem)] items-center py-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid w-full items-center gap-12 md:grid-cols-[1.35fr_1fr]"
          >
            <div>
              <motion.p variants={item} className="rule-label mb-5 flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-signal" />
                {profile.location}
              </motion.p>

              <motion.h1 variants={item} className="text-hero text-bone">
                {profile.name}
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-4 font-mono text-sm text-signal sm:text-base"
              >
                {profile.role}
                <span className="mx-3 text-edge-bright">|</span>
                <span className="text-ash">{profile.tagline}</span>
              </motion.p>

              <motion.p variants={item} className="prose-body mt-7 text-base sm:text-lg">
                {profile.intro}
              </motion.p>

              <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="border border-signal bg-signal px-5 py-2.5 font-mono text-sm text-void transition-colors hover:bg-transparent hover:text-signal"
                >
                  View projects
                </Link>
                <a
                  href={profile.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-edge-bright px-5 py-2.5 font-mono text-sm text-bone transition-colors hover:border-signal hover:text-signal"
                >
                  Download CV
                </a>
                <Link
                  to="/contact"
                  className="border border-transparent px-5 py-2.5 font-mono text-sm text-ash transition-colors hover:text-bone"
                >
                  Get in touch
                </Link>
              </motion.div>
            </div>

            <motion.div variants={item} className="order-first md:order-last">
              <div className="relative mx-auto w-full max-w-[280px] md:max-w-none">
                <div className="absolute -left-2 -top-2 h-full w-full border border-signal/30" />
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="relative w-full border border-edge-bright object-cover grayscale contrast-110"
                  loading="eager"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="shell py-20">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="rule-label mb-3 flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-signal" />
                Selected work
              </p>
              <h2 className="text-title text-bone">Projects</h2>
            </div>
            <Link
              to="/projects"
              className="font-mono text-sm text-ash transition-colors hover:text-signal"
            >
              All projects
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-px border border-edge bg-edge sm:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                to={`/projects/${p.slug}`}
                className="group flex h-full flex-col bg-void p-7 transition-colors hover:bg-surface"
              >
                <h3 className="text-lg text-bone transition-colors group-hover:text-signal">
                  {p.name}
                </h3>
                <p className="mt-3 flex-1 text-sm text-ash">{p.summary}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 3).map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
