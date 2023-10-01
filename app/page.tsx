"use client";
import React, { useState, useEffect } from "react";
//components
import { useInView } from "react-intersection-observer";

import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/Section3";
import Section4 from "./components/sections/Section4";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function Home() {
  const [navVisible, setnavVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 640);
  const [refSection1, inView1] = useInView({
    threshold: 0.1,
    rootMargin: "100px",
  });
  const [refSection3, inView3] = useInView({
    threshold: 0.1,
    rootMargin: "100px",
  });

  // Fonction de gestionnaire de redimensionnement
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 640);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log("isDesktop", isDesktop);
  }, [isDesktop]);

  useEffect(() => {
    inView3 ? setnavVisible(true) : "";
    inView1 ? setnavVisible(false) : "";
  }, [inView3, inView1]);

  return (
    <main>
      <Nav navVisible={navVisible} isDesktop={isDesktop} />
      <Section1 ref={refSection1} isDesktop={isDesktop} />
      <Section2 />
      <Section3 ref={refSection3} />
      <Section4 />
      <Footer />
    </main>
  );
}
