import style from "./Slide.module.scss";

interface SlideProps {
  imageSrc: string;
  title: string;
  text: string;
}

export const Slide = ({ imageSrc, title, text }: SlideProps) => {
  return (
    <div className={style.slide}>
      <div className={style.captionBox}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.text}>{text}</p>
      </div>
      <img
        src={imageSrc}
        alt={title || "Slide image"}
        className={style.image}
      />
    </div>
  );
};
