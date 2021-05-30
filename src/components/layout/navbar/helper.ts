import NotesIcon from "./assets/Notes.svg";
import UserIcon from "./assets/User.svg";

export const leftGroupLinks = [
  {
    title: "EPICURE",
    styles: {
      margin: "0 31px 0 15px",
      fontSize: "27px",
      letterSpacing: "1.35px",
    },
    path: "/",
  },
  {
    title: "Restaurants",
    styles: {
      margin: "0 28px 0 0",
      fontSize: "18px",
      letterSpacing: "1.92px",
    },
    path: "/",
  },
  {
    title: "Chefs",
    styles: {
      margin: "0",
      fontSize: "18px",
      letterSpacing: "1.92px",
    },
    path: "/",
  },
];

export const rightGroupIcons = [
  {
    src: UserIcon,
    path: "/",
    styles: {
      width: "23px",
      height: "23px",
      margin: "0 26px",
    },
  },
  {
    src: NotesIcon,
    path: "/",
    styles: {
      width: "22px",
      height: "22px",
      margin: "0 0 0 0",
    },
  },
];
