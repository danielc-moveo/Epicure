import styled from "styled-components";
import { colors } from "../common/CommonStyles";

export interface CardProps {
  imgSrc: string;
  textBold: string;
  header?: string;
  dish?: string;
  text?: string;
  price?: number;
  alerts?: string[];
}
// temporary styles
export const Card = styled.div<{ isPopularRestaurant: boolean }>`
  margin: 0 11px;
  background-color: ${colors.beige};
`;

export const TextBold = styled.span`
  margin-top: 10px;
`;
