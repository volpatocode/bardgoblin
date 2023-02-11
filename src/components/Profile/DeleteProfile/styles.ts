import styled from "@emotion/styled";
import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const DeleteButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 100%;
  background: rgba(255, 30, 0, 1);
  :disabled {
    background: #c3c3c3;
  }
  :hover {
    background: rgba(255, 30, 0, 1);
  }
  @media (max-width: 560px) {
    font-size: 1.08rem;
  }
`;

export const DeleteIcon = styled(DeleteForeverIcon)`
  color: #fff;
`;
