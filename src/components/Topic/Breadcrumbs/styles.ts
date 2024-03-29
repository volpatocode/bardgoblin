import styled from "@emotion/styled";
import { Button, Box } from "@mui/material";
import RightIcon from "@mui/icons-material/KeyboardArrowRight";

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Breadcrumb = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SectionButton = styled(Button)`
  color: #fff;
  text-transform: none;
  background: rgba(45, 43, 42, 1);
  padding: 4px 12px 4px 12px;
  border-radius: 20px;
  transition: 200ms ease-in-out;
  :hover {
    background: rgba(45, 43, 42, 0.75);
  }
`;

export const IDButton = styled(Button)`
  color: #454342;
  text-transform: none;
  font-size: 0.65rem;
  background: #fff;
  padding: 1.5px 5px 1.5px 5px;
  gap: 0.35rem;
  border-radius: 20px;
  transition: 200ms ease-in-out;
  :hover {
    background: rgba(255, 255, 255, 0.75);
  }
`;

export const Label = styled(Button)`
  color: rgba(255, 255, 255, 0.75);
  text-transform: none;
  background: none;
  padding: 3px 8px 3px 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  font-size: 0.8rem;
  min-width: 0;
  transition: 200ms ease-in-out;
  :hover {
    background: none;
    color: #ff9900;
  }
`;

export const ArrowRight = styled(RightIcon)``;
