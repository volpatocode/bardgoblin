import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Wrapper = styled(Box)`
  background: #1d1d1d;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AnchorWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16%;
  padding: 1rem;
  cursor: pointer;
  transition: 200ms ease-in-out;

  :hover {
    width: 12%;
  }

  @media (max-width: 600px) {
    width: 32%;
    :hover {
      width: 25%;
    }
  }
`;

export const Anchor = styled(Box)`
  height: 2px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 5px;
  animation: anchor-color-changing 2s infinite linear alternate;
  @keyframes anchor-color-changing {
    0% {
      background-color: rgba(255, 255, 255, 0.25);
    }
    50% {
      background-color: rgba(255, 255, 255, 0.5);
    }
    100% {
      background-color: rgba(255, 255, 255, 0.25);
    }
  }
`;
