import React from "react";

import { ModalAnchor } from "./styles";

type modalAnchorType = {
  text: string;
  onClick?: () => void;
  href?: string;
};

export default function index({ text, onClick, href }: modalAnchorType) {
  return (
    <ModalAnchor onClick={onClick} href={href}>
      {text}
    </ModalAnchor>
  );
}
