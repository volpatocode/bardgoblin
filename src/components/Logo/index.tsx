import React from "react";
import Link from "next/link";
import { Logo } from "./styles";

export type logoType = {
  variant: "horizontal" | "vertical" | "icon";
};

export default function index({ variant }: logoType) {
  const logo = {
    horizontal: "/horizontal-logo.png",
    vertical: "/vertical-logo.png",
    icon: "/icon-logo.png",
  };

  const logoSize = {
    horizontal: "180px",
    vertical: "100px",
    icon: "30px",
  };

  const logoHeight = {
    horizontal: "25px",
    vertical: "60px",
    icon: "40px",
  };

  return (
    <Logo>
      <Link href="/">
        <img style={{ width: logoSize[variant], height: logoHeight[variant]}} src={logo[variant]} />
      </Link>
    </Logo>
  );
}
