import { useEffect, useMemo, useState } from "react";
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

const VISIBLE_TECH = 14;

export default function Projects() {
  const [params, setParams] = useSearchParams();

  const rawCategory = (params.get("category") as CategoryFilter) ?? "all";
  const [active, setActive] = useState<CategoryFilter>(
    filters.some((f) => f.id === rawCategory) ? rawCategory : "all"
  );
  const [selectedTech, setSelectedTech] = useState<string[]>(
    (params.get("tech") ?? "").split(",").filter(Boolean)
  );
  const [showAllTech, setShowAllTech] = useState(false);

  useSeo({
    title: `Projects — ${profile.name}`,
    description:
      "Engine systems, developer tooling, and games built in Unreal Engine and Unity.",
  });

  const inCategory = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  const techCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const project of inCategory) {
      for (const tech of project.tech) {
        counts.set(tech, (counts.get(tech) ?? 0) + 1);
      }
    }
    return [...counts.entries()].sort(
      (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
    );
  }, [inCategory]);

  useEffect(() => {
    const available = new Set(techCounts.map(([tech]) => tech));
    setSelectedTech((current) => {
      const pruned = current.filter((tech) => available.has(tech));
      return pruned.length === current.length ? current : pruned;
    });
  }, [techCounts]);

  useEffect(() => {
    const next = new URLSearchParams();
    if (active !== "all") next.set("category", active);
    if (selectedTech.length) next.set("tech", selectedTech.join(","));
    setParams(next, { replace: true });
  }, [active, selectedTech, setParams]);

  const visible = useMemo(() => {
    if (!selectedTech.length) return inCategory;
    return inCategory.filter((p) => selectedTech.some((t) => p.tech.includes(t)));
  }, [inCategory, selectedTech]);

  const activeCategory = categories.find((c) => c.id === active);

  const toggleTech = (tech: string) =>
    setSelectedTech((current) =>
      current.includes(tech)
        ? current.filter((t) => t !== tech)
        : [...current, tech]
    );

  const shownTech = showAllTech ? techCounts : techCounts.slice(0, VISIBLE_TECH);
  const hiddenSelected = techCounts.filter(
    ([tech]) => selectedTech.includes(tech) && !shownTech.some(([t]) => t === tech)
  );

  return (
    <div className="shell py-16 sm:py-24">
      <SectionHeading
        label="Projects"
        title="Selected work"
        description={
          activeCategory
            ? activeCategory.blurb
            : "Engine systems, developer tooling, and games. Filter by area or technology."
        }
      />

      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((f) => {
          const isActive = f.id === active;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(f.id)}
              className={[
                "border px-3.5 py-1.5 font-mono text-[0.75rem] transition-colors",
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

      <div className="mb-10 border-b border-edge pb-6">
        <div className="mb-3 flex items-baseline gap-4">
          <p className="font-mono text-[0.72rem] text-dim">Technology</p>
          {selectedTech.length > 0 && (
            <button
              type="button"
              onClick={() => setSelectedTech([])}
              className="font-mono text-[0.72rem] text-signal transition-colors hover:text-bone"
            >
              Clear ({selectedTech.length})
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {[...shownTech, ...hiddenSelected].map(([tech, count]) => {
            const isOn = selectedTech.includes(tech);
            return (
              <button
                key={tech}
                type="button"
                onClick={() => toggleTech(tech)}
                aria-pressed={isOn}
                className={[
                  "border px-2 py-0.5 font-mono text-[0.7rem] transition-colors",
                  isOn
                    ? "border-signal bg-signal/10 text-signal"
                    : "border-edge bg-raised/40 text-ash hover:border-edge-bright hover:text-bone",
                ].join(" ")}
              >
                {tech}
                <span className="ml-1.5 text-dim">{count}</span>
              </button>
            );
          })}

          {techCounts.length > VISIBLE_TECH && (
            <button
              type="button"
              onClick={() => setShowAllTech((v) => !v)}
              className="border border-transparent px-2 py-0.5 font-mono text-[0.7rem] text-signal transition-colors hover:text-bone"
            >
              {showAllTech
                ? "Show fewer"
                : `Show all ${techCounts.length}`}
            </button>
          )}
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="prose-body">
          No projects match that combination. Clear a filter to widen the search.
        </p>
      ) : (
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
