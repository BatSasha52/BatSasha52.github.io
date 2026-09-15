import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { categories, projects } from "../data/projects";
import type { CategoryFilter } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { profile } from "../data/profile";
import { useSeo } from "../hooks/useSeo";

const filters: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "All" },
  ...categories.map((c) => ({ id: c.id as CategoryFilter, label: c.label })),
];

export default function Projects() {
  const [params, setParams] = useSearchParams();
  const initial = (params.get("category") as CategoryFilter) ?? "all";
  const [active, setActive] = useState<CategoryFilter>(
    filters.some((f) => f.id === initial) ? initial : "all"
  );

  useSeo({
    title: `Projects — ${profile.name}`,
    description:
      "Engine systems, developer tooling, and games built in Unreal Engine and Unity.",
  });

  const visible = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  const activeCategory = categories.find((c) => c.id === active);

  const select = (id: CategoryFilter) => {
    setActive(id);
    if (id === "all") {
      params.delete("category");
    } else {
      params.set("category", id);
    }
    setParams(params, { replace: true });
  };

  return (
    <div className="shell py-16 sm:py-24">
      <SectionHeading
        label="Projects"
        title="Selected work"
        description={
          activeCategory
            ? activeCategory.blurb
            : "Engine systems, developer tooling, and games. Filter by area or browse everything."
        }
      />

      <div className="mb-10 flex flex-wrap gap-2 border-b border-edge pb-5">
        {filters.map((f) => {
          const isActive = f.id === active;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => select(f.id)}
              className={[
                "relative border px-3.5 py-1.5 font-mono text-[0.75rem] transition-colors",
                isActive
                  ? "border-signal text-signal"
                  : "border-edge text-ash hover:border-edge-bright hover:text-bone",
              ].join(" ")}
            >
              {f.label}
              <span className="ml-2 text-dim">
                {f.id === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === f.id).length}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
