"use client";
import React, { useState, useEffect } from "react";
import localFont from "next/font/local";
import Image from "next/image";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import firstImage from "../../../public/slideshow-01.jpg";
import secondImage from "../../../public/slideshow-03.jpg";
import thirdImage from "../../../public/slideshow-05.jpg";
import fourthImage from "../../../public/slideshow-07.jpg";

const myFontSamsungSharpBold = localFont({
  src: "../../../public/webfonts/samsungsharpsans-bold-webfont.woff",
});

type H5AndTextProps = {
  title: string;
  text: string;
};

const H5AndText: React.FC<H5AndTextProps> = ({ title, text }) => {
  return (
    <>
      <h5
        className={`text-24 lg:text-40 mt-70 lg:mt-131 leading-26 lg:leading-50 ${myFontSamsungSharpBold.className}`}
      >
        {title}
      </h5>
      <p className="block w-full mt-16 mb-48 leading-24 lg:leading-32 text-16 lg:text-24">{text}</p>
    </>
  );
};

const videoLink1 = require("../../../public/slideshow-02.mp4");
const videoLink2 = require("../../../public/slideshow-06.mp4");

type h5andTextAndVideoProps = {
  title: string;
  text: string;
  linkVideo: number;
};
const H5andTextAndVideo: React.FC<h5andTextAndVideoProps> = ({ title, text, linkVideo }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };
  return (
    <>
      <H5AndText title={title} text={text} />
      <video
        onClick={toggleVideo}
        ref={videoRef}
        loop
        muted
        className="w-full h-206 lg:h-368 object-cover rounded-8 mt-32 lg:mt-96 cursor-pointer"
      >
        <source src={linkVideo === 1 ? videoLink1 : videoLink2} type="video/mp4" />
      </video>
    </>
  );
};

type Section4Props = {
  isDesktop: boolean;
};

const Section4: React.FC<Section4Props> = ({ isDesktop }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Formule pour calculer x en fonction de w (interpolation linéaire)
  const calculX = (w: number): any => {
    let value = isDesktop ? 1870 - w : 1024 - w;
    value = isDesktop ? value * 0.6 : value * 0.8;
    const result = isDesktop ? -3500 + -value : -1700 + -value;
    return result.toFixed(0) + "px"; // Convertir le résultat en string avec l'unité "px"
  };

  const [xScroll, setWscroll] = useState<string>(calculX(window.innerWidth));

  // Mettre à jour widthWindow lorsque la fenêtre est redimensionnée
  useEffect(() => {
    const handleResize = () => {
      setWscroll(calculX(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["1%", xScroll]);
  return (
    <section className="bg-backgroundSection4 lg:mt-145 h-full">
      <h4
        className={`lg:max-w-1303 lg:mx-auto pt-117 lg:pt-314 text-42 2xl:text-136 leading-53 lg:leading-170 pl-16 pr-16 text-center ${myFontSamsungSharpBold.className}`}
      >
        Un hôtel pas comme les autres.
      </h4>
      {/*  relative h-475 lg:h-795  mt-102 mb-71  lg:mb-126  lg:mt-272 */}
      <div ref={targetRef} className=" relative h-[300vh] mt-102 pb-71  lg:pb-126  lg:mt-272">
        <div className="sticky flex items-center top-0 left-0 h-screen  overflow-hidden">
          <motion.div style={{ x }} className="flex gap-10">
            <article className="flex w-[618px] lg:w-[1100px] h-full  ml-41  lg:ml-193 lg:mr-193  ">
              <div className="h-360 w-228 lg:h-672 lg:w-424 relative">
                <Image
                  src={firstImage}
                  alt="image couple eating"
                  fill={true}
                  quality={100}
                  className="rounded-8"
                />
              </div>

              <div className="w-390 lg:w-580 h-full ml-48 lg:ml-96 flex-col">
                <H5andTextAndVideo
                  title={"Toutes les saveurs des îles"}
                  text={
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt" +
                    "ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo."
                  }
                  linkVideo={1}
                />
              </div>
            </article>
            <article className="flex w-[618px] lg:w-[1100px] h-full ml-123 lg:mt-131 lg:ml-193">
              <div className="h-360 w-228 lg:h-540 lg:w-424 relative">
                <Image src={secondImage} alt="brakefirst on table" fill={true} className="rounded-8" />
              </div>
              <div className="w-390 h-full pl-48 flex-col">
                <H5AndText
                  title={"Un confort royal"}
                  text={
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt" +
                    "ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo."
                  }
                />
              </div>
            </article>
            <article className="flex w-390 lg:w-580 h-full ml-48 lg:ml-96 lg:mr-193">
              <div className="w-330 h-195 lg:h-368 lg:w-580 mt-64 lg:mt-262 relative">
                <Image src={thirdImage} alt="brakefirst on table" fill={true} className="rounded-8" />
              </div>
            </article>
            <article className="flex w-[618px] lg:w-[1100px] h-475 lg:h-795 ml-130 lg:ml-193 mr-48">
              <div className="w-390 lg:w-580 h-full pr-48 flex-col">
                <H5andTextAndVideo
                  title={"La mer est à vous"}
                  text={
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt" +
                    "ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo."
                  }
                  linkVideo={2}
                />
              </div>
              <div className="h-360 w-228 lg:h-672 lg:w-424 lg:ml-48 mr-70 relative">
                <Image src={fourthImage} alt="image couple eating" fill={true} className="rounded-8" />
              </div>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
