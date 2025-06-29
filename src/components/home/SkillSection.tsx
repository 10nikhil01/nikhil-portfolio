import { type skill, skills } from "@/components/home/constant";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SkillSection() {
  return (
    <section
      id="skills"
      className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 px-0 py-12 text-center max-sm:font-mono md:px-6"
    >
      <h2 className="mb-6 text-2xl md:text-4xl font-bold text-foreground">🧰 Skills & Technologies</h2>

      <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill: skill) => (
          <Card
            key={skill.name}
            className="flex flex-col items-center justify-around border-border bg-card transition-all duration-300 hover:border-amber-500 hover:shadow-md"
          >
            <CardHeader className="flex h-12 flex-col items-center justify-center pb-2">
              <div className="text-muted-foreground">{skill.icon}</div>
            </CardHeader>
            <CardContent className="mt-2 flex items-center justify-center">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {skill.name}
              </CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
