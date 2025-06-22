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
    <main className="flex min-h-[calc(100dvh-64px)] flex-col items-center justify-center bg-background">
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
