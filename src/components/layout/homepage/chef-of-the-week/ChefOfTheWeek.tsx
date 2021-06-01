import { Description } from "../../../utils/common/CommonStyles";
import Collage from "../collage/Collage";
import {
  Wrapper,
  Container,
  ChefOfTheWeekImage,
  ChefDescription,
  chefDescriptionStyles,
  collageDescriptionStyles
} from "./Styles";

const ChefOfTheWeek = () => {
  return (
    <Wrapper>
      <Description {...chefDescriptionStyles}>Chef of the week</Description>
      <Container>
        <ChefOfTheWeekImage>Yossi Shitrit</ChefOfTheWeekImage>
        <ChefDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, error
          quia. Velit, consequatur autem placeat sequi ullam porro facilis quas
          repellat, error eligendi aut necessitatibus quia temporibus blanditiis
          optio at.
        </ChefDescription>
      </Container>
      <Collage descriptionStyles={collageDescriptionStyles} title={"Yossis restaurants"}></Collage>
    </Wrapper>
  );
};

export default ChefOfTheWeek;
