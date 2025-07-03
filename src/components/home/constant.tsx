import {
  Bootstrap,
  ChakraUi,
  Css3,
  Express,
  Firebase,
  Git,
  Github,
  HTML,
  Mongodb,
  MuiIcon,
  Nextjs,
  NodeJS,
  ReactJS,
  Seo,
  StyledComponents,
  Tailwind,
  TypeScript,
  Vercel,
} from "@/icons";

import type { ReactElement } from "react";

type skills = skill[];
export interface skill {
  name: string;
  icon: ReactElement;
}
export interface Project {
  title: string;
  link: string;
  description: string;
  image: string;
}

export const AboutHeading: string = "ABOUT ME";

export const SkillsHeading: string = "🧰 Skills & Technologies";
export const skills = [
  { name: "React JS", icon: <ReactJS className="size-8" /> },
  { name: "Next JS", icon: <Nextjs /> },
  { name: "TypeScript", icon: <TypeScript size={32} /> },
  { name: "SEO optimization", icon: <Seo className="size-10" /> },
  { name: "Node JS", icon: <NodeJS className="size-8" /> },
  { name: "Express JS", icon: <Express size={100} /> },
  { name: "MongoDB", icon: <Mongodb size={32} /> },
  { name: "Git", icon: <Git size={32} /> },
  { name: "GitHub", icon: <Github /> },
  { name: "Vercel", icon: <Vercel className="fill-foreground dark:fill-current" /> },
  { name: "Firebase", icon: <Firebase /> },
  { name: "Tailwind CSS", icon: <Tailwind className="size-8" /> },
  { name: "Bootstrap", icon: <Bootstrap className="size-8" /> },
  { name: "HTML", icon: <HTML size={32} /> },
  { name: "CSS3", icon: <Css3 size={32} /> },
  { name: "MUI", icon: <MuiIcon className="size-8" /> },
  { name: "Chakra UI", icon: <ChakraUi className="size-8" /> },
  { name: "Styled Components", icon: <StyledComponents className="fill-muted-foreground" /> },
];

export const ProjectHeading: string = "🚀 Projects";
export const ProjectSubheading: string =
  "From scalable full-stack apps to lightning-fast frontends, here’s a glimpse into the real-world projects I've crafted — blending performance, design, and clean code.";
export const projects: Project[] = [
  {
    title: "Smart Task Manager",
    link: "https://smart-task-manager-phi.vercel.app/",
    description:
      "A feature-rich task manager with CRUD operations, JWT Auth, real-time updates using WebSockets, and location-based reminders.",
    image: "/projects/SmartTask.png",
  },
  {
    title: "Portfolio Website",
    link: "https://nikhil-portfolio-webdev.vercel.app",
    description:
      "A modern, SEO-optimized developer portfolio built using Next.js, Tailwind CSS, and Framer Motion with high Lighthouse scores.",
    image:
      "/projects/Portfolio.png",
  },
  {
    title: "Crypto Classic",
    link: "https://crypto-classic-2.netlify.app/",
    description:
      "A markdown-based blogging platform with static generation, RSS support, and syntax highlighting using MDX.",
    image: "/projects/CryptoClassic.png",
  },
  {
    title: "Github Search User",
    link: "https://10nikhil01.github.io/github-search-user/",
    description:
      "A markdown-based blogging platform with static generation, RSS support, and syntax highlighting using MDX.",
    image: "/projects/GithubSearchUser.png",
  },
];
