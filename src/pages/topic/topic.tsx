import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import {
  TopicWrapper,
  TopicHeader,
  TopicContent,
  TopicTitle,
  TopicBadges,
} from "./styles";
import UserBadge from "../../components/UserBadge";
import LikeBadge from "../../components/LikeBadge";
import CommentBadge from "../../components/CommentBadge";
import BreadcrumbsWrapper from "../../components/Breadcrumbs";

export default function index() {
  return (
    <>
      <TopicWrapper>
        <TopicHeader>
          <Navbar page="topic" />
          <TopicContent>
            <BreadcrumbsWrapper />
            <TopicTitle>
              O Labirinto de Tapista - Uma História de Tormenta 20
            </TopicTitle>
            <TopicBadges>
              <UserBadge />
              <LikeBadge />
              <CommentBadge />
            </TopicBadges>
          </TopicContent>
        </TopicHeader>
      </TopicWrapper>
      <Footer />
    </>
  );
}
