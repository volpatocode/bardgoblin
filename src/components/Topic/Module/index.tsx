import React from "react";

import { Module, Title, Content } from "./styles";

type moduleType = {
  title: any;
  content: any;
};

export default function index({ title, content }: moduleType) {
  return (
    <Module>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Module>
  );
}
