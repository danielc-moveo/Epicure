import styled from "styled-components";
import { CardContent } from "../../../utils/card/Styles";
import { colors, Description } from "../../../utils/common/CommonStyles";
import { Link as Link_ } from "react-router-dom";

export const Wrapper = styled.div<{ isPopularRestaurant: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 87px;

  .header {
    font-size: 30px;
    margin-bottom: 23px;
  }
  ${Description} {
    font-size: 30px;
    letter-spacing: 1.25px;
    text-align: center;
    margin-bottom: 42px;
  }

  ${CardContent} {
    height: ${({ isPopularRestaurant }) =>
      isPopularRestaurant ? "357px" : "654px"};
    width: 360px;

    .text-bold {
      font-size: ${({ isPopularRestaurant }) =>
        isPopularRestaurant ? "40px" : "38.4px"};
      letter-spacing: ${({ isPopularRestaurant }) =>
        isPopularRestaurant ? "2.67px" : "2.56px"};
      margin: 10px 0 0 0;
      font-weight: bold;
    }

    .text {
      font-size: ${({ isPopularRestaurant }) =>
        isPopularRestaurant ? "25px" : "24px"};
      letter-spacing: ${({ isPopularRestaurant }) =>
        isPopularRestaurant ? "1.67px" : "1.6px"};
      text-align: center;
      margin: ${({ isPopularRestaurant }) =>
        isPopularRestaurant ? "3.8px 0 0 0" : "35px 3px 0"};
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
      border-top: solid 0.5px ${colors.primary_grey};
      align-self: center;
    }
  }

  @media screen and (max-width: 1145px) {
    ${CardContent} {
      width: 300px;

      .border-center {
        width: 100px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 100px;

    ${Description} {
      font-size: 14px;
      margin-bottom: 13px;
    }

    .header {
      font-size: 16px;
      letter-spacing: 0.94px;
      margin-bottom: 15px;
    }
    ${CardContent} {
      .text-bold {
        font-size: ${({ isPopularRestaurant }) =>
          isPopularRestaurant ? "25px" : "27.6px"};

        letter-spacing: ${({ isPopularRestaurant }) =>
          isPopularRestaurant ? "1.67px" : "1.84px"};
      }
    }
  }

  @media screen and (max-width: 425px) {
    margin: ${({ isPopularRestaurant }) =>
      isPopularRestaurant ? "0 20px" : "100px 20px"};
  }
`;

export const CardsContainer = styled.div`
  display: flex;

  @media screen and (max-width: 968px) {
    display: none;
  }
`;

export const LinkContainer = styled.div`
  text-align: end;
  margin: 31px 11px 0 0;
  @media screen and (max-width: 968px) {
    display: none;
  }
  .icon {
    width: 24px;
    height: 18px;
    margin-left: 12px;
  }
`;

export const Link = styled(Link_)`
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 2px;
  color: ${colors.black};
  text-decoration: none;
`;
