import React from "react";

import { BadgeID } from "./styles";

type badgeIDType = {
  id: string;
};
export default function index({ id }: badgeIDType) {
  return <BadgeID>{id}</BadgeID>;
}
