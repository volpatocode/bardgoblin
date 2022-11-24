import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import Footer from "../../components/Footer";
import ProfileInfo from "../../components/Profile/ProfileInfo";
import Header from "../../components/Profile/ProfileHeader";
import Unauthorized from "../../components/Unauthorized";

import { PageWrapper, Content } from "../../styles/accountstyles";

export default function index() {
  const { isAuthorized, isUserLoading } = useContext(UserContext);

  if (isUserLoading || isAuthorized) {
    return (
      <PageWrapper>
        <Header />
        <Content>
          <ProfileInfo />
        </Content>
        <Footer />
      </PageWrapper>
    );
  }
  return <Unauthorized />;
}
