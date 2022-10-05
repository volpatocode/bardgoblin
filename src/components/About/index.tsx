import React from "react";

import { PageWrapper, About, Title, Typography, ContentBox } from "./styles";

export default function index() {
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
            in Bard Goblin by -creating your own topic- with its modules or
            reuse modules already made, but -what are topics and modules?-
          </Typography>
        </ContentBox>
        <ContentBox>
          <Title>First steps</Title>
          <Typography>
            To take your first steps in Bard Goblin, follow the numerous
            following steps: - -Create your account-: In order for you to
            interact with most of the site, you must have an account. Thats it!
            Already having an account means you can interact in all ways.
          </Typography>
        </ContentBox>
        <ContentBox>
          <Title>Topic and Module</Title>
          <Typography>
            Modules: are excerpts from a story or post where the user seeks to
            develop the topic as a whole, making use of some modules to maintain
            a timeline or nest information. -Example of a Module:- Topic: you
            can understand as any type of post that a user creates, regardless
            of the content. A topic is usually made up of modules, trying to
            tell a story or make sense of its timeline. -Example of a Topic:-
          </Typography>
        </ContentBox>
        <ContentBox>
          <Title>Coming soon</Title>
          <Typography>
            - Reuse modules; - Search by filters; - Comments section; - Like
            topics; - Tag characters inside modules; - Show your activity
            through your profile; - Delete you unwanted topic;
          </Typography>
        </ContentBox>
      </About>
    </PageWrapper>
  );
}
