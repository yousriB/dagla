import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Product } from "../data/products";
import { useCart } from "../contexts/CartContext";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { language, t } = useLanguage();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  // Select fields based on language
  const name = language === "ar" ? product.nameAr : product.nameFr;
  const description =
    language === "ar" ? product.descriptionAr : product.descriptionFr;
  const origin = language === "ar" ? product.originAr : product.originFr;
  const unit = language === "ar" ? product.unitAr : product.unitFr;
  const currency = language === "ar" ? "د.ت" : "TND";
  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      dir={dir}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={name}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-2 right-2 bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {origin}
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-bold text-lg text-gray-800 mb-2 hover:text-amber-700 transition-colors">
            {name}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between">
          <div className={language === "ar" ? "text-right" : "text-left"}>
            <span className="text-2xl font-bold text-amber-700">
              {product.price}
            </span>
            <span className="text-gray-600 mr-1">
              {currency}/{unit}
            </span>
          </div>

          <Button
            onClick={handleAddToCart}
            className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2 space-x-reverse"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>{t("addToCart")}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
