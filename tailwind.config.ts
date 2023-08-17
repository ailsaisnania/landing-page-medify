import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        

      },
      fontSize: {
        "4.5xl": "2.5rem",
        "3.5xl": "2rem",
      },
      colors: {
        "medify-blue-100": "#F1F8FF",
        "medify-blue-200": "#87B5FF",
        "medify-blue-300": "#5393FB",
        "medify-blue-500": "#3D6EC6",
        "medify-yellow": "#FAC748",
        "medify-gray-100": "#ADADAD",
        "medify-gray-300": "#666666",
        "medify-gray-500": "#333333",
        "medify-white": "#FFFFFF",
      },
      padding:{
        "7.5": "7.5rem",
      }
    },
  },
  plugins: [
    require("daisyui"),
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addComponents({
        ".card": {},
      });
      addUtilities({
        ".gradient-blue": {
          "@apply from-medify-white via-medify-blue-300 to-medify-blue-500": {},
        },
        ".gradient-white": {
          "@apply from-[#F5FAFF] via-[#EEF6FF] to-[#E8F3FF]": {},
        },
        ".shadow-y": {
          boxShadow: "0px 16px 40px 0px #7090b0",
        },
        ".shadow-x": {
          boxShadow: "-75px 0px 32px -70px #7090b0",
        },
        ".grid-container": {
          "@apply grid-cols-4 gap-2 lg:grid-cols-12 lg:gap-8": {},
        },
        ".body-1": {
          "@apply text-sm lg:text-2xl": {},
        },
        ".body-2": {
          "@apply text-sm lg:text-xl": {},
        },
        ".button-text": {
          "@apply text-sm lg:text-xl font-bold": {},
        },
      });
    }),
  ],
};
export default config;
