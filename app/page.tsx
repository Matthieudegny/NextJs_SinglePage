import Image from "next/image";
import logoFirst from "../public/loader-logo-animated2.png";
import localFont from "next/font/local";

const myFontMontserrat_SemiBold = localFont({
  src: "../public/webfonts/Montserrat/static/Montserrat-SemiBold.ttf",
});
const myFontMontserrat_Bold = localFont({
  src: "../public/webfonts/Montserrat/static/Montserrat-Bold.ttf",
});

export default function Home() {
  return (
    // { menu sticky not on first section + blue buton sticky}
    <main>
      {/* menu + logo +video */}
      <section className="h-screen w-full relative bg-blue-400">
        <div className="h-14 w-25 absolute top-29 left-24 flex flex-col justify-around z-20">
          <div className="w-full h-2 bg-white rounded-182"></div>
          <div className="w-full h-2 bg-white rounded-182"></div>
          <div className="w-full h-2 bg-white rounded-182"></div>
        </div>

        <video loop muted className="absolute top-0 left-0 w-full h-screen object-cover z-0">
          <source src={require("../public/teaser_header.mp4")} type="video/mp4" />
        </video>
        <div className="h-screen flex flex-col justify-center items-center">
          <div className="z-20">
            <Image src={logoFirst} alt="logo animated first page" width={87} quality={100} />
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
      {/* blue title + black title + text + blue buton + buton*/}
      <section></section>
      {/* border */}
      <div></div>
      {/* hour + title + buton + border + video*/}
      <section></section>
      {/* hour + title + buton  + video*/}
      <section></section>
      {/* title */}
      <h2></h2>
      {/* carroussel */}
      <section></section>
      <footer></footer>
    </main>
  );
}
