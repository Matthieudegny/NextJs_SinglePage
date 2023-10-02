import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

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
      <h5 className={`text-24 mt-70 leading-26 ${myFontSamsungSharpBold.className}`}>{title}</h5>
      <p className="block mt-16 mb-48 leading-24 text-16">{text}</p>
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
  return (
    <>
      <H5AndText title={title} text={text} />
      <video loop muted className=" w-full h-206 object-cover rounded-8 mt-32">
        <source src={linkVideo === 1 ? videoLink1 : videoLink2} type="video/mp4" />
      </video>
    </>
  );
};

const Section4 = () => {
  return (
    <section className="bg-backgroundSection4 lg:mt-145 h-full">
      <h4
        className={`lg:max-w-1303 lg:mx-auto pt-117 lg:pt-314 text-42 lg:text-136 leading-53 lg:leading-170 pl-16 pr-16 text-center ${myFontSamsungSharpBold.className}`}
      >
        Un hôtel pas comme les autres.
      </h4>

      <div className="h-475 w-full flex mt-102 mb-71 lg:pb-126 lg:h-795 lg:pt-272 bg-green-200 ">
        <article className="flex w-618 pl-41 ">
          <div className="h-360 w-228 relative">
            <Image
              src={firstImage}
              alt="image couple eating"
              fill={true}
              quality={100}
              className="rounded-8"
            />
          </div>

          <div className="w-390 h-full pl-48 flex-col">
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
        <article className="flex w-618 ml-130">
          <div className="w-228 h-360 relative">
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
        <article className="flex  w-390 pl-48">
          <div className="w-390 h-360 mt-64">
            <Image
              src={thirdImage}
              alt="brakefirst on table"
              width={330}
              quality={100}
              className="rounded-8"
            />
          </div>
        </article>
        <article className="flex w-618 ml-130">
          <div className="w-390 h-full mr-48 flex-col">
            <H5andTextAndVideo
              title={"La mer est à vous"}
              text={
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt" +
                "ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo."
              }
              linkVideo={2}
            />
          </div>
          <div className="w-228 h-360 relative pr-48">
            <Image src={fourthImage} alt="image couple eating" fill={true} className="rounded-8" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Section4;
