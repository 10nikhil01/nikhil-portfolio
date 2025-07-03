import {
  AboutSection,
  ContactSection,
  ExpSection,
  HeroSection,
  ProjectSection,
  SkillSection,
} from "@/components/home";

export default function Home() {
  return (
    <main className="mx-auto min-h-[calc(100dvh-64px)] bg-background px-2 xsm:px-6 md:px-16">
      <h1 className="text-foreground">Home Page</h1>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ExpSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
