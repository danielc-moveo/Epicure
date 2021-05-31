import styled from "styled-components";
import { Description } from "../../../utils/common/CommonStyles";
import { IconsContainer, Wrapper } from "./Styles";

export const IconAndText = styled.div``;
const IconsMeaning = () => {
  return (
    <Wrapper>
      <Description>THE MEANING OF OUR ICONS</Description>
      <IconsContainer>
        <IconAndText>
          <div style={{ marginBottom: "16px", textAlign: "center" }}>Icon</div>
          <span>Spicy</span>
        </IconAndText>
        <IconAndText>
          <div style={{ marginBottom: "16px", textAlign: "center" }}>Icon</div>
          <span>Vegetitarian</span>
        </IconAndText>
        <IconAndText>
          <div style={{ marginBottom: "16px", textAlign: "center" }}>Icon</div>
          <span>Vegan</span>
        </IconAndText>
      </IconsContainer>
    </Wrapper>
  );
};

export default IconsMeaning;
