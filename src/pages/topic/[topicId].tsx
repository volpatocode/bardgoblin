import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UtilsContext } from "../../contexts/UtilsContext";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import UserBadge from "../../components/UserBadge";
import Breadcrumbs from "../../components/Topic/Breadcrumbs";
import Module from "../../components/Topic/Module";
import ContinueBrowsing from "../../components/Topic/ContinueBrowsing";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { topicData, userData } from "../../types/types";

import {
  PageWrapper,
  Header,
  HeaderContent,
  Title,
  BoxBadges,
  MainContent,
} from "./styles";
import { BorderDivider } from "../section/sectionStyles";
import { Label } from "../../components/Topic/Breadcrumbs/styles";

export default function index() {
  const { screenSm } = useContext(UtilsContext);
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
    <PageWrapper>
      <Header>
        <Navbar />
        <HeaderContent maxWidth="md">
          <Breadcrumbs
            topicId={topicId}
            topicType={topicData?.section}
            labels={topicData?.labels?.map((label) => {
              return <Label key={label}>{label}</Label>;
            })}
          />
          <Title>{topicData?.topictitle}</Title>
          <BoxBadges>
            <UserBadge
              displayName={userData?.displayName}
              photoURL={userData?.photoURL}
            />
            {/* <LikeBadge />
              <CommentBadge /> */}
          </BoxBadges>
        </HeaderContent>
        <BorderDivider />
      </Header>
      <MainContent maxWidth="lg">
        {topicData?.modules?.map((module) => {
          return (
            <Module
              key={module?.moduletitle}
              title={module?.moduletitle}
              content={module?.modulecontent}
            />
          );
        })}
        {/* <TopicHiddenInfo />
        <OptionalQuestAccordion /> */}
      </MainContent>
      {screenSm ? <ContinueBrowsing section="Side Quests" /> : <Footer />}
    </PageWrapper>
  );
}
