import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
const ContactUs: React.FC = () => {
  const [t] = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitData = async () => {
    console.log(name, email, message);
    const formData = {
      name: name,
      email: email,
      message: message,
    };
    try {
      await axios.post("http://localhost:8000/api/sendMessage", formData);
      window.location.reload();
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <>
      <section className="flex flex-col justify-around bg-pri sm:flex-row">
        <div className="mx-16 flex flex-col py-12 text-center sm:py-20 lg:mx-auto lg:py-32">
          <h6 className="font-title text-xl text-white md:text-2xl lg:text-5xl">
            {t("contact-us.title")}
          </h6>
          <input
            type="text"
            placeholder={t("name")}
            className="text-md my-4 w-full rounded-lg px-2 py-3 shadow-md md:py-4 md:text-xl"
            onChange={e => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder={t("email")}
            className="text-md my-4 w-full rounded-lg px-2 py-3 shadow-md md:py-4 md:text-xl"
            onChange={e => setEmail(e.target.value)}
          />
          <textarea
            className="text-md my-4 w-full rounded-lg px-2 py-3 shadow-md md:py-4 md:text-xl"
            placeholder={t("message")}
            rows={6}
            onChange={e => setMessage(e.target.value)}></textarea>
          <button
            className="text-md my-4 w-full rounded-lg bg-white px-2 py-3 text-pri shadow-md md:py-4 md:text-xl"
            onClick={submitData}>
            {t("send")}
          </button>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
