import style from "./Button.module.scss";

export const Button = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <button className={style.button} onClick={onClick}>
      {label}
    </button>
  );
};
