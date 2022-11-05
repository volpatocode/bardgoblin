import styled from "@emotion/styled";
import { Container, Box, Button } from "@mui/material";

export const SectionResults = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 3rem auto;
  min-height: 50vh;
`;
export const TopicQueryInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const TopicFiltersWrapper = styled(Box)``;

export const TopicSearchBar = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;

export const StyledInput = styled.input`
  border: none;
  padding: 1rem 0.2rem 1rem 1rem;
  color: #4f4f4f;
  font-size: 0.85rem;
  letter-spacing: 0.2px;
  background-color: #141414;
  width: fit-content;
  outline: none;
  height: 40px;
  transition: 200ms ease-in-out;
  font-weight: 500;
  ::placeholder {
    color: #4f4f4f;
  }
  border-radius: 7.5px 0 0 7.5px;
`;

export const InputButton = styled(Button)`
  border: none;
  padding: 15px 10px 15px 10px;
  font-size: 0.85rem;
  letter-spacing: 0.2px;
  background-color: #141414;
  border-radius: 0px 7.5px 7.5px 0px;
  display: flex;
  align-items: center;
  color: #4f4f4f;
  max-height: 40px;
  cursor: pointer;
  overflow-y: hidden;
  :hover {
    background-color: #141414;
  }
`;
