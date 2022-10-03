import React from "react";
import Link from "next/link";

import { Wrapper, AboutAnchor } from "./styles";

export default function index() {
  return (
    <Link href="#about">
      <Wrapper>
        <AboutAnchor />
      </Wrapper>
    </Link>
  );
}
