import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const TopicTitle = styled.input`
  color: #ff9900;
  border: 1px solid rgba(29, 29, 29, 0.7);
  background: transparent;
  outline: none;
  font-size: 1rem;
  width: 100%;
  line-height: 1.75;
  padding: 8px;
  border-radius: 5px;
  :focus {
    border: 1px solid #ff9900;
  }
`;

export const NewTopic = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
