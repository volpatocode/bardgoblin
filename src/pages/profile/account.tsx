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
import { useRouter } from "next/router";

export default function index() {
  const { currentUser } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/");
    }
  }, [currentUser]);

  return currentUser ? (
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
  ) : (
    <h1>CARREGANDO</h1>
  );
}
