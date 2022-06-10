import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const Navbar = styled(Box)`
  width: 100vw;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 2.5rem 0rem 2.5rem;
  min-height: 60px;
`;

export const NavLeftSide = styled(Box)`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding: 0.5rem 0;
`;

export const NavRightSide = styled(Box)`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding: 0.5rem 0;
`;

export const TextButton = styled(Button)`
  color: #fff;
  text-transform: none;
  :hover {
    background: none;
  }
  padding: 4px 8px;
`;

export const ContainedButton = styled(Button)`
  color: #fff;
  text-transform: none;
  background: #dd3e0e;
  :hover {
    background: #dd3e0e;
  }
  padding: 4px 8px;
`;
