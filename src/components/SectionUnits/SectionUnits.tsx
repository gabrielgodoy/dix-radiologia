import { SectionTitle } from "../SectionTitle/SectionTitle";
import style from "./SectionUnits.module.scss";
import { WhatsAppButton } from "./components/WhatsAppButton/WhatsAppButton";
import cx from "classnames";
import { Unit } from "./components/Unit/Unit";

export const SectionUnits = ({ ref }: { ref: React.Ref<HTMLDivElement> }) => {
  return (
    <div
      className={cx("section", style.section)}
      style={{ marginBottom: "50px" }}
      ref={ref}
    >
      <SectionTitle title="Unidades" />
      <div className="section-subtitle">
        Temos duas unidades estrategicamente localizadas para melhor atendê-lo.
      </div>
      <div className={style.unitsContainer}>
        <Unit
          position={[-22.746446415507197, -42.85834317790927]}
          unitName="Itaboraí"
          address={
            <>
              Rua Dr Pereira Dos Santos, 107, <br />
              Ed. Monet 10º andar, salas 1020, 1021 e 1022 <br />
              Centro, Itaboraí (Em frente ao Subway)
            </>
          }
          contact={
            <>
              Tel: (21) 3729-2160 <br />
              <WhatsAppButton number="5521976469100" />
            </>
          }
          hours={
            <>
              Seg-Sex: 9h às 18h <br />
              Sábado: 9h às 12h30
            </>
          }
          googleScore={4.8}
          googleTotalCount={35}
          googleLinkToReview="https://g.page/r/CVoeJp2NUm-xEBM/review"
          elfsightGoogleReviewId="a9854e9d-168b-4e83-972e-7f37551c6ae6"
        />
        <Unit
          position={[-22.89580938856696, -43.120921837435944]}
          unitName="Niterói"
          address={
            <>
              R. Dr. Borman, 43 - sala 1003 - Niterói <br />
              (Praça do Rink)
            </>
          }
          contact={
            <>
              Tel: (21) 98099-1011 <br />
              <WhatsAppButton number="5521980991011" />
            </>
          }
          hours={
            <>
              Seg-Sex: 9h às 18h <br />
              Sábado: 9h às 13h
            </>
          }
          googleScore={4.9}
          googleTotalCount={106}
          googleLinkToReview="https://g.page/r/CSgqIzMKhtexEBM/review"
          elfsightGoogleReviewId="47e94710-2092-434c-8f72-3365ae597e64"
        />
      </div>
    </div>
  );
};
