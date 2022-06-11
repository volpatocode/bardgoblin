import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const UserModal = styled(Box)``;

export const BoxModal = styled(Box)`
  position: absolute;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  text-align: left;
`;

export const LogoBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const SelectButtonBox = styled(Box)``;

export const SelectButton = styled(Button)`
  color: #fff;
  text-transform: none;
  padding: 4px 8px;
  border-radius: 0px;
  :hover {
    background: none;
  };
`;
