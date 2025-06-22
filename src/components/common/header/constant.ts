export type MidMenuItem = {
  href: string;
  label: string;
};

type MidMenu = MidMenuItem[];

export const MidMenus: MidMenu = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
];
