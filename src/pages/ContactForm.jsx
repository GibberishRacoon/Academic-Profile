import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUser,
  FaComment,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Formspree hook - using environment variable
  const [state, handleFormspreeSubmit] = useForm(
    import.meta.env.VITE_FORMSPREE_FORM_ID,
    {
      headers: {
        Accept: "application/json",
      },
    },
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Imię i nazwisko jest wymagane";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Adres email jest wymagany";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Wprowadź poprawny adres email";
    }

    if (!formData.subject) {
      newErrors.subject = "Wybierz temat wiadomości";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Wiadomość nie może być pusta";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Wiadomość musi mieć co najmniej 10 znaków";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});

    // Create FormData object for Formspree
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("subject", formData.subject);
    formDataToSubmit.append("message", formData.message);
    // formDataToSubmit.append(
    //   "_subject",
    //   `Nowa wiadomość z formularza kontaktowego - ${formData.subject}`
    // );

    // Submit to Formspree
    await handleFormspreeSubmit(formDataToSubmit);

    // Clear form if successful
    if (state.succeeded) {
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      content: "rakietowyracoon@gmail.com",
      description: "Odpowiadam w ciągu 24-48 godzin",
    },
    {
      icon: FaPhone,
      title: "Telefon",
      content: "+48 123 456 789",
      description: "Pon-Pt: 9:00-17:00",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Biuro",
      content: "Uniwersytet XYZ, Budynek A, pokój 301",
      description: "Warszawa, Polska",
    },
  ];

  if (state.succeeded) {
    return (
      <section className="py-12 lg:py-20 bg-[var(--color-bg)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-green-800 mb-2">
                Wiadomość wysłana!
              </h2>
              <p className="text-green-700 mb-4">
                Dziękuję za kontakt. Odpowiem na Państwa wiadomość w ciągu 24-48
                godzin.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="btn-outline"
              >
                Wyślij kolejną wiadomość
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 lg:py-20 bg-[var(--color-bg)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-4">
            Kontakt
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-primary)]/80 max-w-3xl mx-auto">
            Zapraszam do kontaktu w sprawach naukowych, dydaktycznych oraz
            współpracy akademickiej.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">
              Informacje kontaktowe
            </h2>

            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="text-[var(--color-accent)] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-primary)] mb-1">
                      {info.title}
                    </h3>
                    <p className="text-[var(--color-primary)] mb-1 font-medium">
                      {info.content}
                    </p>
                    <p className="text-[var(--color-primary)]/60 text-sm">
                      {info.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Office Hours */}
            <div className="bg-[var(--color-bg-section)]/50 rounded-xl p-6">
              <h3 className="font-semibold text-[var(--color-primary)] mb-3">
                Godziny konsultacji
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--color-primary)]/80">
                    Poniedziałek:
                  </span>
                  <span className="text-[var(--color-primary)]">
                    10:00 - 12:00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-primary)]/80">Środa:</span>
                  <span className="text-[var(--color-primary)]">
                    14:00 - 16:00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-primary)]/80">
                    Piątek:
                  </span>
                  <span className="text-[var(--color-primary)]">
                    9:00 - 11:00
                  </span>
                </div>
                <p className="text-xs text-[var(--color-primary)]/60 mt-3">
                  * Konsultacje po wcześniejszym umówieniu
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">
                Wyślij wiadomość
              </h2>

              <div className="space-y-6">
                {/* Formspree Validation Errors */}
                <ValidationError
                  prefix="Form"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />

                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">
                      Imię i nazwisko *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--color-primary)]/40" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all duration-300 ${
                          errors.name
                            ? "border-red-500"
                            : "border-[var(--color-primary)]/20"
                        }`}
                        placeholder="Wprowadź swoje imię i nazwisko"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">
                      Adres email *
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--color-primary)]/40" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all duration-300 ${
                          errors.email
                            ? "border-red-500"
                            : "border-[var(--color-primary)]/20"
                        }`}
                        placeholder="twoj.email@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">
                    Temat *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all duration-300 ${
                      errors.subject
                        ? "border-red-500"
                        : "border-[var(--color-primary)]/20"
                    }`}
                  >
                    <option value="">Wybierz temat wiadomości</option>
                    <option value="collaboration">Współpraca naukowa</option>
                    <option value="consultation">Konsultacje</option>
                    <option value="research">Pytania badawcze</option>
                    <option value="teaching">Sprawy dydaktyczne</option>
                    <option value="publication">Publikacje</option>
                    <option value="other">Inne</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">
                    Wiadomość *
                  </label>
                  <div className="relative">
                    <FaComment className="absolute left-3 top-4 text-[var(--color-primary)]/40" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all duration-300 resize-vertical ${
                        errors.message
                          ? "border-red-500"
                          : "border-[var(--color-primary)]/20"
                      }`}
                      placeholder="Opisz szczegóły swojego zapytania..."
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Privacy Notice */}
                <div className="bg-[var(--color-bg-section)]/30 rounded-lg p-4">
                  <p className="text-xs text-[var(--color-primary)]/70">
                    Wysyłając formularz akceptujesz przetwarzanie danych
                    osobowych zgodnie z{" "}
                    <a
                      href="/privacy"
                      className="text-[var(--color-accent)] hover:underline"
                    >
                      polityką prywatności
                    </a>
                    . Twoje dane będą wykorzystane wyłącznie w celu odpowiedzi
                    na zapytanie.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={state.submitting}
                  className={`w-full sm:w-auto btn-main inline-flex items-center gap-2 hover:gap-4 transition-all duration-300 ${
                    state.submitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {state.submitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      Wyślij wiadomość
                      <FaPaperPlane className="text-sm" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-gradient-to-r from-[var(--color-bg-section)] to-[var(--color-bg-section)]/50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
                Szybka odpowiedź
              </h3>
              <p className="text-[var(--color-primary)]/70 text-sm">
                Odpowiadam na wszystkie wiadomości w ciągu 24-48 godzin
                roboczych
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
                Język komunikacji
              </h3>
              <p className="text-[var(--color-primary)]/70 text-sm">
                Możliwość korespondencji w języku polskim i angielskim
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
                Preferowany kontakt
              </h3>
              <p className="text-[var(--color-primary)]/70 text-sm">
                Email dla spraw oficjalnych, telefon w pilnych przypadkach
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
