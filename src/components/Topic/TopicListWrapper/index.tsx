import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../../config/firebaseConfig";
import { UserContext } from "../../../contexts/UserContext";
import { topicData, topicFullType, userData } from "../../../types/user";
import UserBadge from "../../UserBadge";

import {
  TopicListWrapper,
  QueryTopic,
  LeftSideTopic,
  TopicContent,
  Labels,
  Label,
} from "./styles";

export default function index() {
  const [topicData, setTopicData] = useState([] as topicData);

  // fetch users
  // useEffect(() => {
  //   const fetchTopicData = async () => {
  //     let usersList = [];
  //     try {
  //       const queryUsersData = await getDocs(collection(db, "users"));
  //       queryUsersData.forEach((doc) => {
  //         usersList.push({ ...doc.data() });
  //       });
  //       setUsersData(usersList);
  //     } catch (e) {
  //       console.log(e.message);
  //     }
  //   };
  //   fetchTopicData();
  // }, []);

  // fetch topics
  useEffect(() => {
    const fetchTopicData = async () => {
      let topicList = [];
      try {
        const queryTopicData = await getDocs(collection(db, "topics"));
        queryTopicData.forEach(async (doc) => {
          topicList.push({ id: doc.id, ...doc.data() });
        });

        setTopicData(topicList);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchTopicData();
  }, []);

  return (
    <>
      {topicData?.map((topic) => (
        <TopicListWrapper key={topic?.uid}>
          <QueryTopic>
            <LeftSideTopic>
              <UserBadge />
              <TopicContent>{topic?.topic?.topictitle}</TopicContent>
            </LeftSideTopic>
            <Labels>
              {topic?.topic?.labels?.map((label, index) => (
                <Label key={index}>{label}</Label>
              ))}
            </Labels>
          </QueryTopic>
        </TopicListWrapper>
      ))}
    </>
  );
}
