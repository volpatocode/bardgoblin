import React, { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/UserContext";
import LabelSelector from "../../LabelSelector";

import { NewTopic, TopicTitle } from "./styles";

export default function index() {
  const { topics, setTopics, modules } = useContext(UserContext);

  const handleDataInput = (index, event) => {
    let data = [...topics];
    data[index][event.target.name] = event.target.value;
    setTopics(data);
  };

  useEffect(() => {
    console.log(topics);
  }, [modules, topics]);

  return (
    <>
      {topics.map((input, index) => {
        return (
          <NewTopic key={index}>
            <TopicTitle
              id="topictitle"
              name="topictitle"
              type="text"
              placeholder="Topic title"
              value={input.topictitle}
              onChange={(event) => handleDataInput(index, event)}
            />
            <LabelSelector />
          </NewTopic>
        );
      })}
    </>
  );
}
