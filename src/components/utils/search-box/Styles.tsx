import styled from "styled-components";
import { colors } from "../common/CommonStyles";

export const InputContainer = styled.div`
  display: flex;
  border-radius: 4px;
  border: 0.2px solid ${colors.primary_black};
  padding: 0 13px 0 16px;
`;

export const Input = styled.input`
  background-color: ${colors.primary_grey_light};
  border: none;
  &:focus {
    outline: none;
  }
`;

export const SearchIconOnCollapse = styled.img`
  width: 22px;
  height: 22px;

  @media screen and (max-width: 768px) {
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 1190px) {
    display: none;
  }
`;

export const SearchIcon = styled.img`
  margin: auto 0;
  width: 22px;
  height: 22px;

  @media screen and (max-width: 425px) {
    width: 16px;
    height: 16px;
  }
`;
