//components
"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/Section3";
import Section4 from "./components/sections/Section4";
import Footer from "./components/Footer";

export default function Home() {
  const [navVisible, setnavVisible] = useState(false);
  const [refSection1, inView1] = useInView({
    threshold: 0.1, // L'élément est considéré comme "dans la vue" lorsque 50 % de celui-ci est visible.
  });
  const [refSection2, inView2] = useInView({
    threshold: 1, // L'élément est considéré comme "dans la vue" lorsque 50 % de celui-ci est visible.
  });
  useEffect(() => {
    inView2 ? setnavVisible(true) : "";
    inView1 ? setnavVisible(false) : "";
  }, [inView2, inView1]);

  return (
    <main>
      {navVisible ? (
        <div className="h-14 w-25 fixed top-29 left-24 flex flex-col justify-around z-20">
          <div className="w-full h-2 bg-blackLighter rounded-182"></div>
          <div className="w-full h-2 bg-blackLighter rounded-182"></div>
          <div className="w-full h-2 bg-blackLighter rounded-182"></div>
        </div>
      ) : (
        ""
      )}

      <Section1 ref={refSection1} />
      <Section2 ref={refSection2} />
      <Section3 />
      <Section4 />
      <Footer />
    </main>
  );
}
