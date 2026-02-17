import Navbar from "@/components/navbar";
import Link from "next/link";
import { getAllBlogs } from "@/lib/getBlogs";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Blog",
  description:
    "Technical articles and insights on web development, React, Next.js, design patterns, and modern JavaScript. Learn from my experiences building web applications.",
  url: "/blogs",
});

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <main>
      <Navbar />

      <section className="pb-8">
        <h1 className="text-lg font-medium mb-2">blog</h1>
        <p className="text-sm text-muted-foreground">
          thoughts, ideas, and insights on web design and development
        </p>
      </section>

      <hr className="dashed" />

      <section className="mb-16">
        {blogs.map((post, index) => (
          <div key={post.slug}>
            <Link
              href={`/blogs/${post.slug}`}
              className="group block py-5"
              aria-label={`Read blog post: ${post.title}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="text-xs text-muted-foreground shrink-0 tabular-nums">
                  {post.date}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium group-hover:text-blue transition-colors">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                      {post.description}
                    </p>
                  )}
                </div>
              </div>
            </Link>
            {index < blogs.length - 1 && <hr className="dashed" />}
          </div>
        ))}
      </section>
    </main>
  );
}
