import Navbar from "@/components/navbar";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Misc",
  description:
    "Random experiments, side projects, and stuff I find interesting.",
  url: "/stuff",
});

const items = [
  {
    title: "sentio",
    description:
      "a simple micro-journaling app with offline PWA support. learned how to setup a basic CI-CD pipeline from scratch and deploy using a Cloud VM.",
    links: [{ label: "source", href: "https://github.com/ni3rav/sentio" }],
  },
  {
    title: "viceplay",
    description:
      "a simple webpage that plays some of my favourite songs that match the vibes of vice city.",
    links: [
      { label: "live", href: "https://viceplay.niravv.me" },
      { label: "source", href: "https://github.com/ni3rav/vice-play" },
    ],
  },
  {
    title: "woila",
    description:
      "a simple utility to change your wallpaper's colour theme to popular ones like catppuccin, dracula, tokyonight, nord, gruvbox in a single click.",
    links: [
      { label: "live", href: "https://woila.niravv.me" },
      { label: "source", href: "https://github.com/ni3rav/woila" },
    ],
  },
  {
    title: "one darkppuccin",
    description:
      "VSCode theme that fuses One Dark Pro's UI with Catppuccin's syntax highlighting.",
    links: [
      {
        label: "install",
        href: "https://marketplace.visualstudio.com/items?itemName=ni3rav.one-darkppuccin",
      },
      {
        label: "source",
        href: "https://github.com/ni3rav/one-darkppuccin",
      },
    ],
  },
  {
    title: "andromeda night",
    description:
      "VSCode theme — amalgam of Tokyo Night's clean UI with vivid syntax highlighting of Andromeda.",
    links: [
      {
        label: "install",
        href: "https://marketplace.visualstudio.com/items?itemName=ni3rav.andromeda-night",
      },
      {
        label: "source",
        href: "https://github.com/ni3rav/andromeda-night",
      },
    ],
  },
];

export default function StuffPage() {
  return (
    <main className="min-h-[90vh]">
      <Navbar />

      <section className="pb-6">
        <h1 className="text-lg font-medium mb-2">misc</h1>
        <p className="text-sm text-muted-foreground">
          small projects i built for fun but didn&apos;t include in my main
          portfolio
        </p>
      </section>

      <div className="w-full border-t border-dashed border-base02" />

      <section className="mb-16">
        {items.map((item, index) => (
          <div key={item.title}>
            <div className="py-5">
              <h3 className="text-sm font-medium mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {item.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground underline decoration-dashed underline-offset-4 decoration-base02 hover:decoration-foreground/30 transition-all"
                  >
                    {link.label}
                    <ArrowUpRight className="h-2.5 w-2.5" />
                  </Link>
                ))}
              </div>
            </div>
            {index < items.length - 1 && (
              <div className="w-full border-t border-dashed border-base02" />
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
