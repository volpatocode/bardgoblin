import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { db } from "../../../config/firebaseConfig";
import { topicsData, usersData } from "../../../types/user";
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
  const [topicsData, setTopicsData] = useState([] as topicsData);
  const [usersData, setUsersData] = useState([] as usersData);

  useEffect(() => {
    const fetchTopicsData = async () => {
      let topicList = [];
      try {
        const queryTopicsData = await getDocs(collection(db, "topics"));
        queryTopicsData.forEach(async (doc) => {
          topicList.push({ uid: doc.id, ...doc.data() });
        });

        setTopicsData(topicList);
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
        const queryUsersData = await getDocs(collection(db, "users"));
        queryUsersData.forEach((doc) => {
          usersList.push({ ...doc.data() });
        });
        setUsersData(usersList);
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

                  <TopicContent>{topic?.topic?.topictitle}</TopicContent>
                </LeftSideTopic>
                <Labels>
                  {topic?.topic?.labels?.map((label, index) => (
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
