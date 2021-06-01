import styled from "styled-components";
import { CardContent, Wrapper as CardWrapper } from "../../utils/card/Styles";
import { colors, Description } from "../../utils/CommonStyles";
import YossiImage from "../../../../utils/mock/assets/yossi.png";
import { CardsContainer, Wrapper as CollageWrapper } from "../collage/Styles";
import { Wrapper as SliderWrapper } from "../collage/slider/Styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px auto 117px auto;
  background-color: white;

  @media screen and (max-width: 1065px) {
    margin: 71px 20px 97.6px 20px;
  }

  ${Description} {
    margin-bottom: 42px;
    align-self: center;
  }

  ${CardContent} {
    background-color: ${colors.primary_yellow_light};
    width: 231px;
    height: 357px;
    & .main-image {
      width: 231px;
      height: 224px;
    }
  }

  ${CollageWrapper} {
    align-items: start;

    ${Description} {
      margin: 59px auto 23px 0;
    }

    ${CardWrapper} {
      margin: 0 20px 0 0;

      & .text-bold {
        margin: 19.2px 0 0 0;
        font-size: 1.875rem;
        letter-spacing: 0.125rem;
      }
    }
  }

  @media screen and (max-width: 968px) {
    ${Description} {
      margin: 0 0 16px 0;
      font-size: 0.875rem;
      letter-spacing: 0.058125rem;
    }

    ${CollageWrapper} {
      margin: 0;
      ${Description} {
        font-size: 1.875rem;
        letter-spacing: 0.080625rem;
      }
    }
  }

  @media screen and (min-width: 0px) {
    ${CardsContainer} {
      display: flex;
    }

    ${SliderWrapper} {
      display: none;
    }

    ${CollageWrapper} {
      align-items: start;
    }
  }

  @media screen and (max-width: 899px) {
    ${CollageWrapper} {
      ${Description} {
        margin: 20px auto 19px 0;
        font-size: 0.875rem;
        letter-spacing: 0.055rem;
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ChefOfTheWeekImage = styled.div`
  position: relative;
  height: 338px;
  width: 433px;
  background-image: url(${YossiImage});
  background-size: 100% 100%;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 2.5rem;
    letter-spacing: 0.089375rem;
    height: 78px;
    text-align: center;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }

  @media screen and (max-width: 900px) {
    margin: 0 0 20px 0;
    width: 334px;
    height: 239.4px;
  }

  @media screen and (max-width: 350px) {
    width: 280px;
    height: 220px;
  }
`;

export const ChefDescription = styled.div`
  max-width: 325px;
  font-size: 1.5625rem;
  line-height: 1.2;
  letter-spacing: 0.0675rem;
  margin: 0 0 0 69px;

  @media screen and (max-width: 900px) {
    text-align: center;
    margin: 0;
    font-size: 0.84375rem;
    letter-spacing: 0.065rem;
  }
`;
