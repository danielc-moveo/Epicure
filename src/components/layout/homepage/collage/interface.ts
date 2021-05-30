import { CardProps } from "../../../utils/card/Styles";

export interface CollageProps {
  title: string;
  descriptionStyles: {
    margin: string;
    textAlign: string;
  };
  cardsData: CardProps[];
  isPopularRestaurant: boolean;
}
