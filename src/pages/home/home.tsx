import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  HomeWrapper,
  HomeContent,
  HomeTitle,
  HomeSubtitle,
  WrittenContent,
  HomeMainContent,
} from "./styles";
import MainSearchBar from "../../components/MainSearchBar";

export default function index() {
  return (
    <>
      <HomeWrapper>
        <HomeMainContent>
          <Navbar page="home" />
          <HomeContent>
            <WrittenContent>
              <HomeTitle>Speak friend and enter dear traveler</HomeTitle>
              <HomeSubtitle>
                Find and share quests, builds, supplies and others for your
                tabletop rpg
              </HomeSubtitle>
            </WrittenContent>
            <MainSearchBar/>
          </HomeContent>
          <Footer />
        </HomeMainContent>
      </HomeWrapper>
    </>
  );
}
