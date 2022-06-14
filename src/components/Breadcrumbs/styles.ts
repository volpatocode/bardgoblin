import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const BreadcrumbsWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SectionButton = styled(Button)`
  color: #fff;
  text-transform: none;
  background: rgba(45, 43, 42, 1);
  padding: 4px 8px 4px 8px;
  gap: 0.35rem;
  border-radius: 20px;
  transition: 200ms ease-in-out;
  :hover {
    background: rgba(45, 43, 42, 0.75);
  }
`;

export const IDButton = styled(Button)`
  color: #454342;
  text-transform: none;
  font-size:0.65rem;
  background: #fff;
  padding: 1.5px 5px 1.5px 5px;
  gap: 0.35rem;
  border-radius: 20px;
  transition: 200ms ease-in-out;
  :hover {
    background: rgba(255, 255, 255, 0.75);
  }
`;
