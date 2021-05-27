import styled from "styled-components";
import { InputProps } from "./interface";

export const InputContainer = styled.div<InputProps>`
  display: flex;
  border-radius: 4px;
  border: 1px solid black;
  width: ${({ styles }) => styles.width};
  height: ${({ styles }) => styles.height};
  padding: 7px 13px 5px 16px;
  @media screen and (max-width: 1190px) {
    display: ${({ isNavBar }) => (isNavBar ? "none" : "block")};
  }
`;
export const Input = styled.input<InputProps>`
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const SearchIconSmallerScreen = styled.img`
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
  width: 22px;
  height: 22px;
`;
