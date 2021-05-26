import { Description } from "../../../utils/CommonStyles";
import {
  Container,
  Wrapper,
  AboutText,
  Logo,
  descriptionStyles,
} from "./styles";

const About = () => {
  return (
    <Wrapper>
      <Container>
        <Description styles={descriptionStyles}>About us</Description>
        <AboutText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, saepe.
          Doloribus quo, hic libero ab laudantium voluptas nisi laborum incidunt
          voluptatibus! Magnam necessitatibus ut eos eaque voluptatem, sint eum
          rem.
        </AboutText>
        <div>Icon</div>
      </Container>
      <Logo>LOGO</Logo>
    </Wrapper>
  );
};

export default About;
