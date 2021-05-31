import { Description } from "../../../utils/common/CommonStyles";
import SearchBox from "../../../utils/search-box/SearchBox";
import { Container, Box } from "./Styles";

const SearchSection = () => {
  return (
    <Container>
      <Box>
        <Description>
          Epicure works with the top
          <br /> chef restaurants in Tel Aviv
        </Description>
        <SearchBox isNavbar={false} />
      </Box>
    </Container>
  );
};

export default SearchSection;
