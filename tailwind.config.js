/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        light: "var(--light)",
        background: "var(--bg)",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [],
};

