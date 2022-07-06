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
  padding: 3rem 11.5%;
`;

export const MainHeader = styled(Box)`
  margin-bottom: 3rem;
`;

export const MainContent = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const MainFooter = styled(Box)``;

export const SimpleInput = styled.input`
  color: rgba(255, 255, 255, 0.45);
  border: 1px solid rgba(29, 29, 29, 0.7);
  background: transparent;
  outline: none;
  font-size: 1rem;
  width: 100%;
  line-height: 1.75;
  padding: 8px;
  border-radius: 5px;
  :focus {
    border: 1px solid #dd3e0e;
  }
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

// Side Box

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
  font-size: 1.2rem;
  text-transform: lowercase;
  letter-spacing: 0.3px;
  color: rgba(255, 255, 255, 0.65);
  text-align: center;
  transition: 1s ease-in-out;
  :hover {
    color: rgba(255, 255, 255, 1);
    cursor: default;
  }
`;

export const SideFooter = styled.p`
  font-size: 1rem;
  text-transform: lowercase;
  letter-spacing: 0.3px;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
`;
