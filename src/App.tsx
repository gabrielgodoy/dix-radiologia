import { ElfsightWidget } from "react-elfsight-widget";
import { useEffect, useRef } from "react";
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
import { useFeatureFlagEnabled } from "posthog-js/react";

declare global {
  interface Window {
    eapps?: {
      Platform?: {
        initializeWidgets: () => void;
      };
    };
  }
}

function App() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const conveniosRef = useRef<HTMLDivElement>(null);
  const unitsRef = useRef<HTMLDivElement>(null);
  const whyDixRef = useRef<HTMLDivElement>(null);
  const isElfsightWidgetEnabled = useFeatureFlagEnabled(
    "isElfsightWidgetEnabled",
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.eapps?.Platform) {
        window.eapps.Platform.initializeWidgets();
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
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
      {isElfsightWidgetEnabled && (
        <div style={{ marginTop: "30px" }}>
          <ElfsightWidget
            widgetId="489e6e7f-ef2c-456c-878a-3f4a13d2a975"
            lazy
          />
        </div>
      )}
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
