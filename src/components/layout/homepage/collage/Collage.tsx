import Card from "../../utils/card/Card";
import { Description } from "../../utils/CommonStyles";
import { CollageProps } from "./interface";
import Slider from "./slider/Slider";
import { CardsContainer, Wrapper, Link, LinkContainer } from "./Styles";
import arrowsIcon from "./assets/all-restaurants-arrows.svg";
const Collage = ({ title, cardsData, isPopularRestaurant }: CollageProps) => {
  return (
    <Wrapper isPopularRestaurant={isPopularRestaurant}>
      <Description>{title}</Description>
      {cardsData && (
        <div>
          <CardsContainer>
            {cardsData.map((data, i) => (
              <Card {...data} key={i} />
            ))}
          </CardsContainer>
          {isPopularRestaurant && (
            <LinkContainer>
              <Link to="/">All Restaurants</Link>
              <img className="icon" src={`${arrowsIcon}`} alt="" />
            </LinkContainer>
          )}
          <Slider cardsData={cardsData} />
        </div>
      )}
    </Wrapper>
  );
};

export default Collage;
