import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";


export const BoxModal = styled(Box)`
  position: absolute;
  border-radius: 5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  background-color: #141414;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1rem;
  text-align: left;
  height: auto;
`;

export const BoxLogo = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const SelectButtonBox = styled(Box)``;

export const SelectButton = styled(Button)`
  color: #fff;
  text-transform: none;
  padding: 4px 8px;
  text-align: left;
  border-radius: 0px;
  :hover {
    background: none;
  }
`;

export const InputTitle = styled.h3`
  font-size: 0.9rem;
  color: #fff;
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

export const BoxInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-top: 1rem;
`;

export const BoxEmail = styled(Box)``;

export const BoxPassword = styled(Box)``;

export const ButtonInfo = styled(Button)`
  color: #ff9900;
  text-decoration: none;
  font-size: 0.7rem;
  width: fit-content;
  cursor: pointer;
  padding: 6px 8px 6px 0;
  margin-top: 1rem;
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

export const BoxUser = styled(Box)``;

export const BoxLogin = styled(Box)``;

export const BoxRegister = styled(Box)``;

export const StyledCircularProgress = styled(CircularProgress)`
  color: #fff;
`;
