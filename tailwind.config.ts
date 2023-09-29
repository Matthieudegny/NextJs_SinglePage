import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        760: "760px",
      },
      top: {
        "50%": "50%",
      },
      left: {
        "50%": "50%",
      },
      translate: {
        "-50%": "-50%",
      },
      fontSize: {
        "7": "7px",
        "21": "21px",
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".039375em",
        wider: ".05em",
        widest: ".1em",
        "5.6": "5.6px",
      },
      lineHeight: {
        "9": "9px",
        "25": "25px", // Définissez votre hauteur de ligne personnalisée
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans"], // Définissez votre fonte Montserrat personnalisée
        montserratSemiBold: ["Montserrat-SemiBold", "sans"], // Définissez votre fonte Montserrat semi-bold personnalisée
        montserratBold: ["Montserrat-Bold", "sans"], // Définissez votre fonte Montserrat bold personnalisée
      },
      margin: {
        "1.46": "1.46px",
        "11.18": "11.18px",
      },
    },
  },
  plugins: [],
};
export default config;
