import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../utils/common/CommonStyles";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 94px;
`;

export const FooterLink = styled(Link)`
  margin: 0 45px;
  text-decoration: none;
  color: ${colors.primary_black};
  font-size: 1.125rem;
  letter-spacing: 0.070625rem;
`;
