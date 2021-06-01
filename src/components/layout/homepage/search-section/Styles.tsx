import styled from "styled-components";
import { colors } from "../../../utils/common/CommonStyles";
import backGroundMock from "./assets/hero-picture@2x.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backGroundMock});
  background-size: cover;
  height: 696px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.primary_grey};
  opacity: 0.9;
  width: 781px;
  height: 222px;

  & div {
    width: 511px;
    height: 48px;
    flex-direction: row-reverse;
    @media screen and (max-width: 425px) {
      width: 269px;
      height: 33px;
      padding: 0 19px 0 9px;
    }
  }

  & input {
    font-size: 1.375rem;
    width: 100%;
    margin-left: 20px;
    @media screen and (max-width: 425px) {
      margin-left: 8px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 650px;
  }

  @media screen and (max-width: 425px) {
    width: 335px;
    height: 125px;

    & span {
      font-size: 1rem;
      margin: 18px 0 13px 0;
    }

    & input {
      font-size: 0.8125rem;
    }
  }

  @media screen and (max-width: 320px) {
    width: 300px;
  }
`;

export const descriptionStyles = {
  margin: "41px 0 18px 0",
  textAlign: "center",
};
