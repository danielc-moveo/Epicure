import { Wrapper, LinksContainer, Link } from "./Styles";

const MobileLinks = () => {
  return (
    <Wrapper>
      <LinksContainer>
        <Link to="/">CHEFS</Link>
        <Link to="/">RESTAURANTS</Link>
      </LinksContainer>
    </Wrapper>
  );
};

export default MobileLinks;
