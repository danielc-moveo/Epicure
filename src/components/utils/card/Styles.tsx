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

export const CardContent = styled.div`
  background-color: ${colors.beige};
  position: relative;

  @media screen and (max-width: 768px) {
    background-color: ${colors.primary_yellow_dark};
  }ß
`;

export const Header = styled.span`
  letter-spacing: 0.110625rem;
  text-align: center;
  font-weight: bold;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled(FlexBox)`
  margin: 0 11px;
`;

export const Container = styled(FlexBox)``;
