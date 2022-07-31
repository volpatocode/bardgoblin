import React, { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/UserContext";
import LabelSelector from "../../LabelSelector";

import { NewTopic, TopicTitle } from "./styles";

export default function index() {
  const {register } = useContext(UserContext);

  return (
    <NewTopic>
      <TopicTitle
        name="topictitle"
        type="text"
        placeholder="Topic title"
        {...register("topic.topictitle" as const)}
      />
      <LabelSelector />
    </NewTopic>
  );
}
