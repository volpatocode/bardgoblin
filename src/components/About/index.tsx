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
          <Title>About</Title>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            nostrum molestiae libero. Quasi modi quisquam voluptates deleniti
            sit quo iusto debitis excepturi aliquid quod illo, vitae tenetur
            assumenda accusantium eius? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nemo nostrum molestiae libero. Quasi modi quisquam
            voluptates deleniti sit quo iusto debitis excepturi aliquid quod
            illo, vitae tenetur assumenda accusantium eius?
          </Typography>
        </ContentBox>
        <ContentBox>
          <Title>Create your topics</Title>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            nostrum molestiae libero. Quasi modi quisquam voluptates deleniti
            sit quo iusto debitis excepturi aliquid quod illo, vitae tenetur
            assumenda accusantium eius? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nemo nostrum molestiae libero. Quasi modi quisquam
            voluptates deleniti sit quo iusto debitis excepturi aliquid quod
            illo, vitae tenetur assumenda accusantium eius?
          </Typography>
        </ContentBox>
      </About>
    </PageWrapper>
  );
}
