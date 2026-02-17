import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = [
  {
    href: "/projects",
    label: "projects",
    desc: "things i've built and shipped",
  },
  {
    href: "/blogs",
    label: "blog",
    desc: "writeups on things i've learned",
  },
  {
    href: "/about",
    label: "about",
    desc: "a bit more context about me",
  },
  {
    href: "/stuff",
    label: "misc",
    desc: "extra experiments and stuff",
  },
  {
    href: "/resume.pdf",
    label: "resume",
    desc: "one-page pdf with the highlights",
  },
];

const socials = [
  { href: "https://github.com/ni3rav", label: "github" },
  { href: "https://x.com/ni3rav", label: "twitter" },
  { href: "mailto:niravv1405@gmail.com", label: "email" },
  { href: "https://linkedin.com/in/nirav-mht", label: "linkedin" },
];

export default function Home() {
  return (
    <main className="py-20">
      {/* Intro */}
      <section>
        <h1 className="text-lg font-medium mb-2">nirav</h1>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
          fullstack developer and computer science student.
          <br />
          <span className="italic">i like cats.</span>
        </p>
      </section>

      <hr className="dashed my-10" />

      {/* Navigation links */}
      <section>
        <ul className="space-y-4">
          {links.map(({ href, label, desc }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex items-baseline gap-3"
              >
                <span className="text-sm text-foreground group-hover:text-blue transition-colors">
                  {label}
                </span>
                <span className="text-xs text-muted-foreground">
                  — {desc}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <hr className="dashed my-10" />

      {/* Social links */}
      <section>
        <div className="flex flex-wrap items-center gap-4">
          {socials.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground underline decoration-dashed underline-offset-4 decoration-base02 hover:decoration-foreground/30 transition-all"
            >
              {label}
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
