import Image from "next/image";
export default function Home() {
  return (
    // { menu sticky not on first section + blue buton sticky}
    <main>
      {/* menu + logo +video */}
      <section className="sm:h-760 w-full">
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src={require("../public/teaser_header.mp4")} type="video/mp4" />
          {/* Vous pouvez également ajouter d'autres formats de vidéo ici */}
        </video>
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
