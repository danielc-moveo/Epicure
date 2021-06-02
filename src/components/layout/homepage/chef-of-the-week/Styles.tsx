import styled from "styled-components";
import { CardContent, Wrapper as CardWrapper } from "../../utils/card/Styles";
import { colors, Description } from "../../utils/CommonStyles";
import YossiImage from "../../../../utils/mock/assets/yossi.png";
import { Wrapper as CollageWrapper } from "../collage/Styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-bottom: 117px;

  .carousel .slider-wrapper.axis-horizontal .slider {
    margin: 0 !important;
    width: 322px !important;
  }

  .carousel .slider-wrapper {
    width: 500px !important;
  }

  ${Description} {
    margin: 100px 0 42px;
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
    margin-bottom: 0;

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

  @media screen and (max-width: 900px) {
    ${Description} {
      margin: 71px 0 16px 0;
      font-size: 0.875rem;
      letter-spacing: 0.058125rem;
    }

    ${CollageWrapper} {
      ${Description} {
        font-size: 1.875rem;
        letter-spacing: 0.080625rem;
      }
    }
  }

  @media screen and (max-width: 900px) {
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
    align-items: center;
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

  @media screen and (max-width: 450px) {
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
    margin: 21.1px 0 0 0;
    font-size: 0.84375rem;
    letter-spacing: 0.065rem;
  }
`;
