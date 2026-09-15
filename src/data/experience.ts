import type { ExperienceEntry } from "./types";

export const experience: ExperienceEntry[] = [
  {
    kind: "work",
    role: "Gameplay Programmer",
    org: "Cenoir Studios",
    start: "Jan 2026",
    end: "Present",
    location: "Warsaw, Poland",
    points: [
      "Implemented the character movement system using MVP architecture and ScriptableObject-based state machines.",
      "Integrating KINEMATION procedural animation for movement.",
      "Working with the Zenject dependency injection framework across a feature-oriented architecture.",
    ],
  },
  {
    kind: "work",
    role: "Programming Intern",
    org: "Activision Central Tech",
    start: "Sep 2025",
    end: "Dec 2025",
    location: "Kraków, Poland",
    points: [
      "Added conditional cache loading and saving based on transient zone entity hash in the asset build pipeline.",
      "Implemented caching for SO Culling, Damage Layers, Decals and Weather, keyed by content-sensitive hashing per transient zone, to avoid redundant rebuilds.",
      "Parallelised functions to improve CPU utilisation and overall performance.",
      "Reduced compilation time of certain classes by up to 99% (67 sec to 0.14 sec).",
      "Verified binary-identical output after refactoring through systematic code testing. Version control with Perforce.",
    ],
  },
  {
    kind: "education",
    role: "BSc Computer Science — Game Development",
    org: "Polsko-Japońska Akademia Technik Komputerowych",
    start: "Sep 2022",
    end: "Feb 2026",
    location: "Warsaw, Poland",
    points: [
      "Specialisation in Game Development and XR.",
      "Diploma project: No Saints, a multiplayer FPS built in Unity.",
      "Exhibited student work at Women in Tech Summit 2024 and 2025, PJATK Open Doors and PJATK Museum Night.",
    ],
  },
];
