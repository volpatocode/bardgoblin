import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { profileInfoType } from "./index";

export const ProfileInfo = styled(Box)`
  width: 70%;
  height: 100%;
  padding: 3.5rem;
  display: flex;
  flex-direction: row;
  gap: 6rem;
`;

export const ProfileImageBox = styled(Box)`
  width: 20%;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  min-width: 100px;
  width: 100%;
`;

export const ProfileContent = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 80%;
`;

export const ProfileData = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;

export const DataPlaceholder = styled.p`
  font-size: 1.15rem;
  color: #fff;
  letter-spacing: 0.2px;
  line-height: 1.75;
  font-weight: 500;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  width: 250px;
  display: flex;
  align-items: center;
`;

export const DataValue = styled(Box)<profileInfoType>`
  font-size: 1.15rem;
  color: #ff9900;
  letter-spacing: 0.2px;
  line-height: 1.75;
  font-weight: 500;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  background: ${(props) => (props.background === "none" ? "none" : "#1D1D1D")};
  width: 100%;
  padding: 8px;
  border-radius: 5px;
`;

export const DataInput = styled.input``;

export const StyledEditIcon = styled(EditIcon)`
  color: #000;
  background-color: #fff;
`;

export const EditButton = styled(Button)`
  color: #000;
  text-transform: none;
  background: #ff9900;
  font-size: 1.2rem;
  :disabled {
    background: #c3c3c3;
  }
  :hover {
    background: #ff9900;
  }
  padding: 4px 8px;
  margin-top: 1rem;
`;
