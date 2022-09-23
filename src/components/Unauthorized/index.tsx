import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

import {
  CampfireAnimation,
  Wrapper,
  WrapperAnimation,
  MessageTop,
  MessageBottom,
} from "./styles";

export default function index() {
  return (
    <Wrapper>
      <WrapperAnimation>
        <MessageTop>Oops...</MessageTop>
-<CampfireAnimation/>
        <MessageBottom>Looks like something went wrong</MessageBottom>
      </WrapperAnimation>
    </Wrapper>
  );
}
