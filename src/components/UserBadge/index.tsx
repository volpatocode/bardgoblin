import React from "react";

import { UserBadge, UserImage, Username } from "./styles";

type badgeType = {
  photoURL: string;
  displayName: string;
}

export default function index({photoURL, displayName}: badgeType) {
  return (
    <UserBadge>
      <UserImage src={photoURL || "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"} />
      <Username>{displayName || "User"}</Username>
    </UserBadge>
  );
}
