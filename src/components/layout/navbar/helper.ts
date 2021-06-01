import notesIcon from "./assets/Notes.svg";
import userIcon from "./assets/User.svg";

export const leftGroupLinks = [
  {
    title: "EPICURE",
    styles: {
      margin: "0 31px 0 15px",
      fontSize: "1.6875rem",
      letterSpacing: "0.084375rem",
    },
    path: "/",
  },
  {
    title: "Restaurants",
    styles: {
      margin: "0 28px 0 0",
      fontSize: "1.125rem",
      letterSpacing: "0.12rem",
    },
    path: "/",
  },
  {
    title: "Chefs",
    styles: {
      margin: "0",
      fontSize: "1.125rem",
      letterSpacing: "0.12rem",
    },
    path: "/",
  },
];

export const rightGroupIcons = [
  {
    src: notesIcon,
    path: "/",
    styles: {
      width: "23px",
      height: "23px",
      margin: "0 26px",
    },
  },
  {
    src: userIcon,
    path: "/",
    styles: {
      width: "22px",
      height: "22px",
      margin: "0 0 0 0",
    },
  },
];
