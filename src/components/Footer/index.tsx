import React from "react";
import { Footer } from "./styles";
import Logo from "../Logo";

export type footerType = {};

export default function index({}: footerType) {
  return (
    <Footer>
        <Logo variant="icon2" />
      BardGoblin 2022 | Developed with 🧡
    </Footer>
  );
}
