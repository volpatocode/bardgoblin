import React from "react";
import Quest from "./section/sidequests";
import Home from "./home/home";
import Builds from "./section/builds";
import Topic from "./topic/topic";
import UserModal from "../components/UserModal";
import ProfilePage from "./profile/account";
import ForgotPassword from "./help/forgotpassword";
import EmailSent from "./help/emailsent";

type propsType = {};

export default function index(): propsType {
  return <Home/>
}
