import React, { useState } from "react";
import { Phone, MapPin, Mail, Clock, Send, Globe } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { toast } from "sonner";
import { useLanguage } from "../contexts/LanguageContext";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.message) {
      toast.error(
        language === "ar"
          ? "يرجى ملء الحقول المطلوبة"
          : "Veuillez remplir les champs obligatoires"
      );
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success(
        language === "ar"
          ? "تم إرسال رسالتكم بنجاح! سنتواصل معكم قريباً"
          : "Votre message a été envoyé avec succès! Nous vous contacterons bientôt"
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-background to-muted ${
        language === "ar" ? "font-arabic-modern" : "font-french"
      }`}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="mx-auto h-12 w-12 mb-4 opacity-90" />
          <h1 className="text-4xl font-bold mb-4">{t("contactUs")}</h1>
          <p className="text-xl opacity-90">
            {language === "ar"
              ? "نحن هنا للإجابة على جميع استفساراتكم ومساعدتكم"
              : "Nous sommes là pour répondre à toutes vos questions et vous aider"}
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-6">
                {t("contactInfo")}
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                {language === "ar"
                  ? "تواصلوا معنا عبر أي من الطرق التالية، نحن في خدمتكم دائماً"
                  : "Contactez-nous par l'un des moyens suivants, nous sommes toujours à votre service"}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 space-x-reverse gap-4 p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-border/50">
                <div className="bg-gradient-to-br from-primary/10 to-purple-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2 text-lg">
                    {t("phone")}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === "ar"
                      ? " 785 338 21 216+"
                      : " +216 21 338 785"}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse gap-4 p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-border/50">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-3 rounded-lg">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2 text-lg">
                    {t("whatsapp")}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === "ar"
                      ? " 785 338 21 216+"
                      : " +216 21 338 785"}
                  </p>
                  <a
                    href="https://wa.me/21621338785"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 text-sm font-medium hover:underline"
                  >
                    {language === "ar"
                      ? "راسلنا على الواتساب"
                      : "Contactez-nous sur WhatsApp"}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse gap-4 p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-border/50">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2 text-lg">
                    {t("email")}
                  </h3>
                  <p className="text-muted-foreground">info@tamortunisia.tn</p>
                  <p className="text-muted-foreground">
                    orders@tamortunisia.tn
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse gap-4 p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-border/50">
                <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2 text-lg">
                    {t("address")}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === "ar"
                      ? "شارع الحبيب بورقيبة، تونس"
                      : "Avenue Habib Bourguiba, Tunis"}
                    <br />
                    {language === "ar"
                      ? "الرمز البريدي: 1000"
                      : "Code postal: 1000"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl shadow-xl p-8 border border-border/50">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-6">
              {t("sendMessage")}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    {t("fullName")} *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={
                      language === "ar"
                        ? "أدخل اسمك الكامل"
                        : "Entrez votre nom complet"
                    }
                    className={`${
                      language === "ar" ? "text-right" : "text-left"
                    } border-2 focus:border-primary transition-colors`}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    {language === "ar" ? "رقم الهاتف" : "Numéro de téléphone"}
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={
                      language === "ar" ? "رقم الهاتف" : "Numéro de téléphone"
                    }
                    className={`${
                      language === "ar" ? "text-right" : "text-left"
                    } border-2 focus:border-primary transition-colors`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  {language === "ar" ? "البريد الإلكتروني" : "Adresse email"}
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={
                    language === "ar" ? "البريد الإلكتروني" : "Adresse email"
                  }
                  className={`${
                    language === "ar" ? "text-right" : "text-left"
                  } border-2 focus:border-primary transition-colors`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  {t("subject")}
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full p-3 border-2 border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                    language === "ar" ? "text-right" : "text-left"
                  } bg-background transition-colors`}
                >
                  <option value="">
                    {language === "ar" ? "اختر الموضوع" : "Choisissez le sujet"}
                  </option>
                  <option value="order">
                    {language === "ar"
                      ? "استفسار عن طلب"
                      : "Question sur commande"}
                  </option>
                  <option value="product">
                    {language === "ar"
                      ? "استفسار عن منتج"
                      : "Question sur produit"}
                  </option>
                  <option value="delivery">
                    {language === "ar"
                      ? "استفسار عن التوصيل"
                      : "Question sur livraison"}
                  </option>
                  <option value="complaint">
                    {language === "ar" ? "شكوى" : "Plainte"}
                  </option>
                  <option value="suggestion">
                    {language === "ar" ? "اقتراح" : "Suggestion"}
                  </option>
                  <option value="other">
                    {language === "ar" ? "أخرى" : "Autre"}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  {t("message")} *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={
                    language === "ar"
                      ? "اكتب رسالتك هنا..."
                      : "Écrivez votre message ici..."
                  }
                  rows={5}
                  className={`w-full p-3 border-2 border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                    language === "ar" ? "text-right" : "text-left"
                  } resize-none bg-background transition-colors`}
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 text-white py-3 text-lg rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 space-x-reverse shadow-lg transform hover:scale-[1.02]"
              >
                <Send className="h-5 w-5" />
                <span>
                  {isSubmitting
                    ? language === "ar"
                      ? "جاري الإرسال..."
                      : "Envoi en cours..."
                    : t("sendMessageBtn")}
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
