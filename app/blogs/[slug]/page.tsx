import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { BlogPostStructuredData } from "@/components/structured-data";
import { useMDXComponents } from "@/mdx-component";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // @ts-ignore
  if (typeof params.then === "function") {
    params = await params;
  }
  const blogPath = path.join(
    process.cwd(),
    "content/blogs",
    `${params.slug}.mdx`
  );
  if (!fs.existsSync(blogPath)) {
    return {};
  }
  const file = fs.readFileSync(blogPath, "utf8");
  const { data } = matter(file);
  return constructMetadata({
    title: data.title || params.slug,
    description: data.description || "Read this article by Nirav Mehta",
    image: data.image || "/opengraph-image",
    url: `/blogs/${params.slug}`,
  });
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  // @ts-ignore
  if (typeof params.then === "function") {
    params = await params;
  }

  const blogPath = path.join(
    process.cwd(),
    "content/blogs",
    `${params.slug}.mdx`
  );
  if (!fs.existsSync(blogPath)) {
    notFound();
  }

  const file = fs.readFileSync(blogPath, "utf8");
  const { data, content } = matter(file);

  return (
    <>
      <BlogPostStructuredData
        title={data.title}
        description={data.description || ""}
        datePublished={data.date}
        author={data.author || "Nirav Mehta"}
        image={data.image}
        url={`/blogs/${params.slug}`}
      />
      <main>
        <Navbar />

        <section className="pb-16">
          <Link
            href="/blogs"
            className="inline-flex items-center text-xs text-muted-foreground hover:text-foreground mb-8 group transition-colors"
          >
            <ArrowLeft className="mr-1.5 h-3 w-3 group-hover:translate-x-[-2px] transition-transform" />
            back to blog
          </Link>

          <p className="text-xs text-muted-foreground mb-3">{data.date}</p>
          <h1 className="text-xl font-medium mb-4">{data.title}</h1>

          {data.tags && data.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {data.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-[10px] text-muted-foreground dashed-border px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {data.image && (
            <div className="relative w-full h-[250px] sm:h-[350px] mb-10 overflow-hidden dashed-border">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
          )}

          <article className="prose prose-invert max-w-none text-muted-foreground">
            <MDXRemote source={content} components={useMDXComponents({})} />
          </article>

          <hr className="dashed my-10" />

          <p className="text-xs text-muted-foreground text-right">
            written by{" "}
            <span className="text-foreground">{data.author}</span>
          </p>
        </section>
      </main>
    </>
  );
}
