import React from "react";
import {
  ProfileHeader,
  ProfileImageBox,
  ProfileImage,
  ProfileHeaderInfo,
  ProfileName,
  ProfileEmail,
  ProfileID,
} from "./styles";

export type profileType = {};

export default function index({}: profileType) {
  return (
    <ProfileHeader>
      <ProfileImageBox>
        <ProfileImage src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" />
      </ProfileImageBox>
      <ProfileHeaderInfo>
        <ProfileName>John Doe</ProfileName>
        <ProfileEmail>johndoe@gmail.com</ProfileEmail>
        <ProfileID>yty4e5dwf5414141</ProfileID>
      </ProfileHeaderInfo>
    </ProfileHeader>
  );
}
