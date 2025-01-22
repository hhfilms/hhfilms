import type {Config} from "tailwindcss";
const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@mui/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        autofill: "e7e7e7",
        autofillText: "e7e7e7",
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: "#BF0B26",
        primary: "#1D4ED8", // Custom primary color (e.g., blue-600)
        secondary: "#0BBF2F", // Custom secondary color (e.g., purple-600)
        accent: "#F59E0B", // Accent color (e.g., amber-500)
        light: "#FBF9FA",
        lightaccent: "#817C70",
        deepteal: "#1A6F7E", // - A deep teal blue to create a striking contrast.
        softcream: "#F3E5AB", // - A soft cream or pale yellow for a balanced, warm tone.
        darkcyan: "#0F4C5C", // - A rich, dark cyan to add depth and sophistication.
        goldenorange: "#FFB94E", // - A warm, golden orange for a vibrant and energetic palette.
        mutedplum: "#733C70", // - A muted plum or purple to add subtle elegance.
        main: {
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#474545",
          900: "#3d3d3d",
          950: "#191919",
        },
        darkaccent: "#6B6F71",
        dark: "#261E28",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Custom sans-serif font
        serif: ["Merriweather", "serif"], // Custom serif font
        work: ["Work Sans", "serif"],
        assistant: ["Assistant", "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), "@tailwindcss/forms"],
} satisfies Config;
