import styled from "styled-components";
import { Link as Link_ } from "react-router-dom";
import { colors } from "../../../utils/common/CommonStyles";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 125px;
  background-color: ${colors.white_two};

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
`;

export const Link = styled(Link_)`
  margin: 0 5px;
  text-decoration: none;
  color: ${colors.primary_black};
  padding: 10px;
  background-color: ${colors.primary_yellow};
  font-size: 0.8125rem;
  letter-spacing: 0.058125rem;
`;
