"use client";
import React, { useRef, useEffect, useState } from "react";
import localFont from "next/font/local";
import { useInView } from "react-intersection-observer";

//Fonts
const myFontTigerWalk = localFont({
  src: "../../public/webfonts/tiger_walk-webfont.woff",
});
const myFontSamsungOne = localFont({
  src: "../../public/webfonts/samsungone-400-webfont.woff",
});

import logoFooter from "../../public/icons8-sun.svg";

//components
import GreyButton from "./buttons/GreyButton";

type ArticleSection3Props = {
  time: string;
  title: string;
  titleButon: string;
  videoLink: number;
  heightVideo: string;
  marginTopVideo: string;
  marginTopMainSection: string;
};

const videoLink1 =
  "https://player.vimeo.com/progressive_redirect/playback/868367652/rendition/1080p/file.mp4?loc=external&signature=33dfcb2bff8b3a17645cf72cdd9c7696ec1cdd8611e50af6cfdcf9d5e1907d06";
const videoLink2 =
  "https://player.vimeo.com/progressive_redirect/playback/867835859/rendition/540p/file.mp4?loc=external&signature=d0565ef23ab1c14f685f47a8e19634b25882f3284308e1af0855092bd22a73ac";

const ArticleSection3: React.FC<ArticleSection3Props> = ({
  time,
  title,
  titleButon,
  videoLink,
  heightVideo,
  marginTopVideo,
  marginTopMainSection,
}) => {
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

  const [refTime, inViewTime] = useInView({
    threshold: 0.5,
  });
  const [displayTime, setdisplayTime] = useState(false);
  useEffect(() => {
    if (inViewTime) setdisplayTime(true);
  }, [inViewTime]);

  const linkVideo = videoLink === 1 ? videoLink1 : videoLink2;
  const heightBar = videoLink === 1 ? "h-64" : "h-10";
  const heightBarDesktop = videoLink === 1 ? "h-192" : "h-145";
  const positionBarDesktop = videoLink === 1 ? "-bottom-192" : "-bottom-145";
  const bottomPositionBar = videoLink === 1 ? "-bottom-64" : "-bottom-10";
  const marginBottomFirstVideo = videoLink === 1 ? "pb-64" : "";
  const displayNotMobile = videoLink === 1 ? "md:flex " : "md:flex md:flex-row-reverse";
  const heightArtcile = videoLink === 1 ? "xl:h-640" : "xl:h-1136";
  const widthButton = videoLink === 1 ? "w-214" : "w-176";
  const widthTitleDesktop = videoLink === 1 ? "xl:w-302 " : "xl:w-408";

  return (
    <article
      className={`relative ${marginTopMainSection} ${displayNotMobile} ${heightArtcile} md:justify-around md:items-center xl:justify-end `}
    >
      <div
        className={`absolute ${heightBarDesktop} xl:w-2 bg-slate-100 ${positionBarDesktop} left-50%`}
      ></div>
      <div
        ref={refTime}
        style={{
          willChange: "opacity transform",
          transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
          transform: displayTime ? "translateX(0)" : "translateY(50px)",
          opacity: displayTime ? 1 : 0,
        }}
        className="relative h-274  flex-col items-center xl:mx-auto xl:pl-14"
      >
        <div
          className={`flex justify-center items-center h-114 text-cyan text-96 xl:text-123 ${myFontTigerWalk.className}`}
        >
          {time}
        </div>
        <div
          className={`flex justify-center mt-16 text-blackLighter text-24 xl:text-42 leading-32 xl:leading-42 sm:text-center ${widthTitleDesktop} ${myFontSamsungOne.className}`}
        >
          {title}
        </div>
        <div className="flex justify-center">
          <GreyButton title={titleButon} width={widthButton} marginTop={"mt-24"} />
        </div>
        <div className="absolute h-64 w-2 md:w-0 bg-slate-100 -top-64 left-50%"></div>
        <div
          className={`absolute ${heightBar} w-2  md:w-0 bg-slate-100 ${bottomPositionBar} left-50%`}
        ></div>
      </div>
      <div onClick={toggleVideo} className={`${marginTopVideo}  ${marginBottomFirstVideo}`}>
        <video
          ref={videoRef}
          loop
          muted
          className={`w-full ${heightVideo} xl:w-1136  object-cover  ${
            videoLink === 1 ? "md:rounded-l-16" : "md:rounded-r-16"
          }  cursor-pointer`}
        >
          <source src={linkVideo} type="video/mp4" />
        </video>
      </div>
    </article>
  );
};

export default ArticleSection3;
