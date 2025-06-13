import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../contexts/CartContext";
import { useLanguage } from "../contexts/LanguageContext";
import { ArrowRight, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "../components/ui/button";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { language, t } = useLanguage();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === parseInt(id || "0"));

  if (!product) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {t("productNotFound")}
          </h1>
          <Link
            to="/products"
            className="text-amber-600 hover:text-amber-700 font-semibold"
          >
            {t("backToProducts")}
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(
      language === "ar"
        ? `تم إضافة ${product.nameAr} إلى السلة`
        : `${product.nameFr} a été ajouté au panier`
    );
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const getProductName = () =>
    language === "ar" ? product.nameAr : product.nameFr;
  const getProductDescription = () =>
    language === "ar" ? product.descriptionAr : product.descriptionFr;
  const getProductOrigin = () =>
    language === "ar" ? product.originAr : product.originFr;
  const getProductUnit = () =>
    language === "ar" ? product.unitAr : product.unitFr;

  return (
    <div
      className="min-h-screen bg-gray-50 py-8"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-amber-600">
            {t("home")}
          </Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/products" className="hover:text-amber-600">
            {t("products")}
          </Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-gray-900">{getProductName()}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={getProductName()}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {language === "ar"
                ? `من ${getProductOrigin()}`
                : `De ${getProductOrigin()}`}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {getProductName()}
              </h1>
              <p className="text-lg text-gray-600">{getProductDescription()}</p>
            </div>

            {/* Price */}
            <div className="bg-amber-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-amber-700">
                  {product.price} {t("pricePerKg")}
                </span>
                <span className="text-gray-600">
                  {language === "ar"
                    ? `لكل ${getProductUnit()}`
                    : `par ${getProductUnit()}`}
                </span>
              </div>
            </div>

            {/* Origin Info */}
            <div className="bg-white rounded-lg p-4 border">
              <h3 className="font-semibold text-gray-800 mb-2">
                {t("region")}
              </h3>
              <p className="text-gray-600">
                {getProductOrigin()} -{" "}
                {language === "ar"
                  ? "من أفضل واحات الجنوب التونسي المشهورة بإنتاج التمور عالية الجودة"
                  : "Des meilleures oasis du Sud tunisien, réputées pour la production de dattes de haute qualité"}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">{t("quantity")}</h3>
              <div className="flex items-center space-x-4 space-x-reverse">
                <button
                  onClick={decreaseQuantity}
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-xl font-semibold px-4 py-2 bg-gray-50 rounded-lg min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={increaseQuantity}
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Total Price */}
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-800">
                  {t("total")}:
                </span>
                <span className="text-2xl font-bold text-amber-700">
                  {(product.price * quantity).toFixed(2)} {t("pricePerKg")}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleAddToCart}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg rounded-lg transition-colors flex items-center justify-center space-x-2 space-x-reverse"
              >
                <ShoppingBag className="h-5 w-5" />
                <span>{t("addToCart")}</span>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full border-amber-600 text-amber-600 hover:bg-amber-50 py-3 text-lg rounded-lg"
              >
                <Link to="/order">{t("orderNow")}</Link>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t">
              <div className="text-center">
                <div className="text-2xl mb-1">🚚</div>
                <span className="text-sm text-gray-600">
                  {t("shippingInfo")}
                </span>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">💰</div>
                <span className="text-sm text-gray-600">
                  {t("paymentInfo")}
                </span>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🌟</div>
                <span className="text-sm text-gray-600">
                  {t("qualityInfo")}
                </span>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">📞</div>
                <span className="text-sm text-gray-600">
                  {t("supportInfo")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t("similarProducts")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={relatedProduct.image}
                    alt={
                      language === "ar"
                        ? relatedProduct.nameAr
                        : relatedProduct.nameFr
                    }
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {language === "ar"
                        ? relatedProduct.nameAr
                        : relatedProduct.nameFr}
                    </h3>
                    <p className="text-amber-600 font-bold">
                      {relatedProduct.price} {t("pricePerKg")}/
                      {language === "ar"
                        ? relatedProduct.unitAr
                        : relatedProduct.unitFr}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
