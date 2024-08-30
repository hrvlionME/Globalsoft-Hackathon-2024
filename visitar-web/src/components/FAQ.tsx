import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQ: React.FC = () => {
  const faqItems = [
    { question: "Is this application free to use?", answer: "Yes, this application is free to use." },
    { question: "How do I create an account?", answer: "You don't need to create an account to use this application." },
    { question: "How do I get started?", answer: "Go to the 'How to use section' to get started." },
  ];

  const [openItems, setOpenItems] = useState<boolean[]>(faqItems.map(() => false));

  const toggleAnswer = (index: number) => {
    setOpenItems((prev) => {
      const newOpenItems = [...prev];
      newOpenItems[index] = !newOpenItems[index];
      return newOpenItems;
    });
  };

  return (
    <>
      <section className="relative mx-4 my-40 md:mx-20 lg:mx-40 xl:mx-72">
        <h1 className="text-sec relative my-20 text-center text-6xl sm:text-6xl md:text-8xl">
          FAQ
        </h1>

        <div className="relative mb-8">
          <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 border-t-2 border-pri w-screen"></div>
        </div>

        {faqItems.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col items-center">
              <h2
                onClick={() => toggleAnswer(index)}
                className="cursor-pointer text-sec relative my-5 text-2xl sm:text-2xl md:text-6xl flex items-center justify-center"
              >
                {openItems[index] ? (
                  <FiMinus className="mr-2" />
                ) : (
                  <FiPlus className="mr-2" />
                )}
                {item.question}
              </h2>

              {openItems[index] && (
                <h3 className="text-pri my-5 text-2xl md:text-4xl">{item.answer}</h3>
              )}
            </div>

            {index < faqItems.length - 1 && (
              <div className="relative">
                <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 border-t-2 border-pri w-screen"></div>
              </div>
            )}
          </div>
        ))}

        <div className="relative mb-8">
          <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 border-t-2 border-pri w-screen"></div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
