import styled from "styled-components";
import { colors, Description } from "../../../utils/common/CommonStyles";

export const Wrapper = styled.div`
  display: flex;
  background-color: ${colors.white_two};
`;

export const Container = styled.div`
  ${Description} {
    margin: 0 0 20px 0;
    text-align: start;
  }
  display: flex;
  flex-direction: column;
  margin: 65px 182px 61.4px 218px;
`;

export const AboutText = styled.div`
  max-width: 567px;
  margin-bottom: 31.7px;
`;

export const Logo = styled.div`
  margin: auto 0;
`;
