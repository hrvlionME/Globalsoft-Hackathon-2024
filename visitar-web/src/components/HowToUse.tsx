import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import mobitelImage from "../assets/mobitel.jpg";
import qrCodeGuideImage from "../assets/qrcode_guide.jpg";
import libraryImage from "../assets/bidscroll.png";

const HowToUse: React.FC = () => {
  const [t] = useTranslation();
  const elementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elementsRef.current.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <section className="mx-[5%] py-40 md:mx-[10%]">
      <h1 className="relative mb-20 text-center text-6xl uppercase text-sec sm:text-6xl md:text-8xl">
        {t("navbar.how-to-use")}
      </h1>
      <div className="mx-auto grid max-w-[90%] grid-cols-1 gap-y-8 sm:gap-y-12 lg:gap-y-16">
        {[
          {
            image: mobitelImage,
            altText: t("mobile-phone"),
            title: t("section.download.title"),
            body: t("section.download.body"),
          },
          {
            image: qrCodeGuideImage,
            altText: t("mobile-phone-qr-guide"),
            title: t("section.qr.title"),
            body: t("section.qr.body"),
          },
          {
            image: libraryImage,
            altText: t("mobile-phone"),
            title: t("section.library.title"),
            body: t("section.library.body"),
          },
        ].map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (elementsRef.current[index] = el)}
            className="opacity-0 transition-opacity duration-1000 col-span-1 overflow-hidden rounded-3xl bg-white shadow-lg shadow-black/25"
          >
            <div className="block border border-gray-100 transition duration-300 md:flex">
              <div className="md:w-1/2">
                <img
                  src={item.image}
                  alt={item.altText}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 md:w-1/2 md:p-7">
                <h2 className="py-3 text-center font-title text-2xl text-sec transition duration-200 md:text-left md:text-2xl">
                  {item.title}
                </h2>
                <p className="pb-5 text-lg text-gen">{item.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToUse;
