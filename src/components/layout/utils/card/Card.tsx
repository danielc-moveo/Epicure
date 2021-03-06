import { iconHash } from "../assets/iconsHash";
import { BorderCenter } from "../CommonStyles";
import { CardContent, CardProps, Header, Container, Wrapper } from "./Styles";

const Card = ({ header, imgSrc, textBold, text, price, alerts }: CardProps) => {
  return (
    <Wrapper>
      {header && <Header className="header"> {header}</Header>}
      <CardContent>
        <img className="main-image" src={imgSrc} alt="" />
        <Container>
          <span className="text-bold">{textBold}</span>
          <span className="text">{text}</span>
          <div className="icons-container">
            {alerts?.map((alert, i) => (
              <img className="icon" src={iconHash[`${alert}`]} alt="" key={i} />
            ))}
          </div>
          {price && (
            <div className="price-container">
              <BorderCenter />
              <span className="price"> &#8362; {`${price}`}</span>
              <BorderCenter />
            </div>
          )}
        </Container>
      </CardContent>
    </Wrapper>
  );
};

export default Card;
