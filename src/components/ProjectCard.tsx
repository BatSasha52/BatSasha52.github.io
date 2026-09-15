import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Project } from "../data/types";
import { categories } from "../data/projects";
import Tag from "./Tag";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const category = categories.find((c) => c.id === project.category);
  const repo = project.links.find((l) => l.label === "GitHub");

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.05, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col border border-edge bg-surface/70 transition-colors duration-300 hover:border-edge-bright"
    >
      <span className="absolute left-0 top-0 h-px w-0 bg-signal transition-all duration-400 group-hover:w-full" />

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg text-bone transition-colors group-hover:text-signal">
              <Link to={`/projects/${project.slug}`} className="after:absolute after:inset-0">
                {project.name}
              </Link>
            </h3>
            <p className="font-mono text-[0.7rem] text-dim">{category?.label}</p>
          </div>
          {project.year && (
            <span className="font-mono text-[0.7rem] text-dim">{project.year}</span>
          )}
        </div>

        <p className="mb-5 flex-1 text-sm text-ash">{project.summary}</p>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
          {project.tech.length > 4 && (
            <span className="self-center font-mono text-[0.7rem] text-dim">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center gap-5 border-t border-edge pt-4 font-mono text-[0.75rem]">
          <span className="text-ash transition-colors group-hover:text-signal">
            View details
          </span>
          {repo && (
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 text-dim transition-colors hover:text-bone"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
