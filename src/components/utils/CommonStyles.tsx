import styled from "styled-components";
export const colors = {
  black: "black",
  sand: "rgba(232,196,122,0.8)",
  white_two: "#fafafa",
};

export interface DescriptionStyle {
  styles: {
    margin: string;
    textAlign?: string;
  };
}
export const Description = styled.span<DescriptionStyle>`
  // font-family: HelveticaNeue;
  font-size: 30px;
  font-weight: 100;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 1.25px;
  color: ${colors.black};
  margin: ${({ styles }) => styles.margin};
  text-align: ${({ styles }) => styles.textAlign ?? "center"};

  @media screen and (max-width: 450px) {
    font-size: 14px;
  }
`;
