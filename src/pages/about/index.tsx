import React from "react";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import { PageWrapper, ContentWrapper } from "./styles";

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
