import React from "react";

import localFont from "next/font/local";

const myFontSamsungSharp = localFont({
  src: "../../../public/webfonts/samsungsharpsans-medium-webfont.woff",
});

type BlueButtonProps = {
  title: string;
  width: string;
};

const BlueButton: React.FC<BlueButtonProps> = ({ title, width }) => {
  return (
    <button
      className={`${width} h-56 text-white text-16 leading-20 tracking-normal rounded-4 bg-gradient-left-to-right z-20 ${myFontSamsungSharp.className}`}
    >
      {title}
    </button>
  );
};

export default BlueButton;
