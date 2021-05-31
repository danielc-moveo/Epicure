import styled from "styled-components";

export const colors = {
  black: "black",
  sand: "rgba(232,196,122,0.8)",
  white_two: "#fafafa",
  beige: "#f9f4ea",
  brownGrey: "#979797",
  palePeach: "#f7e0b2",
};

export const Description = styled.span`
  font-size: 30px;
  line-height: 1.33;
  letter-spacing: 1.25px;
  color: ${colors.black};
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
