export type CategoryId =
  | "tools"
  | "engine"
  | "software"
  | "unity"
  | "unreal";

export interface Category {
  id: CategoryId;
  label: string;
  blurb: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectVideo {
  label: string;
  youtubeId: string;
}

export interface Project {
  slug: string;
  name: string;
  category: CategoryId;
  summary: string;
  description: string[];
  role?: string;
  highlights?: string[];
  tech: string[];
  links: ProjectLink[];
  videos?: ProjectVideo[];
  featured?: boolean;
  year?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExperienceEntry {
  kind: "work" | "education";
  role: string;
  org: string;
  start: string;
  end: string;
  location: string;
  points: string[];
}

export interface ContactLink {
  label: string;
  value: string;
  url: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  intro: string;
  bio: string[];
  photo: string;
  cv: string;
  contacts: ContactLink[];
  hobbies?: string[];
}
