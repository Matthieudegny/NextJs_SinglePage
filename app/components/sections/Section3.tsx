"use client";
import React, { forwardRef, Ref, HTMLProps } from "react";
//compoenents
import ArticleSection3 from "../ArticleSection3";

const Section3 = React.forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <section ref={ref}>
      <ArticleSection3
        time={"10:12"}
        title={"Un réveil en douceur"}
        titleButon={"Voir les chambres"}
        videoLink={1}
        heightVideo={"h-206"}
        marginTopVideo={"mt-64"}
        marginTopMainSection={"mt-0"}
      />
      <ArticleSection3
        time={"21:57"}
        title={"Soleil, mer, détente"}
        titleButon={"Voir les offres"}
        videoLink={2}
        heightVideo={"h-360"}
        marginTopVideo={"mt-10"}
        marginTopMainSection={"mt-64"}
      />
    </section>
  );
});

export default Section3;
