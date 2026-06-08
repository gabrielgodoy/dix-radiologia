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
          elfsightAppId="elfsight-app-991ad323-7cec-48bb-86ee-79e72c749e65"
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
        />
        <Unit
          position={[-22.89580938856696, -43.120921837435944]}
          elfsightAppId="elfsight-app-c97095b7-063b-47ce-a970-f9a9d629b1ef"
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
        />
      </div>
    </div>
  );
};
