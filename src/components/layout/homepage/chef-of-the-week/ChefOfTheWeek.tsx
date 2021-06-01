import { CardProps } from "../../utils/card/Styles";
import { Description } from "../../utils/CommonStyles";
import Collage from "../collage/Collage";
import {
  Wrapper,
  Container,
  ChefOfTheWeekImage,
  ChefDescription,
} from "./Styles";

const ChefOfTheWeek = ({ cardsData }: { cardsData: CardProps[] }) => {
  return (
    <Wrapper>
      <Description>CHEF OF THE WEEK :</Description>
      <Container>
        <ChefOfTheWeekImage>
          <div>Yossi Shitrit</div>
        </ChefOfTheWeekImage>
        <ChefDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, error
          quia. Velit, consequatur autem placeat sequi ullam porro facilis quas
          repellat, error eligendi aut necessitatibus quia temporibus blanditiis
          optio at.
        </ChefDescription>
      </Container>
      <Collage
        isPopularRestaurant={false}
        cardsData={cardsData}
        title={"Yossi's restaurants :"}
      ></Collage>
    </Wrapper>
  );
};

export default ChefOfTheWeek;
