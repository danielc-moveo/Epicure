import {
  Input,
  SearchIconOnCollapse,
  InputContainer,
  SearchIcon,
} from "./Styles";
import Icon from "./assets/Search.svg";
import { SEARCH_PLACEHOLDER } from "../../../../utils/constants";

const SearchBox = ({ isNavbar }: { isNavbar: boolean }) => {
  return (
    <>
      <InputContainer>
        <Input placeholder={SEARCH_PLACEHOLDER} />
        <SearchIcon src={Icon} alt="" />
      </InputContainer>
      {isNavbar && <SearchIconOnCollapse src={Icon} alt="" />}
    </>
  );
};

export default SearchBox;
