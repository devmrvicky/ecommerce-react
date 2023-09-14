/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        width: "100%,",
        maxW: "1440px",
        // marginInline: "auto",
        center: true,
      },
      colors: {
        primary: "#fff",
        primary1: "#FAFAFA",
        secondary: "#F5F5F5",
        secondary1: "#FEFAF1",
        secondary2: "#DB4444",
        bg: "#fff",
        bgDark: "#000",
        text: "#FAFAFA",
        text1: "#7D8184",
        text2: "#000",
        button: "#000",
        button1: "#00FF66",
        button2: "#DB4444",
        hoverBtn: "#E07575",
        hoverBtn2: "#A0BCE0",
      },
    },
  },
  plugins: [],
};
