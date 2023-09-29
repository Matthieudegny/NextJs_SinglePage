import Image from "next/image";
import logoFirst from "../public/loader-logo-animated2.png";
export default function Home() {
  return (
    // { menu sticky not on first section + blue buton sticky}
    <main>
      {/* menu + logo +video */}
      <section className="h-760 w-full relative bg-blue-400">
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src={require("../public/teaser_header.mp4")} type="video/mp4" />
        </video>
        <div className="h-full flex flex-col justify-center items-center">
          <div className="z-20">
            <Image src={logoFirst} alt="logo animated first page" width={87} quality={100} />
          </div>
          <h1 className="text-white text-21 tracking-wide leading-25 font-montserratSemiBold mt-11.18  z-20">
            TARAWA
          </h1>
          <h2 className="text-white text-7 mt-1.46 leading-9 font-montserratBold tracking-5.6 z-20">HOTEL</h2>
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
