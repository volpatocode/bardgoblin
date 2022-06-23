import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const EmailSent = styled(Box)`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
`;

export const EmailSentBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  background-color: #141414;
  text-align: left;
  width: 40vw;
  height: 100vh;
  padding: 10% 12% 10% 10%;

`;

export const BoxLogo = styled(Box)`
  display: flex;
  width: 100%;
`;

export const BoxContent = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
`;

export const BoxInfo = styled(Box)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
`;

export const InfoSubtitle = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.2px;
  text-align: left;
  font-weight: 400;
`;

export const BoxButtons = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EmailButton = styled(Button)`
  color: #000;
  text-transform: none;
  font-weight: bold;
  background: #ff9900;
  :hover {
    background: #ff9900;
  }
  padding: 6px 16px;
  width: 140px;
`;

export const SkipButton = styled.a`
  color: #ff9900;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  width: 150px;
  :hover {
    text-decoration: underline;
  }
`;

export const BoxFooter = styled(Box)`
  display: flex;
`;
export const FooterInfo = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.2px;
  text-align: left;
  font-weight: 400;
`;

export const InfoAnchor = styled.a`
  color: #dd3e0e;
  text-decoration: none;
  font-size: rem;
  width: fit-content;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
