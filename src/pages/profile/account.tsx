import React, { useContext, useEffect } from "react";
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
  const { isAuthorized } = useContext(UserContext);
  
  useEffect(() => {
    console.log(isAuthorized)
  }, [isAuthorized])

  if (isAuthorized) {
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
  if (!isAuthorized) {
    return <h4>teste</h4>;
  }
}
