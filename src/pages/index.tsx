import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import MainSearchBar from "../components/MainSearchBar";
import AboutAnchor from "../components/AboutAnchor";
import About from "../components/About";

import {
  PageWrapper,
  Content,
  Title,
  Subtitle,
  WrittenContentBox,
  MainView,
} from "../styles/homestyles";

export default function index() {
  const [homeIsLoading, setHomeIsLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setHomeIsLoading(false);
    }, 1800);
  }, []);

  return homeIsLoading ? (
    <Loading />
  ) : (
    <PageWrapper>
      <MainView>
        <Navbar />
        <Content>
          <WrittenContentBox>
            <Title>Speak friendly and enter dear traveler</Title>
            <Subtitle>
              Find and share quests, builds, supplies and others for your
              tabletop rpg
            </Subtitle>
          </WrittenContentBox>
          <MainSearchBar />
        </Content>
        <AboutAnchor />
      </MainView>
      <About />
      <Footer />
    </PageWrapper>
  );
}
