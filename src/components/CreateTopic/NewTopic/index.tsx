import React, { useContext, useEffect } from "react";
import { TopicContext } from "../../../contexts/TopicContext";
import InputError from "../../InputError";
import LabelSelector from "../../LabelSelector";

import { NewTopic, SelectorsBox, TopicTitle, TopicTitleBox } from "./styles";

export default function index() {
  const { registerTopic, formErrors, topicSection } = useContext(TopicContext);

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
      <SelectorsBox>
        <LabelSelector type="Section" />
        {topicSection?.includes("Side Quests") && (
          <LabelSelector type="Labels" section="Side Quests" />
        )}
        {topicSection?.includes("Builds") && (
          <LabelSelector type="Labels" section="Builds" />
        )}
        {topicSection?.includes("Characters") && (
          <LabelSelector type="Labels" section="Characters" />
        )}
      </SelectorsBox>
    </NewTopic>
  );
}
