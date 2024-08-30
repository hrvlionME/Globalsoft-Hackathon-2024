import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqItems = [
  {
    question: "faq.free-to-use.question",
    answer: "faq.free-to-use.answer",
  },
  {
    question: "faq.how-create-account.question",
    answer: "faq.how-create-account.answer",
  },
  {
    question: "faq.how-get-started.question",
    answer: "faq.how-get-started.answer",
  },
];

const FAQ: React.FC = () => {
  const [t] = useTranslation();

  const [openItems, setOpenItems] = useState<boolean[]>(
    faqItems.map(() => false)
  );

  const toggleAnswer = (index: number) => {
    setOpenItems(prev => {
      const newOpenItems = [...prev];
      newOpenItems[index] = !newOpenItems[index];
      return newOpenItems;
    });
  };

  return (
    <>
      <section className="relative mx-4 my-40 md:mx-20 lg:mx-40 xl:mx-72">
        <h1 className="text-sec relative my-20 text-center text-4xl lg:text-5xl">
          {t("faq.title")}
        </h1>

        <div className="relative mb-8">
          <div className="border-pri absolute inset-0 left-1/2 w-screen -translate-x-1/2 transform border-t-2"></div>
        </div>

        {faqItems.map((item, index) => (
          <div key={item.answer}>
            <div className="flex flex-col items-center">
              <h2
                onClick={() => toggleAnswer(index)}
                className="text-sec relative my-5 flex cursor-pointer items-center justify-center text-2xl md:text-4xl">
                {openItems[index] ? (
                  <FiMinus className="mr-2" />
                ) : (
                  <FiPlus className="mr-2" />
                )}
                {t(item.question)}
              </h2>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems[index] ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {openItems[index] && (
                  <h3 className="text-pri my-5 text-lg md:text-2xl">
                    {t(item.answer)}
                  </h3>
                )}
              </div>
            </div>

            {index < faqItems.length - 1 && (
              <div className="relative">
                <div className="border-pri absolute inset-0 left-1/2 w-screen -translate-x-1/2 transform border-t-2"></div>
              </div>
            )}
          </div>
        ))}

        <div className="relative mb-8">
          <div className="border-pri absolute inset-0 left-1/2 w-screen -translate-x-1/2 transform border-t-2"></div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
