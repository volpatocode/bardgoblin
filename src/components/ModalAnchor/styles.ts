import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const ModalAnchor = styled(Button)`
  color: #fff;
  text-transform: uppercase;
  :hover {
    background: none;
  }
  padding: 4px 8px;
  border-radius: 0px;
  font-size: 2rem;
  @media (max-width: 960px) {
    font-size: 1.8rem;
  }
  @media (max-width: 760px) {
    font-size: 1.5rem;
  }

  @media (max-width: 420px) {
    font-size: 1.3rem;
  }
`;
