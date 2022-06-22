import React, { useContext } from "react";
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

export default function index() {
  return (
    <ProfilePageWrapper>
      <ProfileHeader>
        <Navbar page="home" />
        <ProfileGreetings>Welcome, John Doe</ProfileGreetings>
        <BorderDivider />
      </ProfileHeader>
      <ProfilePageContent>
        <ProfileInfo />
      </ProfilePageContent>
      <Footer />
    </ProfilePageWrapper>
  );
}
