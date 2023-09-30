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

const Section4 = () => {
  return (
    <section className="bg-backgroundSection4">
      <h4
        className={`mt-117 mb-102 text-42 leading-53 pl-16 pr-16 text-center ${myFontSamsungSharpBold.className}`}
      >
        Un hôtel pas comme les autres.
      </h4>
      <div className="h-475  ">
        <div className="w-full flex overflow-x-auto ">
          <article className="flex h-475 w-600 pl-41 ">
            <div className="w-270 h-360">
              <Image
                src={firstImage}
                alt="image couple eating"
                width={228}
                quality={100}
                className="rounded-8"
              />
            </div>
            <div className="w-380 h-full pl-48 flex-col">
              <h5 className={`text-24 mt-64 ${myFontSamsungSharpBold.className}`}>
                Toutes les saveurs des îles
              </h5>
              <p className="block mt-16">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo.
              </p>

              <video loop muted className=" w-full h-206 object-cover rounded-8 mt-32">
                <source src={require("../../../public/slideshow-02.mp4")} type="video/mp4" />
              </video>
            </div>
          </article>
          <article className="flex h-475 w-600 pl-4">
            <div className="w-270 h-360">
              <Image
                src={secondImage}
                alt="brakefirst on table"
                width={228}
                quality={100}
                className="rounded-8"
              />
            </div>
            <div className="w-380 h-full pl-48 flex-col">
              <h5 className={`text-24 mt-64 ${myFontSamsungSharpBold.className}`}>Un confort royal</h5>
              <p className="block mt-16">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo.
              </p>
            </div>
          </article>
          <article className="flex h-475 w-500 pl-4">
            <div className="w-400 h-360 mt-64">
              <Image
                src={thirdImage}
                alt="brakefirst on table"
                width={330}
                quality={100}
                className="rounded-8"
              />
            </div>
          </article>
          <article className="flex h-475 w-600 pl-48">
            <div className="w-380 h-full pr-48 flex-col">
              <h5 className={`text-24 mt-41 ${myFontSamsungSharpBold.className}`}>La mer est à vous</h5>
              <p className="block mt-16">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo.
              </p>

              <video loop muted className=" w-full h-206 object-cover rounded-8 mt-32">
                <source src={require("../../../public/slideshow-06.mp4")} type="video/mp4" />
              </video>
            </div>
            <div className="w-400 h-360">
              <Image
                src={fourthImage}
                alt="image couple eating"
                width={228}
                quality={100}
                className="rounded-8"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Section4;
