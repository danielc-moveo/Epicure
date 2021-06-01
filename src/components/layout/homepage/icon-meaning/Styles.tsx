import styled from "styled-components";
import { colors } from "../../../utils/common/CommonStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.primary_grey};
  opacity:0.9;
  padding:20px 0;
`;

export const IconsContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-around;
`;

export const descriptionStyles={
    margin:"41px 0 29px 0",
    textAlign:"center",
}