import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export const NewModule = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1.5rem 0 0 0;
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

export const ModuleHeader = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  flex-wrap: nowrap;
`;

// module remove

export const RemoveIcon = styled(RemoveCircleOutlineIcon)`
  color: #dd3e0e;
`;

export const ModuleRemoveButton = styled(Button)`
  display: flex;
  flex-direction: row;

  align-items: center;
  text-transform: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.45);
  :hover {
    background: transparent;
  }
`;
