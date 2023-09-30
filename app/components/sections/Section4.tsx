import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

import firstImage from "../../../public/slideshow-01.jpg";

const myFontSamsungSharpBold = localFont({
  src: "../../../public/webfonts/samsungsharpsans-bold-webfont.woff",
});

const Section4 = () => {
  return (
    <section className="bg-backgroundSection4 bg-red-400">
      <h4
        className={`mt-117 mb-102 text-42 leading-53 pl-16 pr-16 text-center ${myFontSamsungSharpBold.className}`}
      >
        Un hôtel pas comme les autres.
      </h4>
      <div className="h-475 ml-41">
        <div className="w-3000 flex overflow-x-auto bg-blue-300">
          <article className="flex h-full w-600 ">
            <Image src={firstImage} alt="image couple eating" width={228} quality={100} />
            <div className="width-360">
              <h5 className={`text-24 ${myFontSamsungSharpBold.className}`}>Toutes les saveurs des îles</h5>
              <p className="block mt-16">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo.
              </p>
            </div>
          </article>
          {/* <article className="flex h-full">
          <div className="w-228 h-360">
            <Image src={firstImage} alt="image couple eating" width={228} quality={100} />
          </div>
          <div>
            <div>
              <h5 className={`text-24 ${myFontSamsungSharpBold.className}`}>Toutes les saveurs des îles</h5>
              <p className="block mt-16">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo.
              </p>
            </div>
          </div>
        </article> */}
        </div>
      </div>
    </section>
  );
};

export default Section4;
