import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs: React.FC = () => {
  const [t] = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validateField = (field: string, value: string) => {
    let error = "";
    switch (field) {
      case "name":
        if (!value) error = "Name is required.";
        break;
      case "email":
        if (!value) error = "Email is required.";
        break;
      case "message":
        if (!value) error = "Message is required.";
        break;
      default:
        break;
    }
    return error;
  };

  const handleInputChange = (field: string, value: string) => {
    switch (field) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: validateField(field, value),
    }));
  };

  const submitData = async () => {
    const validationErrors = {
      name: validateField("name", name),
      email: validateField("email", email),
      message: validateField("message", message),
    };

    const filteredErrors = Object.fromEntries(
      Object.entries(validationErrors).filter(([_, value]) => value)
    );

    if (Object.keys(filteredErrors).length > 0) {
      setErrors(filteredErrors);
      return;
    }

    console.log(name, email, message);
    const formData = {
      name: name,
      email: email,
      message: message,
    };
    try {
      await axios.post("http://localhost:8000/api/sendMessage", formData);
      toast.success("Message sent successfully!", {
        position: "bottom-right",
        autoClose: 2000,
      });
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
      setSubmitted(true);
    } catch (error) {
      console.error("There was an error!", error);
      toast.error("There was an error!", {
        position: "bottom-right",
        autoClose: 2000,
      });
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
            className={`text-md my-4 w-full rounded-lg px-2 py-3 shadow-md md:py-4 md:text-xl border-2 ${errors.name ? "border-red-500" : "border-gray-300"}`}
            value={name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
          {errors.name && <p className="text-red-500 text-sm text-left">{errors.name}</p>}

          <input
            type="text"
            placeholder={t("email")}
            className={`text-md my-4 w-full rounded-lg px-2 py-3 shadow-md md:py-4 md:text-xl border-2 ${errors.email ? "border-red-500" : "border-gray-300"}`}
            value={email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm text-left">{errors.email}</p>}

          <textarea
            className={`text-md my-4 w-full rounded-lg px-2 py-3 shadow-md md:py-4 md:text-xl border-2 ${errors.message ? "border-red-500" : "border-gray-300"}`}
            placeholder={t("message")}
            rows={6}
            value={message}
            onChange={(e) => handleInputChange("message", e.target.value)}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm text-left">{errors.message}</p>}

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
