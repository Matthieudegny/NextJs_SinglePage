import React from "react";

//compoenents
import MainSection3 from "../MainSection3";

const Section3 = () => {
  return (
    <section>
      <MainSection3
        time={"10:12"}
        title={"Un réveil en douceur"}
        titleButon={"Voir les chambres"}
        videoLink={1}
        heightVideo={"h-206"}
        marginTopVideo={"mt-64"}
        marginTopMainSection={"mt-0"}
      />
      <MainSection3
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
};

export default Section3;
