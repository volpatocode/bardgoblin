import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Navbar = styled(Box)`
  width: 100vw;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
`;

export const NavLeftSide = styled(Box)`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const NavRightSide = styled(Box)`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`;
