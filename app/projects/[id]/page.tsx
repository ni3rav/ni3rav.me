import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { useMDXComponents } from "@/mdx-component";

// Dynamic metadata generation
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  // @ts-ignore
  if (typeof params.then === "function") {
    params = await params;
  }
  const projectPath = path.join(
    process.cwd(),
    "content/projects",
    `${params.id}.mdx`
  );
  if (!fs.existsSync(projectPath)) {
    return {};
  }
  const file = fs.readFileSync(projectPath, "utf8");
  const { data } = matter(file);
  return constructMetadata({
    title: data.title || params.id,
    description:
      data.description || "A project by Nirav Mehta - Fullstack Developer",
    image: `/api/og?title=${encodeURIComponent(data.title || params.id)}`,
    url: `/projects/${params.id}`,
  });
}

export default async function ProjectDetail({
  params,
}: {
  params: { id: string };
}) {
  // @ts-ignore
  if (typeof params.then === "function") {
    params = await params;
  }

  const projectPath = path.join(
    process.cwd(),
    "content/projects",
    `${params.id}.mdx`
  );
  if (!fs.existsSync(projectPath)) {
    notFound();
  }

  const file = fs.readFileSync(projectPath, "utf8");
  const { data, content } = matter(file);

  return (
    <main className="min-h-[90vh]">
      <Navbar />

      <article className="pb-16">
        <Link
          href="/projects"
          className="inline-flex items-center text-xs text-muted-foreground hover:text-foreground mb-8 group transition-colors"
        >
          <ArrowLeft className="mr-1.5 h-3 w-3 group-hover:translate-x-[-2px] transition-transform" />
          back to projects
        </Link>

        <h1 className="text-xl font-medium mb-2">{data.title}</h1>
        <p className="text-sm text-muted-foreground mb-6">
          {data.description}
        </p>

        {/* Action links */}
        <div className="flex flex-wrap gap-3 mb-8">
          {data.demoUrl && (
            <a
              href={data.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs dashed-border px-3 py-1.5 text-foreground hover:bg-surface/50 transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
              live demo
            </a>
          )}
          {data.githubUrl && (
            <a
              href={data.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs dashed-border px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-3 w-3" />
              source code
            </a>
          )}
        </div>

        {/* Hero image */}
        {data.image && (
          <div className="relative w-full h-[250px] sm:h-[350px] mb-10 overflow-hidden dashed-border">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <hr className="dashed mb-8" />

        {/* Project details sidebar */}
        <div className="dashed-border p-5 mb-8">
          <div className="flex flex-wrap gap-6">
            {data.year && (
              <div>
                <h4 className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
                  Year
                </h4>
                <p className="text-xs">{data.year}</p>
              </div>
            )}
            {data.technologies && (
              <div className="flex-1 min-w-0">
                <h4 className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">
                  Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {data.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="text-[10px] dashed-border px-2 py-0.5 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-invert max-w-none text-muted-foreground">
          <MDXRemote source={content} components={useMDXComponents({})} />
        </article>
      </article>
    </main>
  );
}
