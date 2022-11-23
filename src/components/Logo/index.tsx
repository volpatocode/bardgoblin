import React from "react";

import Link from "next/link";

import { Logo } from "./styles";

export type logoType = {
  variant: "horizontal" | "vertical" | "icon" | "icon2";
};

export default function index({ variant }: logoType) {
  const logo = {
    horizontal: "/horizontal-logo.svg",
    vertical: "/vertical-logo.svg",
    icon: "/icon-logo.svg",
    icon2: "/icon-logo2.svg",
  };

  const logoWidth = {
    horizontal: "180px",
    vertical: "120px",
    icon: "30px",
    icon2: "30px",
  };

  const logoHeight = {
    horizontal: "25px",
    vertical: "60px",
    icon: "40px",
    icon2: "40px",
  };

  return (
    <Logo>
      <Link href="/">
        <a>
          <img
            style={{ width: logoWidth[variant], height: logoHeight[variant] }}
            src={logo[variant]}
          />
        </a>
      </Link>
    </Logo>
  );
}
