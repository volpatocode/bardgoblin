import styled from "@emotion/styled";
import { Button, Box } from "@mui/material";

export const TopicWrapper = styled(Box)`
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
  height: 65vh;
  border-bottom: 1px solid rgba(29, 29, 29, 1);
`;

export const TopicHeaderContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  gap: 0.3rem;
`;

export const TopicTitle = styled.h1`
  font-size: 3rem;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  text-align: center;
  max-width: 50%;
`;

export const TopicBadges = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

export const TopicContent = styled(Box)`
  padding: 0 20%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
`;
