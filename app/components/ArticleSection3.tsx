import React from "react";
import localFont from "next/font/local";

//Fonts
const myFontTigerWalk = localFont({
  src: "../../public/webfonts/tiger_walk-webfont.woff",
});
const myFontSamsungOne = localFont({
  src: "../../public/webfonts/samsungone-400-webfont.woff",
});

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

const videoLink1 = require("../../public/timeline-01.mp4");
const videoLink2 = require("../../public/timeline-05.mp4");

const ArticleSection3: React.FC<ArticleSection3Props> = ({
  time,
  title,
  titleButon,
  videoLink,
  heightVideo,
  marginTopVideo,
  marginTopMainSection,
}) => {
  const linkVideo = videoLink === 1 ? videoLink1 : videoLink2;
  const heightBar = videoLink === 1 ? "h-64" : "h-10";
  const bottomPositionBar = videoLink === 1 ? "-bottom-64" : "-bottom-10";

  return (
    <article className={`${marginTopMainSection}`}>
      {/*  heure + titre + bouton + traits de finition verticaux*/}
      <div className="relative h-274 w-full flex-col items-center">
        <div
          className={`flex justify-center items-center h-114 text-cyan text-96 ${myFontTigerWalk.className}`}
        >
          {time}
        </div>
        <div
          className={`flex justify-center mt-16 text-blackLighter text-24 leading-32 ${myFontSamsungOne.className}`}
        >
          {title}
        </div>
        <div className="flex justify-center">
          <GreyButton title={titleButon} width={"w-270"} marginTop={"mt-24"} />
        </div>
        <div className="absolute h-64 w-2 bg-slate-100 -top-64 left-50%"></div>
        <div className={`absolute ${heightBar} w-2 bg-slate-100 ${bottomPositionBar} left-50%`}></div>
      </div>
      <div className={`${marginTopVideo}`}>
        <video loop muted className={`w-full ${heightVideo} object-cover`}>
          <source src={linkVideo} type="video/mp4" />
        </video>
      </div>
    </article>
  );
};

export default ArticleSection3;
