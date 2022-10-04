import styled from "@emotion/styled";
import { Button } from "@mui/material";

import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const ContinueBrowsing = styled(Button)`
  color: #fff;
  text-transform: none;
  background: #dd3e0e;
  transition: 200ms ease-in-out;
  :hover {
    background: #1D1D1D; 
  }
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 16px;
  width: 100%;
  border-radius: none;
`;

export const ArrowRight = styled(ArrowRightIcon)`

`;