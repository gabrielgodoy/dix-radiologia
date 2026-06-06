import style from "./Service.module.scss";

export const Service = ({
  imgSrc,
  title,
  text,
}: {
  imgSrc: string;
  title: string;
  text: string;
}) => {
  return (
    <div className={style.service}>
      <img src={imgSrc} alt={title} className={style.image} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
