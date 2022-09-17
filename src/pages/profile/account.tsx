import React from "react";

import Footer from "../../components/Footer";
import ProfileInfo from "../../components/Profile/ProfileInfo";
import Header from "../../components/Profile/ProfileHeader";

import { PageWrapper, Content } from "./accountStyles";

export default function index() {
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
