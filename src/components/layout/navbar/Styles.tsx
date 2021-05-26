import { Link } from "react-router-dom";
import { colors } from "../../utils/CommonStyles";
import { NavLinkProps, IconProps } from "./interface";
import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  height: 53px;
  border: 1px solid black;

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
  }
`;

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
  margin-right: 123px;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    margin-right: 20px;
  }
`;

export const NavLink = styled(Link)<NavLinkProps>`
  margin: ${({ styles }) => styles.margin};
  text-decoration: none;
  color: ${colors.black};
  //   font-family: HelveticaNeue;
  font-size: ${({ styles }) => styles.fontSize};
  font-weight: 100;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
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
`;

export const Logo = styled.img`
  width: 33px;
  height: 33px;

  @media screen and (max-width: 768px) {
    max-width: 31px;
    max-height: 30px;
    position: absolute;
    left: 50%;
  }
`;

export const HamburgerIcon = styled.img`
  width: 18px;
  height: 14px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
