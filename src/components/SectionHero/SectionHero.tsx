import cx from "classnames";
import style from "./SectionHero.module.scss";
import { HeroSlider } from "./components/HeroSlider/HeroSlider";

export const SectionHero = () => {
  return (
    <section className={cx("section", style.hero)}>
      <div className={style.textContent}>
        <div className={cx(style.title)}>
          Radiologia odontológica de precisão para melhores diagnósticos
        </div>
        <div className={cx(style.subtitle)}>
          Tecnologia de imagem de última geração, fornecendo radiografias
          dentárias precisas e detalhadas. Confiança dos profissionais
          odontológicos há mais de 5 anos.
        </div>
      </div>
      <div className={style.sliderContainer}>
        <HeroSlider />
      </div>
    </section>
  );
};
