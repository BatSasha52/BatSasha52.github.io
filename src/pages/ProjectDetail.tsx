import { Link, useParams } from "react-router-dom";
import { categories, getProject, projects } from "../data/projects";
import Tag from "../components/Tag";
import Reveal from "../components/Reveal";
import NotFound from "./NotFound";
import { profile } from "../data/profile";
import { useSeo } from "../hooks/useSeo";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;

  useSeo({
    title: project
      ? `${project.name} — ${profile.name}`
      : `Project not found — ${profile.name}`,
    description: project?.summary,
  });

  if (!project) return <NotFound />;

  const category = categories.find((c) => c.id === project.category);
  const siblings = projects.filter(
    (p) => p.category === project.category && p.slug !== project.slug
  );

  return (
    <div className="shell py-16 sm:py-24">
      <Link
        to={`/projects?category=${project.category}`}
        className="mb-10 inline-block font-mono text-[0.78rem] text-ash transition-colors hover:text-signal"
      >
        Back to {category?.label}
      </Link>

      <header className="mb-12 border-b border-edge pb-10">
        <p className="rule-label mb-4 flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-signal" />
          {category?.label}
          {project.year && <span className="text-dim">— {project.year}</span>}
        </p>

        <h1 className="text-title text-bone">{project.name}</h1>
        <p className="prose-body mt-5 text-lg">{project.summary}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-signal px-4 py-2 font-mono text-sm text-signal transition-colors hover:bg-signal hover:text-void"
            >
              {l.label}
            </a>
          ))}
        </div>
      </header>

      <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
        <div className="space-y-5">
          {project.description.map((p, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <p className="prose-body text-[1.02rem]">{p}</p>
            </Reveal>
          ))}

          {project.highlights && (
            <Reveal delay={0.12}>
              <div className="pt-6">
                <h2 className="mb-4 font-mono text-[0.78rem] text-signal">
                  What I built
                </h2>
                <ul className="space-y-2.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm text-ash">
                      <span className="mt-2 h-px w-3 shrink-0 bg-signal/60" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>

        <aside className="space-y-8">
          {project.role && (
            <div className="border border-edge bg-surface/60 p-5">
              <h2 className="mb-2 font-mono text-[0.72rem] text-dim">Role</h2>
              <p className="text-sm text-bone">{project.role}</p>
            </div>
          )}

          <div className="border border-edge bg-surface/60 p-5">
            <h2 className="mb-3 font-mono text-[0.72rem] text-dim">Tech stack</h2>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <Tag key={t} tone="accent">
                  {t}
                </Tag>
              ))}
            </div>
          </div>

          {siblings.length > 0 && (
            <div className="border border-edge bg-surface/60 p-5">
              <h2 className="mb-3 font-mono text-[0.72rem] text-dim">
                More in {category?.label}
              </h2>
              <ul className="space-y-2">
                {siblings.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/projects/${s.slug}`}
                      className="text-sm text-ash transition-colors hover:text-signal"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
