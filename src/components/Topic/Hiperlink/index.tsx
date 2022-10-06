import React from "react";

import { HiperLink } from "./styles";

type hiperLinkType = {
  text: string;
  href?: string;
  onClick?: any;
};

export default function index({ text, href, onClick }: hiperLinkType) {
  return (
    <HiperLink href={href} onClick={onClick}>
      {text}
    </HiperLink>
  );
}
