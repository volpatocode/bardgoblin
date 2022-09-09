import React from "react";

import { PageWrapper, ContentWrapper } from "./styles";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function index() {
  return (
    <PageWrapper>
      <Navbar/>
      <ContentWrapper>
        aaa
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  );
}
