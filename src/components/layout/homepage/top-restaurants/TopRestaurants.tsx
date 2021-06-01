import { POPULAR_RESTAURANTS, SIGNATURE_DISH } from "../../../utils/constants";
import Collage from "../collage/Collage";
import { TopRestaurantsProps } from "./interface";
import { CollagesWrapper } from "./Styles";

const TopRestaurants = ({
  popularRestaurants,
  signatureDishes,
}: TopRestaurantsProps) => {
  return (
    <CollagesWrapper>
      <Collage
        isPopularRestaurant={true}
        title={POPULAR_RESTAURANTS}
        cardsData={popularRestaurants}
      />
      <Collage
        isPopularRestaurant={false}
        title={SIGNATURE_DISH}
        cardsData={signatureDishes}
      />
    </CollagesWrapper>
  );
};

export default TopRestaurants;
