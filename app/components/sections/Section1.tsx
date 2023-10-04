import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

const myFontMontserrat_SemiBold = localFont({
  src: "../../../public/webfonts/Montserrat/static/Montserrat-SemiBold.ttf",
});
const myFontMontserrat_Bold = localFont({
  src: "../../../public/webfonts/Montserrat/static/Montserrat-Bold.ttf",
});

import logoFirst from "../../../public/loader-logo-animated2.png";

//components
import BlueButton from "../buttons/BlueButton";
import NavMobile from "../Nav/NavMobile";
import NavDesktop from "../Nav/NavDesktop";

type Section1Props = {
  isTablet: boolean;
};

const Section1 = React.forwardRef<HTMLInputElement, Section1Props>((props, ref) => {
  return (
    <section ref={ref} className="h-screen w-full relative">
      {props.isTablet ? (
        <NavDesktop position={"absolute"} color={"text-white"} />
      ) : (
        <NavMobile position={"absolute"} color={"bg-white"} />
      )}
      <div
        className={`${
          props.isTablet ? "fixed" : "absolute"
        } right-8 top-8 sm:top-32 sm:right-32 z-20`}
      >
        <BlueButton title={"Réserver"} width={"w-138"} />
      </div>

      <video
        preload="auto"
        loop
        muted
        playsInline
        autoPlay
        className="absolute top-0 left-0 w-full h-screen object-cover z-0"
      >
        <source
          src={
            "https://player.vimeo.com/progressive_redirect/playback/792253575/rendition/1080p/file.mp4?loc=external&signature=ad1d248d395e69ad0372d1fbdfda94fc4cbde1acac6b0e99da727aa714f31c3b"
          }
          type="video/mp4"
        />
      </video>

      <div className="h-screen flex flex-col justify-center items-center">
        <div className="z-20">
          <Image
            priority
            src={logoFirst}
            alt="logo animated first page"
            width={props.isTablet ? 144 : 87}
            quality={100}
          />
        </div>
        <h1
          className={`mt-11.18 text-white text-21 tracking-6 leading-25 ${myFontMontserrat_SemiBold.className} z-20`}
        >
          TARAWA
        </h1>
        <h2
          className={`mt-1.46 text-white text-7 tracking-5  leading-9 ${myFontMontserrat_Bold.className} z-20`}
        >
          HOTEL
        </h2>
      </div>
    </section>
  );
});

export default Section1;
