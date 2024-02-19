/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "fade-edge-to-transparent":
          "linear-gradient(to right, transparent 0%, #fff 10%, #fff 90%, transparent 100%)", // New gradient for fade effect
      },
      textShadow: {
        outline: "0 0 10px #000",
      },
      fontFamily: {
        sans: ["Ronnia", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "wri-blue": "#107AE2",
        "wri-dark-blue": "#0D064C",
        "wri-mid-blue": "#104B93",
        "wri-green": "#33A342",
        "wri-red": "#f0323c",
        "wri-yellow": "#FDB913",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  variants: {
    textShadow: ["responsive", "hover", "focus"],
  },
  plugins: [require("tailwindcss-textshadow")],
};
