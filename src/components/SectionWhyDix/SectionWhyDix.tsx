import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Benefit } from "./components/Benefit/Benefit";
import style from "./SectionWhyDix.module.scss";
import cx from "classnames";

import certifiedRadiologists from "@/assets/images/benefits/01-certified-radiologists.svg";
import professionalTrust from "@/assets/images/benefits/02-professional-trust.svg";
import fastResults from "@/assets/images/benefits/03-fast-results.svg";
import patientCare from "@/assets/images/benefits/04-patient-care.svg";

export const SectionWhyDix = ({ ref }: { ref: React.Ref<HTMLDivElement> }) => {
  return (
    <div className={cx("section", style.section)} ref={ref}>
      <SectionTitle title="Por que escolher a Dix" />
      <div className="section-subtitle">
        Quando a precisão importa, profissionais odontológicos confiam em nossa
        expertise e tecnologia.
      </div>
      <div className={style.benefitsContainer}>
        <Benefit
          title="Radiologistas certificados"
          description="Nossa equipe é composta por radiologistas bucomaxilofaciais experientes e certificados."
          icon={certifiedRadiologists}
        />
        <Benefit
          title="Confiança dos Profissionais"
          description="Parceria com mais de 200 clínicas odontológicas em toda a região para suas necessidades de imagem."
          icon={professionalTrust}
        />
        <Benefit
          title="Resultados Rápidos"
          description="Os laudos são entregues com rapidez e eficiência, garantindo mais agilidade para o diagnóstico e o planejamento do tratamento odontológico."
          icon={fastResults}
        />
        <Benefit
          title="Cuidado Centrado no Paciente"
          description="Ambiente confortável com equipe atenciosa focada em sua segurança e conforto."
          icon={patientCare}
        />
      </div>
    </div>
  );
};
