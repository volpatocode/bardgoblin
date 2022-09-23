import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

import { CampfireAnimation, Wrapper } from "./styles";

export default function index() {
  return (
    <Wrapper>
      <Navbar />
      <CampfireAnimation/>
      <Footer />
    </Wrapper>
  );
}
