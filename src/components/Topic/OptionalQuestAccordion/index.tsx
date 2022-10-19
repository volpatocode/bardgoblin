import React from "react";

import BadgeID from "../BadgeID";

import {
  OptionalQuestAccordion,
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
  OptionalQuestInfo,
  OptionalQuestTitle,
  StyledVisibilityIcon,
  StyledExpandMoreIcon,
} from "./styles";

export default function index() {
  return (
    <OptionalQuestAccordion>
      <StyledAccordion>
        <StyledAccordionSummary
          expandIcon={<StyledExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <OptionalQuestTitle>
            <StyledVisibilityIcon />
            Fighting the Orc
            <BadgeID id="BG4564122247" />
          </OptionalQuestTitle>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <OptionalQuestInfo>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </OptionalQuestInfo>
        </StyledAccordionDetails>
      </StyledAccordion>
      <StyledAccordion>
        <StyledAccordionSummary
          expandIcon={<StyledExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <OptionalQuestTitle>
            <StyledVisibilityIcon />
            Helping the Orc
            <BadgeID id="BG7411122247" />
          </OptionalQuestTitle>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <OptionalQuestInfo>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </OptionalQuestInfo>
        </StyledAccordionDetails>
      </StyledAccordion>
    </OptionalQuestAccordion>
  );
}
