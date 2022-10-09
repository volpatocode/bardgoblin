import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";

export const PageWrapper = styled(Box)`
  width: 100%;
  background-color: #131313;
  @media (max-width: 1000px) {
    transition: 0.2s ease-in-out;
    padding: 0.3rem 1.5rem 0rem 1.5rem;
  }

  @media (max-width: 400px) {
    transition: 0.2s ease-in-out;
    padding: 0.3rem 0.5rem 0rem 0.5rem;
  }

  .exampleImage {
    width: 100%;
  }
`;

export const About = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 5rem 0 3.5rem 0;
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
  text-align: justify;
  font-weight: 400;
  
`;

export const ContentBox = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;
`;
