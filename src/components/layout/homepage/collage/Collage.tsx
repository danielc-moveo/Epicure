import CardHome from "../../../utils/card/CardHome";
import { Description } from "../../../utils/common/CommonStyles";
import { CollageProps } from "./interface";
import { CardsContainer, Wrapper } from "./Styles";

const Collage = ({ title, descriptionStyles }: CollageProps) => {
  return (
    <Wrapper>
      <Description {...descriptionStyles}>{title}</Description>
      <CardsContainer>
        <CardHome />
        <CardHome />
        <CardHome />
      </CardsContainer>
    </Wrapper>
  );
};

export default Collage;
