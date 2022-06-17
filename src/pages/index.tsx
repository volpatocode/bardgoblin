import React from "react";
import Quest from "./sections/quest/quest";
import Home from "./home/home";
import Builds from "./sections/builds/builds";
import Topic from "./topic/topic";
import UserModal from "../components/UserModal";
import ForgotPassword from "./forgotPassword/forgotPassword";
import { UserModalContextProvider } from "../contexts/UserModalContext";
import { UserContextProvider } from "../contexts/UserContext";

type propsType = {};

export default function index(): propsType {
  return (
    <>
      <UserModalContextProvider>
        <UserContextProvider>
          <ForgotPassword/>
        </UserContextProvider>
      </UserModalContextProvider>
    </>
  );
}
