import style from "./Stat.module.scss";

interface StatProps {
  title: string;
  subtitle: string;
}

export const Stat = ({ title, subtitle }: StatProps) => {
  return (
    <div className={style.stat}>
      <h3>{title}</h3>
      <p className={style.subtitle}>{subtitle}</p>
    </div>
  );
};
