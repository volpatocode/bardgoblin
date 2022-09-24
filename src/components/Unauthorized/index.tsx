import React from "react";

import {
  Wrapper,
  WrapperAnimation,
  CampfireAnimation,
  MessageTop,
  MessageBottom,
} from "./styles";

export default function index() {
  return (
    <Wrapper>
      <WrapperAnimation>
        <MessageTop>Oops...</MessageTop>
        -<CampfireAnimation />
        <MessageBottom>Looks like something went wrong</MessageBottom>
      </WrapperAnimation>
    </Wrapper>
  );
}
