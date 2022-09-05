import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const TopicModuleWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1rem;
`;

export const TopicModuleTitleWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  align-items: center;
`;

export const TopicModuleTitle = styled.h4`
  font-size: 1.2rem;
  color: #f6f6f6;
  font-weight: 400;
  letter-spacing: 0.4px;
  text-align: left;
  ::first-letter {
    text-transform: uppercase;
    
  }
`;

export const TopicContent = styled.p`
  text-align: justify;
  font-size: 1rem;
  letter-spacing: 0.2px;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.5);
  ::first-letter {
    text-transform: uppercase;
    font-family: "New Rocker", cursive;
  }
`;
