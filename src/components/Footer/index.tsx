import React from "react";

import { useMediaQuery } from "@mui/material";

import Logo from "../Logo";

import { Footer } from "./styles";

export default function index() {
  const screenSm = useMediaQuery("(max-width:600px)");
  return (
    <Footer>
      <Logo variant="icon2" />
      {screenSm ? " BardGoblin" : "BardGoblin 2022 | Developed with 🧡"}
    </Footer>
  );
}
