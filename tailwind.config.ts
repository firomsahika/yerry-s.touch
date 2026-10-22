import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4AF37",
          50: "#FAF6E8",
          100: "#F5ECC7",
          200: "#EBD893",
          300: "#E5C378",
          400: "#D4AF37",
          500: "#B89425",
          600: "#917316",
          700: "#735C00",
          800: "#554300",
          900: "#362A00",
        },
        espresso: {
          DEFAULT: "#1E1513",
          light: "#2E211E",
          dark: "#140D0C",
        },
        velvet: {
          DEFAULT: "#0F0C0B",
          rich: "#181312",
        },
        ivory: {
          DEFAULT: "#FAF7F2",
          cream: "#FCF9F4",
          warm: "#FDFBF7",
          dark: "#EDE8DF",
        },
        cream: {
          DEFAULT: "#FAF7F2",
          rose: "#F9F1EE",
          soft: "#F6F0E8",
        },
        // Stitch Token Alignments
        primary: "#735C00",
        "primary-container": "#D4AF37",
        "on-primary-container": "#554300",
        "primary-fixed": "#FFE088",
        "secondary-container": "#EEDCD8",
        "on-secondary-container": "#6D605D",
        surface: "#FCF9F4",
        "on-surface": "#1C1C19",
        "on-surface-variant": "#4D4635",
        "inverse-surface": "#31302D",
        "inverse-on-surface": "#F3F0EB",
        "outline-variant": "#D0C5AF",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: [
          "var(--font-plus-jakarta)",
          "Plus Jakarta Sans",
          "Inter",
          "sans-serif",
        ],
        display: [
          "var(--font-playfair)",
          "Playfair Display",
          "Georgia",
          "serif",
        ],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        gold: "0 10px 30px -5px rgba(212, 175, 55, 0.25)",
        "gold-lg": "0 20px 40px -10px rgba(212, 175, 55, 0.35)",
        luxury: "0 20px 50px -15px rgba(30, 21, 19, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
