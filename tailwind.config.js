/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        head1: [
          "40px",
          {
            lineHeight: "140%",
            fontWeight: "700",
          },
        ],
      },
      backgroundImage: {
        "color-gradient": "linear-gradient(to left, #e68f501a, #0a56f11a)",
        "white-gradient": "linear-gradient(to top left, #ffffff00, #ffffffff)",
        "blue-gradient":
          "linear-gradient(270deg, rgba(255, 255, 255, 0.075) 0%, rgba(10, 86, 241, 0.075) 100%)",
        "border-gradient": "linear-gradient(180deg, #0A56F1 0%, #E68F50 100%)",
      },
      colors: {
        "dark-1": "#36454F",
        "bright-blue": "#0A56f1",
        "pale-orange": "#E68F50",
        "gray-1": "rgba(101, 101, 101, 0.25)",
      },
      screens: {
        xs: "320px",
      },
      boxShadow: {
        blue: "0px 4px 10px 0px rgba(10, 86, 241, 0.25)",
        gray: "0px 8px 10px 0px rgba(101, 101, 101, 0.25)",
      },
    },
  },
  plugins: [],
};
