import React, { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/UserContext";
import InputError from "../../InputError";
import LabelSelector from "../../LabelSelector";

import { NewTopic, TopicTitle, TopicTitleBox } from "./styles";

export default function index() {
  const { registerTopic, formErrors } = useContext(UserContext);

  return (
    <NewTopic>
      <TopicTitleBox>
        <TopicTitle
          name="topictitle"
          type="text"
          placeholder="Topic title"
          {...registerTopic("topic.topictitle" as const)}
        />
        {formErrors?.topic?.topictitle && (
          <InputError error={formErrors?.topic?.topictitle?.message} />
        )}
      </TopicTitleBox>
      <LabelSelector />
    </NewTopic>
  );
}
