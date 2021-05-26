import styled from "styled-components";
import { Link as Link_ } from "react-router-dom";
import { colors } from "../../../utils/CommonStyles";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 125px;

  @media screen and (min-width: 450px) {
    display: none;
  }
`;

const LinksContainer = styled.div`
  display: flex;
`;

const Link = styled(Link_)`
  margin: 0 5px;
  text-decoration: none;
  color: ${colors.black};
  padding: 10px;
  background-color: ${colors.sand};
`;

const LinkText = styled.span`
font-family: HelveticaNeue;
font-size: 13px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: 0.93px;
`;

const MobileLinks = () => {
  return (
    <Wrapper>
      <LinksContainer>
        <Link to="/">
          <LinkText>CHEFS</LinkText>
        </Link>
        <Link to="/">
          <LinkText>RESTAURANTS</LinkText>
        </Link>
      </LinksContainer>
    </Wrapper>
  );
};

export default MobileLinks;
