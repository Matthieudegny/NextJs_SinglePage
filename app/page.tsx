"use client";
import React, { useState, useEffect, useRef } from "react";
//components
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin"; // Importez le plugin

gsap.registerPlugin(ScrollToPlugin); // Enregistrez le plugin
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/Section3";
import Section4 from "./components/sections/Section4";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function Home() {
  const scrollContainerRef = useRef(null);
  const [navVisible, setnavVisible] = useState(false);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 640);
  const [isDesktop, setisDesktop] = useState(window.innerWidth > 1024);
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
      setIsTablet(window.innerWidth > 640);
      setisDesktop(window.innerWidth > 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    inView3 ? setnavVisible(true) : "";
    inView1 ? setnavVisible(false) : "";
  }, [inView3, inView1]);

  useEffect(() => {
    let currentScrollY = window.scrollY;

    function handleWheel(e: WheelEvent) {
      const targetY =
        e.deltaY > 0
          ? currentScrollY + window.innerHeight / 10
          : currentScrollY - window.innerHeight / 10;

      gsap.to(window, {
        duration: 1, // Durée de l'animation en secondes
        scrollTo: {
          y: targetY,
          autoKill: false,
        },
        ease: "power3.easeInOut", // Courbe d'animation plus douce
      });

      currentScrollY = targetY;
    }

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
  return (
    <main ref={scrollContainerRef}>
      <Nav navVisible={navVisible} isTablet={isTablet} />
      <Section1 ref={refSection1} isTablet={isTablet} />
      <Section2 isTablet={isTablet} />
      <Section3 ref={refSection3} />
      <Section4 isDesktop={isDesktop} />
      <Footer />
    </main>
  );
}
