import React from "react";

import { BadgeOption } from "./styles";

type optionType = {
  option: string;
}

export default function index({option} : optionType) {
  return <BadgeOption>{option}</BadgeOption>;
}
