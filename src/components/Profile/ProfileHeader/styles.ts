import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ProfileHeader = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 5rem;
`;

export const ProfileImageBox = styled(Box)`
  width: 30%;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100%;
  height: auto;
`;

export const ProfileHeaderInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProfileName = styled.h4`
  color: #f6f6f6;
  font-weight: 400;
  font-size: 2.5rem;
  letter-spacing: 0.3px;
`;

export const ProfileEmail = styled.p`
  color: #8e8e8e;
  font-size: 1.2rem;
  letter-spacing: 0.3px;
`;

export const ProfileID = styled.p`
  color: #8e8e8e;
  font-size: 1.2rem;
  letter-spacing: 0.3px;
`;
