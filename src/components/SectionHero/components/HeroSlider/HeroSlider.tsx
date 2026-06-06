import Slider from "react-slick";
import hero1 from "@/assets/images/hero-1.jpg";
import hero2 from "@/assets/images/hero-2.jpg";
import { Slide } from "../Slide/Slide";

export const HeroSlider = () => {
  const settings = {
    dots: true,
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
        imageSrc={hero1}
        altText="Imagem de recepção da Dix Radiologia em Itaboraí"
        captionText="Unidade Itaboraí"
      />
      <Slide
        imageSrc={hero2}
        altText="Imagem de recepção da Dix Radiologia em Niterói"
        captionText="Unidade Niterói"
      />
    </SliderComponent>
  );
};
