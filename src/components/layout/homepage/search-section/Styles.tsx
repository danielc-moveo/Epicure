import styled from "styled-components";
import { colors } from "../../../utils/CommonStyles";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 70px 0px;
  background-color: ${colors.white_two};
  opacity: 0.9;
  border: 1px solid black;
  padding: 40px 0;
  width: 80%;
`;

export const descriptionStyles = {
  margin: "0 0 29px 0",
};
