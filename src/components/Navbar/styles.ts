import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Navbar = styled.div`
  height: 60px;
  width: 100%;
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
`;

export const NavRightSide = styled(Box)`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  align-items: center;
`;
