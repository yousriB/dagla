import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ar" | "fr";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  ar: {
    // Navigation
    home: "الرئيسية",
    products: "المنتجات",
    about: "من نحن",
    contact: "اتصل بنا",
    cart: "السلة",

    // Homepage
    heroTitle: "تمور تونس الأصيلة",
    heroSubtitle:
      "من واحات الجنوب التونسي إلى مائدتكم.. اكتشفوا أجود أنواع التمور بطعم أصيل ونكهة لا تُنسى",
    orderNow: "اطلب الآن",
    featuredProducts: "منتجاتنا المميزة",
    whyChooseUs: "لماذا نحن الأفضل؟",
    highQuality: "جودة عالية",
    highQualityDesc:
      "نختار أجود التمور من واحات توزر وقبلي بعناية فائقة لضمان أعلى جودة",
    fastDelivery: "توصيل سريع",
    fastDeliveryDesc:
      "نوصل لكم في جميع أنحاء تونس خلال 24-48 ساعة مع ضمان وصول المنتج طازجاً",
    cashOnDelivery: "دفع عند التسليم",
    cashOnDeliveryDesc:
      "لا تدفعوا شيئاً حتى تستلموا طلبكم وتتأكدوا من جودته ومطابقته لتوقعاتكم",
    tryAuthenticDates: "جرب طعم التمر التونسي الأصيل",
    orderNowDesc: "اطلب الآن واستمتع بأجود أنواع التمور التونسية في منزلك",

    // Products Page
    ourDates: "منتجاتنا من التمور",
    discoverDates:
      "اكتشفوا تشكيلة واسعة من أجود أنواع التمور التونسية من مختلف المناطق",
    searchDates: "ابحث عن التمور...",
    noResults: "لم نجد نتائج",
    tryDifferentSearch: "جرب البحث بكلمات أخرى أو تصفح جميع منتجاتنا",
    viewAllProducts: "عرض جميع المنتجات",
    guaranteedQuality: "جودة مضمونة",
    guaranteedQualityDesc: "جميع منتجاتنا مختارة بعناية من أفضل المزارع",
    safePackaging: "تغليف آمن",
    safePackagingDesc: "نضمن وصول التمور طازجة ونظيفة",
    freeDelivery: "توصيل في 24-48 ساعة",
    freeDeliveryDesc: "توصيل في 24-48 ساعة لجميع أنحاء تونس",

    // Product Detail
    productNotFound: "المنتج غير موجود",
    backToProducts: "العودة إلى المنتجات",
    quantity: "الكمية",
    total: "المجموع",
    orderNow: "اطلب الآن مباشرة",
    shippingInfo: "توصيل في 24-48 ساعة",
    paymentInfo: "دفع عند التسليم",
    qualityInfo: "جودة مضمونة",
    supportInfo: "دعم فني",
    similarProducts: "منتجات مشابهة",
    region: "المنطقة",
    fromRegion: "من {region}",
    perUnit: "لكل {unit}",
    pricePerKg: "د.ت",
    addToCart: "أضف إلى السلة",

    // Contact
    contactUs: "تواصل معنا",
    contactInfo: "معلومات الاتصال",
    phone: "الهاتف",
    whatsapp: "واتساب",
    email: "البريد الإلكتروني",
    address: "العنوان",
    workingHours: "ساعات العمل",
    sendMessage: "أرسل لنا رسالة",
    fullName: "الاسم الكامل",
    subject: "الموضوع",
    message: "الرسالة",
    sendMessageBtn: "إرسال الرسالة",

    // Footer
    companyName: "تمور تونس الأصيلة",
    companyDescription:
      "نحن نقدم أجود أنواع التمور التونسية من واحات الجنوب، بجودة عالية وطعم أصيل يحمل عبق التراث التونسي العريق.",
    paymentDelivery:
      "الدفع عند التسليم - التوصيل في كامل تراب الجمهورية التونسية",
    quickLinks: "روابط سريعة",
    allRightsReserved: "جميع الحقوق محفوظة © 2025 تمور تونس الأصيلة",
    tunisiaAddress: "تونس، تونس",

    // About Page
    ourStory: "قصتنا",
    heritageSubtitle: "تراث أصيل من واحات الجنوب التونسي",
    storyTitle: "قصة تمور تونس الأصيلة",
    storyParagraph1:
      "نحن عائلة تونسية تعمل في زراعة وإنتاج التمور منذ أكثر من ثلاثة أجيال. بدأت قصتنا في واحات توزر الخضراء، حيث تعلمنا من أجدادنا فن زراعة النخيل وإنتاج أجود أنواع التمور.",
    storyParagraph2:
      "نؤمن بأن التمر التونسي ليس مجرد ثمرة، بل هو تراث ثقافي وحضاري يجب المحافظة عليه ونقله للأجيال القادمة. لذلك نحرص على استخدام الطرق التقليدية في الزراعة والقطف مع الاستفادة من التقنيات الحديثة في التخزين والتعبئة.",
    storyParagraph3:
      "اليوم، نفخر بتقديم منتجاتنا لكم مباشرة من المزرعة إلى منازلكم، مع ضمان الجودة والطعم الأصيل الذي تميز به التمر التونسي عبر التاريخ.",
    whyChooseUsAbout: "لماذا تختارنا؟",
    highQualityTitle: "جودة عالية",
    highQualityDescAbout:
      "نختار كل حبة تمر بعناية فائقة ونضمن أعلى معايير الجودة من القطف حتى التسليم",
    originTitle: "أصالة المنشأ",
    originDesc:
      "جميع منتجاتنا من واحات توزر وقبلي الشهيرة بإنتاج أجود أنواع التمور في العالم",
    naturalFarmingTitle: "زراعة طبيعية",
    naturalFarmingDesc:
      "نستخدم الطرق التقليدية والطبيعية في الزراعة دون مواد كيميائية ضارة",
    familyBusinessTitle: "عمل عائلي",
    familyBusinessDesc:
      "نحن عائلة واحدة نعمل بحب وشغف لتقديم أفضل ما لدينا لعملائنا الكرام",
    ourValues: "قيمنا وأهدافنا",
    qualityValue: "الجودة",
    qualityValueDesc: "نضع الجودة في المقام الأول ولا نساوم عليها أبداً",
    trustValue: "الثقة",
    trustValueDesc:
      "نبني علاقات طويلة الأمد مع عملائنا قائمة على الثقة المتبادلة",
    heritageValue: "التراث",
    heritageValueDesc: "نحافظ على التراث التونسي ونطوره ليواكب العصر",
    contactUsAbout: "تواصل معنا",
    contactDesc: "نحن دائماً في خدمتكم ومستعدون للإجابة على استفساراتكم",
    callUs: "اتصل بنا",
  },
  fr: {
    // Navigation
    home: "Accueil",
    products: "Produits",
    about: "À propos",
    contact: "Contact",
    cart: "Panier",

    // Homepage
    heroTitle: "Dattes Authentiques de Tunisie",
    heroSubtitle:
      "Des oasis du Sud tunisien à votre table... Découvrez les meilleures variétés de dattes avec un goût authentique et une saveur inoubliable",
    orderNow: "Commander maintenant",
    featuredProducts: "Nos produits phares",
    whyChooseUs: "Pourquoi nous choisir ?",
    highQuality: "Haute qualité",
    highQualityDesc:
      "Nous sélectionnons avec soin les meilleures dattes des oasis de Tozeur et Kebili pour garantir la plus haute qualité",
    fastDelivery: "Livraison rapide",
    fastDeliveryDesc:
      "Nous livrons dans toute la Tunisie en 24-48 heures avec la garantie d'un produit frais",
    cashOnDelivery: "Paiement à la livraison",
    cashOnDeliveryDesc:
      "Ne payez rien jusqu'à ce que vous receviez votre commande et que vous soyez satisfait de sa qualité",
    tryAuthenticDates: "Goûtez aux dattes authentiques de Tunisie",
    orderNowDesc:
      "Commandez maintenant et profitez des meilleures dattes tunisiennes chez vous",

    // Products Page
    ourDates: "Nos Dattes",
    discoverDates:
      "Découvrez une large sélection des meilleures dattes tunisiennes de différentes régions",
    searchDates: "Rechercher des dattes...",
    noResults: "Aucun résultat trouvé",
    tryDifferentSearch:
      "Essayez d'autres termes de recherche ou parcourez tous nos produits",
    viewAllProducts: "Voir tous les produits",
    guaranteedQuality: "Qualité garantie",
    guaranteedQualityDesc:
      "Tous nos produits sont soigneusement sélectionnés des meilleures fermes",
    safePackaging: "Emballage sécurisé",
    safePackagingDesc:
      "Nous garantissons que les dattes arrivent fraîches et propres",
    freeDelivery: "Livraison gratuite",
    freeDeliveryDesc: "Livraison gratuite dans toute la Tunisie",

    // Product Detail
    productNotFound: "Produit non trouvé",
    backToProducts: "Retour aux produits",
    quantity: "Quantité",
    total: "Total",
    orderNow: "Commander maintenant",
    shippingInfo: "Livraison rapide",
    paymentInfo: "Paiement à la livraison",
    qualityInfo: "Qualité garantie",
    supportInfo: "Support technique",
    similarProducts: "Produits similaires",
    region: "Région",
    fromRegion: "De {region}",
    perUnit: "par {unit}",
    pricePerKg: "TND",
    addToCart: "Ajouter au panier",

    // Contact
    contactUs: "Contactez-nous",
    contactInfo: "Informations de contact",
    phone: "Téléphone",
    whatsapp: "WhatsApp",
    email: "Email",
    address: "Adresse",
    workingHours: "Heures de travail",
    sendMessage: "Envoyez-nous un message",
    fullName: "Nom complet",
    subject: "Sujet",
    message: "Message",
    sendMessageBtn: "Envoyer le message",

    // Footer
    companyName: "Dattes Authentiques de Tunisie",
    companyDescription:
      "Nous offrons les meilleures dattes tunisiennes des oasis du Sud, avec une qualité supérieure et un goût authentique qui porte l'essence du riche patrimoine tunisien.",
    paymentDelivery:
      "Paiement à la livraison - Livraison dans toute la Tunisie",
    quickLinks: "Liens Rapides",
    allRightsReserved:
      "Tous droits réservés © 2025 Dattes Authentiques de Tunisie",
    tunisiaAddress: "Tunis, Tunisie",

    // About Page
    ourStory: "Notre Histoire",
    heritageSubtitle: "Un héritage authentique des oasis du Sud tunisien",
    storyTitle: "L'Histoire des Dattes Authentiques de Tunisie",
    storyParagraph1:
      "Nous sommes une famille tunisienne qui cultive et produit des dattes depuis plus de trois générations. Notre histoire a commencé dans les oasis vertes de Tozeur, où nous avons appris de nos ancêtres l'art de cultiver les palmiers et de produire les meilleures dattes.",
    storyParagraph2:
      "Nous croyons que la datte tunisienne n'est pas seulement un fruit, mais un patrimoine culturel et civilisationnel qui doit être préservé et transmis aux générations futures. C'est pourquoi nous utilisons des méthodes traditionnelles de culture et de récolte tout en profitant des techniques modernes de stockage et d'emballage.",
    storyParagraph3:
      "Aujourd'hui, nous sommes fiers de vous offrir nos produits directement de la ferme à votre domicile, avec la garantie de qualité et du goût authentique qui a caractérisé les dattes tunisiennes à travers l'histoire.",
    whyChooseUsAbout: "Pourquoi nous choisir ?",
    highQualityTitle: "Haute qualité",
    highQualityDescAbout:
      "Nous sélectionnons chaque datte avec soin et garantissons les plus hauts standards de qualité de la récolte à la livraison",
    originTitle: "Origine authentique",
    originDesc:
      "Tous nos produits proviennent des célèbres oasis de Tozeur et Kebili, connues pour produire les meilleures dattes au monde",
    naturalFarmingTitle: "Culture naturelle",
    naturalFarmingDesc:
      "Nous utilisons des méthodes traditionnelles et naturelles de culture sans produits chimiques nocifs",
    familyBusinessTitle: "Entreprise familiale",
    familyBusinessDesc:
      "Nous sommes une seule famille qui travaille avec amour et passion pour offrir le meilleur à nos clients",
    ourValues: "Nos Valeurs et Objectifs",
    qualityValue: "Qualité",
    qualityValueDesc:
      "Nous mettons la qualité en premier et ne la compromettons jamais",
    trustValue: "Confiance",
    trustValueDesc:
      "Nous construisons des relations à long terme avec nos clients basées sur la confiance mutuelle",
    heritageValue: "Héritage",
    heritageValueDesc:
      "Nous préservons le patrimoine tunisien et le développons pour suivre l'époque",
    contactUsAbout: "Contactez-nous",
    contactDesc:
      "Nous sommes toujours à votre service et prêts à répondre à vos questions",
    callUs: "Appelez-nous",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("ar");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "ar" || savedLanguage === "fr")) {
      setLanguage(savedLanguage);
      updateDocumentDirection(savedLanguage);
    }
  }, []);

  const updateDocumentDirection = (lang: Language) => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    const newLanguage = language === "ar" ? "fr" : "ar";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    updateDocumentDirection(newLanguage);
  };

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["ar"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
