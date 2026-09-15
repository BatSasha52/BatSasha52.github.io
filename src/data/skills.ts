import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: ["C++", "C#", "Python", "Java", "SQL", "JavaScript", "GLSL / SPIR-V"],
  },
  {
    title: "Engines & Graphics",
    items: [
      "Unreal Engine 5",
      "Unity",
      "Vulkan",
      "Blueprints",
      "Proprietary AAA engine (COD Engine)",
    ],
  },
  {
    title: "Engine & Systems",
    items: [
      "Multithreading",
      "Job systems & work stealing",
      "Memory & cache behaviour",
      "Profiling",
      "Optimization",
      "Data-driven design",
      "Asset build pipelines",
    ],
  },
  {
    title: "Gameplay",
    items: [
      "Character movement",
      "Animation systems",
      "State machines",
      "Dependency injection",
      "MVP architecture",
      "Gameplay prototyping",
    ],
  },
  {
    title: "Tooling & Workflow",
    items: [
      "Git",
      "Perforce",
      "GitHub Actions",
      "CI/CD",
      "Build automation",
      "pytest",
      "PowerShell",
      "Jira",
    ],
  },
  {
    title: "Other",
    items: [
      "LLM / REST API integration",
      "Technical documentation",
      "Code review",
      "Level design",
      "English C1–C2",
      "Ukrainian (native)",
      "Polish (basic)",
    ],
  },
];
