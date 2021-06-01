import styled from "styled-components";
import { DescriptionStyle } from "./interface";

export const colors = {
  primary_black: "black",
  primary_yellow: "rgba(232,196,122,0.8)",
  primary_grey: "#fafafa",
};

export const Description = styled.span<DescriptionStyle>`
  font-size: 1.875rem;
  line-height: 1.33;
  letter-spacing: 0.078125rem;
  color: ${colors.primary_black};
  margin: ${({ margin }) => margin};
  text-align: ${({ textAlign }) => textAlign};

  @media screen and (max-width: 425px) {
    font-size: 0.875rem;
  }
`;
