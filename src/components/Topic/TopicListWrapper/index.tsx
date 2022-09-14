import { collection, getDocs } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { db } from "../../../config/firebaseConfig";
import { topicsData, usersData } from "../../../types/user";
import UserBadge from "../../UserBadge";
import Loading from "../../Loading";

import {
  TopicListWrapper,
  QueryTopic,
  LeftSideTopic,
  TopicContent,
  Labels,
  Label,
} from "./styles";
import { UserContext } from "../../../contexts/UserContext";

export default function index({}) {
  const { setIsLoading } = useContext(UserContext);
  const [topicsData, setTopicsData] = useState([] as topicsData);
  const [usersData, setUsersData] = useState([] as usersData);

  const sections = {
    "Side Quests": "sidequests",
    Builds: "builds",
    Characters: "characters",
  };

  useEffect(() => {
    console.log(
      topicsData.map((topic) => {
        return topic.uid;
      })
    );
  }, [topicsData]);

  useEffect(() => {
    const fetchTopicsData = async () => {
      let topicList = [];
      try {
        setIsLoading(true);
        const queryTopicsData = await getDocs(collection(db, "topics"));
        queryTopicsData.forEach(async (doc) => {
          topicList.push({ uid: doc?.id, ...doc.data() });
        });
        setTopicsData(topicList);
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchTopicsData();
  }, []);

  useEffect(() => {
    const fetchUsersData = async () => {
      let usersList = [];
      try {
        setIsLoading(true);
        const queryUsersData = await getDocs(collection(db, "users"));
        queryUsersData.forEach((doc) => {
          usersList.push({ ...doc.data() });
        });
        setUsersData(usersList);
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchUsersData();
  }, []);

  return (
    <>
      {topicsData?.map((topic) => {
        return (
          <TopicListWrapper key={topic?.uid}>
            <Link href={`/topic/${topic?.uid}`}>
              <QueryTopic>
                <LeftSideTopic>
                  {usersData?.map((user) => {
                    return (
                      user?.uid == topic?.userUID && (
                        <UserBadge
                          displayName={user?.displayName}
                          photoURL={user?.photoURL}
                          key={user?.uid}
                        />
                      )
                    );
                  })}

                  <TopicContent>{topic?.topictitle}</TopicContent>
                </LeftSideTopic>
                <Labels>
                  {topic?.labels?.map((label, index) => (
                    <Label key={index}>{label}</Label>
                  ))}
                </Labels>
              </QueryTopic>
            </Link>
          </TopicListWrapper>
        );
      })}
    </>
  );
}
