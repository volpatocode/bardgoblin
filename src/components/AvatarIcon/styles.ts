import styled from "@emotion/styled";
import { Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

type avatarType = {
  size: "sm" | "full";
};

export const AvatarIcon = styled(Box)``;

export const AccountAvatar = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;
export const AccountCircle = styled(AccountCircleIcon)<avatarType>`
  color: #ff9900;
  font-size: 32px;
  display: grid;
  place-items: center;

  font-size: ${(props) => (props.size == "full" ? "15vw" : "32px")};
  @media (max-width: 960px) {
    font-size: ${(props) => (props.size == "full" ? "30vw" : "32px")};
  }
`;
