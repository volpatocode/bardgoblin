import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const ProfilePageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

export const ProfilePageContent = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-height: 90vh;
  height: 100%;
`;

export const ProfileGreetings = styled.h4`
  font-size: 3rem;
  color: #fff;
  font-family: "Uncial Antiqua", cursive;
  text-transform: uppercase;
  text-align: center;
  max-width: 70%;
`;

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
