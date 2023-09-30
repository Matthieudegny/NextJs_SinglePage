import React from "react";

import localFont from "next/font/local";

const myFontSamsungSharp = localFont({
  src: "../../../public/webfonts/samsungsharpsans-medium-webfont.woff",
});

type GreyButtonProps = {
  title: string;
  width: string;
  marginTop: string;
};

const GreyButton: React.FC<GreyButtonProps> = ({ title, width, marginTop }) => {
  return (
    <button
      className={`${width} ${marginTop} h-56 text-blackLighter text-16 leading-20 tracking-normal rounded-4 bg-gradient-grey border-1 border-greyBorder z-20 ${myFontSamsungSharp.className}`}
    >
      {title}
    </button>
  );
};

export default GreyButton;
