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
import { SearchContext } from "../../../contexts/SearchContext";

export default function index({data}
) {

  const {usersData } = useContext(SearchContext);


  return (
    <>
      {data?.map((topic) => {
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
