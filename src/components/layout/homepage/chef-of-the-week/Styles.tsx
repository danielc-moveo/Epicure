import styled from "styled-components";
import { Description } from "../../../utils/common/CommonStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 180px 117px 218px;
  background-color: white;
  @media screen and (max-width: 900px) {
    margin: 71px 20px 97px 20px;
  }

  ${Description} {
    margin-bottom: 42px;
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
  height: 338px;
  margin: 0 20px 59px 20px;
  text-align: center;
  min-width: 433px;
  @media screen and (max-width: 900px) {
    margin: 0 auto 20px auto;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const ChefDescription = styled.div`
  max-width: 300px;
  @media screen and (max-width: 900px) {
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const CollageWrapper = styled.div``;
