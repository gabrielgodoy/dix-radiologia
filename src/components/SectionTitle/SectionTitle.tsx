import style from "./SectionTitle.module.scss";

export const SectionTitle = ({ title }: { title: string }) => {
  return <h2 className={style.title}>{title}</h2>;
};
