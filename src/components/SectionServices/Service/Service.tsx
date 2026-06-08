import Slider from "react-slick";
import { Button } from "../../Button/Button";
import ReactModal from "react-modal";
import style from "./Service.module.scss";
import { JSX, useState } from "react";

export const Service = ({
  imgSrc,
  title,
  text,
  slides,
}: {
  imgSrc: string;
  title: string;
  text: string;
  slides?: { caption: string | JSX.Element; imgSrc: string }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // @ts-ignore
  const SliderComponent = !!Slider.default ? Slider.default : Slider;

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <>
      <div className={style.service}>
        <img src={imgSrc} alt={title} className={style.image} />
        <h3>{title}</h3>
        <p>{text}</p>
        {slides && slides.length > 0 && (
          <Button label="Ver mais fotos" onClick={() => setIsOpen(true)} />
        )}
      </div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        closeTimeoutMS={200}
        className="serviceModal"
        style={{
          overlay: {
            zIndex: 2000,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex", // Flexbox wrapper makes centering easy
            alignItems: "center", // Vertically center the modal
            justifyContent: "center", // Horizontally center the modal
          },
          content: {
            background: "rgb(255, 255, 255)",
            borderRadius: "50px",
            position: "relative",
            top: "auto",
            left: "auto",
            right: "auto",
            bottom: "auto",
            maxHeight: "85vh",
            overflow: "auto",
            padding: "40px",
            width: "100%",
            maxWidth: "800px",
          },
        }}
      >
        <div className={style.sliderContainer}>
          <SliderComponent {...settings}>
            {slides?.map((slide, index) => (
              <div key={index} className={style.slide}>
                <img
                  src={slide.imgSrc}
                  alt={
                    typeof slide.caption === "string"
                      ? slide.caption
                      : "Slide image"
                  }
                />
                <p className={style.caption}>{slide.caption}</p>
              </div>
            ))}
          </SliderComponent>
        </div>
      </ReactModal>
    </>
  );
};
