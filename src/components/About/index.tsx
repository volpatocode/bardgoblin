import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { UserModalContext } from "../../contexts/UserModalContext";

import HiperLink from "../Topic/Hiperlink";

import { PageWrapper, About, Title, Typography, ContentBox } from "./styles";
import ExampleStretch, { moduleExample } from "../Topic/ExampleStretch";

export default function index() {
  const { isAuthorized } = useContext(UserContext);
  const { handleUserModal } = useContext(UserModalContext);

  return (
    <PageWrapper>
      <About id="about" maxWidth="lg">
        <ContentBox>
          <Title>What is Bard Goblin</Title>
          <Typography>
            Remember that time when you needed a good idea to finish something
            but you ran out of inspiration? Don't worry about it! Bard Goblin is
            an RPG community, made to share ideas, stories, characters, builds
            or whatever your creativity allows you to. Tell your stories,
            assembling them with modules, tag characters, make alternative
            paths, do whatever you want to.
          </Typography>
        </ContentBox>
        <ContentBox>
          <Title>How it works</Title>
          <Typography>
            With the main objective being interaction, Bard Goblin was made to
            be a controlled and organized environment. You can leave your name
            in Bard Goblin by{" "}
            {isAuthorized ? (
              <HiperLink text="creating your own topic" href="/createtopic" />
            ) : (
              <HiperLink
                text="creating your own topic"
                onClick={handleUserModal}
              />
            )}{" "}
            with its modules or reuse modules already made. To take your first
            steps in Bard Goblin, follow the numerous following steps:{" "}
            <HiperLink onClick={handleUserModal} text="Create your account" />:
            In order for you to interact with most of the site, you must have an
            account. Thats it! Already having an account means you can interact
            in all ways. So, what are topics and modules?
          </Typography>
        </ContentBox>
        <ContentBox>
          <Title>Topic and Module</Title>
          <Typography>
            Modules: are excerpts from a story or post where the user seeks to
            develop the topic as a whole, making use of some modules to maintain
            a timeline or nest information.{" "}
            <ExampleStretch content={moduleExample} /> Topic: you can understand
            as any type of post that a user creates, regardless of the content.
            A topic is usually made up of modules, trying to tell a story or
            make sense of its timeline.{" "}
          </Typography>
        </ContentBox>
        <ContentBox>
          <Title>Coming soon</Title>
          <Typography>
            Soon, in the creation of a topic, in addition to the current
            features you will not only be able to tell your story, but also
            build one by reusing existing modules, just assembling them and
            creating a concise timeline. You will be able to create alternative
            paths, leaving several unique adventures, in a single story. In
            addition, you can tag characters that can be key points for the
            development of the story. Last but not least, it will also be
            possible to add hidden information, which can be useful as a bonus
            depending on the context.
          </Typography>
          <img className="exampleImage" src="./comingsoon.png" />
        </ContentBox>
      </About>
    </PageWrapper>
  );
}
