import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import UserBadge from "../../components/UserBadge";

import Breadcrumbs from "../../components/Topic/Breadcrumbs";

import TopicModule from "../../components/Topic/TopicModule";

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
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { topicData, userData } from "../../types/user";
import { Label } from "../../components/Topic/Breadcrumbs/styles";
import ContinueBrowsing from "../../components/Topic/ContinueBrowsing";
import { UserContext } from "../../contexts/UserContext";

export default function index() {
  const { screenSm } = useContext(UserContext);
  const [topicData, setTopicData] = useState({} as topicData);
  const [userData, setUserData] = useState({} as userData);
  const topicId = useRouter().query.topicId;
  const userId = topicData?.userUID;

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
          <Navbar />
          <TopicHeaderContent maxWidth="md">
            <Breadcrumbs
              topicId={topicId}
              topicType={topicData?.section}
              labels={topicData?.labels?.map((label) => {
                return <Label key={label}>{label}</Label>;
              })}
            />
            <TopicTitle>{topicData?.topictitle}</TopicTitle>
            <TopicBadges>
              <UserBadge
                displayName={userData?.displayName}
                photoURL={userData?.photoURL}
              />
              {/* <LikeBadge />
              <CommentBadge /> */}
            </TopicBadges>
          </TopicHeaderContent>
          <BorderDivider />
        </TopicHeader>
      </TopicHeaderWrapper>
      <TopicContent maxWidth="lg">
        {topicData?.modules?.map((module) => {
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
      {screenSm ? <ContinueBrowsing section="Side Quests" /> : <Footer />}
    </TopicWrapper>
  );
}
