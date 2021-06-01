import styled from "styled-components";
import { colors, Description } from "../../../utils/common/CommonStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.primary_grey_light};
  padding:20px 0;
  background-color: ${colors.primary_grey_light};

  ${Description} {
    margin: 41px 0 29px 0;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-around;
`;
