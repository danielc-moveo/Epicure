import styled from "styled-components";
import { Card, CardProps, TextBold } from "./Styles";

export const Header = styled.span`
  font-size: 30px;
  letter-spacing: 1.77px;
  text-align: center;
  font-weight: bold;
  margin-bottom:23px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardHome = ({
  header,
  imgSrc,
  textBold,
  text,
  price,
  alerts,
}: CardProps) => {
  return (
    <Wrapper>
      {header && <Header> {header}</Header>}
      <Card isPopularRestaurant={!price}>
        <Image src={imgSrc} alt="" />
        <Container>
          <TextBold>{textBold}</TextBold>
          <span>{text}</span>
          {alerts?.map((alert, i) => (
            <span key={i}>{alert} </span>
          ))}
          {price && price}
        </Container>
      </Card>
    </Wrapper>
  );
};

export default CardHome;
