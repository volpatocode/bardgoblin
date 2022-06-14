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
  background: linear-gradient(rgba(29, 29, 29, 0.6), rgba(29, 29, 29, 0.6)), ${(props) => {
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
  border-bottom: 1px solid rgba(29, 29, 29, 1);
`;

export const SectionContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70%;
  gap: 0.5rem;
`;

export const SectionTitle = styled.h1`
  font-size: 3rem;
  color: #fff;
  font-family: "The Wild Breath of Zelda";
  text-transform: uppercase;
  text-align: center;
  max-width: 70%;
`;

export const SectionDescription = styled.h3`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 0.2px;
  text-align: center;
  font-weight: 400;
`;

export const SectionResults = styled(Box)`
  padding: 0 15%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
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
