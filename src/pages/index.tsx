import React from "react";
import Quest from "./sections/quest/quest";
import Home from "./home/home";

type propsType = {};

export default function index(): propsType {
  return (
    <>
      <Home />
      <Quest />
    </>
  );
}
