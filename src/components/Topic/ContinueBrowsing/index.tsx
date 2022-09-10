import Link from "next/link";
import React from "react";
import { sectionType } from "../../../types/user";

import { ArrowRight, ContinueBrowsing } from "./styles";

export default function index({ section }: sectionType) {
  const sections = {
    "Side Quests": "/section/sidequests",
    "Builds": "/section/builds",
    "Characters": "/section/characters",
  };

  return (
    <Link href={sections[section]}>
      <ContinueBrowsing>
        Continue browsing in {section} <ArrowRight fontSize="medium" />
      </ContinueBrowsing>
    </Link>
  );
}
