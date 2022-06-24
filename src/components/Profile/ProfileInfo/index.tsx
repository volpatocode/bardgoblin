import React, { useContext, useEffect, useState } from "react";
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

  const { isLoading, handlePhoto, handlePhotoUpload, currentUser, photo, photoURL } =
    useContext(UserContext);

useEffect(() => {
  console.log(currentUser.emailVerified)

}, [currentUser.emailVerified])

  return (
    <ProfileInfo>
      <ProfileImageBox>
        <ProfileImage src={photoURL} />
        {isEditing && (
          <InputImage>
            <input
              onChange={handlePhoto}
              style={{ display: "none" }}
              type="file"
            />
            Edit Image
          </InputImage>
        )}
      </ProfileImageBox>
      <ProfileContent>
        <ProfileData>
          <DataPlaceholder>Email</DataPlaceholder>
          <DataValue>{currentUser?.email}</DataValue>
        </ProfileData>
        <ProfileData>
          <DataPlaceholder>UUID</DataPlaceholder>
          <DataValue background="none">{currentUser?.uid}</DataValue>
        </ProfileData>
        <ProfileData>
          <DataPlaceholder>Username</DataPlaceholder>
          <DataValue>{currentUser?.displayName || "Not provided"}</DataValue>
        </ProfileData>
        <ProfileData>
          <DataPlaceholder>Title</DataPlaceholder>
          <DataValue>Fantasy Writter</DataValue>
        </ProfileData>
        <ProfileData>
          <DataPlaceholder>Email verification</DataPlaceholder>
          <DataValue background="none">
            <EmailStatus status={currentUser?.emailVerified} />
          </DataValue>
        </ProfileData>
        {isEditing ? (
          <UploadButton
            disabled={isLoading || !photo}
            onClick={() => {
              handlePhotoUpload();
              setIsEditing(!isEditing);
            }}
          >
            {isLoading ? <StyledCircularProgress size="25px" /> : "Upload"}
          </UploadButton>
        ) : (
          <EditButton
            disabled={isLoading}
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          >
            {isLoading ? <StyledCircularProgress size="25px" /> : "Edit"}
          </EditButton>
        )}
      </ProfileContent>
    </ProfileInfo>
  );
}
