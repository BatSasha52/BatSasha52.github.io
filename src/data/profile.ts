import type { Profile } from "./types";

export const profile: Profile = {
  name: "Oleksandr Pryimak",
  role: "Programmer, game developer",
  tagline: "C++ · Unreal Engine 5 · Unity",
  location: "Warsaw, Poland (open to relocation)",

  intro:
    "Ex-Activision programming intern. Computer Science bachelor specializing in game development, with practical experience in Unity and Unreal Engine, C++ software engineering, game design and level design.",

  bio: [
    "I am a gameplay and engine programmer based in Warsaw. I work in C++, C# and Python, across Unreal Engine, Unity and proprietary engine code.",
    "At Activision Central Tech I worked in a large-scale C++ codebase on the asset build pipeline for Call of Duty: Black Ops 7. I added conditional cache loading and saving based on transient zone entity hash, parallelized functions to improve CPU usage, and reduced compilation time of certain classes by up to 99% (67 sec to 0.14 sec). Every refactor had to leave the output binary-identical, which was verified through systematic testing.",
    "At Cenoir Studios I work on gameplay. I implemented the character movement system using MVP architecture and ScriptableObject-based state machines, I am integrating KINEMATION procedural animation for movement, and I work with the Zenject dependency injection framework across a feature-oriented architecture.",
    "Alongside production work I build developer tooling: command-line tools for build automation, release notes and crash triage, written in Python and integrated with Git and CI.",
  ],

  hobbies: [
    "I love playing games, reading comics, watching movies and TV series. I enjoy both short games like \u201CUncharted 4\u201D, \u201CGod of War 2018\u201D and \u201CMetal Gear Solid 2\u201D, as well as longer games, that allow for deep immersion in their worlds like \u201CThe Witcher 3\u201D, \u201CRed Dead Redemption 2\u201D or \u201CCyberpunk 2077\u201D. I even have a YouTube channel (in Ukrainian), where I talk about games and comic book movies.",
    "In games, I value attention to details, a well-written story, an immersive world and a good mission design. I also love exploring games from a professional perspective, noticing some new layers to them. I enjoy learning new skills and am passionate about developing games.",
  ],

  photo: "/photo.jpg",
  cv: "/Oleksandr_Pryimak_CV.pdf",

  contacts: [
    { label: "Email", value: "pryimaksasha@gmail.com", url: "mailto:pryimaksasha@gmail.com" },
    { label: "GitHub", value: "github.com/BatSasha52", url: "https://github.com/BatSasha52" },
    { label: "LinkedIn", value: "linkedin.com/in/oleksandr-pryimak", url: "https://www.linkedin.com/in/oleksandr-pryimak-bba75333a" },
    { label: "Phone", value: "+48 511 873 473", url: "tel:+48511873473" },
  ],
};
