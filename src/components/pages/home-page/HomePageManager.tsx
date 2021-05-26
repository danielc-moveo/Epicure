import MobileLinks from "../../layout/homepage/mobile-links/MobileLinks";
import SearchSection from "../../layout/homepage/search-section/SearchSection";
import Collage from "../../layout/homepage/collage/Collage";
import IconsMeaning from "../../layout/homepage/icon-meaning/IconMeaning";
import { CollageWrapper, Wrapper, collageDescriptionStyles } from "./Styles";
import ChefOfTheWeek from "../../layout/homepage/chef-of-the-week/ChefOfTheWeek";
import About from "../../layout/homepage/abous/About";

const HomePageManager = () => {
  return (
    <Wrapper>
      <SearchSection />
      <MobileLinks />
      <CollageWrapper>
        <Collage
          styles={collageDescriptionStyles}
          title={"THE POPULAR RESTAURANTS IN EPICURE"}
        />
        <Collage
          styles={collageDescriptionStyles}
          title={"SIGNATURE DISH OF"}
        />
      </CollageWrapper>
      <IconsMeaning />
      <ChefOfTheWeek />
      <About />
    </Wrapper>
  );
};

export default HomePageManager;
