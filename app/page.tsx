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
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setisDesktop] = useState(false);
  const [refSection1, inView1] = useInView({
    threshold: 0.1,
    rootMargin: "100px",
  });
  const [refSection3, inView3] = useInView({
    threshold: 0.1,
    rootMargin: "100px",
  });
  // Accédez à la largeur de la fenêtre lors du montage initial du composant
  useEffect(() => {
    setIsTablet(window.innerWidth > 640);
    setisDesktop(window.innerWidth > 1024);
  }, []);
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
      const deltaY = e.deltaY;

      // Calculez la nouvelle position de défilement
      let targetY = currentScrollY + deltaY;

      // Définissez des limites minimales et maximales
      const minY = 0; // La position de défilement minimale (en haut de la page)
      const maxY = document.documentElement.scrollHeight - window.innerHeight; // La position de défilement maximale (en bas de la page)

      // Assurez-vous que targetY reste dans les limites
      if (targetY < minY) {
        targetY = minY;
      } else if (targetY > maxY) {
        targetY = maxY;
      }
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
