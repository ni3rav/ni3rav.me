import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

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
    <main className="min-h-[90vh] flex flex-col justify-center py-16 sm:py-24">
      {/* Intro */}
      <section>
        <h1 className="text-xl sm:text-2xl font-medium mb-3">nirav</h1>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          fullstack developer and computer science student.
        </p>
        <p className="text-sm sm:text-base text-muted-foreground italic">
          i like cats.
        </p>
      </section>

      <div className="w-full border-t border-dashed border-base02 my-6" />

      {/* Navigation links */}
      <section>
        <ul className="space-y-4">
          {links.map(({ href, label, desc }) => (
            <li key={href}>
              <Link href={href} className="group block">
                <span className="text-sm sm:text-base font-medium text-foreground group-hover:text-blue transition-colors">
                  {label}
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground ml-3">
                  — {desc}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="w-full border-t border-dashed border-base02 my-6" />

      {/* Social links + theme toggle */}
      <section>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          {socials.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs sm:text-sm text-muted-foreground hover:text-foreground underline decoration-dashed underline-offset-4 decoration-base02 hover:decoration-foreground/30 transition-all"
            >
              {label}
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </section>
    </main>
  );
}

