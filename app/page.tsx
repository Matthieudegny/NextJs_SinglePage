//components
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/Section3";

export default function Home() {
  return (
    // { menu sticky not on first section + blue buton sticky}
    <main>
      {/* menu + logo + video */}
      <Section1 />
      {/* blue title + black title + text + blue buton + buton*/}
      <Section2 />
      {/* border */}
      <Section3 />
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
