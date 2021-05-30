import styled from "styled-components";
import { POPULAR_RESTAURANTS, SIGNATURE_DISH } from "../../../utils/constants";
import { collageDescriptionStyles } from "../chef-of-the-week/Styles";
import Collage from "../collage/Collage";
import { TopRestaurantsProps } from "./interface";


  

export const CollagesWrapper = styled.div`
  margin: 140px 169px 0 169px;
  @media screen and (max-width: 425px) {
    margin: 51px 0 95px 0;
  }
`;
const TopRestaurants = ({
    popularRestaurants,signatureDishes
}:TopRestaurantsProps) => {
    return (
        <CollagesWrapper>
      <Collage
          descriptionStyles={collageDescriptionStyles}
          title={POPULAR_RESTAURANTS}
          cardsData={popularRestaurants}
        />
        <Collage
          descriptionStyles={collageDescriptionStyles}
          title={SIGNATURE_DISH}
          cardsData={signatureDishes}
        />            
        </CollagesWrapper>
    )
}

export default TopRestaurants
