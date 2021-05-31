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
export const CardContent = styled.div`
  margin: 0 11px;
  background-color: ${colors.beige};
  position: relative;
`;
