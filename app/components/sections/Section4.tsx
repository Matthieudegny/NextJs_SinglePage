"use client";
import React, { useState, useEffect } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

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
        className={`text-24 2xl:text-40 mt-70 2xl:mt-131 leading-26 2xl:leading-50 ${myFontSamsungSharpBold.className}`}
      >
        {title}
      </h5>
      <p className="block w-full mt-16 mb-48 leading-24 2xl:leading-32 text-16 2xl:text-24">{text}</p>
    </>
  );
};

const videoLink1 =
  "https://player.vimeo.com/progressive_redirect/playback/867835899/rendition/720p/file.mp4?loc=external&signature=95238a92782907c9dc2b48e7a3868028eb9927cea7c579a285f109ac75c3fe0a";
const videoLink2 =
  "https://player.vimeo.com/progressive_redirect/playback/867835928/rendition/720p/file.mp4?loc=external&signature=037354ab676f274d7ef899b0cace09629ae93351545d3fe9bcc55b8dbf93decd";

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
        className="w-full h-206 2xl:h-368 object-cover rounded-8 mt-32 2xl:mt-96 cursor-pointer"
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
  const [refTitle, inViewrefTitle] = useInView({
    threshold: 0.9,
  });
  const [displayTitle, setdisplayTitle] = useState(false);
  useEffect(() => {
    if (inViewrefTitle) setdisplayTitle(true);
  }, [inViewrefTitle]);

  //CARROUSSEL
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", isDesktop ? "-74%" : "-83%"]);

  return (
    <section className="bg-backgroundSection4 lg:mt-145 h-full">
      <h4
        ref={refTitle}
        className={`lg:max-w-1303 lg:mx-auto pt-117 lg:pt-314 text-42 2xl:text-136 leading-53 lg:leading-170 pl-16 pr-16 text-center ${myFontSamsungSharpBold.className}`}
        style={{
          willChange: "opacity",
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          // transform: displayTitle ? "translateX(0)" : "translateX(-200px)",
          opacity: displayTitle ? 1 : 0,
        }}
      >
        Un hôtel pas comme les autres.
      </h4>
      {/*   h-475 lg:h-795  */}
      <div ref={targetRef} className=" relative h-[300vh] mt-102 pb-71  xl:pb-126  xl:mt-272">
        <div className="sticky flex items-center top-0 left-0 h-screen  overflow-hidden ">
          <motion.div style={{ x }} className="flex gap-10">
            <article className="flex w-[618px] 2xl:w-[1100px] h-full  ml-41  2xl:ml-193 2xl:mr-193  ">
              <div className="h-360 w-228 2xl:h-672 2xl:w-424 relative">
                <Image
                  src={firstImage}
                  alt="image couple eating"
                  fill={true}
                  quality={100}
                  className="rounded-8"
                />
              </div>

              <div className="w-390 2xl:w-580 h-full ml-48 2xl:ml-96 flex-col">
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
            <article className="flex w-[618px] 2xl:w-[1100px] h-full ml-123 2xl:mt-131 2xl:ml-193">
              <div className="h-360 w-228 2xl:h-540 2xl:w-424 relative">
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
            <article className="flex w-390 2xl:w-580 h-full ml-48 2xl:ml-96 2xl:mr-193">
              <div className="w-330 h-195 2xl:h-368 2xl:w-580 mt-64 2xl:mt-262 relative">
                <Image src={thirdImage} alt="brakefirst on table" fill={true} className="rounded-8" />
              </div>
            </article>
            <article className="flex w-[618px] 2xl:w-[1100px] h-475 2xl:h-795 ml-130 2xl:ml-193 mr-48">
              <div className="w-390 2xl:w-580 h-full pr-48 flex-col">
                <H5andTextAndVideo
                  title={"La mer est à vous"}
                  text={
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt" +
                    "ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo."
                  }
                  linkVideo={2}
                />
              </div>
              <div className="h-360 w-228 2xl:h-672 2xl:w-424 2xl:ml-48 mr-70 relative">
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
