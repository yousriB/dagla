import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import aboutImage from "../assets/img/palme.png";

const About = () => {
  const { language, t } = useLanguage();
  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <div className="min-h-screen bg-gray-50" dir={dir}>
      {/* Hero Section */}
      <section
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${aboutImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="text-center text-white z-10">
          <h1 className="text-4xl font-bold mb-2">{t("ourStory")}</h1>
          <p className="text-xl opacity-90">{t("heritageSubtitle")}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              {t("storyTitle")}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">{t("storyParagraph1")}</p>
              <p className="mb-6">{t("storyParagraph2")}</p>
              <p>{t("storyParagraph3")}</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t("whyChooseUsAbout")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-4xl mb-4 text-center">🌴</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {t("highQualityTitle")}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {t("highQualityDescAbout")}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-4xl mb-4 text-center">🏜️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {t("originTitle")}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {t("originDesc")}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-4xl mb-4 text-center">🌱</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {t("naturalFarmingTitle")}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {t("naturalFarmingDesc")}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-4xl mb-4 text-center">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {t("familyBusinessTitle")}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {t("familyBusinessDesc")}
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t("ourValues")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">
                  {t("qualityValue")}
                </h3>
                <p className="text-gray-700 text-sm">{t("qualityValueDesc")}</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">
                  {t("trustValue")}
                </h3>
                <p className="text-gray-700 text-sm">{t("trustValueDesc")}</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">
                  {t("heritageValue")}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t("heritageValueDesc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t("contactUsAbout")}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t("contactDesc")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse gap-4">
              <a
                href="tel:+21621338785"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                📞 {t("callUs")}
              </a>
              <a
                href="https://wa.me/21621338785"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                💬 {t("whatsapp")}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
