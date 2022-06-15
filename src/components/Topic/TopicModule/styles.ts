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
  font-size: 1rem;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-align: center;
`;

export const TopicModuleID = styled(Button)`
  color: #fff;
  text-transform: none;
  font-size: 0.4rem;
  background: #dd3e0e;
  letter-spacing: 0.5px;
  padding: 2px 2px;
  border-radius: 2px;
  transition: 200ms ease-in-out;
  min-width: 0;
  :hover {
    background: #dd3e0e;
  }
`;

export const TopicModuleContent = styled.p`
  text-align: justify;
  font-size: 1rem;
  letter-spacing: 0.2px;
  color: rgba(255, 255, 255, 0.5);
  ::first-letter {
    text-transform: uppercase;
  }
`;
