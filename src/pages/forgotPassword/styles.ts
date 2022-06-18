import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const ForgotPasswordWrapper = styled(Box)`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ForgotPasswordBoxWrapper = styled(Box)`
  width: 40vw;
  height: 100vh;
  background: #141414;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 10%;
`;

export const ForgotPasswordBoxContent = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

export const ForgotPasswordImageBox = styled(Box)`
  width: 60vw;
  height: 100vh;
  background: url("/backgroundcampfiremiddle.png") no-repeat center center /
    cover;
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

export const ForgotPasswordBoxTitle = styled.h4`
  font-size: 1.3rem;
  color: #f6f6f6;
  letter-spacing: 0.4px;
  text-align: left;
  font-weight: 400;
`;

export const InputTitle = styled.h3`
  font-size: 0.8rem;
  color: #f6f6f6;
  text-align: left;
  font-weight: 500;
  padding-bottom: 0.2rem;
`;

export const InputBox = styled(Box)`
  width: 100%;
  border-bottom: 2px solid #4b4b4b;
`;

export const InputInfo = styled.input`
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 0;
  text-align: left;
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

export const InfoButton = styled(Button)`
  color: #ff9900;
  text-decoration: none;
  font-size: 0.7rem;
  width: fit-content;
  cursor: pointer;
  padding: 6px 8px 6px 0;
`;

export const FinishButton = styled(Button)`
  color: #fff;
  text-transform: none;
  background: #dd3e0e;
  :disabled {
    background: #c3c3c3;
  }
  :hover {
    background: #dd3e0e;
  }
  padding: 4px 8px;
  width: 100%;
  margin-top: 1rem;
`;

export const BoxLogo = styled(Box)`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 1rem;
`;
