import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import Footer from "../../components/Footer";
import ProfileInfo from "../../components/Profile/ProfileInfo";
import Header from "../../components/Profile/ProfileHeader";
import Unauthorized from "../../components/Unauthorized";

import { PageWrapper, Content } from "./accountStyles";

export default function index() {
  const { currentUser } = useContext(UserContext);

  if (currentUser) {
    return (
      <PageWrapper>
        <Header />
        <Content>
          <ProfileInfo />
        </Content>
        <Footer />
      </PageWrapper>
    );
  } else {
    return <Unauthorized />;
  }
}
