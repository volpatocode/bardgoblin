import styled from "@emotion/styled";
import { Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const AvatarIcon = styled(Box)``;

export const AccountAvatar = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;
export const AccountCircle = styled(AccountCircleIcon)`
  color: #ff9900;
  font-size: 32px;
  display: grid;
  place-items: center;
`;
