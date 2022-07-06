import React from "react";

import { UserBadge, UserImage, Username } from "./styles";

export default function index() {
  return (
    <UserBadge>
      <UserImage src="https://avatars.githubusercontent.com/u/102267019?v=4" />
      <Username>João Volpato</Username>
    </UserBadge>
  );
}
