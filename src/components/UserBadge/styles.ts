import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const UserBadge = styled(Button)`
  color: #fff;
  text-transform: none;
  background: #dd3e0e;
  padding: 4px 18px 4px 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0.35rem;
  border-radius: 20px;
  :hover {
    background: #dd3e0e;
  }
`;

export const UserImage = styled.img`
    border-radius: 50%;
    width: 32px;
    height: 32px;

`;

export const Username = styled.p`
    font-size: 0.8rem;
    font-weight: 500;
    color: #fff;
    text-align: left;
    letter-spacing: 0.1px;
`;

