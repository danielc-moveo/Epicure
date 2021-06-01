import { CardProps } from "../../../layout/utils/card/Styles";
import claroDishImage from "./assets/claro.png";
import luminaDishImage from "./assets/lumina.png";
import tigerLiliDishImage from "./assets/tiger-lili.png";
import padKiMaoImage from "./assets/padkimao.png";
import garbanzoImage from "./assets/garbanzo.png";
import smokedPizza from "./assets/smoked-pizza.png";

export const popularRestaurants: CardProps[] = [
  {
    imgSrc: claroDishImage,
    textBold: "Claro",
    text: "Ran Shmuel",
  },
  {
    imgSrc: luminaDishImage,
    textBold: "Lumina",
    text: "Meir Adoni",
  },
  {
    imgSrc: tigerLiliDishImage,
    textBold: "Tiger Lilly",
    text: "Yarin Green",
  },
];

export const signatureDishes: CardProps[] = [
  {
    imgSrc: padKiMaoImage,
    header: "Tiger Lilly",
    textBold: "Pad Ki Mao",
    text: `Shrimps, Glass Noodles, Kemiri Nuts, 
      Shallots,   Lemon Grass, Magic  Chili Brown Coconut`,
    price: 88,
    alerts: ["spicy", "vegi"],
  },
  {
    imgSrc: garbanzoImage,
    header: "Kab Mem",
    textBold: "Garbanzo Frito",
    text: `Polenta fingers, veal cheek,
    magic chili cured lemon
    cream, yellow laksa`,
    price: 98,
    alerts: ["vegi"],
  },
  {
    imgSrc: smokedPizza,
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
