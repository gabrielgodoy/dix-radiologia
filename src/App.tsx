import { useRef } from "react";
import style from "./App.module.scss";
import rays from "./assets/images/rays.png";

import { Navbar } from "./components/NavBar/NavBar";
import { SectionHero } from "./components/SectionHero/SectionHero";
import { SectionStats } from "./components/SectionStats/SectionStats";
import { SectionServices } from "./components/SectionServices/SectionServices";
import { SectionTech } from "./components/SectionTech/SectionTech";
import { SectionConvenios } from "./components/SectionConvenios/SectionConvenios";
import { SectionUnits } from "./components/SectionUnits/SectionUnits";
import { SectionWhyDix } from "./components/SectionWhyDix/SectionWhyDix";
import { SectionDixMissionVision } from "./components/SectionDixMissionVision/SectionDixMissionVision";
import { Footer } from "./components/Footer/Footer";

function App() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const conveniosRef = useRef<HTMLDivElement>(null);
  const unitsRef = useRef<HTMLDivElement>(null);
  const whyDixRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      teste
      <img src={rays} alt="Raios da logo da Dix" className={style.rays} />
      <Navbar
        servicesRef={servicesRef}
        techRef={techRef}
        conveniosRef={conveniosRef}
        unitsRef={unitsRef}
        whyDixRef={whyDixRef}
      />
      <SectionHero />
      <SectionStats />
      <SectionServices ref={servicesRef} />
      <SectionTech ref={techRef} />
      <SectionConvenios ref={conveniosRef} />
      <SectionUnits ref={unitsRef} />
      <SectionWhyDix ref={whyDixRef} />
      <SectionDixMissionVision />
      <Footer
        servicesRef={servicesRef}
        techRef={techRef}
        conveniosRef={conveniosRef}
        unitsRef={unitsRef}
        whyDixRef={whyDixRef}
      />
    </main>
  );
}

export default App;
