import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ProfileInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ProfileInfoTitle = styled.h3`
  color: #f6f6f6;
  font-weight: 400;
  font-size: 2.1rem;
  letter-spacing: 0.3px;
`;

export const ProfileInfoContent = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 5rem;
`;

export const ProfileInfoPlaceholderBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 30%;
`;

export const ProfileInfoPlaceholder = styled.p`
  color: #8e8e8e;
  font-size: 1.2rem;
  letter-spacing: 0.3px;
  padding: 0.5rem 0.5rem 0.5rem 0;
`;

export const ProfileInfoInputBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProfileInfoInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 0;
  text-align: left;
  font-size: 1.2rem;
  border: none;
  color: #f6f6f6;
  display: flex;
  align-items: center;
  background: #141414;
  justify-content: space-between;
  :focus {
    outline: none;
  }
`;

export const InputBorder = styled(Box)`
  border: 2px solid #4b4b4b; ;
`;
