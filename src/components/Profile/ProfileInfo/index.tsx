import React, { useContext, useEffect, useState } from "react";
import EmailStatus from "../EmailStatus";
import HelpPopover from "../../HelpPopover";

import {
  ProfileInfo,
  ProfileImageBox,
  ProfileImage,
  ProfileContentForm,
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
import { doc, addDoc, setDoc, collection } from "firebase/firestore";
import { db } from "../../../config/firebaseConfig";

export type profileInfoType = {
  background?: "none";
  src: string;
};

export default function index() {
  const [isEditingUser, setIsEditingUser] = useState(false);

  const {
    isLoading,
    handlePhoto,
    handlePhotoUpload,
    currentUser,
    photo,
    photoURL,
  } = useContext(UserContext);

  const handleEditUser = async () => {
    await addDoc(collection(db, "Cities"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    });
  };

  return (
    <ProfileInfo>
      <ProfileImageBox>
        <ProfileImage src={photoURL} />
        {photo ? (
          <UploadButton
            type="submit"
            disabled={isLoading}
            onClick={() => {
              handlePhotoUpload();
            }}
          >
            {isLoading ? <StyledCircularProgress size="30px" /> : "Upload"}
          </UploadButton>
        ) : (
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
      <ProfileContentForm onSubmit={handleEditUser}>
        <ProfileData>
          <DataPlaceholder>Email</DataPlaceholder>
          {isEditingUser ? (
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
          {isEditingUser ? (
            <EditDataValue
              placeholder={currentUser?.displayName || "Not provided"}
            />
          ) : (
            <DataValue>{currentUser?.displayName || "Not provided"}</DataValue>
          )}
        </ProfileData>
        <ProfileData>
          <DataPlaceholder>Title</DataPlaceholder>
          {isEditingUser ? (
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
        {isEditingUser ? (
          <UploadButton
            type="submit"
            disabled={isLoading}
            onClick={() => {
              handleEditUser();
              setIsEditingUser(!isEditingUser);
            }}
          >
            {isLoading ? <StyledCircularProgress size="30px" /> : "Upload"}
          </UploadButton>
        ) : (
          <EditButton
            disabled={isLoading}
            onClick={() => {
              setIsEditingUser(!isEditingUser);
            }}
          >
            {isLoading ? <StyledCircularProgress size="30px" /> : "Edit"}
          </EditButton>
        )}
      </ProfileContentForm>
    </ProfileInfo>
  );
}
