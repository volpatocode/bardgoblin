import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { HomeWrapper } from "./styles";
import HomeSearchBar from "../../components/HomeSearchBar";

export default function index() {
  return (
    <>
      <HomeWrapper>
        <Navbar />
        <HomeSearchBar/>
      </HomeWrapper>
      <Footer />
    </>
  );
}
