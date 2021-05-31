import styled from "styled-components";
import { CardContent } from "../../../utils/card/Styles";
import { colors } from "../../../utils/common/CommonStyles";

export const Wrapper = styled.div<{ isPopularRestaurant: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 87px;
  @media screen and (max-width: 425px) {
    margin: 0 20px;
  }

  ${CardContent} {
    height: ${({ isPopularRestaurant }) =>
      isPopularRestaurant ? "357px" : "654px"};
    width: 360px;

    @media screen and (max-width: 1145px) {
      width: 300px;
    }

    .text-bold {
      font-size: ${({ isPopularRestaurant }) =>
        isPopularRestaurant ? "40px" : "38.4px"};
      letter-spacing: ${({ isPopularRestaurant }) =>
        isPopularRestaurant ? "1.23px" : "2.67px"};
      margin: 10px 0 0 0;
      font-weight: bold;
    }

    .text {
      font-size: ${({ isPopularRestaurant }) =>
        isPopularRestaurant ? "25px" : "24px"};
      letter-spacing: ${({ isPopularRestaurant }) =>
        isPopularRestaurant ? "1.67px" : "1.6px"};
      text-align: center;
      margin-top: ${({ isPopularRestaurant }) =>
        isPopularRestaurant ? "3.8px" : "35px"};
    }

    .icons-container {
      position: absolute;
      bottom: 56px;
    }

    .icon {
      display: inline-block;
      margin: 0 8px 16px 8px;
      width: 39px;
      height: 30px;
    }

    .main-image {
      height: ${({ isPopularRestaurant }) =>
        isPopularRestaurant ? "224px" : "290px"};
      width: 100%;
    }

    .price-container {
      width: 100%;
      position: absolute;
      bottom: 24px;
      display: flex;
      justify-content: center;
    }

    .price {
      font-size: 24.9px;
      margin: 0 10px;
    }

    .border-center {
      width: 112px;
      height: 1px;
      border-top: solid 0.5px ${colors.brownGrey};
      align-self: center;
    }

    .left {
      left: 35px;
    }

    .right {
      right: 35px;
    }
  } ;
`;

export const CardsContainer = styled.div`
  display: flex;
`;
