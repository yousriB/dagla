export interface Product {
  id: number;
  name: string;
  nameAr: string;
  nameFr: string;
  price: number;
  image: string;
  description: string;
  descriptionAr: string;
  descriptionFr: string;
  origin: string;
  originAr: string;
  originFr: string;
  unit: string;
  unitAr: string;
  unitFr: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Deglet Nour Premium",
    nameAr: "دقلة النور الفاخرة",
    nameFr: "Deglet Nour Premium",
    price: 35,
    image: "/placeholder.svg",
    description: "Premium quality Deglet Nour dates from Tozeur",
    descriptionAr: "تمر دقلة النور عالي الجودة من توزر",
    descriptionFr: "Dattes Deglet Nour de qualité premium de Tozeur",
    origin: "Tozeur",
    originAr: "توزر",
    originFr: "Tozeur",
    unit: "kg",
    unitAr: "كغ",
    unitFr: "kg"
  },
  {
    id: 2,
    name: "Allig Dates",
    nameAr: "تمر العليق",
    nameFr: "Dattes Allig",
    price: 28,
    image: "/placeholder.svg",
    description: "Traditional Allig dates, naturally sweet",
    descriptionAr: "تمر العليق التقليدي، حلو طبيعيا",
    descriptionFr: "Dattes Allig traditionnelles, naturellement sucrées",
    origin: "Kebili",
    originAr: "قبلي",
    originFr: "Kebili",
    unit: "kg",
    unitAr: "كغ",
    unitFr: "kg"
  },
  {
    id: 3,
    name: "Khouat Allig",
    nameAr: "خوات العليق",
    nameFr: "Khouat Allig",
    price: 32,
    image: "/placeholder.svg",
    description: "Sister variety of Allig, premium quality",
    descriptionAr: "صنف شقيق للعليق، جودة ممتازة",
    descriptionFr: "Variété sœur de l'Allig, qualité premium",
    origin: "Tozeur",
    originAr: "توزر",
    originFr: "Tozeur",
    unit: "kg",
    unitAr: "كغ",
    unitFr: "kg"
  },
  {
    id: 4,
    name: "Soft Deglet Nour",
    nameAr: "دقلة النور الطرية",
    nameFr: "Deglet Nour Tendre",
    price: 38,
    image: "/placeholder.svg",
    description: "Extra soft Deglet Nour dates, perfect for gifts",
    descriptionAr: "تمر دقلة النور فائق النعومة، مثالي للهدايا",
    descriptionFr: "Dattes Deglet Nour extra tendres, parfaites pour les cadeaux",
    origin: "Tozeur",
    originAr: "توزر",
    originFr: "Tozeur",
    unit: "kg",
    unitAr: "كغ",
    unitFr: "kg"
  },
  {
    id: 5,
    name: "Mixed Premium Box",
    nameAr: "علبة مختلطة فاخرة",
    nameFr: "Coffret Premium Mixte",
    price: 45,
    image: "/placeholder.svg",
    description: "Premium box with variety of date types",
    descriptionAr: "علبة فاخرة تحتوي على أصناف مختلفة من التمر",
    descriptionFr: "Coffret premium contenant une variété de types de dattes",
    origin: "Mixed",
    originAr: "مختلط",
    originFr: "Mixte",
    unit: "box",
    unitAr: "علبة",
    unitFr: "coffret"
  },
  {
    id: 6,
    name: "Organic Deglet Nour",
    nameAr: "دقلة النور العضوية",
    nameFr: "Deglet Nour Bio",
    price: 42,
    image: "/placeholder.svg",
    description: "100% organic Deglet Nour dates",
    descriptionAr: "تمر دقلة النور عضوي 100%",
    descriptionFr: "Dattes Deglet Nour 100% bio",
    origin: "Tozeur",
    originAr: "توزر",
    originFr: "Tozeur",
    unit: "kg",
    unitAr: "كغ",
    unitFr: "kg"
  }
];
