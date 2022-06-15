import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import {
  TopicWrapper,
  TopicHeader,
  TopicHeaderContent,
  TopicTitle,
  TopicBadges,
  TopicContent,
} from "./styles";
import UserBadge from "../../components/UserBadge";
import LikeBadge from "../../components/LikeBadge";
import CommentBadge from "../../components/CommentBadge";
import BreadcrumbsWrapper from "../../components/Breadcrumbs";
import TopicIntroduction from "../../components/TopicIntroduction";

export default function index() {
  return (
    <>
      <TopicWrapper>
        <TopicHeader>
          <Navbar page="topic" />
          <TopicHeaderContent>
            <BreadcrumbsWrapper />
            <TopicTitle>
              O Labirinto de Tapista - Uma História de Tormenta 20
            </TopicTitle>
            <TopicBadges>
              <UserBadge />
              <LikeBadge />
              <CommentBadge />
            </TopicBadges>
          </TopicHeaderContent>
        </TopicHeader>
      </TopicWrapper>
      <TopicContent>
        <TopicIntroduction/>
      </TopicContent>
      <Footer />
    </>
  );
}
