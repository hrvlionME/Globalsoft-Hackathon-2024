import { useState } from "react";
import logo from "../assets/Coat_of_Arms_of_Siroki_Brijeg.png";
import Close from "./icons/Close";
import Menu from "./icons/Menu";

const Navigation: React.FC = () => {
  // Used for small screen sizes
  const [sidebarOpened, setSidebarOpened] = useState(false);

  return (
    <div className="bg-white shadow-md">
      <header className="container mx-auto flex max-w-7xl flex-wrap items-center justify-between p-6">
        <div className="text-sec hover:text-pri flex items-center transition duration-200 hover:cursor-pointer">
          <div className="fill-culler mr-2 h-8 w-8">
            <img
              src={logo}
              alt="Landmarks AR"
            />
          </div>
          <span className="font-title text-xl">Landmarks AR</span>
        </div>
        <div className="block md:hidden">
          <button
            className="bg-sec hover:bg-pri rounded px-3 py-1 text-white transition"
            onClick={() => setSidebarOpened(!sidebarOpened)}>
            {sidebarOpened ? <Close /> : <Menu />}
          </button>
        </div>
        <nav
          className={`font-title flex w-full overflow-hidden transition-all md:max-h-full md:w-auto md:items-center ${sidebarOpened ? "max-h-[300px]" : "max-h-0"}`}>
          <ul className="flex w-full flex-col items-center text-lg md:flex-row">
            <li className="my-3 mr-4 block items-center md:my-0 md:inline-block">
              <a
                href=""
                className="text-pri hover:text-sec transition duration-150">
                Home
              </a>
            </li>
            <li className="mb-3 mr-4 block items-center md:mb-0 md:inline-block">
              <a
                href="#how-to-use"
                className="text-pri hover:text-sec transition duration-150">
                How to use
              </a>
            </li>
            <li className="mb-3 mr-4 block items-center md:mb-0 md:inline-block">
              <a
                href="#download"
                className="text-pri hover:text-sec transition duration-150">
                Download
              </a>
            </li>
            <li className="mb-3 mr-4 block items-center md:mb-0 md:inline-block">
              <a
                href="#about"
                className="text-pri hover:text-sec transition duration-150">
                About / Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
