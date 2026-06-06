import logoDix from "@/assets/images/logo-dix.svg";
import logoInstagram from "@/assets/images/logo-instagram.svg";
import { RefObject, useEffect, useRef, useState } from "react";
import cx from "classnames";
import style from "./NavBar.module.scss";

export const Navbar = ({
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
  const mobileMenuRef = useRef<HTMLInputElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={style.navBarHolder}>
      <nav className={cx(style.navbar, { [style.sticky]: isSticky })}>
        <input
          type="checkbox"
          id="menu-toggle"
          className={style.menuCheckbox}
          ref={mobileMenuRef}
        />
        <label htmlFor="menu-toggle" className={style.burgerButton}>
          <span></span>
          <span></span>
          <span></span>
        </label>
        <label htmlFor="menu-toggle" className={style.menuOverlay}></label>
        <nav className={cx(style.drawerMenu)}>
          <ul>
            <li>
              <div
                onClick={() => {
                  mobileMenuRef.current?.click();
                  handleScroll(servicesRef);
                }}
              >
                Serviços
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  mobileMenuRef.current?.click();
                  handleScroll(techRef);
                }}
              >
                Tecnologia
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  mobileMenuRef.current?.click();
                  handleScroll(conveniosRef);
                }}
              >
                Convênios
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  mobileMenuRef.current?.click();
                  handleScroll(unitsRef);
                }}
              >
                Unidades
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  mobileMenuRef.current?.click();
                  handleScroll(whyDixRef);
                }}
              >
                Por que escolher a Dix
              </div>
            </li>
          </ul>
        </nav>

        <div className={style.logo}>
          <img
            src={logoDix}
            alt="Dix Radiologia Logo"
            width={130}
            className={style.logo}
          />
        </div>
        <ul className={cx(style.navLinks)}>
          <li>
            <a href="#exames" onClick={() => handleScroll(servicesRef)}>
              Serviços
            </a>
          </li>
          <li>
            <a href="#tecnologia" onClick={() => handleScroll(techRef)}>
              Tecnologia
            </a>
          </li>
          <li>
            <a href="#convenios" onClick={() => handleScroll(conveniosRef)}>
              Convênios
            </a>
          </li>
          <li>
            <a href="#unidades" onClick={() => handleScroll(unitsRef)}>
              Unidades
            </a>
          </li>
          <li>
            <a
              href="#porque-escolher-a-dix"
              onClick={() => handleScroll(whyDixRef)}
            >
              Por que escolher a Dix
            </a>
          </li>
        </ul>
        <div className={style.social}>
          <a
            href={"https://www.instagram.com/dix_radiologiaoraldigital"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoInstagram} alt="Instagram" width={18} />
          </a>
        </div>
      </nav>
    </div>
  );
};
