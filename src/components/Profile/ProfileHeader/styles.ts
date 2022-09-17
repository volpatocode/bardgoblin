import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ProfileHeader = styled(Box)`
  background: linear-gradient(rgba(29, 29, 29, 0.6), rgba(29, 29, 29, 0.6)),
    url("/profile.jpg") no-repeat center center / cover;
  width: 100vw;
  height: 45vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileGreetings = styled.h4`
  font-size: 3rem;
  color: #fff;
  font-family: "Uncial Antiqua", cursive;
  text-transform: uppercase;
  text-align: center;
  max-width: 70%;
  @media (max-width: 1200px) {
    font-size: 2.6rem;
  }
  @media (max-width: 960px) {
    font-size: 2.2rem;
  }
  @media (max-width: 660px) {
    font-size: 1.9rem;
    max-width: 80%;
  }
  @media (max-width: 460px) {
    font-size: 1.7rem;
    max-width: 85%;
  }
`;
