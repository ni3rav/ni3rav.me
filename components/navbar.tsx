"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "/projects", label: "projects" },
  { href: "/blogs", label: "blog" },
  { href: "/about", label: "about" },
  { href: "/stuff", label: "misc" },
  { href: "/resume.pdf", label: "resume" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-6 sm:py-8">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="text-sm font-medium text-foreground hover:text-blue transition-colors"
        >
          nirav
        </Link>

        {/* Mobile menu button */}
        <button
          className="sm:hidden text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden sm:flex items-center gap-5 sm:gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="sm:hidden mt-4 flex flex-col gap-3 dashed-border-t pt-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
