import style from "./WhatsAppButton.module.scss";
import whatsAppIcon from "@/assets/images/whatsapp-icon.svg";
import whatsAppLettering from "@/assets/images/whatsapp-lettering.svg";

export const WhatsAppButton = ({ number }: { number: string }) => {
  return (
    <a
      href={`https://wa.me/${number}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Dix.`}
      target="_blank"
      rel="noopener noreferrer"
      className={style.whatsAppButton}
    >
      <img
        src={whatsAppIcon}
        alt="Ícone do WhatsApp"
        className={style.whatsAppIcon}
      />
      <img src={whatsAppLettering} alt="Letreiro do WhatsApp" />
    </a>
  );
};
