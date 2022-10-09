import React from "react";
import Link from "next/link";

import { browsingRefType } from "../../../types/types";

import { ArrowRight, ContinueBrowsing } from "./styles";

export default function index({ text }: browsingRefType) {
  const sections = {
    "Side Quests": "/section/sidequests",
    "Builds": "/section/builds",
    "Characters": "/section/characters",
    "Home": "/"
  };

  return (
    <Link href={sections[text]}>
      <ContinueBrowsing>
        Continue browsing in {text} <ArrowRight fontSize="medium" />
      </ContinueBrowsing>
    </Link>
  );
}
