import { useTranslation } from "react-i18next";
import mobitelImage from "../assets/mobitel.jpg";
import qrCodeGuideImage from "../assets/qrcode_guide.jpg";

const HowToUse: React.FC = () => {
  const [t] = useTranslation();
  return (
    <>
      <section className="mx-[5%] py-40 md:mx-[10%]">
        <h1 className="relative mb-20 text-center text-6xl uppercase text-sec sm:text-6xl md:text-8xl">
          {t("navbar.how-to-use")}
        </h1>
        <div className="mx-auto grid max-w-[90%] grid-cols-1 gap-y-8 sm:gap-y-12 lg:gap-y-16">
          {/* 1nd row: text image */}
          <div className="col-span-1 overflow-hidden rounded-3xl bg-white shadow-lg shadow-black/25">
            <div className="block border border-gray-100 transition duration-300 md:flex">
              <div className="md:w-1/2">
                <img
                  src={mobitelImage}
                  alt={t("mobile-phone")}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 md:w-1/2 md:p-7">
                <h2 className="py-3 text-center text-2xl text-sec transition duration-200 md:text-left md:text-2xl">
                  {t("section.download.title")}
                </h2>
                <p className="pb-5 text-lg text-gen">
                  {t("section.download.body")}
                </p>
              </div>
            </div>
          </div>

          {/* 2nd row: text image */}
          <div className="col-span-1 overflow-hidden rounded-3xl bg-white shadow-lg shadow-black/25">
            <div className="block flex-row-reverse border border-gray-100 transition duration-300 md:flex">
              <div className="md:w-1/2">
                <img
                  src={qrCodeGuideImage}
                  alt={t("mobile-phone-qr-guide")}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 md:w-1/2 md:p-7">
                <h2 className="py-3 text-center font-title text-2xl text-sec transition duration-200 md:text-left md:text-2xl">
                  {t("section.qr.title")}
                </h2>
                <p className="pb-5 text-lg text-gen">{t("section.qr.body")}</p>
              </div>
            </div>
          </div>

          {/* 3rd row: image text */}
          <div className="col-span-1 overflow-hidden rounded-3xl bg-white shadow-lg shadow-black/25">
            <div className="block border border-gray-100 transition duration-300 md:flex">
              <div className="md:w-1/2">
                <img
                  src={mobitelImage}
                  alt={t("mobile-phone")}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 md:w-1/2 md:p-7">
                <h2 className="py-3 text-center font-title text-2xl text-sec transition duration-200 md:text-left md:text-2xl">
                  {t("section.library.title")}
                </h2>
                <p className="pb-5 text-lg text-gen">
                  {t("section.library.body")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowToUse;
