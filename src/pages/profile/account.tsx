import React, { useContext} from "react";
import {
  ProfilePageWrapper,
  ProfilePageContent,
  ProfileHeader,
  ProfileGreetings,
} from "./accountStyles";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProfileInfo from "../../components/Profile/ProfileInfo";
import { BorderDivider } from "../section/sectionStyles";
import { UserContext } from "../../contexts/UserContext";

export default function index() {
  const { currentUser } = useContext(UserContext);
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
}
