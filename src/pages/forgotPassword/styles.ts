import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ForgotPasswordWrapper = styled(Box)`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ForgotPasswordBox = styled(Box)`
  width:40vw;
  height: 100vh;
  background: #141414;
`;

export const ForgotPasswordImageBox = styled(Box)`
  width:60vw;
  height: 100vh;
  background: url("/backgroundcampfiremiddle.png") no-repeat center center / cover;
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
