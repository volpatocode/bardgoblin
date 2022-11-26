import styled from "@emotion/styled";
import { Box } from "@mui/material";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

export const TopicHiddenInfo = styled(Box)`
  background-color: #232323;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1rem;
  padding: 1rem;
  margin: 1rem 0;
`;

export const TopicHiddenInfoTitleWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const TopicHiddenInfoTitle = styled.h4`
  font-size: 1rem;
  color: #f6f6f6;
  font-weight: 400;
  letter-spacing: 0.4px;
  text-align: center;
`;

export const TopicHiddenInfoContent = styled.p`
  text-align: justify;
  word-break: break-all;
  font-size: 0.9rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.6);
`;

export const DangerIcon = styled(ReportProblemIcon)`
  color: #FF9900;
`;




