import React from "react";
import Link from "next/link";

import { Wrapper, AnchorWrapper, Anchor } from "./styles";

export default function index() {
  return (
    <Wrapper>
      <Link href="#about">
        <AnchorWrapper>
          <Anchor />
        </AnchorWrapper>
      </Link>
    </Wrapper>
  );
}
