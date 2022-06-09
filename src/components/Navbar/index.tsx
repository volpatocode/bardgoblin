import React from "react";
import { Navbar, NavLeftSide, NavRightSide } from "./styles";
import Logo  from "../Logo";

export type propsType = {};

export default function index() {
  return (
    <>
      <Navbar>
        <NavLeftSide>
          <Logo variant="horizontal" />
        </NavLeftSide>
        <NavRightSide></NavRightSide>
      </Navbar>
    </>
  );
}
