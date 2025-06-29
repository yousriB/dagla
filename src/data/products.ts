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
    image: "https://kartagodattes.tn/wp-content/uploads/2021/03/dattes-copie.jpg",
    description: "Premium quality Deglet Nour dates from Kebili",
    descriptionAr: "تمر دقلة النور عالي الجودة من قبلي",
    descriptionFr: "Dattes Deglet Nour de qualité premium de Kebili",
    origin: "Kebili",
    originAr: "قبلي",
    originFr: "Kebili",
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
    image: "https://royalpalm-dates.com/wp-content/uploads/2021/06/alig-3-600x401.jpg",
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
    image: "https://www.horchani-dattes.com/162-home_leoconv/ravier-polystyrene.jpg",
    description: "Sister variety of Allig, premium quality",
    descriptionAr: "صنف شقيق للعليق، جودة ممتازة",
    descriptionFr: "Variété sœur de l'Allig, qualité premium",
    origin: "Kebili",
    originAr: "قبلي",
    originFr: "Kebili",
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
    image: "https://www.alchourouk.com/sites/default/files/article/degla_8.jpg",
    description: "Extra soft Deglet Nour dates, perfect for gifts",
    descriptionAr: "تمر دقلة النور فائق النعومة، مثالي للهدايا",
    descriptionFr: "Dattes Deglet Nour extra tendres, parfaites pour les cadeaux",
    origin: "Kebili",
    originAr: "قبلي",
    originFr: "Kebili",
    unit: "kg",
    unitAr: "كغ",
    unitFr: "kg"
  },
  {
    id: 5,
    name: "Kinta",
    nameAr: "كنتة جودة عالية",
    nameFr: "Kinta",
    price: 45,
    image: "https://saftunisie.com/wp-content/uploads/2021/06/kenta.png",
    description: "Kinta is a popular Tunisian date variety",
    descriptionAr: "تمر تونسي شائع كنتة:",
    descriptionFr: "Dattes Kinta, variétés de qualité premium",
    origin: "Kebili",
    originAr: "قبلي",
    originFr: "Kebili",
    unit: "kg",
    unitAr: "كغ",
    unitFr: "kg"
  },
  {
    id: 6,
    name: "Organic Deglet Nour",
    nameAr: "دقلة النور العضوية",
    nameFr: "Deglet Nour Bio",
    price: 42,
    image: "https://saftunisie.com/wp-content/uploads/2021/07/saft.png",
    description: "100% organic Deglet Nour dates",
    descriptionAr: "تمر دقلة النور عضوي 100%",
    descriptionFr: "Dattes Deglet Nour 100% bio",
    origin: "Kebili",
    originAr: "قبلي",
    originFr: "Kebili",
    unit: "kg",
    unitAr: "كغ",
    unitFr: "kg"
  }
];
