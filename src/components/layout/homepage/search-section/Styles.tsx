import styled from "styled-components";
import { colors, Description } from "../../../utils/common/CommonStyles";
import backGroundMock from "./assets/hero-picture.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backGroundMock});
  height: 696px;
  background-size: 100% 100%;

  @media screen and (max-width: 1024px) {
    height: 500px;
  }

  @media screen and (max-width: 768px) {
    height: 400px;
  }

  @media screen and (max-width: 605px) {
    height: 300px;
  }

  @media screen and (max-width: 425px) {
    height: 269px;
  }

  @media screen and (max-width: 375px) {
    height: 200px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.primary_grey};
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
    font-size: 1.375rem;
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
      font-size: 1rem;
      margin: 18px 0 13px 0;
    }

    & div {
      width: 269px;
      height: 33px;
      padding: 0 19px 0 9px;
    }

    & input {
      font-size: 0.8125rem;
      margin-left: 8px;
    }
  }

  @media screen and (max-width: 340px) {
    width: 300px;
  }
`;
