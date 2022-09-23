import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

import { CampfireAnimation, Wrapper, MessageTop, MessageBottom } from "./styles";

export default function index() {
  return (
    <Wrapper>
      <MessageTop>Oops...</MessageTop>
      <CampfireAnimation />
      <MessageBottom>Looks like something went wrong</MessageBottom>
    </Wrapper>
  );
}
