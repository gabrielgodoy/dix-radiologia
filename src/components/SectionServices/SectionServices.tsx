import { SectionTitle } from "../SectionTitle/SectionTitle";
import cx from "classnames";
import style from "./SectionServices.module.scss";
import { Service } from "./Service/Service";
import service1 from "@/assets/images/services/servico-1.jpg";
import service1_1 from "@/assets/images/services/servico-1-1.jpg";
import service2 from "@/assets/images/services/servico-2.jpg";
import service2_1 from "@/assets/images/services/servico-2-1.jpg";
import service2_2 from "@/assets/images/services/servico-2-2.jpg";
import service2_3 from "@/assets/images/services/servico-2-3.jpg";
import service3 from "@/assets/images/services/servico-3.jpg";
import service4 from "@/assets/images/services/servico-4.jpg";
import service5 from "@/assets/images/services/servico-5.jpg";
import service6 from "@/assets/images/services/servico-6.jpg";

export const SectionServices = ({
  ref,
}: {
  ref: React.Ref<HTMLDivElement>;
}) => {
  return (
    <section className={cx(style.sectionServices, "section")} ref={ref}>
      <SectionTitle title="Serviços" />
      <div className="section-subtitle">
        Oferecemos uma gama completa de exames de imagem odontológica usando a{" "}
        <strong>tecnologia mais moderna</strong> para garantir diagnósticos
        precisos e planejamento de tratamento.
      </div>
      <div className={style.servicesContainer}>
        <Service
          imgSrc={service1}
          title="Imagens digitais intra e extraorais"
          text="Imagens digitais intra e extraorais com qualidade, precisão e rapidez para o diagnóstico odontológico."
          slides={[
            {
              caption:
                "A radiografia panorâmica é uma ferramenta valiosa para os dentistas, permitindo uma visualização completa da boca, dentes e ossos da face em uma única imagem.",
              imgSrc: service1_1,
            },
          ]}
        />
        <Service
          imgSrc={service2}
          title="Tomografia Computadorizada (3D Cone Beam)"
          text="Tomografia computadorizada 3D de alta precisão, proporcionando imagens detalhadas para diagnósticos e planejamentos odontológicos mais seguros."
          slides={[
            {
              caption:
                "Indicação: Avaliação detalhada de um dente ou região específica. | Aplicações: Excelente para detectar canais radiculares, fraturas e outras patologias que requerem alta resolução. | Benefício: Proporciona imagens extremamente precisas para tratamentos endodônticos e diagnósticos focados.",
              imgSrc: service2_1,
            },
            {
              caption:
                "Indicação: Avaliação de uma arcada completa. | Aplicações: Ideal para casos que envolvem múltiplos dentes inclusos, planejamento de implantes e ortodontia. | Benefício: Fornece uma visão abrangente da arcada dentária, permitindo um planejamento mais integrado e abrangente.",
              imgSrc: service2_2,
            },
            {
              caption:
                "Indicação: Avaliação óssea da face. | Aplicações: Perfeito para cirurgias complexas que exigem uma análise completa da estrutura óssea facial. | Benefício: Permite a visualização de grandes áreas, essencial para cirurgias ortognáticas e planejamento cirúrgico detalhado, embora com menor definição de estruturas menores.",
              imgSrc: service2_3,
            },
          ]}
        />
        <Service
          imgSrc={service3}
          title="Cirurgia Guiada e prototipagem"
          text="Planejamento digital para cirurgia guiada e prototipagem, garantindo mais precisão, previsibilidade e segurança nos procedimentos."
        />
        <Service
          imgSrc={service4}
          title="Análises Cefalométricas"
          text="Análises cefalométricas precisas para auxiliar no diagnóstico, planejamento ortodôntico e acompanhamento dos tratamentos."
        />
        <Service
          imgSrc={service5}
          title="Escaneamento Intraoral e Extraoral"
          text="Escaneamento intraoral e extraoral rápido e preciso, proporcionando mais conforto e eficiência no planejamento odontológico."
        />
        <Service
          imgSrc={service6}
          title="Integração com Consultórios e Software"
          text="Nossos exames podem ser integrados facilmente aos principais softwares de planejamento do mercado, otimizando a rotina do profissional."
        />
      </div>
    </section>
  );
};
