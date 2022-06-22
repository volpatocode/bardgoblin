import React from "react";
import Quest from "./section/sidequests";
import Home from "./home/home";
import Builds from "./section/builds";
import Topic from "./topic/topic";
import UserModal from "../components/UserModal";
import ProfilePage from "./profile/account";
import ForgotPassword from "./help/forgotpassword";
import { UserModalContextProvider } from "../contexts/UserModalContext";
import { UserContextProvider } from "../contexts/UserContext";

type propsType = {};

export default function index(): propsType {
  return (
    <>
      <UserModalContextProvider>
        <UserContextProvider>
          <ProfilePage />
        </UserContextProvider>
      </UserModalContextProvider>
    </>
  );
}
