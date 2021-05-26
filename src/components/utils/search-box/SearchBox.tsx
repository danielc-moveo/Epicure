import styled from "styled-components";

const Input = styled.input`
  border-radius: 4px;
  height: 48px;
  text-align: center;
  padding: 0 20px;
  width:50%;
  @media screen and (max-width: 450px) {
    width: 80%;
  }
`;
const SearchBox = () => {
  return <Input placeholder="Search for restaurant cuisine, chef" />;
};

export default SearchBox;
