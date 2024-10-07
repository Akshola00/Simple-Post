/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/line-clamp')  
  ],
  
  daisyui: {
    themes: [
      {
        light: {
          primary: "#3490dc",
          secondary: "#ffed4a",
          accent: "#38b2ac",
          "base-100": "#ffffff",
        },
        dark: {
          primary: "#67e8f9",
          secondary: "#fbbf24",
          accent: "#d1fae5",
          "base-100": "#1f2937",
        },
      },
    ],
    // "light", "dark", "cupcake", "luxury",],
  },
};
