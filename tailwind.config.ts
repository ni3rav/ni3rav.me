import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
        sans: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      colors: {
        /* Oxocarbon Base Colors */
        base00: "rgb(var(--oxo-base00) / <alpha-value>)",
        base01: "rgb(var(--oxo-base01) / <alpha-value>)",
        base02: "rgb(var(--oxo-base02) / <alpha-value>)",
        base03: "rgb(var(--oxo-base03) / <alpha-value>)",
        base04: "rgb(var(--oxo-base04) / <alpha-value>)",
        base05: "rgb(var(--oxo-base05) / <alpha-value>)",
        base06: "rgb(var(--oxo-base06) / <alpha-value>)",
        
        /* Oxocarbon Accent Colors */
        teal: "rgb(var(--oxo-teal) / <alpha-value>)",
        cyan: "rgb(var(--oxo-cyan) / <alpha-value>)",
        blue: "rgb(var(--oxo-blue) / <alpha-value>)",
        pink: "rgb(var(--oxo-pink) / <alpha-value>)",
        sky: "rgb(var(--oxo-sky) / <alpha-value>)",
        magenta: "rgb(var(--oxo-magenta) / <alpha-value>)",
        green: "rgb(var(--oxo-green) / <alpha-value>)",
        purple: "rgb(var(--oxo-purple) / <alpha-value>)",
        lightblue: "rgb(var(--oxo-lightblue) / <alpha-value>)",
        
        /* Surface Aliases for Catppuccin Compatibility */
        surface: "rgb(var(--oxo-base01) / <alpha-value>)",
        surface0: "rgb(var(--oxo-base01) / <alpha-value>)",
        surface1: "rgb(var(--oxo-base02) / <alpha-value>)",
        surface2: "rgb(var(--oxo-base03) / <alpha-value>)",
        mantle: "rgb(var(--oxo-base00) / <alpha-value>)",
        crust: "rgb(var(--oxo-base00) / <alpha-value>)",
        overlay: "rgb(var(--oxo-base03) / <alpha-value>)",
        overlay0: "rgb(var(--oxo-base03) / <alpha-value>)",
        overlay1: "rgb(var(--oxo-base03) / <alpha-value>)",
        subtext0: "rgb(var(--oxo-base04) / <alpha-value>)",
        subtext1: "rgb(var(--oxo-base04) / <alpha-value>)",
        text: "rgb(var(--oxo-base05) / <alpha-value>)",
        mauve: "rgb(var(--oxo-blue) / <alpha-value>)",
        lavender: "rgb(var(--oxo-lightblue) / <alpha-value>)",

        /* Semantic Colors */
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "rgb(var(--card) / <alpha-value>)",
          foreground: "rgb(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--popover) / <alpha-value>)",
          foreground: "rgb(var(--popover-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive) / <alpha-value>)",
          foreground: "rgb(var(--destructive-foreground) / <alpha-value>)",
        },
        border: "rgb(var(--border) / <alpha-value>)",
        input: "rgb(var(--input) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
        chart: {
          "1": "rgb(var(--chart-1) / <alpha-value>)",
          "2": "rgb(var(--chart-2) / <alpha-value>)",
          "3": "rgb(var(--chart-3) / <alpha-value>)",
          "4": "rgb(var(--chart-4) / <alpha-value>)",
          "5": "rgb(var(--chart-5) / <alpha-value>)",
        },
        sidebar: {
          DEFAULT: "rgb(var(--sidebar-background) / <alpha-value>)",
          foreground: "rgb(var(--sidebar-foreground) / <alpha-value>)",
          primary: "rgb(var(--sidebar-primary) / <alpha-value>)",
          "primary-foreground":
            "rgb(var(--sidebar-primary-foreground) / <alpha-value>)",
          accent: "rgb(var(--sidebar-accent) / <alpha-value>)",
          "accent-foreground":
            "rgb(var(--sidebar-accent-foreground) / <alpha-value>)",
          border: "rgb(var(--sidebar-border) / <alpha-value>)",
          ring: "rgb(var(--sidebar-ring) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
            fontFamily: "JetBrains Mono, monospace",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
