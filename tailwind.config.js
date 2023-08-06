/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "hsl(0,0%,15%)",
        grey: "hsl(0,0%,77%)",
        white: "hsl(0,0%,98%)",
        blue: {
          light: "hsl(173, 58%, 39%)",
          dark: "hsl(197, 37%, 24%)",
        },
        orange: {
          light: "hsl(43, 74%, 66%)",
          DEFAULT: "hsl(27, 87%, 67%)",
          dark: "hsl(12, 76%, 61%)",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        "hero-lg": [
          "calc(50px + (120 - 50) * ((100vw - 200px) / (1440 - 200)))",
          {
            lineHeight: "1",
          },
        ],
        "hero-sm": [
          "calc(25px + (75 - 25) * ((100vw - 200px) / (1440 - 200)))",
          {
            lineHeight: "1",
          },
        ],
      },
      transitionTimingFunction: {
        "custom-in-out": "cubic-bezier(.85,.14,.17,.83)",
      },
    },
  },
};
