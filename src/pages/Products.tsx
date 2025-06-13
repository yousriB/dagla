import React, { useState } from "react";
import { products, Product } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Search } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const { t, language } = useLanguage();

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    if (value.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) =>
          (language === "ar" ? product.nameAr : product.nameFr)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          (language === "ar" ? product.descriptionAr : product.descriptionFr)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          (language === "ar" ? product.originAr : product.originFr)
            .toLowerCase()
            .includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-50 py-8"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("ourDates")}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {t("discoverDates")}
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search
              className={`absolute ${
                language === "ar" ? "right-3" : "left-3"
              } top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5`}
            />
            <input
              type="text"
              placeholder={t("searchDates")}
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className={`w-full ${
                language === "ar" ? "pr-10 pl-4" : "pl-10 pr-4"
              } py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              {t("noResults")}
            </h3>
            <p className="text-gray-500">{t("tryDifferentSearch")}</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setFilteredProducts(products);
              }}
              className="mt-4 bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              {t("viewAllProducts")}
            </button>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t("guaranteedQuality")}
              </h3>
              <p className="text-gray-600">{t("guaranteedQualityDesc")}</p>
            </div>
            <div>
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t("safePackaging")}
              </h3>
              <p className="text-gray-600">{t("safePackagingDesc")}</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t("freeDelivery")}
              </h3>
              <p className="text-gray-600">{t("freeDeliveryDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
