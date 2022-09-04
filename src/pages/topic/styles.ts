import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";

export const TopicWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`;

export const TopicHeaderWrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const TopicHeader = styled(Box)`
  background: linear-gradient(rgba(29, 29, 29, 0.8), rgba(29, 29, 29, 0.8)),
    url("/background2.png") no-repeat center center / cover;
  width: 100vw;
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TopicHeaderContent = styled(Container)`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`;

export const TopicTitle = styled.h1`
  font-size: 3rem;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  text-align: center;
  width: 100%;
  
  @media (max-width: 1140px) {
  }
  @media (max-width: 960px) {
  }
  @media (max-width: 760px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 420px) {
  }
`;

export const TopicBadges = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

export const TopicContent = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
`;
