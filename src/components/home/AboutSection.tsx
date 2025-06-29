import Avatar from "@/icons/Avatar";
import Link from "next/link";

function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 px-0 py-12 text-center max-sm:font-mono md:px-6"
    >
      <Avatar aria-label="avatar on about section" />
      <h2 className="mb-6 text-2xl font-bold text-foreground md:text-4xl">ABOUT ME </h2>
      <p className="text-lg text-muted-foreground">
        👋 I&apos;m <span className="font-semibold">Nikhil Kumar</span> — a{" "}
        <span className="font-semibold">MERN Stack Developer</span> with{" "}
        <span className="font-semibold">2.5 years of experience</span>, currently working at{" "}
        <span className="font-semibold">Purecode AI</span>.
      </p>
      <p className="text-lg text-muted-foreground">
        While I work across the full stack (MongoDB, Express.js, React.js, Node.js), my strength
        lies in building high-performance frontend applications using{" "}
        <span className="font-semibold">React.js, Next.js, TypeScript</span>, and{" "}
        <span className="font-semibold">Tailwind CSS</span>.
      </p>
      <p className="mb-6 text-lg text-muted-foreground">
        I specialize in crafting fast, accessible, and{" "}
        <span className="font-semibold">SEO-optimized web experiences</span> — improving Core Web
        Vitals, leveraging SSR/ISR, and ensuring strong search engine visibility through{" "}
        <span className="font-semibold">technical SEO strategies</span>. My work has helped drive
        significant improvements in <span className="font-semibold">organic traffic</span>,{" "}
        <span className="font-semibold">page load performance</span>, and{" "}
        <span className="font-semibold">user engagement</span>.
      </p>
      <Link
        href="/about"
        rel="noopener noreferrer"
        aria-label="about page"
        className="my-0 rounded-full bg-amber-500 px-3 py-2 text-sm text-white transition-all duration-300 hover:scale-105"
      >
        Read more
      </Link>
    </section>
  );
}

export default AboutSection;
