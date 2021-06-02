import styled from "styled-components";
import { colors, Description } from "../../utils/CommonStyles";

export const Wrapper = styled.div`
  display: flex;
  background-color: ${colors.primary_grey_light};
  height: 526px;
  width: 100vw;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    height: 605px;
    padding: 0 32px;
  }

  @media screen and (max-width: 425px) {
    height: auto;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 827px;
  margin: 0 auto;
  position: relative;

  & .logo {
    left: 700px;
    position: absolute;
    bottom: 221px;
    width: 178px;
    height: 166px;
  }

  ${Description} {
    font-size: 1.875rem;
    letter-spacing: 0.118125rem;
    margin: 65px 0 20px 0;
  }

  @media screen and (max-width: 1000px) {
    & .logo {
      width: 137px;
      height: 128px;
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    & .logo {
      position: unset;
      margin-bottom: 34px;
    }

    ${Description} {
      margin: 28px 0 7px 0;
      font-size: 0.875rem;
      letter-spacing: 0.055rem;
    }
  }
`;

export const AboutText = styled.div`
  max-width: 567px;
  margin-bottom: 23px;

  @media screen and (max-width: 900px) {
    max-width: none;
    font-size: 0.875rem;
    letter-spacing: 0.0675rem;
  }
`;

export const DownloadContainer = styled.div`
  display: flex;

  .apple-box {
    border-radius: 9.6px;
    border: solid 0.6px black;
    margin-right: 15.1px;
    height: 52.8px;
    padding: 0 11.7px 0 10.5px;
  }

  .google-box {
    border-radius: 9.6px;
    border: solid 0.6px black;
    margin-right: 15.1px;
    height: 52.8px;
    padding: 0 17.6px 0 15px;
  }

  @media screen and (max-width: 900px) {
    justify-content: center;
    margin: 0 0 63.46px 0;
    border-radius: 6.7px;

    .apple-box {
      width: 127px;
      height: 37px;
      padding: 5.6px 7.9px 5.1px 7.3px;
    }
    .google-box {
      width: 126.8px;
      height: 36.8px;
      padding: 5px 12.2px 5.8px 10.5px;
    }
  }
`;

export const DownloadBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.825rem;
  letter-spacing: 0.080625rem;
  width: 181.4px;
  text-align: center;

  & .logo {
    width: 178px;
    height: 166px;
  }

  & .logo-google {
    width: 18px;
    height: 25px;
    margin-right: 23.5px;
  }

  & .logo-apple {
    width: 24px;
    height: 31px;
    margin-right: 14.7px;
  }

  @media screen and (max-width: 900px) {
    font-size: 0.7375rem;
    letter-spacing: 0.05625rem;

    & .logo-apple {
      width: 17px;
      height: 22px;
      margin-right: 9.8px;
    }

    & .logo-google {
      width: 14px;
      height: 19px;
      margin-right: 15.9px;
    }
  }
`;
