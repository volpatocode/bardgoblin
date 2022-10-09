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

  @media (max-width: 760px) {
    padding: 3px 14px 3px 6px;
  }
  @media (max-width: 400px) {
    padding: 2px 12px 2px 4px;
  }
`;

export const UserImage = styled.img`
  border-radius: 50%;
  width: 24px;
  height: 24px;
`;

export const Username = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  text-align: left;
  letter-spacing: 0.1px;
`;
