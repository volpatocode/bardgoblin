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
