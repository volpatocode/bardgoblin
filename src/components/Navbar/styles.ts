import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { navbarType } from "./index";
import MenuIcona from "@mui/icons-material/Menu";
import IconButtona from "@mui/material/IconButton";
import CloseIcona from "@mui/icons-material/Close";

export const Navbar = styled(Box)<navbarType>`
  width: 100vw;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0.3rem 2.5rem 0rem 2.5rem;

  @media (max-width: 960px) {
    transition: 0.2s ease-in-out;
    padding: 0.3rem 1.5rem 0rem 1.5rem;
  }

  @media (max-width: 400px) {
    transition: 0.2s ease-in-out;
    padding: 0.3rem 0.5rem 0rem 0.5rem;
  }
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

export const StyledStack = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;
  @media (max-width: 960px) {
    display: none;
  }
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

// Responsive

export const OpenIconButton = styled(IconButtona)`
  color: #fff;
  display: none;
  @media (max-width: 960px) {
    display: block;
  }
`;

export const CloseIconButton = styled(IconButtona)`
  color: #fff;
`;

export const MenuIcon = styled(MenuIcona)`
  color: #fff;
`;

export const CloseMenuIcon = styled(CloseIcona)`
  color: #fff;
`;

export const BoxModal = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background-color: #141414;

  padding: 0.3rem 2.5rem 0rem 2.5rem;

  @media (max-width: 960px) {
    transition: 0.2s ease-in-out;
    padding: 0.3rem 1.5rem 0rem 1.5rem;
  }

  @media (max-width: 400px) {
    transition: 0.2s ease-in-out;
    padding: 0.3rem 0.5rem 0rem 0.5rem;
  }
`;

export const HeaderModal = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
`;

export const MenuModal = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 3rem;
  width: 50%;
  @media (max-width: 960px) {
    width: 60%;
  }
  @media (max-width: 760px) {
    width: 70%;
  }
  @media (max-width: 560px) {
    width: 90%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const ModalButton = styled(Button)`
  color: #fff;
  text-transform: uppercase;
  :hover {
    background: none;
  }
  padding: 4px 8px;
  border-radius: 0px;
  font-size: 2rem;
`;

export const FooterModal = styled(Box)`
  height: 4px;
  background-color: #ff9900;
  border-radius: 5px;
  margin-bottom: 3rem;
  width: 60%;

`;
