import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";

export const PageWrapper = styled(Box)`
  width: 100%;
  background-color: #161616;
  height: 20vh;
`;


export const About = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;
  padding: 3rem 0;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  text-align: center;

`;

export const Typography = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: left;
  font-weight: 400;

`;






