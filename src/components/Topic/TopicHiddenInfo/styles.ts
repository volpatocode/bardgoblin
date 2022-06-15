import styled from "@emotion/styled";
import { Box } from "@mui/material";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

export const TopicHiddenInfoWrapper = styled(Box)`
  background-color: #232323;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1rem;
  padding: 1rem;
`;

export const TopicHiddenInfoTitleWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  align-items: center;
`;

export const TopicHiddenInfoTitle = styled.h4`
  font-size: 1rem;
  color: #ffffff;
  font-weight: 400;
  letter-spacing: 0.4px;
  text-align: center;
`;

export const TopicHiddenInfoContent = styled.p`
  text-align: justify;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
`;

export const DangerIcon = styled(ReportProblemIcon)`
  color: #FF9900;
`;

