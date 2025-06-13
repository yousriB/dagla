import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { Button } from "../components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import heroImage from "../assets/img/herobg.png";

const Home = () => {
  const featuredProducts = products.slice(0, 4);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          background: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundBlendMode: "overlay",
        }}
        dir="rtl"
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="text-center text-white px-4 max-w-4xl mx-auto z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t("heroTitle")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            {t("heroSubtitle")}
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse sm:flex sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg rounded-md"
            >
              <Link to="/products">{t("orderNow")} 🌴</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white hover:bg-white text-amber-800 px-8 py-4 text-lg rounded-md transition-all duration-300"
            >
              <Link to="/about">{t("about")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("featuredProducts")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("heroSubtitle")}
            </p>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-md"
            >
              <Link to="/products">{t("products")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("whyChooseUs")}
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-b from-amber-50 to-orange-50 hover:shadow-lg transition-shadow duration-300">
              <div className="text-6xl mb-4">🌴</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("highQuality")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("highQualityDesc")}
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-b from-green-50 to-emerald-50 hover:shadow-lg transition-shadow duration-300">
              <div className="text-6xl mb-4">🚚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("fastDelivery")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("fastDeliveryDesc")}
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-b from-blue-50 to-cyan-50 hover:shadow-lg transition-shadow duration-300">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("cashOnDelivery")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("cashOnDeliveryDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* CTA Section */}
      <section
        className="py-20 bg-gradient-to-r from-amber-800 to-orange-800 text-white"
        dir="rtl"
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">{t("tryAuthenticDates")}</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            {t("orderNowDesc")}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-amber-800 hover:bg-gray-100 px-8 py-4 text-lg rounded-md transition-all duration-300 transform hover:scale-105"
          >
            <Link to="/products">{t("orderNow")} 🛒</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
