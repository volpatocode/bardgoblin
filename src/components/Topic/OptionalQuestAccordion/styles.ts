import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const OptionalQuestAccordion = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const StyledAccordion = styled(Accordion)`
  background: transparent;
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  background-color: #171717;
  border-radius: 10px 10px 0 0;
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
  background-color: #171717;
`;

export const OptionalQuestTitle = styled.h4`
  font-size: 1rem;
  color: #f6f6f6;
  font-weight:500;
  letter-spacing: 0.4px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
`;

export const OptionalQuestInfo = styled.p`
  text-align: justify;
  font-size: 1rem;
  letter-spacing: 0.2px;
  color: #f6f6f6;
`;

export const StyledVisibilityIcon = styled(VisibilityIcon)`
  color: rgba(255, 255, 255, 0.5);
`;

export const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  color: rgba(255, 255, 255, 0.5);
`;
