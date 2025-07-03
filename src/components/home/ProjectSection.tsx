"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  type Project,
  ProjectHeading,
  projects,
  ProjectSubheading,
} from "@/components/home/constant";
import { useRouter } from "next/navigation";

export default function ProjectsSection() {
  const router = useRouter();
  return (
    <section
      id="projects"
      className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 px-0 py-12 text-center md:px-6"
    >
      <motion.h2
        className="mb-6 text-3xl font-bold text-foreground md:text-4xl"
        initial={{ y: 40, opacity: 0, scale: 0.8 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.5, delay: 0.1, damping: 10 }}
        viewport={{ once: false }}
      >
        {ProjectHeading}
      </motion.h2>
      <motion.p
        className="mx-auto mb-8 max-w-2xl bg-primaryGradient bg-clip-text text-base text-transparent md:text-lg"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        {ProjectSubheading}
      </motion.p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: Project, index: number) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 10 }}
            viewport={{ once: false }}
            className="cursor-default rounded-[14px] bg-border p-[2px] transition-colors duration-500 hover:bg-primaryGradient"
          >
            <Card
              key={index}
              className="flex h-full flex-col items-start justify-between border-0 text-left"
            >
              <CardHeader className="p-0 pb-2">
                <div className="flex items-center justify-center overflow-hidden rounded-t-xl bg-slate-900 md:min-h-60">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={0}
                    quality={100}
                    loading="lazy"
                    className="object-cover transition-all duration-500 hover:scale-105 max-sm:w-fit"
                  />
                </div>
              </CardHeader>
              <CardContent className="px-4 pb-2">
                <CardTitle className="text-lg font-semibold text-foreground">
                  {project.title}
                </CardTitle>
              </CardContent>
              <CardFooter className="px-4 pb-2 text-sm text-muted-foreground">
                {project.description}
              </CardFooter>
            </Card>
          </motion.a>
        ))}
        <div className="flex items-center justify-center">
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
            viewport={{ once: false }}
            onClick={() => router.push("/projects")}
            rel="noopener noreferrer"
            aria-label="See more"
            className="rounded-full bg-amber-500 px-4 py-2 text-base text-white shadow-amber-200"
          >
            See more
          </motion.button>
        </div>
      </div>
    </section>
  );
}
