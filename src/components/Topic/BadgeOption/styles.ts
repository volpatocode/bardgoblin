import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const BadgeOption = styled(Button)`
  color: #000;
  text-transform: none;
  font-size: 0.9rem;
  background: #FF9900;
  padding: 0 6px;
  border-radius: 5px;
  transition: 200ms ease-in-out;
  min-width: 0;
  font-weight: 600;
  line-height: normal;
  :hover {
    background: #FF9900;
  }
`;
