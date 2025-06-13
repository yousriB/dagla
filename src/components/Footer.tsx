import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { language, t } = useLanguage();
  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <footer className="bg-amber-900 text-white" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl">🌴</span>
              <h3 className="text-xl font-bold mr-2">{t("companyName")}</h3>
            </div>
            <p className="text-amber-100 mb-4 leading-relaxed">
              {t("companyDescription")}
            </p>
            <div className="bg-amber-800 p-4 rounded-lg">
              <p className="font-semibold text-center">
                {t("paymentDelivery")}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-amber-100 hover:text-white transition-colors"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-amber-100 hover:text-white transition-colors"
                >
                  {t("products")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-amber-100 hover:text-white transition-colors"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-amber-100 hover:text-white transition-colors"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("contactInfo")}</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 ml-2 text-amber-300" />
                <span className="text-amber-100">
                  {language === "ar" ? " 785 338 21 216+" : " +216 21 338 785"}
                </span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 ml-2 text-amber-300" />
                <span className="text-amber-100">{t("tunisiaAddress")}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 ml-2 text-amber-300" />
                <span className="text-amber-100">info@tamortunisia.tn</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-semibold mb-2">{t("followUs")}</h5>
              <div className="flex space-x-3 space-x-reverse">
                <a
                  href="#"
                  className="text-amber-300 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-amber-300 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
          <p>{t("allRightsReserved")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
