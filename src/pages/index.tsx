import React from "react";
import Quest from "./sections/quest/quest";
import Home from "./home/home";
import Builds from "./sections/builds/builds";
import Topic from "./topic/topic";
import UserModal from "../components/UserModal";
import { UserModalContextProvider } from "../contexts/UserModalContext";

type propsType = {};

export default function index(): propsType {
  return (
    <>
      <UserModalContextProvider>
        <Home/>
      </UserModalContextProvider>
    </>
  );
}
