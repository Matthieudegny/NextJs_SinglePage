import React from "react";
import Image from "next/image";

import logoFooter from "../../public/logo_mini.svg";

const Footer = () => {
  return (
    <section className="h-269 xl:h-[693.5px] w-full flex justify-center items-center">
      <div className="relative h-[71.72px] xl:h-[221.5px] w-[62px] xl:w-[230px] ">
        <Image src={logoFooter} alt="logo Tarawa footer page" fill={true} quality={100} />
      </div>
    </section>
  );
};

export default Footer;
