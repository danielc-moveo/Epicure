import CardHome from "../../../utils/card/CardHome";
import { Description } from "../../../utils/common/CommonStyles";
import { CollageProps } from "./interface";
import { CardsContainer, Wrapper } from "./Styles";

const Collage = ({ title, descriptionStyles, cardsData }: CollageProps) => {
  return (
    <Wrapper>
      <Description {...descriptionStyles}>{title}</Description>
      <CardsContainer>
        {cardsData &&
          cardsData.map((data, i) => <CardHome {...data} key={i} />)}
      </CardsContainer>
    </Wrapper>
  );
};

export default Collage;
