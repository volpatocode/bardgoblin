import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const PageWrapper = styled(Box)`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DotPulse = styled.div`
  position: relative;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #dd3e0e;
  color: #dd3e0e;
  box-shadow: 9999px 0 0 -5px #dd3e0e;
  animation: dotPulse 2.5s infinite linear;
  animation-delay: 0.5s;

  ::before,
  ::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #dd3e0e;
    color: #dd3e0e;
  }

  ::before {
    box-shadow: 9984px 0 0 -5px #dd3e0e;
    animation: dotPulseBefore 2.5s infinite linear;
    animation-delay: 0s;
  }

  ::after {
    box-shadow: 10014px 0 0 -5px #dd3e0e;
    animation: dotPulseAfter 2.5s infinite linear;
    animation-delay: 1s;
  }

  @keyframes dotPulseBefore {
    0% {
      box-shadow: 9984px 0 0 -5px #dd3e0e;
    }
    30% {
      box-shadow: 9984px 0 0 2px #dd3e0e;
    }
    60%,
    100% {
      box-shadow: 9984px 0 0 -5px #dd3e0e;
    }
  }

  @keyframes dotPulse {
    0% {
      box-shadow: 9999px 0 0 -5px #dd3e0e;
    }
    30% {
      box-shadow: 9999px 0 0 2px #dd3e0e;
    }
    60%,
    100% {
      box-shadow: 9999px 0 0 -5px #dd3e0e;
    }
  }

  @keyframes dotPulseAfter {
    0% {
      box-shadow: 10014px 0 0 -5px #dd3e0e;
    }
    30% {
      box-shadow: 10014px 0 0 2px #dd3e0e;
    }
    60%,
    100% {
      box-shadow: 10014px 0 0 -5px #dd3e0e;
    }
  }
`;
