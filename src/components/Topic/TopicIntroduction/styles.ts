import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const TopicIntroduction = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const IntroductionTitle = styled.h4`
  font-size: 1rem;
  color: #fff;
  font-weight: 400;
  letter-spacing: 0.4px;
  text-align: center;
`;

export const IntroductionContent = styled.p`
  text-align: justify;
  font-size: 1rem;
  letter-spacing: 0.2px;
  color: rgba(255, 255, 255, 0.5);
  ::first-letter {
    text-transform: uppercase;
  }
`;

export const IntroductionDivider = styled(Box)`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #434343;
  margin-top: 1rem;
`;
