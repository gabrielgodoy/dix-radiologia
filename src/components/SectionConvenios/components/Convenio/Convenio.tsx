import style from "./Convenio.module.scss";

export const Convenio = ({
  name,
  imageSrc,
}: {
  name: string;
  imageSrc: string;
}) => {
  return (
    <div className={style.convenio}>
      <img src={imageSrc} alt={name} className={style.image} />
    </div>
  );
};
