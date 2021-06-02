import { iconHash } from "../../utils/assets/iconsHash";
import { Description, Icon } from "../../utils/CommonStyles";
import {
  Container,
  Wrapper,
  AboutText,
  DownloadContainer,
  DownloadBox,
} from "./Styles";

const About = () => {
  return (
    <Wrapper>
      <Container>
        <Description> ABOUT US :</Description>
        <AboutText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, saepe.
          Doloribus quo, hic libero ab laudantium voluptas nisi laborum incidunt
          voluptatibus! Magnam necessitatibus ut eos eaque voluptatem, sint eum
          rem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
          saepe. Doloribus quo, hic libero ab laudantium voluptas nisi laborum
          incidunt voluptatibus! Magnam necessitatibus ut eos eaque voluptatem,
          sint eum rem.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, saepe.
          Doloribus quo, hic libero ab laudantium voluptas nisi laborum incidunt
          voluptatibus! Magnam necessitatibus ut eos eaque voluptatem, sint eum
          rem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
          saepe.
        </AboutText>
        <Icon className="logo" src={iconHash["aboutLogo"]} alt="" />
        <DownloadContainer>
          <DownloadBox className="apple-box">
            <Icon
              className="logo-apple"
              src={iconHash["appleStoreIcon"]}
              alt=""
            />
            <span> Download on the App Store</span>
          </DownloadBox>
          <DownloadBox className="google-box">
            <Icon
              className="logo-google"
              src={iconHash["googlePlayIcon"]}
              alt=""
            />
            Get it on Google Play
          </DownloadBox>
        </DownloadContainer>
      </Container>
    </Wrapper>
  );
};

export default About;
