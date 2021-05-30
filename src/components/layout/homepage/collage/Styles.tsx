import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 87px;
  @media screen and (max-width: 425px) {
    margin: 0 20px;
  }
  align-items: center;
`;

export const CardsContainer = styled.div`
  display: flex;
`;
