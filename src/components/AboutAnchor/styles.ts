import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 2px;
  padding: 1rem;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 25%;
  }
  margin-bottom: 5rem;
`;

export const AboutAnchor = styled(Box)`
  height: 2px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 5px;
  animation: anchor-color-changing 2s infinite linear alternate;
  display: flex;
  align-self: center;
  justify-self: center;

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
