import styled from "styled-components";
import { colors, Description } from "../../utils/CommonStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.primary_grey_light};
  height: 265px;

  ${Description} {
    margin: 41px 0 29px 0;
  }

  @media screen and (max-width: 768px) {
    height: 134px;

    ${Description} {
      margin: 16px 0 22px 0;
      letter-spacing: 0.0625rem;
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;

  & img {
    margin-bottom: 29px;
  }

  & .spicy {
    margin-right: 104.6px;
    & img {
      width: 80px;
      height: 61px;
    }
  }

  & .vegi {
    margin-right: 111px;
    & img {
      width: 60px;
      height: 60px;
    }
  }

  & .vegan {
    & img {
      width: 67px;
      height: 67px;
    }
  }

  @media screen and (max-width: 768px) {
    & img {
      margin-bottom: 16px;
    }

    & .spicy {
      margin-right: 59px;
      & img {
        width: 44px;
        height: 34px;
      }
    }

    & .vegi {
      margin-right: 62px;
      & img {
        width: 33px;
        height: 34px;
      }
    }

    & .vegan {
      & img {
        width: 37px;
        height: 37px;
      }
    }
  }
`;

export const IconAndText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
