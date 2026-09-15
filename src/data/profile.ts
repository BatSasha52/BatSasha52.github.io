import type { Profile } from "./types";

export const profile: Profile = {
  name: "Oleksandr Pryimak",
  role: "Gameplay & Engine Programmer",
  tagline: "C++ · Unreal Engine 5 · Unity",
  location: "Warsaw, Poland — open to relocation",

  intro:
    "I build the systems underneath games: engine internals, build pipelines, and the tools that keep a team moving. Previously a programming intern on Call of Duty: Black Ops 7 at Activision Central Tech.",

  bio: [
    "I am a gameplay and engine programmer based in Warsaw. My work sits close to the engine: character movement and animation systems on one side, build pipelines, asset tooling and renderer internals on the other.",
    "At Activision Central Tech I worked inside a large-scale C++ codebase on the asset build pipeline for Call of Duty: Black Ops 7, implementing content-sensitive caching and parallelising hot paths. Compilation time for certain classes dropped from 67 seconds to 0.14 — and every refactor had to produce binary-identical output, which taught me more about disciplined engineering than any course did.",
    "At Cenoir Studios I work on gameplay: a character movement system built on MVP architecture and ScriptableObject state machines, procedural animation integration, and dependency injection across a feature-oriented codebase.",
    "Outside production work I build developer tooling and engine systems from scratch — a Vulkan renderer, a work-stealing job system, CLI tools for build automation and crash triage. I like problems where the answer is measurable: a frame budget, a compile time, a crash count.",
  ],

  photo: "/photo.jpg",
  cv: "/Oleksandr_Pryimak_CV.pdf",

  contacts: [
    {
      label: "Email",
      value: "pryimaksasha@gmail.com",
      url: "mailto:pryimaksasha@gmail.com",
    },
    {
      label: "GitHub",
      value: "github.com/BatSasha52",
      url: "https://github.com/BatSasha52",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/oleksandr-pryimak",
      url: "www.linkedin.com/in/oleksandr-pryimak-bba75333a",
    },
    {
      label: "Phone",
      value: "+48 511 873 473",
      url: "tel:+48511873473",
    },
  ],
};
