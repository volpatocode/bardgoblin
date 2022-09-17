import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const TopicListWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const QueryTopic = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.5rem 0;
  column-gap: 0.75rem;
  row-gap: 0.4rem;
  background-color: #141414;
  padding: 0.5rem;
  border-radius: 15px;
  cursor: pointer;
  transition: 200ms ease-in-out;
`;

export const LeftSideTopic = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`;

export const TopicContent = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 0.1px;
  text-align: left;
  font-weight: 400;
  display: flex;
  transition: 200ms ease-in-out;
  :hover {
    color: #ff9900;
    cursor: pointer;
  }
`;

export const Labels = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

export const Label = styled(Button)`
  color: rgba(255, 255, 255, 0.75);
  text-transform: none;
  background: none;
  padding: 3px 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.15rem;
  border-radius: 20px;
  font-size: 0.7rem;
  min-width: 0;
  transition: 200ms ease-in-out;
  :hover {
    background: none;
    color: #ff9900;
  }
`;
