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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        dark: "#1b1b1b",
        light: "#fff",
        primary: "#D3D6E9", // 240,86,199
        background: "#ebdbff",
        primaryDark: "#58E6D9", // 80,230,217
        coffee: "#f0e7db",
        opaque: "#ffffff40",
        brand: "#1582CC",
        brandDark: "#00d5ff",
        brandPurple: "#ebdbff",
        brandWhite: "#fff",
        brandGray: "#f5f7ff",
        brandBlue: "#F9FEFF",
        brandBlue2: "#dbeefd",
        purp: "#D3D6E9",
        navyBlue1: "#0F4C81",
        beige1: "#F5F5F5",
        teal1: "#008080",
        burgundy1: "#800020",
        emerald1: "#50C878",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
        lora: ["Lora", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: { max: "479px" }, // iPhone Portrait confirmed
        sm: { min: "480px", max: "767px" }, // iPhone Landscape
        md: { min: "768px", max: "1023px" }, // iPad Portrait
        lg: { min: "1024px", max: "1366px" }, // iPad Landscape
        xl: { min: "1367px", max: "1599px" }, // Laptop
        "2xl": { min: "1600px" }, // Desktop
      },
    },
  },
  plugins: [],
};
export default config;
