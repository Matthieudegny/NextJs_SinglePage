import React from "react";
import Image from "next/image";

import logoFooter from "../../public/logo_mini.svg";

const Footer = () => {
  return (
    <section className="h-269 w-full flex justify-center items-center">
      <div>
        <Image src={logoFooter} alt="logo Tarawa footer page" width={100} quality={100} />
      </div>
    </section>
  );
};

export default Footer;
