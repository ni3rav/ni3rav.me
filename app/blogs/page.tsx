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

const POSTS_PER_PAGE = 5;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;

  const allBlogs = getAllBlogs().sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const currentPage = Math.max(1, parseInt(params?.page || "1", 10));
  const totalPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const blogs = allBlogs.slice(start, start + POSTS_PER_PAGE);

  return (
    <main className="min-h-[90vh] flex flex-col">
      <Navbar />

      <section className="pb-6">
        <h1 className="text-lg font-medium mb-2">blog</h1>
        <p className="text-sm text-muted-foreground">
          thoughts, ideas, and insights on web design and development
        </p>
      </section>

      <div className="w-full border-t border-dashed border-base02" />

      <section className="flex-1">
        {blogs.map((post, index) => (
          <div key={post.slug}>
            <Link
              href={`/blogs/${post.slug}`}
              className="group block py-4"
              aria-label={`Read blog post: ${post.title}`}
            >
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground tabular-nums">
                  {post.date}
                </span>
                <h3 className="text-sm font-medium group-hover:text-blue transition-colors">
                  {post.title}
                </h3>
                {post.description && (
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                )}
              </div>
            </Link>
            {index < blogs.length - 1 && (
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
                href={`/blogs?page=${currentPage - 1}`}
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
                href={`/blogs?page=${currentPage + 1}`}
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
