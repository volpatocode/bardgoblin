import React from "react";

import {
  ProfileInfo,
  ProfileInfoTitle,
  ProfileInfoContent,
  ProfileInfoPlaceholderBox,
  ProfileInfoPlaceholder,
  ProfileInfoInputBox,
  ProfileInfoInput,
  InputBorder,
} from "./styles";

export type profileType = {};

export default function index({}: profileType) {
  return (
    <ProfileInfo>
      <ProfileInfoTitle>Account</ProfileInfoTitle>
      <ProfileInfoContent>
        <ProfileInfoPlaceholderBox>
          <ProfileInfoPlaceholder>Username</ProfileInfoPlaceholder>
          <ProfileInfoPlaceholder>Email</ProfileInfoPlaceholder>
          <ProfileInfoPlaceholder>Password</ProfileInfoPlaceholder>
        </ProfileInfoPlaceholderBox>
        <ProfileInfoInputBox>
          <InputBorder>
            <ProfileInfoInput />
          </InputBorder>
          <InputBorder>
            <ProfileInfoInput />
          </InputBorder>
          <InputBorder>
            <ProfileInfoInput />
          </InputBorder>
        </ProfileInfoInputBox>
      </ProfileInfoContent>
    </ProfileInfo>
  );
}
