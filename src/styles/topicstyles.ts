import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";

export const PageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`;

export const Header = styled(Box)`
  background: linear-gradient(rgba(29, 29, 29, 0.8), rgba(29, 29, 29, 0.8)),
    url("/background2.png") no-repeat center center / cover;
  width: 100vw;
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContent = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  font-weight: 700;
  text-align: center;
  margin: 1rem 0;
  max-width: 80%;
  ::first-letter {
    text-transform: uppercase;
  }
  @media (max-width: 960px) {
    font-size: 2.5rem;
  }
  @media (max-width: 760px) {
    font-size: 2.2rem;
  }
  @media (max-width: 480px) {
    max-width: 90%;
  }
  @media (max-width: 420px) {
    font-size: 1.8rem;
  }
`;

export const BoxBadges = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const MainContent = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2.5rem 0;
`;
