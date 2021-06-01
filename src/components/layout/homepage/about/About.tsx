import { Description } from "../../../utils/common/CommonStyles";
import {
  Container,
  Wrapper,
  AboutText,
  Logo,
} from "./Styles";

const About = () => {
  return (
    <Wrapper>
      <Container>
        <Description> About us</Description>
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
