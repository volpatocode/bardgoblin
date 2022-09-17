import React, { useContext } from "react";

import { useMediaQuery } from "@mui/material";

import Logo from "../Logo";

import { Footer } from "./styles";
import { UserContext } from "../../contexts/UserContext";

export default function index() {
  const { screenSm } = useContext(UserContext);

  return (
    <Footer>
      <Logo variant="icon2" />
      {screenSm ? " BardGoblin" : "BardGoblin 2022 | Developed with 🧡"}
    </Footer>
  );
}
