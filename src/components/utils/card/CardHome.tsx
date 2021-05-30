import styled from "styled-components";
import { Card, CardProps } from "./Styles";

export const Header = styled.span``;

const CardHome = ({ header, imgSrc, textBold, text, price }: CardProps) => {
  return (
    <Card>
      {header && <Header> header</Header>}
    </Card>
  );
};

export default CardHome;
