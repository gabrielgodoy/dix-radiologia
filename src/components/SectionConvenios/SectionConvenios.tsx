import amilDental from "@/assets/images/convenios/amil-dental.jpg";
import brazilDental from "@/assets/images/convenios/brazil-dental.jpg";
import goldenCross from "@/assets/images/convenios/golden-cross.jpg";
import inpao from "@/assets/images/convenios/inpao.jpg";
import interodonto from "@/assets/images/convenios/interodonto.jpg";
import itaprevi from "@/assets/images/convenios/itaprevi.jpg";
import metlife from "@/assets/images/convenios/metlife.jpg";
import oaf from "@/assets/images/convenios/oaf.jpg";
import portoSeguro from "@/assets/images/convenios/porto-seguro.jpg";
import primaVida from "@/assets/images/convenios/prima-vida.jpg";
import redeOdonto from "@/assets/images/convenios/rede-odonto.jpg";
import saudeAssim from "@/assets/images/convenios/saude-assim.jpg";
import sempreOdonto from "@/assets/images/convenios/sempre-odonto.jpg";
import { SectionTitle } from "../SectionTitle/SectionTitle";

import cx from "classnames";

import style from "./SectionConvenios.module.scss";
import { Convenio } from "./components/Convenio/Convenio";

export const SectionConvenios = ({
  ref,
}: {
  ref: React.Ref<HTMLDivElement>;
}) => {
  return (
    <div
      className={cx("section", style.sectionConvenios)}
      style={{ marginBottom: "50px" }}
      ref={ref}
    >
      <SectionTitle title="Convênios" />
      <div className="section-subtitle">
        A Dix Radiologia atende diversos convênios. Consulte a cobertura e faça
        seus exames com praticidade! 😊
      </div>
      <div className={style.conveniosContainer}>
        <Convenio name="Amil Dental" imageSrc={amilDental} />
        <Convenio name="Brazil Dental" imageSrc={brazilDental} />
        <Convenio name="Golden Cross" imageSrc={goldenCross} />
        <Convenio name="Inpao" imageSrc={inpao} />
        <Convenio name="Interodonto" imageSrc={interodonto} />
        <Convenio name="Itaprevi" imageSrc={itaprevi} />
        <Convenio name="Metlife" imageSrc={metlife} />
        <Convenio name="OAF" imageSrc={oaf} />
        <Convenio name="Porto Seguro" imageSrc={portoSeguro} />
        <Convenio name="Prima Vida" imageSrc={primaVida} />
        <Convenio name="Rede Odonto" imageSrc={redeOdonto} />
        <Convenio name="Saúde Assim" imageSrc={saudeAssim} />
        <Convenio name="Sempre Odonto" imageSrc={sempreOdonto} />
      </div>
    </div>
  );
};
