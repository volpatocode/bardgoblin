import React, { useContext } from "react";
import { ProfilePageWrapper, ProfilePageContent } from "./accountStyles";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileInfo from "../../components/Profile/ProfileInfo";

export default function index() {
  return (
    <ProfilePageWrapper>
      <Navbar page="home" />
      <ProfilePageContent>
        <ProfileHeader />
        <ProfileInfo />
      </ProfilePageContent>
      <Footer />
    </ProfilePageWrapper>
  );
}
