"use client";
import Slider from "react-slick";
import { Slide } from "../Slide/Slide";
import morita from "@/assets/images/equipments/morita.png";
import kavoOp from "@/assets/images/equipments/kavo-op-3d-pro.png";
import itero from "@/assets/images/equipments/itero.png";
import durrDental from "@/assets/images/equipments/durr-dental.png";
import kavoFocus from "@/assets/images/equipments/kavo-focus.png";

export const TechSlider = () => {
  const settings = {
    infinite: true,
    arrows: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  // @ts-ignore
  const SliderComponent = !!Slider.default ? Slider.default : Slider;

  return (
    <SliderComponent {...settings}>
      <Slide
        imageSrc={morita}
        title="Morita Veraview X800"
        text="O Morita Veraview X800 oferece imagens 2D e 3D de alta precisão, com excelente qualidade e baixa exposição à radiação, proporcionando diagnósticos mais seguros e confiáveis."
      />
      <Slide
        imageSrc={kavoOp}
        title="Kavo Op 3D PRO"
        text="O KaVo OP 3D Pro oferece imagens 2D e 3D de alta qualidade, com baixa dose de radiação e excelente precisão para diagnósticos e planejamentos odontológicos."
      />
      <Slide
        imageSrc={itero}
        title="iTero"
        text="O iTero realiza escaneamentos digitais rápidos e precisos, oferecendo mais conforto ao paciente e agilidade no planejamento do tratamento."
      />
      <Slide
        imageSrc={durrDental}
        title="Durr Dental"
        text="Sensor digital DÜRR DENTAL com imagens de alta definição, proporcionando diagnósticos mais precisos, menor tempo de exame e maior conforto para o paciente."
      />
      <Slide
        imageSrc={kavoFocus}
        title="Kavo Focus"
        text="Radiografias intraorais com alta qualidade de imagem, baixa dose de radiação e posicionamento preciso, proporcionando mais segurança, agilidade e confiança no diagnóstico odontológico."
      />
    </SliderComponent>
  );
};
