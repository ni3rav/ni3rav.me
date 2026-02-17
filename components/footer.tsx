import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ni3rav",
    icon: Github,
  },
  {
    label: "Twitter",
    href: "https://x.com/ni3rav",
    icon: Twitter,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/nirav-mht",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:niravv1405@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="dashed-border-t mt-20">
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            crafted by nirav
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
