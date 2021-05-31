import styled from "styled-components";
import { colors } from "../../../utils/common/CommonStyles";

export const Wrapper = styled.div`
  display: flex;
  background-color: ${colors.white_two}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 65px 182px 61.4px 218px;
`;

export const AboutText = styled.div`
  max-width: 567px;
  margin-bottom: 31.7px;
`;

export const Logo = styled.div`
  margin: auto 0;
`;

export const descriptionStyles = {
  margin: "0 0 20px 0",
  textAlign: "start",
};
