import React from "react";
import Link from "next/link";

export type logoType = {
  variant: "horizontal" | "vertical" | "icon";
};

export default function index({ variant }: logoType) {
  const logo = {
    horizontal: "/horizontal-logo.png",
    vertical: "/vertical-logo.png",
    icon: "/icon-logo.png",
  }

  return (
    <>
      <Link href="/">
        <img src={logo[variant]}/>
      </Link>
    </>
  );
}
