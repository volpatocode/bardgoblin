import React from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MainSearchBar from "../../components/MainSearchBar";

import {
  PageWrapper,
  Content,
  Title,
  Subtitle,
  WrittenContentBox,
} from "./styles";

export default function index() {
  return (
    <PageWrapper>
      <Navbar />
      <Content>
        <WrittenContentBox>
          <Title>Speak friendly and enter dear traveler</Title>
          <Subtitle>
            Find and share quests, builds, supplies and others for your tabletop
            rpg
          </Subtitle>
        </WrittenContentBox>
        <MainSearchBar />
      </Content>
      <Footer />
    </PageWrapper>
  );
}
