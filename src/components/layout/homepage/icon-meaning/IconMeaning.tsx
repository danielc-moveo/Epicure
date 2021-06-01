import { MEANING } from "../../../../utils/constants";
import { iconHash } from "../../utils/assets/iconsHash";
import { Description, Icon } from "../../utils/CommonStyles";
import { IconsContainer, Wrapper, IconAndText } from "./Styles";

const IconsMeaning = () => {
  return (
    <Wrapper>
      <Description>{MEANING}</Description>
      <IconsContainer>
        <IconAndText className="spicy">
          <Icon src={iconHash["spicy"]} />
          <span>Spicy</span>
        </IconAndText>
        <IconAndText className="vegi">
          <Icon src={iconHash["vegi"]} />
          <span>Vegitarian</span>
        </IconAndText>
        <IconAndText className="vegan">
          <Icon src={iconHash["vegan"]} />
          <span>Vegan</span>
        </IconAndText>
      </IconsContainer>
    </Wrapper>
  );
};

export default IconsMeaning;
