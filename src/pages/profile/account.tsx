import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProfileInfo from "../../components/Profile/ProfileInfo";
import Unauthorized from "../../components/UnauthorizedPage/index";
import { BorderDivider } from "../section/sectionStyles";

import {
  ProfilePageWrapper,
  ProfilePageContent,
  ProfileHeader,
  ProfileGreetings,
} from "./accountStyles";

export default function index() {
  const { currentUser, isAuthorized } = useContext(UserContext);

  if (isAuthorized) {
    return (
      <ProfilePageWrapper>
        <ProfileHeader>
          <Navbar page="home" />
          <ProfileGreetings>
            Welcome, {currentUser?.displayName || "Traveler"}
          </ProfileGreetings>
          <BorderDivider />
        </ProfileHeader>
        <ProfilePageContent>
          <ProfileInfo />
        </ProfilePageContent>
        <Footer />
      </ProfilePageWrapper>
    );
  } else {
    return <Unauthorized />;
  }
}
