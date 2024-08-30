import { QRCodeSVG } from "qrcode.react";
import background from "../assets/brig_panorama.jpeg";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

const Download: React.FC = () => {
  const [t] = useTranslation();
  return (
    <>
      <div
        className="relative flex h-fit flex-col items-center justify-start bg-cover bg-center py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
        }}>
        <div className="absolute inset-0"></div>
        <h1 className="relative mx-8 text-center text-6xl uppercase text-white sm:text-6xl md:text-8xl">
          {t("download")}
        </h1>
        <div className="flex flex-col items-center justify-between gap-x-10">
          <div className="my-4 flex h-min justify-center gap-2 rounded-md bg-gradient-to-br from-white/35 to-white/60 p-4 px-4 py-2">
            <h2 className="text-shadow-sm text-center font-mono text-white shadow-black/85 sm:text-base md:text-2xl">
              {t("app-build")} v1.15
            </h2>
            <h2 className="text-shadow-sm text-center font-mono text-white shadow-black/85 sm:text-base md:text-2xl">
              {format(new Date(), "MMM y")}
            </h2>
          </div>
          <div className="z-10 mt-5 hidden rounded-sm bg-white p-2 md:flex">
            <QRCodeSVG
              value={`${window.location.origin}/app.apk`}
              size={192}
            />
          </div>
        </div>
        <a
          href="/app.apk"
          download
          className="z-10 block rounded border-2 border-white bg-sec px-32 py-2 text-white hover:bg-blue-800 focus:ring-1 md:hidden">
          {t("android-version")}
        </a>
      </div>
    </>
  );
};

export default Download;
