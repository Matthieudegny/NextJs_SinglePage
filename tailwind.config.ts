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
        "gradient-left-to-right": "linear-gradient(180deg, #00CBCB 0%, #009F9F 100%)",
        "gradient-grey": "linear-gradient(180deg, #FFFFFF 0%, #F9F9F9 100%)",
      },
      backgroundColor: {
        blackLighter: "#3B3B3B",
      },
      textColor: {
        cyan: "#009F9F", // Ajoutez votre couleur de texte personnalisée
        blackLighter: "#3B3B3B",
        backgroundSection4: "#F9F9F9",
      },
      height: {
        760: "760px",
        2: "2px",
        10: "10px",
        14: "14px",
        25: "25px",
        56: "56px",
        64: "64.5px",
        114: "114px",
        206: "206px",
        269: "269px",
        274: "274px",
        306: "306px",
        360: "360px",
        384: "384px",
        475: "475px",
        607: "607.5px",
      },
      width: {
        2: "2px",
        25: "25px",
        138: "138px",
        214: "214px",
        228: "228px",
        270: "300px",
        400: "400px",
        500: "500px",
        380: "600px",
        600: "600px",
        3000: "3000px",
      },
      top: {
        "50%": "50%",
      },
      left: {
        "50%": "50%",
      },
      inset: {
        8: "8px",
        "24": "24px",
        "29": "29px",
      },
      spacing: {
        10: "10px",
        16: "16px",
        24: "24px",
        30: "30px",
        32: "32px",
        41: "41px",
        48: "48px",
        "50%": "50%",
        51: "51px",
        64: "64px",
        80: "80px",
        95: "95px",
        102: "102px",
        112: "112.5px",
        117: "117px",
        150: "150.5px", // Ajoutez une valeur de padding left personnalisée
      },
      borderRadius: {
        4: "4px",
        8: "8px",
        "182": "182px",
      },
      translate: {
        "-50%": "-50%",
      },
      fontSize: {
        "7": "7px",
        16: "16px",
        "21": "21px",
        24: "24px",
        32: "32px",
        40: "40px",
        42: "42px",
        96: "96px",
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".039375em",
        wider: ".05em",
        widest: ".1em",
        "6": "6.4px",
        "5": "5.6px",
      },
      lineHeight: {
        "9": "9px",
        20: "20px",
        "25": "25px",
        32: "32px",
        40: "40px",
        53: "53px",
      },
      margin: {
        "1.46": "1.46px",
        "11.18": "11.18px",
      },
      borderWidth: {
        1: "1px",
      },
      color: {
        greyBorder: "#E4E4E4",
      },
    },
  },
  plugins: [],
};
export default config;
