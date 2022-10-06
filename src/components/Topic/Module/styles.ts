import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Module = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1rem;
`;

export const Title = styled.h4`
  font-size: 1.2rem;
  color: #f6f6f6;
  font-weight: 400;
  letter-spacing: 0.4px;
  text-align: left;
  ::first-letter {
    text-transform: uppercase;
  }
`;

export const Content = styled.p`
  text-align: justify;
  font-size: 1rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.5);
  ::first-letter {
    font-size: 1.1rem;
    text-transform: uppercase;
    font-family: "New Rocker", cursive;
  }
`;
