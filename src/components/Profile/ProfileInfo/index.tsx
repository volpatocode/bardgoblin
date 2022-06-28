import React, { useContext, useEffect, useState } from "react";
import EmailStatus from "../EmailStatus";
import HelpPopover from "../../HelpPopover";

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
  EditDataValue,
} from "./styles";
import { UserContext } from "../../../contexts/UserContext";
import { StyledCircularProgress } from "../../UserModal/styles";

export type profileInfoType = {
  background?: "none";
  src: string;
};

export default function index() {
  const [isEditing, setIsEditing] = useState(false);

  const {
    isLoading,
    handlePhoto,
    handlePhotoUpload,
    currentUser,
    photo,
    photoURL,
  } = useContext(UserContext);

  useEffect(() => {
    console.log(currentUser.emailVerified);
  }, [currentUser.emailVerified]);

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
            Search Image
          </InputImage>
        )}
      </ProfileImageBox>
      <ProfileContent>
        <ProfileData>
          <DataPlaceholder>Email</DataPlaceholder>
          {isEditing ? (
            <EditDataValue placeholder={currentUser?.email} />
          ) : (
            <DataValue>{currentUser?.email}</DataValue>
          )}
        </ProfileData>
        <ProfileData>
          <DataPlaceholder>UUID</DataPlaceholder>
          <DataValue background="none">
            {currentUser?.uid}
            <HelpPopover />
          </DataValue>
        </ProfileData>
        <ProfileData>
          <DataPlaceholder>Username</DataPlaceholder>
          {isEditing ? (
            <EditDataValue
              placeholder={currentUser?.displayName || "Not provided"}
            />
          ) : (
            <DataValue>{currentUser?.displayName || "Not provided"}</DataValue>
          )}
        </ProfileData>
        <ProfileData>
          <DataPlaceholder>Title</DataPlaceholder>
          {isEditing ? (
            <EditDataValue placeholder={"Fantasy Writer"} />
          ) : (
            <DataValue>Fantasy Writer</DataValue>
          )}
        </ProfileData>
        <ProfileData>
          <DataPlaceholder>Email verification</DataPlaceholder>
          <DataValue background="none">
            <EmailStatus status={currentUser?.emailVerified} />
          </DataValue>
        </ProfileData>
        {isEditing ? (
          <UploadButton
            disabled={isLoading}
            onClick={() => {
              {
                !photo ? setIsEditing(false) : handlePhotoUpload();
                setIsEditing(!isEditing);
              }
            }}
          >
            {isLoading && <StyledCircularProgress size="30px" />}
            {!photo ? "Return" : "Upload"}
          </UploadButton>
        ) : (
          <EditButton
            disabled={isLoading}
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          >
            {isLoading ? <StyledCircularProgress size="30px" /> : "Edit"}
          </EditButton>
        )}
      </ProfileContent>
    </ProfileInfo>
  );
}
