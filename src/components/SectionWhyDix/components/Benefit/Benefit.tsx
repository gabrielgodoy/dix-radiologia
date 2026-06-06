import style from "./Benefit.module.scss";

export const Benefit = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className={style.benefit}>
      <div className={style.benefitIconContainer}>
        <img src={icon} alt={`${title} icon`} className={style.benefitIcon} />
      </div>
      <h3 className={style.benefitTitle}>{title}</h3>
      <p className={style.benefitDescription}>{description}</p>
    </div>
  );
};
