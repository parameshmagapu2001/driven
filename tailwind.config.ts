import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        freightNeoPro: ["var(--font-freight-neo-pro)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
