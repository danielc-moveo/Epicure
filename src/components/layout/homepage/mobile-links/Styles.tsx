import styled from "styled-components";
import { Link as Link_ } from "react-router-dom";
import { colors } from "../../../utils/common/CommonStyles";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 125px;

  @media screen and (min-width: 450px) {
    display: none;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
`;

export const Link = styled(Link_)`
  margin: 0 5px;
  text-decoration: none;
  color: ${colors.black};
  padding: 10px;
  background-color: ${colors.sand};
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 0.93px;
`;

