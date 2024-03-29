import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      phone: { max: "1024px" },
      laptop: "1024px",
    },
    extend: {
      colors: {
        "navigation-golden": "#8a5129",
        "transparent-black": "#000000e6",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
