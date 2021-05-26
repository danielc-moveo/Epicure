import { Description } from "../../../utils/CommonStyles";
import SearchBox from "../../../utils/search-box/SearchBox";
import { SearchBoxStyles } from "./helper";
import { Container, Box, descriptionStyles } from "./Styles";

const SearchSection = () => {
  return (
    <Container>
      <Box>
        <Description styles={descriptionStyles}>
          Epicure works with the top
          <br /> chef restaurants in Tel Aviv
        </Description>
        <SearchBox styles={SearchBoxStyles} isNavBar={false} />
      </Box>
    </Container>
  );
};

export default SearchSection;
