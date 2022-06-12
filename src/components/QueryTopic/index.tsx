import React from "react";
import UserBadge from "../UserBadge";
import {
  QueryTopic,
  LeftSideTopic,
  TopicContent,
  Labels,
  Label,
} from "./styles";

export type topicType = {};

export default function index({}: topicType) {
  return (
    <QueryTopic>
      <LeftSideTopic>
        <UserBadge />
        <TopicContent>The best cave and forest side quest</TopicContent>
      </LeftSideTopic>
      <Labels>
        <Label>#Forest</Label>
        <Label>#Cave</Label>
      </Labels>
    </QueryTopic>
  );
}
