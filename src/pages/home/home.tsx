import React, { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import MainSearchBar from "../../components/MainSearchBar";
import AboutAnchor from "../../components/AboutAnchor";

import {
  PageWrapper,
  MainContent,
  Title,
  Subtitle,
  WrittenContentBox,
  AboutContent,
} from "./styles";

export default function index() {
  const [homeIsLoading, setHomeIsLoading] = useState(false);

  useEffect(() => {
    setHomeIsLoading(true);
    setTimeout(() => {
      setHomeIsLoading(false);
    }, 2000);
  }, []);

  return homeIsLoading ? (
    <Loading />
  ) : (
    <PageWrapper>
      <Navbar />
      <MainContent>
        <WrittenContentBox>
          <Title>Speak friendly and enter dear traveler</Title>
          <Subtitle>
            Find and share quests, builds, supplies and others for your tabletop
            rpg
          </Subtitle>
        </WrittenContentBox>
        <MainSearchBar />
      </MainContent>
      <AboutContent>
        <AboutAnchor />
      </AboutContent>
    </PageWrapper>
  );
}
