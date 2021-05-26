import CardHome from "../../../utils/card/CardHome";
import { Description } from "../../../utils/CommonStyles";
import { CollageProps } from "./interface";
import { CardsContainer, Wrapper } from "./Styles";

const Collage = ({ title, styles }: CollageProps) => {
  return (
    <Wrapper>
      <Description styles={styles}>{title}</Description>
      <CardsContainer>
        <CardHome />
        <CardHome />
        <CardHome />
      </CardsContainer>
    </Wrapper>
  );
};

export default Collage;
