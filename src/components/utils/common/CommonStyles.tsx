import styled from "styled-components";

export const colors = {
  primary_black: "black",
  primary_yellow: "rgba(232,196,122,0.8)",//sand
  primary_grey: "#fafafa", //white_two
  brownGrey: "#979797",
  palePeach: "#f7e0b2",
  beige: "#f9f4ea",
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
