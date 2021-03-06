import styled from "@emotion/styled";
import { Box } from "@mui/material";

export type sectionType = {
  section: "quest" | "builds";
};

export const SectionWrapper = styled(Box)`
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
        case "quest":
          return `url("/quests.png") no-repeat center center / cover`;
        case "builds":
          return `url("/builds.png") no-repeat center center / cover`;
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
`;

export const SectionContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
`;

export const SectionTitle = styled.h1`
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

export const SectionDescription = styled.h3`
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

export const SectionResults = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
  padding: 0 15%;
  @media (max-width: 960px) {
    padding: 0.3rem 1.5rem 0rem 1.5rem;
  }

  @media (max-width: 400px) {
    padding: 0.3rem 0.5rem 0rem 0.5rem;
  }
`;

export const TopicListTitle = styled.h4`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.1px;
  text-align: left;
  font-weight: 400;
`;

export const TopicQueryInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const TopicFiltersWrapper = styled(Box)``;

export const BorderDivider = styled(Box)`
  border-bottom: 3px solid rgba(29, 29, 29, 1);
  width: 100%;
`;
