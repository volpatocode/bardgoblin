import React from "react";
import Home from "./home/home";
import UserModal from "../components/UserModal";

type propsType = {};

export default function index(): propsType {

  return (
    <>
    <Home/>
    <UserModal/>
    </>
  );
}
