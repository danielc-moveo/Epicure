import { Input, SearchIconOnMobile, InputContainer,SearchIcon } from "./Styles";
import { SearchBoxProps } from "./interface";
import Icon from "./assets/Search.svg";

const SearchBox = ({ styles, isNavBar }: SearchBoxProps) => {
  return (
    <>
      <InputContainer isNavBar styles={styles}>
        <Input
          styles={styles}
          isNavBar={isNavBar}
          placeholder="Search for restaurant cuisine, chef"
        />
        <SearchIcon src={Icon} alt="" />
      </InputContainer>

      <SearchIconOnMobile  src={Icon} alt="" />
    </>
  );
};

export default SearchBox;
