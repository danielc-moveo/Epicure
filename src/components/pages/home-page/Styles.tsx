import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 36px;
`;

export const CollagesWrapper = styled.div`
  margin: 140px 170px 0 170px;
  @media screen and (max-width: 425px) {
    margin: 51px 0 95px 0;
  }
`;

export const descriptionStyles = {
  margin: "0 0 42px 0",
  textAlign: "center",
};
