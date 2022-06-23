import React, { useContext, useState } from "react";
import EmailStatus from "../EmailStatus";
import Tooltip from "@mui/material/Tooltip";

import {
  ProfileInfo,
  ProfileImageBox,
  ProfileImage,
  ProfileContent,
  ProfileData,
  DataPlaceholder,
  DataInput,
  DataValue,
  BoxButtons,
  EditButton,
  UploadButton,
  InputImage,
} from "./styles";
import { UserContext } from "../../../contexts/UserContext";
import { StyledCircularProgress } from "../../UserModal/styles";

export type profileInfoType = {
  background?: "none";
};

export default function index({}: profileInfoType) {
  const [isEditing, setIsEditing] = useState(false);

  const { isLoading, handlePhoto, handlePhotoUpload, photo } = useContext(UserContext);
console.log(photo)

  return (
    <ProfileInfo>
      <ProfileImageBox>
        <ProfileImage src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" />
        {isEditing && (
          <InputImage>
            <input onChange={handlePhoto} style={{ display: "none" }} type="file" />
            Edit Image
          </InputImage>
        )}
      </ProfileImageBox>
      <ProfileContent>
        <ProfileData>
          <DataPlaceholder>Email</DataPlaceholder>
          <DataValue>johndoe@gmail.com</DataValue>
        </ProfileData>
        <ProfileData>
          <DataPlaceholder>UUID</DataPlaceholder>
          <DataValue background="none">B45453453B484</DataValue>
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
          <DataPlaceholder>Email verification</DataPlaceholder>
          <DataValue background="none">
            <EmailStatus status="verified" />
          </DataValue>
        </ProfileData>
        {isEditing ? (
          <UploadButton
            disabled={isLoading || !photo}
            onClick={() => {
              handlePhotoUpload()
              setIsEditing(!isEditing)
            }}
          >
            {isLoading ? <StyledCircularProgress size="25px" /> : "Upload"}
          </UploadButton>
        ) : (
          <EditButton
            disabled={isLoading}
            onClick={() => {
              setIsEditing(!isEditing)
            }}
          >
            Edit
          </EditButton>
        )}
      </ProfileContent>
    </ProfileInfo>
  );
}
