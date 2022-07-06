import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const CommentBadge = styled(Button)`
  text-transform: none;
  background: #1f1f1f;
  padding: 6px 16px 6px 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0.35rem;
  border-radius: 20px;
  :hover {
    background: #1f1f1f;
  }
`;

export const Count = styled.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1rem;
  text-align: left;
  letter-spacing: 0.2px;
`;