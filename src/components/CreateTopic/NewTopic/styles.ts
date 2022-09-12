import styled from "@emotion/styled";
import { Box} from "@mui/material";

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

export const SelectorsBox = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const TopicTitleBox = styled(Box)`
  width: 100%;
`;
