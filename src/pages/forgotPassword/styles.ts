import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ForgotPasswordWrapper = styled(Box)`
  min-height: 100vh;
  min-width: 100vw;
  background: url("/background.png") no-repeat center center / cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const ForgotPasswordContent = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 100%;
  gap: 5rem;
`;

export const ForgotPasswordBox = styled(Box)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #151515;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  text-align: left;
`;

export const ImageBox = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
  object-position: center;
`;

export const Warning = styled.p`
  font-size: 0.7rem;
  color: #ff9900;
  width: 100%;
  min-width: 64px;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  line-height: 1.75;
  font-weight: 500;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  user-select: none;
`;
