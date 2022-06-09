import React from "react";
import Link from "next/link";
import { Logo } from "./styles";

export type logoType = {
  variant: "horizontal" | "vertical" | "icon";
};

export default function index({ variant }: logoType) {
  return (
    <>
      <Link href="/">
        <Logo variant={variant} />
      </Link>
    </>
  );
}
