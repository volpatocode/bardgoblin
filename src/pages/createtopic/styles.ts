import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import AddIcona from "@mui/icons-material/Add";
import DoneIcona from "@mui/icons-material/Done";

export const PageWrapper = styled(Box)`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const MainBox = styled(Box)`
  width: 80vw;
  min-height: 100vh;
  height: 100%;
  background-color: #141414;
  padding: 1rem 11.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
  @media (max-width: 1000px) {
    width: 100vw;
  }
`;

export const MainHeaderInfo = styled(Box)``;

export const MainHeader = styled(Box)`
  display: flex;
  margin-bottom: 3rem;
  column-gap: 1rem;
  align-items: center;
  justify-content: space-between;
`;

export const MainContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.85);
  text-align: left;
`;

export const MainSubtitle = styled.p`
  font-size: 1rem;
  letter-spacing: 0.3px;
  color: rgba(255, 255, 255, 0.65);
  text-align: left;
`;

export const AddIcon = styled(AddIcona)`
  color: rgba(255, 255, 255, 0.65);
`;

export const DoneIcon = styled(DoneIcona)`
  color: rgba(255, 255, 255, 0.65);
`;

export const BoxButtons = styled(Box)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const AddModuleButton = styled(Button)`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  align-items: center;
  text-transform: none;
  background: #dd3e0e;
  color: rgba(255, 255, 255, 0.65);
  :hover {
    background: #dd3e0e;
  }
  :disabled {
    background: #c3c3c3;
  }
  width: 100%;
`;

export const SubmitButton = styled(Button)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
  text-transform: none;
  background: #dd3e0e;
  color: rgba(255, 255, 255, 0.65);
  :hover {
    background: #dd3e0e;
  }
  :disabled {
    background: #c3c3c3;
  }
  width: 100%;
`;

// Side Box

export const SideBox = styled(Box)`
  width: 20vw;
  min-height: 100vh;
  max-height: 100vh;
  background: url("./createtopicbackground.png") no-repeat center center / cover;
  border-right: 2px solid rgba(29, 29, 29, 0.7);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1000px) {
    display: none;
  }
  position: sticky;
  left: 0;
  top: 0;
`;

export const SideFooter = styled.p`
  font-size: 1rem;
  text-transform: lowercase;
  letter-spacing: 0.3px;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
`;
