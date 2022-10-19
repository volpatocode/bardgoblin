import React from "react";

import BadgeCharacter from "../BadgeCharacter";
import BadgeID from "../BadgeID";
import BadgeOption from "../BadgeOption";
import Module from "../Module";
import { Content, Title } from "../Module/styles";
import OptionalQuestAccordion from "../OptionalQuestAccordion";
import TopicHiddenInfo from "../TopicHiddenInfo";

import { ContentWrapper, ExampleStretch } from "./styles";

export const moduleExample = (
  <Module
    title="The Beggining"
    content="Nulla facilisi. Aliquam lacinia ornare dolor at hendrerit. Nulla egestas risus ut sodales vestibulum. Praesent tortor odio, finibus ac euismod a, laoreet at risus. Cras lectus est, egestas id sem pellentesque, faucibus aliquam dolor. Mauris pulvinar quam nisi, nec consequat magna vestibulum et. Integer nisl metus, pulvinar et sapien in, sagittis porta mi. Nulla in nisi vestibulum velit cursus convallis. Nunc nisi orci, congue at tempus ut, pulvinar in arcu. Aliquam malesuada volutpat auctor. Praesent volutpat, orci eget euismod consectetur, orci odio viverra tortor, id viverra justo dui posuere orci. Morbi pretium felis sit amet mauris suscipit tempus."
  />
);

export const comingSoonExample = (
  <ContentWrapper>
    <Module
      title={
        <Title>
          The Beggining <BadgeID id="BG4564122247" />
        </Title>
      }
      content={
        <Content>
          Nulla facilisi. Aliquam lacinia ornare dolor at hendrerit. Nulla
          egestas risus ut sodales vestibulum. Praesent tortor odio, finibus ac
          euismod a, laoreet at risus. Cras lectus est, egestas id sem
          pellentesque. Abla facilisi. Aliquam lacinia ornare dolor at
          hendrerit. Nulla egestas risus ut sodales vestibulum. Praesent tortor
          odio, finibus ac euismod a, laoreet at risus. Cras lectus est, egestas
          id sem pellentesque, they <BadgeOption option="fight the orc" /> or
          they <BadgeOption option="help them" /> ? Mauris pulvinar quam nisi,
          nec consequat magna vestibulum et. Integer nisl metus, pulvinar et
          sapien in, sagittis porta mi. Nulla in nisi vestibulum velit cursus
          convallis. Nunc nisi orci, congue at tempus ut, pulvinar in arcu.
          Aliquam malesuada volutpat auctor. Praesent volutpat, orci eget
          euismod consectetur, orci odio viverra tortor, id viverra justo dui
          posuere orci. Morbi pretium felis sit amet mauris suscipit tempus,
          forbi pretium felis sit amet mauris suscipit tempus.
        </Content>
      }
    />
    <Module
      title={
        <Title>
          Finding the Elf <BadgeID id="BG7411122247" />
        </Title>
      }
      content={
        <Content>
          Torem dolor sit amet consectetur adipisicing elit. Voluptatibus
          placeat natus modi quia eaque, voluptate rem quaerat, perferendis nisi
          architecto, provident aliquam illum iste sit ipsum qui laudantium,
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesent
          volutpat, orci eget euismod consectetur, orci odio viverra tortor, id
          viverra justo <BadgeCharacter /> dui posuere orci. Morbi pretium felis
          sit amet mauris suscipit, Lorem ipsum dolor sit amet consectetur
          adipisicing. Porem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus placeat natus modi quia eaque, voluptate rem quaerat,
          perferendis nisi architecto, provident aliquam illum iste sit ipsum
          qui laudantium.
          <TopicHiddenInfo
            title="If the group find the elf house"
            content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
          />
          Voluptatibus placeat natus modi quia eaque, voluptate rem quaerat,
          perferendis nisi architecto quo praesentium, provident aliquam illum
          iste sit ipsum qui laudantium? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesent volutpat, orci eget euismod consectetur,
          orci odio viverra tortor, id viverra justo dui posuere orci. Morbi
          pretium felis sit amet mauris suscipit, Lorem ipsum dolor sit amet
          consectetur.
        </Content>
      }
    />
    <OptionalQuestAccordion />
  </ContentWrapper>
);

type exampleStretchType = {
  content: any;
};
export default function index({ content }: exampleStretchType) {
  return <ExampleStretch>{content} </ExampleStretch>;
}
