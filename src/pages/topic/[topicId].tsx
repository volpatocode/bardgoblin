import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import UserBadge from "../../components/UserBadge";
import LikeBadge from "../../components/LikeBadge";
import CommentBadge from "../../components/CommentBadge";
import BreadcrumbsWrapper from "../../components/Topic/Breadcrumbs";
import TopicIntroduction from "../../components/Topic/TopicIntroduction";
import TopicModule from "../../components/Topic/TopicModule";
import TopicHiddenInfo from "../../components/Topic/TopicHiddenInfo";
import OptionalQuestAccordion from "../../components/Topic/OptionalQuestAccordion";
import { BorderDivider } from "../section/sectionStyles";

import {
  TopicWrapper,
  TopicHeaderWrapper,
  TopicHeader,
  TopicHeaderContent,
  TopicTitle,
  TopicBadges,
  TopicContent,
} from "./styles";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { topicData, userData } from "../../types/user";
import { Label } from "../../components/Topic/Breadcrumbs/styles";

export default function index() {
  const [topicData, setTopicData] = useState({} as topicData);
  const [userData, setUserData] = useState({} as userData);
  const topicId = useRouter().query.topicId;
  const userId = topicData?.userUID

  useEffect(() => {
    const fetchTopicData = async () => {
      const docRef = doc(db, "topics", `${topicId}`);
      const docSnap = await getDoc(docRef);
      // @ts-ignore
      docSnap.exists() && setTopicData(docSnap.data());
    };
    fetchTopicData();
  }, [topicId]);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  useEffect(() => {
    const fetchUserData = async () => {
      const docRef = doc(db, "users", `${userId}`);
      const docSnap = await getDoc(docRef);
      // @ts-ignore
      docSnap.exists() && setUserData(docSnap.data());
    };
    fetchUserData();
  }, [userId]);

  return (
    <TopicWrapper>
      <TopicHeaderWrapper>
        <TopicHeader>
          <Navbar page="topic" />
          <TopicHeaderContent>
            <BreadcrumbsWrapper
              topicId={topicId}
              topicType="Side Quest"
              labels={topicData?.topic?.labels.map((label) => {
                return <Label key={label}>{label}</Label>;
              })}
            />
            <TopicTitle>{topicData?.topic?.topictitle}</TopicTitle>
            <TopicBadges>
              <UserBadge
                displayName={userData?.displayName}
                photoURL={userData.photoURL}
              />
              {/* <LikeBadge />
              <CommentBadge /> */}
            </TopicBadges>
          </TopicHeaderContent>
          <BorderDivider />
        </TopicHeader>
      </TopicHeaderWrapper>
      <TopicContent>
        {topicData?.topic?.modules?.map((module) => {
          return (
            <TopicModule
              key={module?.moduletitle}
              title={module?.moduletitle}
              content={module?.modulecontent}
            />
          );
        })}
        {/* <TopicHiddenInfo />
        <OptionalQuestAccordion /> */}
      </TopicContent>
      <Footer />
    </TopicWrapper>
  );
}
