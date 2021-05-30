import styled from "styled-components";
import { DescriptionStyle } from "./interface";

export const colors = {
  black: "black",
  sand: "rgba(232,196,122,0.8)",
  white_two: "#fafafa",
};

export const Description = styled.span<DescriptionStyle>`
  font-size: 30px;
  line-height: 1.33;
  letter-spacing: 1.25px;
  color: ${colors.black};
  margin: ${({ margin }) => margin};
  text-align: ${({ textAlign }) => textAlign};

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;
