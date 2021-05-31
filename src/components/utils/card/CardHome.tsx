import styled from "styled-components";
import { IconHash } from "./assets/iconsHash";
import { CardContent, CardProps } from "./Styles";

export const Header = styled.span`
  font-size: 30px;
  letter-spacing: 1.77px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 23px;
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
      <CardContent>
        <img className="main-image" src={imgSrc} alt="" />
        <Container>
          <span className="text-bold">{textBold}</span>
          <span className="text">{text}</span>
          <div className="icons-container">
            {alerts?.map((alert, i) => (
              <img className="icon" src={IconHash[`${alert}`]} alt="" key={i} />
            ))}
          </div>
          {price && (
            <div className="price-container">
              <span className="border-center left" />
              <span className="price"> &#8362; {`${price}`}</span>
              <span className="border-center right" />
            </div>
          )}
        </Container>
      </CardContent>
    </Wrapper>
  );
};

export default CardHome;
//enum
//classnames
//remove
