import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const PageWrapper = styled(Box)`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const MainBox = styled(Box)`
  width: 80vw;
  min-height: 100vh;
  background-color: #141414;
`;

export const SideBox = styled(Box)`
  width: 20vw;
  min-height: 100vh;
  background: url("./createtopicbackground.png") no-repeat center center / cover;
  border-right: 2px solid rgba(29, 29, 29, 0.7);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SideContent = styled.p`
  padding: 0 2rem;
  font-size: 1.5rem;
  text-transform: lowercase;
  letter-spacing: 0.3px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  transition: 1s ease-in-out;
  :hover {
    color: rgba(255, 255, 255, 1);
  }
`;

export const SideFooter = styled.p`
  font-size: 1rem;
  text-transform: lowercase;
  letter-spacing: 0.3px;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
`;
