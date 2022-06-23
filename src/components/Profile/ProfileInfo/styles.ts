import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
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
  cursor: pointer;
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

export const DataInput = styled.input`
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
  border: none;
`;

export const BoxButtons = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 0.5rem;
`;

export const EditButton = styled(Button)`
  color: #000;
  text-transform: none;
  background: #ff9900;
  font-size: 1.2rem;
  padding: 4px 8px;
  margin-top: 1rem;
  width: 100%;
  :disabled {
    background: #c3c3c3;
  }
  :hover {
    background: #ff9900;
  }
`;

export const UploadButton = styled(Button)`
  color: #000;
  text-transform: none;
  background: #ff9900;
  font-size: 1.2rem;
  padding: 4px 8px;
  margin-top: 1rem;
  width: 100%;
  :disabled {
    background: #c3c3c3;
  }
  :hover {
    background: #ff9900;
  }
`;

export const InputImage = styled.label`
  color: #000;
  text-transform: none;
  background: #ff9900;
  font-size: 1.2rem;
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
  :disabled {
    background: #c3c3c3;
  }
  :hover {
    background: #ff9900;
  }
  text-align: center;
`;
