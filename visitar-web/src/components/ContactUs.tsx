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

  // State for validation
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  // Validate function for individual field
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

  // On change handler for inputs with real-time validation
  const handleInputChange = (field: string, value: string) => {
    // Update state for the corresponding input
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

    // Validate the input field and update errors
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

    // Filter out empty errors
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
      <section className="bg-pri flex flex-col justify-around sm:flex-row">
        <div className="mx-16 flex flex-col py-12 text-center sm:py-20 lg:mx-auto lg:py-32">
          <h6 className="font-title text-xl text-white md:text-2xl lg:text-5xl">
            {t("contact-us.title")}
          </h6>
          <input
            type="text"
            placeholder={t("name")}
            className={`text-md my-4 w-full rounded-lg px-2 py-3 shadow-md md:py-4 md:text-xl border ${errors.name ? "border-red-500" : "border-gray-300"}`}
            value={name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
          {errors.name && <p className="text-red-500 text-sm text-left">{errors.name}</p>}

          <input
            type="text"
            placeholder={t("email")}
            className={`text-md my-4 w-full rounded-lg px-2 py-3 shadow-md md:py-4 md:text-xl border ${errors.email ? "border-red-500" : "border-gray-300"}`}
            value={email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm text-left">{errors.email}</p>}

          <textarea
            className={`text-md my-4 w-full rounded-lg px-2 py-3 shadow-md md:py-4 md:text-xl border ${errors.message ? "border-red-500" : "border-gray-300"}`}
            placeholder={t("message")}
            rows={6}
            value={message}
            onChange={(e) => handleInputChange("message", e.target.value)}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm text-left">{errors.message}</p>}

          <button
            className="text-md text-pri my-4 w-full rounded-lg bg-white px-2 py-3 shadow-md md:py-4 md:text-xl"
            onClick={submitData}
          >
            {t("submit")}
          </button>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
