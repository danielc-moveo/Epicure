import styled from "styled-components";

export const colors = {
  primary_black: "black",
  primary_yellow: "rgba(232,196,122,0.8)",
  primary_yellow_light: "#f9f4ea",
  primary_yellow_dark: "#f7e0b2",
  primary_grey_light: "#fafafa",
  primary_grey: "#979797",
};

export const Description = styled.span`
  font-size: 30px;
  line-height: 1.33;
  letter-spacing: 1.25px;
  color: ${colors.primary_black};
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
