import type {Config} from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", 
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './lib/**/*.{js,ts,jsx,tsx}',
    './node_modules/@mui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: "#c00c26",
        primary: "#1D4ED8", // Custom primary color (e.g., blue-600)
        secondary: "#9333EA", // Custom secondary color (e.g., purple-600)
        accent: "#F59E0B", // Accent color (e.g., amber-500)
        midnight: "#191919",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Custom sans-serif font
        serif: ["Merriweather", "serif"], // Custom serif font
        work: ["Work Sans", "serif"],
        assistant: ["Assistant", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
