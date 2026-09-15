import type { Category, Project } from "./types";

export const categories: Category[] = [
  {
    id: "tools",
    label: "Developer Tools & Automation",
    blurb:
      "Command-line tooling and editor plugins that automate build, release and triage work.",
  },
  {
    id: "engine",
    label: "Engine & Systems Programming",
    blurb:
      "Low-level C++: rendering, concurrency, and production engine internals.",
  },
  {
    id: "unity",
    label: "Unity",
    blurb: "Shipped and in-development games built in Unity and C#.",
  },
  {
    id: "unreal",
    label: "Unreal",
    blurb: "Gameplay and systems work in Unreal Engine with C++ and Blueprints.",
  },
];

export const projects: Project[] = [
  {
    slug: "call-of-duty-black-ops-7",
    name: "Call of Duty: Black Ops 7",
    category: "engine",
    featured: true,
    year: "2025",
    summary:
      "Asset build pipeline work on a shipped AAA title at Activision Central Tech.",
    description: [
      "First-person shooter co-developed by Treyarch and Raven Software and published by Activision, featuring a single-player and co-op campaign, a multiplayer component and round-based Zombies.",
      "I worked on the asset build pipeline inside a large-scale C++ codebase, implementing caching and parallelisation to cut map compilation time. Every refactor had to leave the output binary-identical, verified through systematic testing.",
    ],
    role: "Engine programming intern",
    highlights: [
      "Reduced compilation time of certain classes by up to 99% (67 sec to 0.14 sec)",
      "Caching for SO Culling, Damage Layers, Decals and Weather to avoid redundant rebuilds",
      "Content-sensitive hashing per transient zone",
      "Conditional cache loading and saving driven by transient zone entity hash",
      "Parallelised functions to improve CPU utilisation",
      "Verified binary-identical output after refactoring",
    ],
    tech: ["C++", "COD Engine", "Perforce", "Profiling", "Multithreading"],
    links: [],
  },
  {
    slug: "crashtriage",
    name: "crashtriage",
    category: "tools",
    featured: true,
    summary:
      "CLI that clusters duplicate crash logs, pulls the crashing source and git blame, and produces root-cause reports.",
    description: [
      "A build goes out, crash reports come back, and someone has to open each one, find the function, run git blame and work out how bad it is. Most of that pile is usually the same handful of bugs reported repeatedly, but you cannot tell which until you have read all of them.",
      "crashtriage automates the mechanical part. It parses stack frames and fault messages, clusters near-identical crashes before any model call so you get one report per real issue, resolves the crashing file against the repository, and pulls git blame on the exact failing line. It then asks an LLM for a root-cause hypothesis, a severity estimate and concrete next steps, writing one Markdown report per cluster.",
      "It does not fix bugs or replace a debugger. It turns a pile of logs into a handful of reports that each already carry the code, the history and a first hypothesis.",
    ],
    role: "Solo developer",
    highlights: [
      "Clustering by crash message and top stack frames, with fuzzy matching for near-variants",
      "Source resolution against the repo index, handling build-machine paths",
      "git blame integration to name the suspect commit",
      "Per-cluster Markdown reports with marked crash line and source context",
    ],
    tech: ["Python", "Google Gemini API", "Git", "difflib"],
    links: [
      { label: "GitHub", url: "https://github.com/BatSasha52/crashtriage" },
    ],
  },
  {
    slug: "buildpilot",
    name: "BuildPilot",
    category: "tools",
    featured: true,
    summary:
      "CLI that builds, versions and packages a Unity project, smoke-tests the result and notifies the team.",
    description: [
      "On small teams builds get made by whoever happens to have the engine open, with no commit hash tied to the result, and pass or fail decided by someone skimming a twenty-thousand-line log. That is exactly the kind of thing you miss three compiler errors in.",
      "BuildPilot stamps every build with the exact commit it came from, parses the log properly instead of relying on a human reading it, and only exits clean if the build actually succeeded. Packaging, smoke testing and team notification all hang off that single signal.",
      "It ships with a fake engine mode so the whole pipeline is demoable without a Unity install, and returns distinct exit codes per failure class so it drops into any CI system that checks process status.",
    ],
    role: "Solo developer",
    highlights: [
      "Git-derived version stamping (commit, branch, tag, dirty state)",
      "Streaming build-log parser with deduplication and fatal-error detection",
      "Versioned packaging plus an executable smoke test",
      "Discord and Slack notifications, secrets read from environment only",
      "32-test pytest suite and CI-ready exit codes",
    ],
    tech: ["Python", "Unity (batchmode)", "C#", "Git", "pytest", "Webhooks"],
    links: [
      { label: "GitHub", url: "https://github.com/BatSasha52/buildpilot" },
    ],
  },
  {
    slug: "ai-changelog-generator",
    name: "AI Changelog Generator",
    category: "tools",
    summary:
      "CLI that turns git history into categorized, human-readable release notes using an LLM.",
    description: [
      "Changelogs are either written by hand, which nobody keeps up with, or generated from conventional-commit prefixes, which only works if everybody follows the convention. This tool reads the actual history instead.",
      "It parses commit metadata and diffs, applies local risk heuristics to flag large, core-touching or untested changes, and sends batched commit ranges through a provider-agnostic LLM layer that supports both Gemini and Claude. Output is rendered as Markdown.",
      "A GitHub Actions workflow runs the whole thing on tag push and opens a pull request with the generated notes, so releases document themselves.",
    ],
    role: "Solo developer",
    highlights: [
      "Risk heuristics for large, core and untested changes",
      "Provider-agnostic LLM layer (Gemini and Claude) with defensive JSON parsing",
      "Batching for large commit ranges",
      "GitHub Actions workflow that opens a PR on tag push",
    ],
    tech: [
      "Python",
      "Google Gemini API",
      "Anthropic Claude API",
      "Git",
      "GitHub Actions",
      "pytest",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/BatSasha52/ai-changelog" },
    ],
  },
  {
    slug: "nosaints-new-dawn",
    name: "NoSaints: New Dawn",
    category: "unity",
    featured: true,
    summary:
      "Dark atmospheric FPS in development at Cenoir Studios, where I own movement and combat.",
    description: [
      "A dark, atmospheric first-person shooter set in an alternative-history 1930s USA, currently in development at Cenoir Studios.",
      "I work on the gameplay layer: the character movement system, combat, and integration of procedural animation. The codebase is feature-oriented and built on dependency injection, with movement states driven by ScriptableObject-based state machines rather than hard-coded transitions.",
    ],
    role: "Gameplay Programmer",
    highlights: [
      "Character movement system on MVP architecture",
      "ScriptableObject-driven state machines",
      "KINEMATION procedural animation integration",
      "Zenject dependency injection across a feature-oriented codebase",
    ],
    tech: ["Unity", "C#", "Zenject", "KINEMATION", "ScriptableObjects"],
    links: [],
  },
  {
    slug: "no-saints",
    name: "No Saints",
    category: "unity",
    summary:
      "Multiplayer FPS diploma project set in an alternative-history 1930s USA.",
    description: [
      "A multiplayer first-person shooter built as a diploma project, set in an alternative-history 1930s United States.",
      "I worked across design and code: level design, game mechanics, and the movement and combat implementation. The movement system was mostly mine, and the goal there was smooth, readable control across several distinct mechanics rather than a single locomotion mode.",
      "The game has been exhibited publicly several times, including as a playable installation at PJATK Museum Night with multiplayer sessions running across multiple devices.",
    ],
    role: "Game Designer, Level Designer, Programmer",
    highlights: [
      "Movement system supporting multiple distinct mechanics",
      "Shooting and combat gameplay",
      "Level design and game mode design",
      "Exhibited at Women in Tech Summit 2025 and PJATK Museum Night",
    ],
    tech: ["Unity", "C#", "Multiplayer"],
    links: [],
  },
  {
    slug: "salvager",
    name: "Salvager",
    category: "unity",
    summary:
      "2D top-down metroidvania shooter with deep environmental interaction, built with a team of 15.",
    description: [
      "A 2D top-down metroidvania shooter focused on environmental interaction, developed in a team of fifteen.",
      "I worked as a gameplay programmer on movement, stamina, power-ups and field-of-view systems, and on integrating character animation through Unity Blend Trees.",
    ],
    role: "Gameplay Programmer",
    highlights: [
      "Movement and stamina systems",
      "Power-up systems",
      "Field-of-view implementation",
      "Animation integration with Blend Trees",
    ],
    tech: ["Unity", "C#"],
    links: [],
  },
  {
    slug: "labyrism",
    name: "Labyrism",
    category: "unity",
    summary:
      "Turn-based asymmetric online multiplayer board game, built in six weeks by a team of four.",
    description: [
      "A turn-based competitive asymmetric online multiplayer board game. You play one of four monsters loose in a labyrinth, hunting the humans trapped in there with you.",
      "Built in six weeks with a team of four. I implemented game mechanics and animation.",
    ],
    role: "Programmer",
    tech: ["Unity", "C#", "Online multiplayer"],
    links: [],
  },
  {
    slug: "icarus-rising",
    name: "Icarus Rising",
    category: "unity",
    summary: "Vertical dodge game built by a team of four during a game jam.",
    description: [
      "A vertical dodge game made during a game jam at PJATK by a team of four, taken from nothing to a complete, playable game inside the jam window.",
      "I programmed the gameplay loop and the core mechanics.",
    ],
    role: "Programmer",
    tech: ["Unity", "C#", "Game jam"],
    links: [],
  },
  {
    slug: "space-shooter",
    name: "Space Shooter",
    category: "unreal",
    summary:
      "Third-person shooter in Unreal Engine 5 covering locomotion, animation and enemy AI.",
    description: [
      "A third-person shooter built in Unreal Engine 5 with C++, covering the full loop from character setup through combat, AI and UI.",
      "The systems work here is the useful part: skeletal animation and locomotion blending, a state machine driving character behaviour, and enemy AI combining behaviour trees with pathfinding and shooting logic.",
    ],
    highlights: [
      "Character locomotion and skeletal animation",
      "Behaviour tree and state machine driven enemy AI",
      "Enemy pathfinding and shooting behaviour",
      "Shooting system, win/loss conditions, widgets and effects",
    ],
    tech: ["Unreal Engine 5.5", "C++", "Behaviour Trees", "Animation"],
    links: [],
  },
  {
    slug: "crypt-raider",
    name: "Crypt Raider",
    category: "unreal",
    summary:
      "First-person 3D puzzle game in Unreal Engine with modular level design and Lumen lighting.",
    description: [
      "A first-person 3D puzzle game built in Unreal Engine with C++ and Blueprints.",
      "The focus was on component architecture and the C++ to Blueprint boundary: actor and scene components, line tracing and collision handling, and exposing C++ functionality for designers to call from Blueprints.",
    ],
    highlights: [
      "Actor and scene component architecture",
      "Line tracing and collision handling",
      "Calling C++ functions from Blueprints",
      "Modular level design and Lumen lighting",
    ],
    tech: ["Unreal Engine 5.5", "C++", "Blueprints", "Lumen"],
    links: [],
  },
  {
    slug: "toon-tanks",
    name: "Toon Tanks",
    category: "unreal",
    summary: "Tank shooter in Unreal Engine 5 with combat, movement and enemy AI.",
    description: [
      "A tank shooter built in Unreal Engine 5 with C++, covering pawn setup, a combat system, movement, enemy AI, and the surrounding game-state and UI work.",
    ],
    highlights: [
      "Pawn creation and combat system",
      "Movement system and enemy AI",
      "Win/loss conditions, widgets, audio and visual effects",
    ],
    tech: ["Unreal Engine 5.5", "C++", "Blueprints"],
    links: [],
  },
  {
    slug: "obstacle-assault",
    name: "Obstacle Assault",
    category: "unreal",
    summary:
      "3D platformer in Unreal Engine 5 built around moving obstacles and C++ class design.",
    description: [
      "A 3D platformer where the player climbs to the top while avoiding moving obstacles, built in Unreal Engine 5.",
      "The work here was foundational C++ in Unreal: class creation, member variables and functions, Blueprint child classes deriving from C++ bases, and the core engine types for transforms and rotation.",
    ],
    highlights: [
      "C++ class creation and Blueprint child classes",
      "FString, FVector and FRotator usage",
      "GameMode and character class setup",
    ],
    tech: ["Unreal Engine 5.5", "C++", "Blueprints"],
    links: [],
  },
  {
    slug: "warehouse-wreck",
    name: "Warehouse Wreck",
    category: "unreal",
    summary:
      "Blueprint-based physics shooter in Unreal Engine 5 where you throw rocks and wreck a warehouse.",
    description: [
      "A Blueprint-only shooter built in Unreal Engine 5 where the player throws rocks to destroy a warehouse.",
      "Fully visual scripting: Blueprint nodes and pins, maps, actors, components and transforms, and object-oriented fundamentals expressed through Blueprint classes.",
    ],
    tech: ["Unreal Engine 5.0", "Blueprints"],
    links: [],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function projectsByCategory(id: CategoryFilter): Project[] {
  if (id === "all") return projects;
  return projects.filter((p) => p.category === id);
}

export type CategoryFilter = "all" | Category["id"];
