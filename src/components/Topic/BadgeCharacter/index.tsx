import React from "react";
import { BadgeCharacter, CharacterImage } from "./styles";

export type badgeType = {};

export default function index({}: badgeType) {
  return (
    <BadgeCharacter>
      <CharacterImage src="https://pbs.twimg.com/profile_images/1208753996418232321/oB769Osy_400x400.jpg" />
      tempora sizus
    </BadgeCharacter>
  );
}
