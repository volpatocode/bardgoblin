import React from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MainSearchBar from "../../components/MainSearchBar";

import {
  HomeWrapper,
  HomeContent,
  HomeTitle,
  HomeSubtitle,
  WrittenContent,
  HomeMainContent,
} from "./styles";

export default function index() {
  return (
      <HomeWrapper>
        <HomeMainContent>
          <Navbar page="home" />
          <HomeContent>
            <WrittenContent>
              <HomeTitle>Speak friendly and enter dear traveler</HomeTitle>
              <HomeSubtitle>
                Find and share quests, builds, supplies and others for your
                tabletop rpg
              </HomeSubtitle>
            </WrittenContent>
            <MainSearchBar />
          </HomeContent>
          <Footer />
        </HomeMainContent>
      </HomeWrapper>
  );
}
