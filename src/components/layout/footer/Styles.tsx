import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../utils/CommonStyles";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 94px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: 126px;
  }
`;

interface FooterLinkProps {
  index: number;
}

export const FooterLink = styled(Link)<FooterLinkProps>`
  margin: 0 45px;
  text-decoration: none;
  color: ${colors.primary_black};
  font-size: 1.125rem;
  letter-spacing: 0.070625rem;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    margin: ${({ index }) => (index === 1 ? "0" : "18px 0 0 0")};
    font-size: 0.75rem;
    letter-spacing: 0.0475rem;
  }
`;
