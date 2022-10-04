import React, { useContext } from "react";

import Logo from "../Logo";

import { Footer } from "./styles";
import { UtilsContext } from "../../contexts/UtilsContext";

export default function index() {
  const { screenSm } = useContext(UtilsContext);

  return (
    <Footer>
      <Logo variant="icon2" />
      {screenSm ? "Bard Goblin" : "Bard Goblin 2022 | Developed with 🧡"}
    </Footer>
  );
}
