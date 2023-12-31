"use client";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import { useInView } from "react-intersection-observer";
//Fonts
const myFontTigerWalk = localFont({
  src: "../../../public/webfonts/tiger_walk-webfont.woff",
});
const myFontSamsungSharpBold = localFont({
  src: "../../../public/webfonts/samsungsharpsans-bold-webfont.woff",
});
const myFontSamsungOne = localFont({
  src: "../../../public/webfonts/samsungone-400-webfont.woff",
});
const myFontSamsungOne700 = localFont({
  src: "../../../public/webfonts/samsungone-700-webfont.woff",
});

//components
import BlueButton from "../buttons/BlueButton";
import GreyButton from "../buttons/GreyButton";

type Section1Props = {
  isTablet: boolean;
};

const Section2 = React.forwardRef<HTMLInputElement, Section1Props>((props, ref) => {
  const [refTitleLeft, inViewrefTitleLeft] = useInView({
    threshold: 0.5,
  });
  const [displayTitle, setdisplayTitle] = useState(false);
  const [refTextRight, inViewrefTextRight] = useInView({
    threshold: 0.5,
  });
  const [displayText, setdisplayText] = useState(false);

  useEffect(() => {
    if (inViewrefTitleLeft) setdisplayTitle(true);
    if (inViewrefTextRight) setdisplayText(true);
    console.log("inViewrefTitleLeft", inViewrefTitleLeft);
    console.log("inViewrefTextRight", inViewrefTextRight);
  }, [inViewrefTitleLeft, inViewrefTextRight]);

  const styleH2Section2 = `${props.isTablet ? "text-72 leading-74 sm:w-450" : "text-40 leading-40"}  ${
    myFontSamsungSharpBold.className
  }`;
  return (
    <section
      ref={refTitleLeft}
      className="w-full mb-150 pt-51 pl-16 pr-16 sm:pt-107 lg:pl-200 sm:pr-292 xl:pr-0 2xl:pl-200 2xl:flex"
    >
      <div
        style={{
          willChange: "opacity transform",
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
          transform: displayTitle ? "translateX(0)" : "translateX(-200px)",
          opacity: displayTitle ? 1 : 0,
        }}
        className="pl-16 pr-16 lg:pl-0 lg:pr-0"
      >
        <h1
          className={`sm:w-450 text-32 sm:text-48 leading-32 sm:leading-50 text-cyan ${myFontTigerWalk.className}`}
        >
          TARAWA HOTEL 5 ÉTOILES
        </h1>
        <h2 className={`mt-30 ${styleH2Section2}`}>Détente.</h2>
        <h2 className={`${styleH2Section2}`}>Relaxation.</h2>
        <h2 className={`${styleH2Section2}`}>Silence.</h2>
      </div>
      <div
        ref={refTextRight}
        style={{
          willChange: "opacity transform",
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
          transform: displayText ? "translateX(0)" : "translateX(200px)",
          opacity: displayText ? 1 : 0,
        }}
        className="w-full xl:w-770 h-384 2xl:h-288 mt-16 sm:mt-88 flex flex-col justify-between pl-16 pr-16 lg:pl-0 lg:pr-0 "
      >
        <p
          className={`w-full text-24 xl:text-40 text-blackLighter leading-32 xl:leading-48 xl:ml-208  ${myFontSamsungOne.className}`}
        >
          {!props.isTablet ? (
            <>
              Surplombant les plages de sable blanc de, sur l'île de Saint-Barthélemy, le Tarawa Hotel est le
              lieu rêvé des voyageurs en quête d'une escapade luxueuse en toute intimité.
            </>
          ) : (
            <>
              Surplombant les plages de sable blanc de l'île de Saint-Barthélemy, le{" "}
              <span className={`${myFontSamsungOne700.className}`}>Tarawa Hotel</span> est le lieu rêvé des
              voyageurs en quête d'une escapade luxueuse en toute intimité.
            </>
          )}
        </p>
        <div className="mt-32 2xl:ml-208 2xl:flex">
          <div>
            <BlueButton title={"Voir les chambres"} width={"w-214"} />
          </div>
          <div className="2xl:ml-16">
            <GreyButton title={"Comparer les chambres"} width={"w-270"} marginTop={"mt-16 2xl:mt-0"} />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Section2;
