import React from "react";
import Link from "next/link";

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
      <Link href="/">
        <WrapperAnimation>
          <MessageTop>Oops...</MessageTop>
          -<CampfireAnimation />
          <MessageBottom>Looks like something went wrong</MessageBottom>
        </WrapperAnimation>
      </Link>
    </Wrapper>
  );
}
