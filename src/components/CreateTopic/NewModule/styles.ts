import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const NewModule = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ModuleTitleInput = styled.input`
  color: #dd3e0e;
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

export const ModuleInput = styled.textarea`
  color: rgba(255, 255, 255, 0.45);
  border: 1px solid rgba(29, 29, 29, 0.7);
  background: transparent;
  outline: none;
  font-size: 1rem;
  width: 100%;
  line-height: 1.75;
  padding: 8px;
  border-radius: 5px;
  resize: none;
  :focus {
    border: 1px solid #dd3e0e;
  }
`;

export const ModuleDivider = styled(Box)`
  width: 100%;
  margin: 0 auto;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
`;
