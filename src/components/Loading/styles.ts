import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Wrapper = styled(Box)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: url("/background.png") no-repeat center center / cover;
  position: relative;
`;

export const FireAnimation = styled(Box)`
  width: 200px;
  height: auto;
  position: absolute;
  left: 48.5%;
  top: 34%;
  margin-left: -98px;

  animation-name: switchPage;
  animation-duration: 2s;
  svg {
    width: 100%;
    height: auto;
    position: relative;
  }

  .flame {
    animation-name: flamefly;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    opacity: 0;
    transform-origin: 50% 50% 0;
  }
  .flame.one {
    animation-delay: 1s;
    animation-duration: 3s;
  }
  .flame3.two {
    animation-duration: 5s;
    animation-delay: 1s;
  }

  .flame-main {
    animation-name: flameWobble;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  .flame-main.one {
    animation-duration: 4s;
    animation-delay: 1s;
  }
  .flame-main.two {
    animation-duration: 3s;
    animation-delay: 2s;
  }
  .flame-main.three {
    animation-duration: 2.1s;
    animation-delay: 3s;
  }
  .flame-main.four {
    animation-duration: 3.2s;
    animation-delay: 4s;
  }
  .flame-main.five {
    animation-duration: 2.5s;
    animation-delay: 5s;
  }
  @keyframes flameWobble {
    50% {
      transform: scale(1, 1.2) translate(0, -30px) rotate(-2deg);
      opacity: 0.7;
    }
  }
  @keyframes flamefly {
    0% {
      transform: translate(0) rotate(180deg);
    }
    50% {
      opacity: 0.9;
    }
    100% {
      transform: translate(-20px, -100px) rotate(180deg);
      opacity: 0;
    }
  }

  @keyframes switchPage {
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
