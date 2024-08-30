import { QRCodeSVG } from "qrcode.react";
import background from "../assets/brig_panorama.jpeg";
import { format } from "date-fns";

const Download: React.FC = () => {
  return (
    <>
      <div
        className="relative flex h-fit flex-col items-center justify-start bg-cover bg-center py-32"
        style={{ backgroundImage: `url(${background})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-center text-6xl text-white sm:text-6xl md:text-8xl">
          DOWNLOAD OUR APP
        </h1>
        <div className="flex justify-between gap-x-10">
          <h2 className="sm:text-md relative my-5 text-center text-2xl text-white md:text-4xl">
            App build v1.15
          </h2>
          <h2 className="sm:text-md relative my-5 text-center text-2xl text-white md:text-4xl">
            <i>{format(new Date(), "MMM y")}</i>
          </h2>
        </div>
        <a
          href="/app.apk"
          download
          className="bg-sec z-10 block rounded border-2 border-white px-32 py-2 text-white hover:bg-blue-800 focus:ring-1 md:hidden">
          Android Version
        </a>
        <div className="z-10 mt-5 hidden rounded-sm bg-white p-2 md:flex">
          <QRCodeSVG
            value="/app.apk"
            size={192}
          />
        </div>
      </div>
    </>
  );
};

export default Download;
