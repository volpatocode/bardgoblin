import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Quest = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;
`;

export const QuestHeader = styled(Box)`
  background: linear-gradient(rgba(29, 29, 29, 0.7), rgba(29, 29, 29, 0.7)),
    url("/quests.png") no-repeat center center / cover;
  width: 100vw;
  height: 65vh;
  border-bottom: 1px solid rgba(29, 29, 29, 1);
`;

export const QuestContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70%;
  gap: 0.5rem;
`;

export const QuestTitle = styled.h1`
  font-size: 3rem;
  color: #fff;
  font-family: "The Wild Breath of Zelda";
  text-transform: uppercase;
  letter-spacing: 0.2px;
  text-align: center;
`;

export const QuestDescription = styled.h3`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 0.2px;
  text-align: center;
  font-weight: 400;
`;

export const QuestResults = styled(Box)`
  padding: 0 15%;
`;

export const ResultsListTitle = styled.h4`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.1px;
  text-align: left;
  font-weight: 400;
`;
