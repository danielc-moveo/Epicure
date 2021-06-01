import MobileLinks from "../../layout/homepage/mobile-links/MobileLinks";
import SearchSection from "../../layout/homepage/search-section/SearchSection";
import IconsMeaning from "../../layout/homepage/icon-meaning/IconMeaning";
import { Wrapper } from "./Styles";
import ChefOfTheWeek from "../../layout/homepage/chef-of-the-week/ChefOfTheWeek";
import About from "../../layout/homepage/about/About";
import {
  popularRestaurants,
  signatureDishes,
  chefOfTheWeekRestaurants,
} from "../../../utils/mock/mock-data";
import TopRestaurants from "../../layout/homepage/top-restaurants/TopRestaurants";

const HomePageManager = () => {
  return (
    <Wrapper>
      <SearchSection />
      <MobileLinks />
      <TopRestaurants
        popularRestaurants={popularRestaurants}
        signatureDishes={signatureDishes}
      />
      <IconsMeaning />
      <ChefOfTheWeek cardsData={chefOfTheWeekRestaurants} />
      <About />
    </Wrapper>
  );
};

export default HomePageManager;
