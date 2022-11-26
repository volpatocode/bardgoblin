import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const BadgeCharacter = styled(Button)`
  color: #f6f6f6;
  text-transform: none;
  background: #232323;
  font-size: 0.85rem;
  padding: 0 6px;
  border-radius: 5px;
  line-height: normal;
  letter-spacing: 0.4px;
  :hover {
    background: #232323;
  }
  margin: 0 1px;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 20px;
  height: 18px;
  margin-right: 5px;
`;

