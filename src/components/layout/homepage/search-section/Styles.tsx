import styled from "styled-components";
import { colors } from "../../../utils/CommonStyles";
import backGroundMock from "./assets/hero-picture@2x.png";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  background-image: url(${backGroundMock});
  background-size: cover;
  min-height:696px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white_two};
  opacity: 0.9;
  border: 1px solid black;
  height:222px;
`;

export const descriptionStyles = {
  margin: "0 0 29px 0",
};
