import style from "./SectionTech.module.scss";
import raysTech from "@/assets/images/rays-tech.png";
import { TechSlider } from "./components/TechSlider/TechSlider";

export const SectionTech = ({ ref }: { ref: React.Ref<HTMLDivElement> }) => {
  return (
    <div className={style.sectionTech} ref={ref}>
      <div className="section">
        <div className={style.container}>
          <div className={style.textContainer}>
            <h2 className={style.title}>
              Equipamentos avançados, resultados superiores
            </h2>
            <p className={style.subtitle}>
              Nossa clínica está equipada com a mais recente tecnologia de
              imagem odontológica, garantindo imagens da{" "}
              <strong>mais alta qualidade</strong> com mínima exposição do
              paciente.
            </p>
          </div>
          <div className={style.sliderContainer}>
            <TechSlider />
          </div>
        </div>
        <div className={style.raysTech}>
          <img src={raysTech} alt="Raios da logo da Dix" />
        </div>
      </div>
    </div>
  );
};
