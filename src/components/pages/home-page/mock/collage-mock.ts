import { CardProps } from "../../../utils/card/Styles";
import ClaroImage from "./assets/claro.png";

export const popularRestaurants: CardProps[] = [
  {
    imgSrc: ClaroImage,
    textBold: "Claro",
    text: "Ran Shmuel",
  },
  {
    imgSrc: ClaroImage,
    textBold: "Lumina",
    text: "Meir Adoni",
  },
  {
    imgSrc: ClaroImage,
    textBold: "Tiger Lilly",
    text: "Yarin Green",
  },
];

export const signatureDishes: CardProps[] = [
  {
    imgSrc: ClaroImage,
    header: "Tiger Lilly",
    textBold: "Pad Ki Mao",
    text: `Shrimps, Glass Noodles, Kemiri Nuts, 
      Shallots,   Lemon Grass, Magic  Chili Brown Coconut`,
    price: 88,
    alerts: ["spicy", "vegi"],
  },
  {
    imgSrc: ClaroImage,
    header: "Kab Mem",
    textBold: "Garbanzo Frito",
    text: `Polenta fingers, veal cheek,
    magic chili cured lemon
    cream, yellow laksa`,
    price: 98,
    alerts: ["vegi"],
  },
  {
    imgSrc: ClaroImage,
    header: "Popina",
    textBold: "Smoked Pizza",
    text: `Basil dough, cashew "butter", 
    demi-glace, bison & radish`,
    price: 65,
  },
];

export const chefOfTheWeekRestaurants: CardProps[] = [
  {
    imgSrc: "",
    textBold: "",
  },
];
