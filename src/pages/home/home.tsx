import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  HomeWrapper,
  HomeContent,
  HomeTitle,
  HomeSubtitle,
  WrittenContent,
} from "./styles";
import HomeSearchBar from "../../components/HomeSearchBar";

export default function index() {
  return (
    <>
      <HomeWrapper>
        <Navbar />
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
      </HomeWrapper>
    </>
  );
}
