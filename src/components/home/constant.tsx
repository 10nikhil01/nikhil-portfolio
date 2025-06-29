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
