import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const BadgeID = styled(Button)`
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