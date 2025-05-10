/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: "Roboto",
        Inter: "Inter",
      },
    },
    container: {
      center: true,
      width: {
        DEFAULT: "100%",
      },
      padding: {
        DEFAULT: "10px",
        desktop: "0px",
      },
      screens: {
        desktop: "1180px",
      },
    },
    screens: {
      desktop: "1440px",
    },
  },
  plugins: [],
};
