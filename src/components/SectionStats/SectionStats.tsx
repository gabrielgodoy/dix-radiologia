import { Stat } from "./components/Stat/Stat";
import style from "./SectionStats.module.scss";

export const SectionStats = () => {
  return (
    <div className={style.sectionStats}>
      <Stat title="🏛️5+" subtitle="Anos de experiência" />
      <Stat title="📊15mil+" subtitle="Exames realizados" />
      <Stat title="👨‍⚕️1mil+" subtitle="Dentistas parceiros" />
    </div>
  );
};
