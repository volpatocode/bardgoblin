import React from "react";
import EmailStatus from "../EmailStatus";

import {
  ProfileInfo,
  ProfileImageBox,
  ProfileImage,
  ProfileContent,
  ProfileData,
  DataPlaceholder,
  DataInput,
  DataValue,
  EditButton,
  StyledEditIcon,
} from "./styles";

export type profileInfoType = {
  background?: "none";
};

export default function index({}: profileInfoType) {
  return (
    <ProfileInfo>
      <ProfileImageBox>
        <ProfileImage src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" />
      </ProfileImageBox>
      <ProfileContent>
        <ProfileData>
          <DataPlaceholder>Email</DataPlaceholder>
          <DataValue>johndoe@gmail.com</DataValue>
        </ProfileData>

        <ProfileData>
          <DataPlaceholder>Username</DataPlaceholder>
          <DataValue>John Doe</DataValue>
        </ProfileData>

        <ProfileData>
          <DataPlaceholder>Title</DataPlaceholder>
          <DataValue>Fantasy Writter</DataValue>
        </ProfileData>

        <ProfileData>
          <DataPlaceholder>UUID</DataPlaceholder>
          <DataValue>B45453453B484</DataValue>
        </ProfileData>

        <ProfileData>
          <DataPlaceholder>Email verification</DataPlaceholder>
          <DataValue background="none"><EmailStatus status="verified"/></DataValue>
        </ProfileData>
        <EditButton>Edit</EditButton>
      </ProfileContent>
      
    </ProfileInfo>
  );
}
