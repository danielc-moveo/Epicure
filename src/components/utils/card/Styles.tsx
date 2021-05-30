import styled from "styled-components";

export interface CardProps {
  imgSrc: string;
  textBold: string;
  header?: string;
  dish?: string;
  text?: string;
  price?: number;
}
// temporary styles
export const Card = styled.div`
  height: 300px;
  border: 1px solid black;
  margin: 0 11px;
`;
