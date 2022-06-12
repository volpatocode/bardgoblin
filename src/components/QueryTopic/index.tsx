import React from "react";
import UserBadge from "../UserBadge";
import { QueryTopic } from "./styles";


export type topicType = {};

export default function index({}: topicType) {
  return (
    <QueryTopic>
      <UserBadge/>
    </QueryTopic>
  );
}
