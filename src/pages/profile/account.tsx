import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import Footer from "../../components/Footer";
import ProfileInfo from "../../components/Profile/ProfileInfo";
import Unauthorized from "../../components/UnauthorizedPage/index";
import ProfileHeader from "../../components/Profile/ProfileHeader";

import { ProfilePageWrapper, ProfilePageContent } from "./accountStyles";

export default function index() {
  const { isAuthorized } = useContext(UserContext);

  if (isAuthorized) {
    return (
      <ProfilePageWrapper>
        <ProfileHeader />
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
