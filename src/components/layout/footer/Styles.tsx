import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../utils/CommonStyles";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 94px;
`;

export const FooterLink = styled(Link)`
  margin: 0 45px;
  text-decoration: none;
  color: ${colors.black};
  font-size: 18px;
  letter-spacing: 1.13px;
`;
