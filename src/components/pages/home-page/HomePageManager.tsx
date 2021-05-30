import MobileLinks from "../../layout/homepage/mobile-links/MobileLinks";
import SearchSection from "../../layout/homepage/search-section/SearchSection";
import Collage from "../../layout/homepage/collage/Collage";
import IconsMeaning from "../../layout/homepage/icon-meaning/IconMeaning";
import { CollagesWrapper, Wrapper, descriptionStyles } from "./Styles";
import ChefOfTheWeek from "../../layout/homepage/chef-of-the-week/ChefOfTheWeek";
import About from "../../layout/homepage/about/About";
import { POPULAR_RESTAURANTS, SIGNATURE_DISH } from "../../utils/constants";

const HomePageManager = () => {
  return (
    <Wrapper>
      <SearchSection />
      <MobileLinks />
      <CollagesWrapper>
        <Collage
          descriptionStyles={descriptionStyles}
          title={POPULAR_RESTAURANTS}
        />
        <Collage descriptionStyles={descriptionStyles} title={SIGNATURE_DISH} />
      </CollagesWrapper>
      <IconsMeaning />
      <ChefOfTheWeek />
      <About />
    </Wrapper>
  );
};

export default HomePageManager;
