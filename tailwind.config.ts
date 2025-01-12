import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        rubicGlitch: ["var(--font-rubik-glitch)"],
        specialElite: ["var(--font-special-elite)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        imgShadowFuchsia: "0px 0px 40px 10px rgba(217, 70, 239, 0.9)",
        imgShadowBlue: "0px 0px 40px 10px rgba(29, 78, 216, 0.9)",
        imgShadowOrange: "0px 0px 40px 10px rgba(234, 88, 12, 0.9)",
        imgShadowYellow: "0px 0px 40px 10px rgba(250, 204, 21, 0.9)",
        imgShadowGreen: "0px 0px 40px 10px rgba(34, 197, 94, 0.9)",
        videoShadowBlue: "-15px -10px 40px 20px rgba(29, 78, 216, 0.9)",
      },
    },
  },
  plugins: [],
} satisfies Config;
