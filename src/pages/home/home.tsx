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
import HomeSearchBar from "../../components/HomeSearchBar";

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
            <HomeSearchBar />
          </HomeContent>
          <Footer />
        </HomeMainContent>
      </HomeWrapper>
    </>
  );
}
