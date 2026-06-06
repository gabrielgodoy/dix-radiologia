import logoDixBranca from "@/assets/images/logo-dix-branca.svg";
import logoInstagramWhite from "@/assets/images/logo-instagram-white.svg";

import style from "./Footer.module.scss";

import { RefObject } from "react";

export const Footer = ({
  servicesRef,
  techRef,
  conveniosRef,
  unitsRef,
  whyDixRef,
}: {
  servicesRef: RefObject<HTMLDivElement | null>;
  techRef: RefObject<HTMLDivElement | null>;
  conveniosRef: RefObject<HTMLDivElement | null>;
  unitsRef: RefObject<HTMLDivElement | null>;
  whyDixRef: RefObject<HTMLDivElement | null>;
}) => {
  const handleScroll = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={style.footerOuterContainer}>
      <div className="section">
        <footer className={style.footer}>
          <div className={style.mainFooter}>
            <div className={style.leftSide}>
              <img
                src={logoDixBranca}
                alt="Logo da Dix Radiologia"
                className={style.footerLogo}
              />
              <div className={style.callToAction}>
                Venha para a Dix Radiologia Oral e conte com exames de
                qualidade, agilidade e confiança para o seu tratamento
                odontológico.
              </div>
            </div>
            <div className={style.rightSide}>
              <div
                className={style.menuItem}
                onClick={() => handleScroll(servicesRef)}
              >
                Serviços
              </div>
              <div
                className={style.menuItem}
                onClick={() => handleScroll(techRef)}
              >
                Tecnologia
              </div>
              <div
                className={style.menuItem}
                onClick={() => handleScroll(conveniosRef)}
              >
                Convênios
              </div>
              <div
                className={style.menuItem}
                onClick={() => handleScroll(unitsRef)}
              >
                Unidades
              </div>
              <div
                className={style.menuItem}
                onClick={() => handleScroll(whyDixRef)}
              >
                Porque escolher a Dix
              </div>
            </div>
          </div>
          <div className={style.subFooter}>
            <div className={style.rights}>
              © 2026 Dix Radiologia Oral. Todos os direitos reservados.
            </div>
            <a
              href={"https://www.instagram.com/dix_radiologiaoraldigital"}
              target="_blank"
              rel="noopener noreferrer"
              className={style.instagram}
            >
              <img src={logoInstagramWhite} alt="Instagram da Dix Radiologia" />
              @dix_radiologiaoraldigital
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};
