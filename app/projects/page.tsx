import Navbar from "@/components/navbar";
import ProjectCard from "@/components/project-card";
import { getAllProjects } from "@/lib/getProjects";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Projects",
  description:
    "Explore my portfolio of web development projects including RoadSafe, HealthSync, Stargazer, and more. Built with React, Next.js, TypeScript, and modern web technologies.",
  url: "/projects",
});

export default function Projects() {
  const projects = getAllProjects();

  return (
    <main>
      <Navbar />

      <section className="pb-8">
        <h1 className="text-lg font-medium mb-2">projects</h1>
        <p className="text-sm text-muted-foreground">
          a selection of my recent work and personal projects
        </p>
      </section>

      <hr className="dashed mb-8" />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}
