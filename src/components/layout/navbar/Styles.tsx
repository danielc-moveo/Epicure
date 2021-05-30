import { Link } from "react-router-dom";
import { colors } from "../../utils/common/CommonStyles";
import { NavLinkProps, IconProps } from "./interface";
import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  height: 53px;
  @media screen and (max-width: 768px) {
    height: 46px;
  }
`;

export const LeftGroup = styled.div`
  margin-left: 123px;
  display: flex;
  align-items: center;

  & img {
    width: 33px;
    height: 33px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 20px;
    width: 50%;
  }
`;

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
  margin-right: 123px;
  margin-left: auto;

  & div {
    flex-direction: row;
    width: 415px;
    height: 34px;
    @media screen and (max-width: 1190px) {
      display: none;
    }
  }

  & input {
    font-size: 18px;
    width: 100%;
    height: auto;
    margin-left:0;
  }

  @media screen and (max-width: 768px) {
    margin-right: 20px;
    margin-left: auto;
  }
`;

export const NavLink = styled(Link)<NavLinkProps>`
  margin: ${({ styles }) => styles.margin};
  text-decoration: none;
  color: ${colors.black};
  font-size: ${({ styles }) => styles.fontSize};
  letter-spacing: ${({ styles }) => styles.letterSpacing};

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const RightGroupIcon = styled.img<IconProps>`
  width: ${({ styles }) => styles.width};
  height: ${({ styles }) => styles.height};
  margin: ${({ styles }) => styles.margin};

  @media screen and (max-width: 768px) {
    width: 18px;
    height: 18px;
  }

  @media screen and (max-width: 320px) {
    margin: 0 0 0 13px;
  }
`;

export const Logo = styled.img`
  width: 33px;
  height: 33px;

  @media screen and (max-width: 768px) {
    max-width: 31px;
    max-height: 30px;
    margin-left: auto;
  }
`;

export const HamburgerIcon = styled.img`
  max-width: 18px;
  max-height: 14px;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
