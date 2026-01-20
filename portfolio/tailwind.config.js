/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
      screens: {
        "2xl": "1120px",
      },
    },
    extend: {
      colors: {
        darkBlue: "#0f172a", // slate-900
        accent: {
          DEFAULT: "#2563eb", // blue-600
          foreground: "#eff6ff", // blue-50
        },
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(2, 6, 23, 0.15)",
      },
    },
  },
  plugins: [],
};
