import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { sectionType } from "../types/types";

export const PageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export const HeaderWrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const SectionHeader = styled(Box)<sectionType>`
  background: linear-gradient(rgba(29, 29, 29, 0.6), rgba(29, 29, 29, 0.6)),
    ${(props) => {
      switch (props.section) {
        case "Side Quests":
          return `url("/quests.png") no-repeat center center / cover`;
        case "Builds":
          return `url("/builds.png") no-repeat center center / cover`;
        case "Characters":
          return `url("/characters.png") no-repeat center center / cover`;
        default:
          return `url("/background2.png") no-repeat center center / cover`;
      }
    }};
  width: 100vw;
  height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    height: 60vh;
  }
  @media (max-width: 760px) {
    height: 55vh;
  }
  @media (max-width: 480px) {
    height: 50vh;
  }
  @media (max-width: 420px) {
    height: 45vh;
  }
`;

export const HeaderContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
`;

export const HeaderTitle = styled.h1`
  font-size: 3rem;
  color: #fff;
  font-family: "Uncial Antiqua", cursive;
  text-transform: uppercase;
  text-align: center;
  max-width: 80%;
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

export const HeaderDescription = styled.h3`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 0.2px;
  text-align: center;
  font-weight: 400;
  max-width: 80%;
  @media (max-width: 960px) {
    font-size: 1.1rem;
  }
  @media (max-width: 760px) {
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    max-width: 90%;
  }
  @media (max-width: 420px) {
    font-size: 0.85rem;
  }
`;

export const BorderDivider = styled(Box)`
  border-bottom: 3px solid rgba(29, 29, 29, 1);
  width: 100%;
`;
