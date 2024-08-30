import { useState } from "react";
import logo from "../assets/Coat_of_Arms_of_Siroki_Brijeg.png";
import Close from "./icons/Close";
import Menu from "./icons/Menu";
import Globe from "./icons/Globe";
import { useTranslation } from "react-i18next";

const Navigation: React.FC = () => {
  const [t, i18next] = useTranslation();
  // Used for small screen sizes
  const [sidebarOpened, setSidebarOpened] = useState(false);

  return (
    <header className="bg-white p-6 shadow-md">
      <nav className="mx-auto flex h-full max-w-7xl items-start justify-between">
        <div className="hover:text-sec flex h-full cursor-pointer items-center justify-center gap-2 transition-colors">
          <img
            src={logo}
            alt="Landmarks AR"
            className="h-8 w-8"
          />
          <h1 className="whitespace-nowrap text-xl">Landmarks AR</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex md:hidden">
            <button
              className="bg-sec hover:bg-pri rounded px-3 py-1 text-white transition"
              onClick={() => setSidebarOpened(!sidebarOpened)}>
              {sidebarOpened ? <Close /> : <Menu />}
            </button>
          </div>
          <ul
            className={`mt-1 h-full items-center gap-4 pt-4 md:flex md:pt-0 ${sidebarOpened ? "flex flex-col" : "hidden"}`}>
            <li className="flex items-center">
              <a
                href="#"
                className="text-pri hover:text-sec transition duration-150">
                {t("navbar.home")}
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#how-to-use"
                className="text-pri hover:text-sec transition duration-150">
                {t("navbar.how-to-use")}
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#download"
                className="text-pri hover:text-sec transition duration-150">
                {t("navbar.download")}
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#about"
                className="text-pri hover:text-sec transition duration-150">
                {t("navbar.about")} / {t("navbar.contact")}
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sec mt-1 flex items-center justify-center md:mb-0">
          <Globe />
          <select
            className="hover:text-sec/80 flex cursor-pointer items-center justify-center"
            value={i18next.language}
            onChange={e => i18next.changeLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="hr">Hrvatski</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
