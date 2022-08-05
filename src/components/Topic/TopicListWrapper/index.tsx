import { collection, getDocs } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../../config/firebaseConfig";
import { UserContext } from "../../../contexts/UserContext";
import UserBadge from "../../UserBadge";

import {
  TopicListWrapper,
  QueryTopic,
  LeftSideTopic,
  TopicContent,
  Labels,
  Label,
} from "./styles";

type topicData = {
  id: string;
  userUID: string;
  topic: {
    topictitle: string;
    modules: [moduletitle: string, modulecontent: string];
    labels: [];
  };
}[];

export default function index() {
  const [topicData, setTopicData] = useState<topicData>();

  useEffect(() => {
    console.log(topicData);
  }, [topicData]);

  useEffect(() => {
    const fetchTopicData = async () => {
      let topicList = [];
      try {
        const querySnapshot = await getDocs(collection(db, "topics"));
        querySnapshot.forEach((doc) => {
          topicList.push({ id: doc.id, ...doc.data() });
        });
        setTopicData(topicList);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchTopicData();
  }, []);

  return topicData.map((topic) => {
    return (
      <TopicListWrapper key={topic?.id}>
        <QueryTopic>
          <LeftSideTopic>
            <UserBadge />
            <TopicContent>{topic?.topic?.topictitle}</TopicContent>
          </LeftSideTopic>
          <Labels>
            {topic?.topic?.labels?.map((label, index) => {
              return <Label key={index}>{label}</Label>;
            })}
          </Labels>
        </QueryTopic>
      </TopicListWrapper>
    );
  });
}
