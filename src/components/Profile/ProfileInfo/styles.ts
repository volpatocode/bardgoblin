import styled from "@emotion/styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Button } from "@mui/material";
import { profileInfoType } from "./index";

type avatarType = {
  size: "sm" | "full";
};

export const ProfileInfo = styled(Box)`
  width: 70%;
  height: 100%;
  display: flex;
  gap: 6rem;
  flex-direction: row;
  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 3rem;
  }
`;

export const ProfileImageBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.img<Pick<profileInfoType, "src">>`
  background: url(${(props) => props.src}) no-repeat center center / cover;
  border-radius: 50%;
  aspect-ratio: 1/1;
  width: 15vw;
  @media (max-width: 960px) {
    width: 30vw;
  }
`;

export const ProfileContentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 80%;
  @media (max-width: 560px) {
    width: 90%;
  }
`;

export const ProfileDataBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const ProfileData = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  @media (max-width: 960px) {
    flex-direction: column;
    gap: 0.7rem;
  }
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
  @media (max-width: 560px) {
    font-size: 1rem;
  }
`;
export const EditDataValue = styled.input`
  font-size: 1.15rem;
  color: #ff9900;
  letter-spacing: 0.2px;
  line-height: 1.75;
  font-weight: 500;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  background: #1d1d1d;
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.2rem;
  border: none;
  outline: none;
  @media (max-width: 560px) {
    font-size: 1rem;
  }
`;

export const DataValue = styled(Box)<Pick<profileInfoType, "background">>`
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 0.2px;
  line-height: 1.75;
  font-weight: 500;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  background: ${(props) => (props.background === "none" ? "none" : "#1D1D1D")};
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.2rem;
  @media (max-width: 560px) {
    font-size: 1rem;
  }
`;

export const EditButton = styled(Button)`
  color: #fff;
  text-transform: none;
  background: #dd3e0e;
  font-size: 1.2rem;
  padding: 4px 8px;
  margin-top: 1rem;
  width: 100%;
  :disabled {
    background: #c3c3c3;
  }
  :hover {
    background: #dd3e0e;
  }
  @media (max-width: 560px) {
    font-size: 1.08rem;
  }
`;

export const UploadButton = styled(Button)`
  color: #fff;
  text-transform: none;
  background: #dd3e0e;
  font-size: 1.2rem;
  padding: 4px 8px;
  margin-top: 1rem;
  width: 100%;
  :disabled {
    background: #c3c3c3;
  }
  :hover {
    background: #dd3e0e;
  }
  @media (max-width: 560px) {
    font-size: 1.08rem;
  }
`;

export const InputImage = styled.label`
  color: #fff;
  text-transform: none;
  background: transparent;
  font-size: 1.3rem;
  padding: 4px 8px;
  margin-top: 1rem;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  line-height: 1.75;
  text-align: center;
  :disabled {
    color: #c3c3c3;
  }
  :hover {
    background: transparent;
  }
  @media (max-width: 560px) {
    font-size: 1.12rem;
  }
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
