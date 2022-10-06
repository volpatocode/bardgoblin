import React from "react";
import Module from "../Module";

import { ExampleStretch } from "./styles";

export const moduleExample = (
  <Module
    title="The Beggining"
    content="Nulla facilisi. Aliquam lacinia ornare dolor at hendrerit. Nulla egestas risus ut sodales vestibulum. Praesent tortor odio, finibus ac euismod a, laoreet at risus. Cras lectus est, egestas id sem pellentesque, faucibus aliquam dolor. Mauris pulvinar quam nisi, nec consequat magna vestibulum et. Integer nisl metus, pulvinar et sapien in, sagittis porta mi. Nulla in nisi vestibulum velit cursus convallis. Nunc nisi orci, congue at tempus ut, pulvinar in arcu. Aliquam malesuada volutpat auctor. Praesent volutpat, orci eget euismod consectetur, orci odio viverra tortor, id viverra justo dui posuere orci. Morbi pretium felis sit amet mauris suscipit tempus."
  ></Module>
);


type exampleStretchType = {
  content: any;
};
export default function index({ content }: exampleStretchType) {
  return <ExampleStretch>{content}</ExampleStretch>;
}
