import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import IconButtona from "@mui/material/IconButton";
import CloseIcona from "@mui/icons-material/Close";

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
  overflow: hidden;
  @media (max-width: 600px) {
    width: 100vw;
    height: 100vh;
    justify-content: space-between;
    padding: 0.3rem 1.5rem 0rem 1.5rem;
    transition: 0.2s ease-in-out;
  }

  @media (max-width: 400px) {
    transition: 0.2s ease-in-out;
    padding: 0.3rem 0.5rem 0rem 0.5rem;
  }
`;

export const HeaderModal = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
`;

export const BoxModalContent = styled(Box)``;

export const ModalFooter = styled(Box)`
  height: 2px;
  background-color: #ff9900;
  border-radius: 5px;
  margin-bottom: 3rem;
  width: 60%;
  margin: 0 auto 3rem auto;
  :hover {
    background-color: #dd3e0e;
  }
`;

export const CloseIconButton = styled(IconButtona)`
  color: #fff;
  padding-right: 0;
`;

export const CloseMenuIcon = styled(CloseIcona)`
  color: #fff;
`;

export const BoxLogo = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  @media (max-width: 600px) {
    justify-content: flex-start;
  }
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
  :hover {
    background: transparent;
  }
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
