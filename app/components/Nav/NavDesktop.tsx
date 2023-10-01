import Image from "next/image";
import localFont from "next/font/local";
import logoNav from "../../../public/logo.svg";
import logoNavDarker from "../../../public/logoDarker.svg";

const myFontSamsungSharpBold = localFont({
  src: "../../../public/webfonts/samsungsharpsans-bold-webfont.woff",
});

type NavDesktopProps = {
  position: string;
  color: string;
};

const NavDesktop: React.FC<NavDesktopProps> = ({ position, color }) => {
  const styleNav = `text-16 ${color} leading-20 ${myFontSamsungSharpBold.className}`;
  return (
    <div className={`${position} top-0 left-0 flex  justify-around z-20`}>
      <div className="z-20">
        <Image
          priority
          src={color === "text-white" ? logoNav : logoNavDarker}
          alt="logo animated first page"
          width={42}
          height={41}
          quality={100}
          className="pt-45 ml-32
            pb-3"
        />
      </div>
      <div className="flex ">
        <div className={` mt-50 ml-54 mr-33 ${styleNav}`}>Séjours</div>
        <div className={`mt-50 mr-41 ${styleNav}`}>Expériences</div>
        <div className={`mt-50 ${styleNav}`}>Découvertes</div>
      </div>
    </div>
  );
};

export default NavDesktop;
