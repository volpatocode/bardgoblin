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
import { topicData } from "../../types/user";
import { Label } from "../../components/Topic/Breadcrumbs/styles";

export default function index() {
  const topicId = useRouter().query.topicId;
  const [topicData, setTopicData] = useState({} as topicData);
  const [userData, setUserData] = useState({});

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
    console.log(topicData);
  }, [topicData]);

  useEffect(() => {
    const fetchUsersData = async () => {
      let usersList = [];
      try {
        const queryUsersData = await getDocs(collection(db, "users"));
        queryUsersData.forEach((doc) => {
          usersList.push({ ...doc.data() });
        });
        setUserData(usersList);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchUsersData();
  }, []);

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
                displayName="User"
                photoURL="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
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
