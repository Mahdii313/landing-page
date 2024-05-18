import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroimg: "url('/heroImg.jpg')",
      },
      screens: {
        xl2: "1600px",
      },
      fontFamily: {
        iranthin: "IransansLight",
        iranbold: "IransansBold",
        iranxbold: "IransansXBold",
      },
    },
  },
  plugins: [],
};
export default config;
