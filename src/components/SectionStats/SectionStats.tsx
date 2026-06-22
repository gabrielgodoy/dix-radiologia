import { Stat } from "./components/Stat/Stat";
import style from "./SectionStats.module.scss";

export const SectionStats = () => {
  return (
    <div className={style.sectionStats}>
      <Stat title="🏛️5+" subtitle="Anos de experiência" />
      <Stat title="📊2mil+" subtitle="Exames realizados" />
      <Stat title="👨‍⚕️300+" subtitle="Dentistas parceiros" />
    </div>
  );
};
