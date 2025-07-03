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
import Linkedin from "@/icons/Linkedin";
import Mail from "@/icons/Mail";
import Phone from "@/icons/Phone";

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
export interface Contact {
  heading: string;
  subheading: string;
  link: string;
  icon: ReactElement;
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
    image: "/projects/Portfolio.png",
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

export const ContactHeading = "Contact Me";
export const ChipHeading = "Get In Touch";
export const ContactSubHeading = "Let's Discuss Some Project";
export const ContactLeftPara =
  "I'd love to hear about your project and how I can help. Feel free to reach out through any of the following contact methods or by using the form.";

export const contacts: Contact[] = [
  {
    heading: "Email",
    subheading: "nikhilcreationshere@gmail.com",
    link: "mailto:nikhilcreationshere@gmail.com",
    icon: <Mail className="size-5" />,
  },
  {
    heading: "Phone",
    subheading: "+91 821-9901-263",
    link: "tel:+918219901263",
    icon: <Phone className="size-5" />,
  },
  {
    heading: "LinkedIn",
    subheading: "linkedin.com/in/reachnik",
    link: "http://www.linkedin.com/in/reachnik",
    icon: <Linkedin className="size-5" />,
  },
  {
    heading: "GitHub",
    subheading: "github.com/10Nikhil01",
    link: "https://github.com/10Nikhil01",
    icon: <Github className="size-5" />,
  },
];
