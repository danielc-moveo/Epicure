import {
  Input,
  SearchIconSmallerScreen,
  InputContainer,
  SearchIcon,
} from "./Styles";
import { SearchBoxProps } from "./interface";
import Icon from "./assets/Search.svg";
import { SEARCH_PLACEHOLDER } from "../constants";

const SearchBox = ({ styles, isNavBar }: SearchBoxProps) => {
  return (
    <>
      <InputContainer isNavBar styles={styles}>
        <Input
          styles={styles}
          isNavBar={isNavBar}
          placeholder={SEARCH_PLACEHOLDER}
        />
        <SearchIcon src={Icon} alt="" />
      </InputContainer>
      <SearchIconSmallerScreen src={Icon} alt="" />
    </>
  );
};

export default SearchBox;
