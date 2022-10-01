import React, { useContext } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import Link from "next/link";

import UserBadge from "../../UserBadge";

import {
  TopicListWrapper,
  QueryTopic,
  LeftSideTopic,
  TopicContent,
  Labels,
  Label,
} from "./styles";

export default function index({ data }) {
  const { usersData } = useContext(SearchContext);

  return (
    <>
      {data?.map((topic) => {
        return (
          <TopicListWrapper key={topic?.uid}>
            <Link href={`/topic/${topic?.uid}`}>
              <a>
                <QueryTopic>
                  <LeftSideTopic>
                    {usersData?.map((user) => {
                      return (
                        user?.uid == topic?.userUID && (
                          <UserBadge
                            key={user?.uid}
                            displayName={user?.displayName}
                            photoURL={user?.photoURL}
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
              </a>
            </Link>
          </TopicListWrapper>
        );
      })}
    </>
  );
}
