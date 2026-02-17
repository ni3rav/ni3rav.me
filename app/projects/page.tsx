import Navbar from "@/components/navbar";
import Link from "next/link";
import { getAllProjects } from "@/lib/getProjects";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Projects",
  description:
    "Explore my portfolio of web development projects including RoadSafe, HealthSync, Stargazer, and more. Built with React, Next.js, TypeScript, and modern web technologies.",
  url: "/projects",
});

const PROJECTS_PER_PAGE = 5;

export default async function Projects({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;

  const allProjects = getAllProjects().sort((a, b) => {
    const yearA = parseInt(a.year || "0", 10);
    const yearB = parseInt(b.year || "0", 10);
    return yearB - yearA;
  });

  const currentPage = Math.max(1, parseInt(params?.page || "1", 10));
  const totalPages = Math.ceil(allProjects.length / PROJECTS_PER_PAGE);
  const start = (currentPage - 1) * PROJECTS_PER_PAGE;
  const projects = allProjects.slice(start, start + PROJECTS_PER_PAGE);

  return (
    <main className="min-h-[90vh] flex flex-col">
      <Navbar />

      <section className="pb-6">
        <h1 className="text-lg font-medium mb-2">projects</h1>
        <p className="text-sm text-muted-foreground">
          a selection of my recent work and personal projects
        </p>
      </section>

      <div className="w-full border-t border-dashed border-base02" />

      <section className="flex-1">
        {projects.map((project, index) => (
          <div key={project.id}>
            <Link
              href={`/projects/${project.id}`}
              className="group block py-4"
            >
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground tabular-nums">
                  {project.year}
                </span>
                <h3 className="text-sm font-medium group-hover:text-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-muted-foreground border border-dashed border-base02 px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
            {index < projects.length - 1 && (
              <div className="w-full border-t border-dashed border-base02" />
            )}
          </div>
        ))}
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <>
          <div className="w-full border-t border-dashed border-base02 mt-2" />
          <div className="flex items-center justify-between py-6">
            {currentPage > 1 ? (
              <Link
                href={`/projects?page=${currentPage - 1}`}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                ← prev
              </Link>
            ) : (
              <span />
            )}
            <span className="text-xs text-muted-foreground">
              {currentPage} / {totalPages}
            </span>
            {currentPage < totalPages ? (
              <Link
                href={`/projects?page=${currentPage + 1}`}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                next →
              </Link>
            ) : (
              <span />
            )}
          </div>
        </>
      )}
    </main>
  );
}
