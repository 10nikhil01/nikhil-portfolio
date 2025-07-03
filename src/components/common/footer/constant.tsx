import { Github } from "@/icons";
import Linkedin from "@/icons/Linkedin";
import Mail from "@/icons/Mail";
import type { ReactElement } from "react";

export const FooterData = {
  FirstHeading: "Nikhil Kumar",
  SecondHeading: "Resources",
  ThirdHeading: "Let’s Work Together",
  FirstParagraph: "Delivering high-performance, seo-friendly, and modern web solutions.",
  SecondParagraph: "Open to freelance, full-time, or collaborative work.",
  Conversation: "Start a Conversation",
  Copyright: "Nikhil Kumar. All rights reserved.",
};

export type SocialLinksItem = {
  href: string;
  label: string;
  icon: ReactElement;
};

type Social = SocialLinksItem[];

export const SocialLinks: Social = [
  {
    href: "https://www.linkedin.com/in/reachnik/",
    label: "LinkedIn",
    icon: <Linkedin className="size-6" />,
  },
  {
    href: "https://www.github.com/10nikhil01",
    label: "Github",
    icon: <Github className="size-6" />,
  },
  {
    href: "mailto:nikhilcreationshere@gmail.com",
    label: "Mail",
    icon: <Mail className="size-6" />,
  },
];

export type FooterLinkItem = {
  href: string;
  label: string;
};

export const FooterLinks: FooterLinkItem[] = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/sitemap.xml", label: "Sitemap" },
];
