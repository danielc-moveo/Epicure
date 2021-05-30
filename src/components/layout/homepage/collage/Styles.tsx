import styled from "styled-components";
import { Card, TextBold } from "../../../utils/card/Styles";

export const Wrapper = styled.div<{ isPopularRestaurant: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 87px;
  @media screen and (max-width: 425px) {
    margin: 0 20px;
  }

  ${Card} {
    height: ${({ isPopularRestaurant }) =>
      isPopularRestaurant ? "357px" : "654px"};
    width: 360px;
  }

  ${TextBold} {
    font-size: ${({ isPopularRestaurant }) =>
      isPopularRestaurant ? "40px" : "38.4px"};
    letter-spacing: ${({ isPopularRestaurant }) =>
      isPopularRestaurant ? "1.23px" : "2.67px"};
    margin-bottom: 3.8px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
`;
