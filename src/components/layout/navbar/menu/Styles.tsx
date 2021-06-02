import styled from "styled-components";
import { BorderCenter, colors, Icon, Link } from "../../utils/CommonStyles";

export const Wrapper = styled.div`
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 107px;
  z-index: 1;
  height: 100vh;
  width: 100%;
  animation: anim 1s ease-out forwards;
  animation-iteration-count: 1;

  ${Icon} {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0;
    left: 0;
    margin: 20px 0 0 39px;
  }

  ${Link} {
    text-decoration: none;
    margin-bottom: 49px;
    color: ${colors.primary_black};
  }
  & .top {
    font-size: 1.25rem;
    letter-spacing: 0.083125rem;
    font-weight: bold;
  }

  & .bottom {
    font-size: 1.25rem;
    letter-spacing: 0.083125rem;
  }

  ${BorderCenter} {
    margin-bottom: 49px;
    width: 196px;
  }

  @keyframes anim {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
