import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "left-right": {
          "0%": {
            left: "-200px",
          },
          "20%": {
            left: "-150px",
          },
          "40%": {
            left: "-100px",
          },
          "60%": {
            left: "-50px",
          },
          "95%": {
            left: "-5px"
          },
        },
        "skew": {
          "0%":{
            transform: "skew(0deg)"
          },
          "11%": {
            transform: "skewX(12deg)"
          },
          "22%": {
            transform: "skewX(0deg)"
          },
          "33%": {
            transform: "skewY(-12deg)"
          },
          "44%": {
            transform: "skewY(0deg)"
          },
          "55%": {
            transform: "skewX(-6deg)"
          },
          "66%": {
            transform: "skewY(0deg)"
          },
          "77%": {
            transform: "skewY(-8deg)"
          },
          "88%": {
            transform: "skewY(4deg)"
          },
          "99%": {
            transform: "skewY(0deg)"
          },
        },
        "opacity": {
          "0%": {
            opacity: "0"
          },
          "60%": {
            opacity: ".6"
          },
          "99%": {
            opacity: ".99"
          }
        }
      },
      animation: {
        "left-right-appear": "left-right .5s linear",
        "skew-infinite": "skew 4s ease-in-out infinite alternate-reverse",
        "left-right-skew": "left-right .5s linear, skew 10s ease-in-out .6s infinite alternate-reverse",
        "opacity-appear": "opacity .5s ease-in-out"
      }
    },
  },
  plugins: [],
};
export default config;
