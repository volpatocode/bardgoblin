import React, { useContext } from "react";
import Navbar from "../../Navbar";
import { BorderDivider } from "../../../pages/section/sectionStyles";

import { ProfileHeader, ProfileGreetings } from "./styles";
import { UserContext } from "../../../contexts/UserContext";

export default function index() {
  const { currentUser } = useContext(UserContext);
  return (
    <ProfileHeader>
      <Navbar page="home" />
      <ProfileGreetings>
        Welcome, {currentUser?.displayName || "Traveler"}
      </ProfileGreetings>
      <BorderDivider />
    </ProfileHeader>
  );
}
