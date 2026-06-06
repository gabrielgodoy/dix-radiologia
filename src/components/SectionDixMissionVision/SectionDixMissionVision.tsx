import style from "./SectionDixMissionVision.module.scss";

export const SectionDixMissionVision = () => {
  return (
    <section className="section">
      <div className={style.missionVisionContainer}>
        <div className={style.missionContainer}>
          <h2 className={style.pill}>Nossa Missão</h2>
          <div className={style.missionText}>
            Prestar serviços de Radiodiagnóstico Odontológico com excelência,
            oferecendo suporte ao tratamento clínico por meio de exames de alta
            qualidade, tecnologia avançada e resultados confiáveis. Buscamos
            constantemente o aprimoramento dos nossos serviços, visando a
            satisfação e a confiança de pacientes, parceiros, colaboradores e
            associados.
          </div>
        </div>
        <div className={style.visionContainer}>
          <h2 className={style.pill}>Nossa Visão</h2>
          <div className={style.visionText}>
            Ser referência em diagnóstico odontológico pela excelência em
            qualidade, tecnologia e eficiência na prestação de serviços.
            Destacar-se pela humanização do atendimento, pela satisfação de
            parceiros, pacientes e colaboradores, e pela busca contínua da
            excelência. Priorizar uma experiência prática, confortável e
            acolhedora, contribuindo para a promoção da saúde e para o
            desenvolvimento de tratamentos cada vez mais seguros e eficazes.
          </div>
        </div>
      </div>
    </section>
  );
};
