/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "hsl(0,0%,15%)",
      grey: "hsl(0,0%,77%)",
      white: "hsl(0,0%,98%)",
      blue: {
        100: "hsl(173, 85%, 90%)",
        200: "hsl(173, 78%, 80%)",
        300: "hsl(173, 73%, 70%)",
        400: "hsl(173, 65%, 60%)",
        500: "hsl(173, 63%, 50%)",
        600: "hsl(173, 58%, 39%)",
        700: "hsl(182, 64%, 24%)",
        800: "hsl(190, 78%, 15%)",
        900: "hsl(197, 85%, 10%)",
      },
      orange: {
        100: "hsl(50, 94%, 90%)",
        200: "hsl(46, 84%, 80%)",
        300: "hsl(40, 79%, 72%)",
        400: "hsl(32, 74%, 70%)",
        500: "hsl(27, 87%, 67%)",
        600: "hsl(20, 76%, 61%)",
        700: "hsl(15, 76%, 43%)",
        800: "hsl(13, 85%, 30%)",
        900: "hsl(13, 90%, 16%)",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
          "calc(22px + (75 - 22) * ((100vw - 200px) / (1440 - 200)))",
          {
            lineHeight: "1",
          },
        ],
      },
      transitionTimingFunction: {
        "custom-in-out": "cubic-bezier(.85,.14,.17,.83)",
      },
      typography: ({ theme }) => ({
        jp: {
          css: {
            "--tw-prose-body": theme("colors.blue[900]"),
            "--tw-prose-headings": theme("colors.blue[700]"),
            "--tw-prose-lead": theme("colors.blue[700]"),
            "--tw-prose-links": theme("colors.orange[800]"),
            "--tw-prose-bold": theme("colors.blue[700]"),
            "--tw-prose-counters": theme("colors.blue[600]"),
            "--tw-prose-bullets": theme("colors.orange[700]"),
            "--tw-prose-hr": theme("colors.blue[300]"),
            "--tw-prose-quotes": theme("colors.blue[900]"),
            "--tw-prose-quote-borders": theme("colors.blue[300]"),
            "--tw-prose-captions": theme("colors.blue[700]"),
            "--tw-prose-code": theme("colors.blue[900]"),
            "--tw-prose-pre-code": theme("colors.blue[100]"),
            "--tw-prose-pre-bg": theme("colors.blue[900]"),
            "--tw-prose-th-borders": theme("colors.blue[300]"),
            "--tw-prose-td-borders": theme("colors.blue[200]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
