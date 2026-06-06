import style from "./Slide.module.scss";

interface SlideProps {
  imageSrc: string;
  altText: string;
  captionText?: string;
}

export const Slide = ({ imageSrc, altText, captionText }: SlideProps) => {
  return (
    <div className={style.slide}>
      <img src={imageSrc} alt={altText} />
      {captionText && <div className={style.caption}>{captionText}</div>}
    </div>
  );
};
