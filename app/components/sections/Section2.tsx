"use client";
import React, { forwardRef, Ref, HTMLProps } from "react";
import localFont from "next/font/local";

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

//components
import BlueButton from "../buttons/BlueButton";
import GreyButton from "../buttons/GreyButton";

const styleH2Section2 = `text-40 leading-40 ${myFontSamsungSharpBold.className}`;

const Section2 = React.forwardRef<HTMLInputElement>((props, ref) => {
  return (
    // mb de 150 pour compenser les mt 32 + 16 et les 112.5 de marge avec la section 3
    <section ref={ref} className="w-full relative mb-150 pl-16 pr-16">
      <h1 className={`pt-51 text-32 leading-32 text-cyan ${myFontTigerWalk.className}`}>
        TARAWA HOTEL 5 ÉTOILES
      </h1>
      <h2 className={`mt-30 text-40 leading-40 ${myFontSamsungSharpBold.className}`}>Détente.</h2>
      <h2 className={`${styleH2Section2}`}>Relaxation.</h2>
      <h2 className={`${styleH2Section2}`}>Silence.</h2>
      <div className="h-384 mt-16 flex flex-col justify-between">
        <p className={` text-24 text-blackLighter leading-32 ${myFontSamsungOne.className}`}>
          Surplombant les plages de sable blanc de, sur l'île de Saint-Barthélemy, le Tarawa Hotel est le lieu
          rêvé des voyageurs en quête d'une escapade luxueuse en toute intimité.
        </p>
        <div className="mt-32">
          <BlueButton title={"Voir les chambres"} width={"w-214"} />
          <GreyButton title={"Comparer les chambres"} width={"w-270"} marginTop={"mt-16"} />
        </div>
      </div>
    </section>
  );
});

export default Section2;
