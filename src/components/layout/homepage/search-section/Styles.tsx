import styled from "styled-components";
import { colors, Description } from "../../../utils/common/CommonStyles";
import backGroundMock from "./assets/hero-picture@2x.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backGroundMock});
  background-size: cover;
  height: calc(100vh - 53px);

  @media screen and (max-width: 768px) {
    height: 400px;
  }

  @media screen and (max-width: 425px) {
    height: 269px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.white_two};
  opacity: 0.9;
  width: 781px;
  height: 222px;

  ${Description} {
    margin: 41px 0 18px 0;
  }

  & div {
    width: 511px;
    height: 48px;
    flex-direction: row-reverse;
  }

  & input {
    font-size: 22px;
    width: 100%;
    margin-left: 20px;
  }

  @media screen and (max-width: 800px) {
    width: 650px;
  }

  @media screen and (max-width: 768px) {
    width: 335px;
    height: 125px;

    ${Description} {
      font-size: 16px;
      margin: 18px 0 13px 0;
    }

    & div {
      width: 269px;
      height: 33px;
      padding: 0 19px 0 9px;
    }

    & input {
      font-size: 13px;
      margin-left: 8px;
    }
  }

  @media screen and (max-width: 340px) {
    width: 300px;
  }
`;
