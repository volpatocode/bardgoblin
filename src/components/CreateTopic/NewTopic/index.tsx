import React, { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/UserContext";
import LabelSelector from "../../LabelSelector";

import { NewTopic, TopicTitle } from "./styles";

export default function index() {
  const { topic, setTopic, modules } = useContext(UserContext);

  const handleTopicInput = (event) => {
    let data = topic;
    data[event.target.name] = event.target;
    setTopic(data);
  };

  useEffect(() => {
    console.log(modules);
  }, [modules, topic]);

  return (
    <NewTopic>
      <TopicTitle
        name="topictitle"
        type="text"
        placeholder="Topic title"
        onChange={(event) => handleTopicInput(event)}
      />
      <LabelSelector />
    </NewTopic>
  );
}
