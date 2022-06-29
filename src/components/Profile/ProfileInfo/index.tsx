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
  DataValue,
  EditButton,
  UploadButton,
  InputImage,
  EditDataValue,
} from "./styles";
import { UserContext } from "../../../contexts/UserContext";
import { StyledCircularProgress } from "../../UserModal/styles";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../config/firebaseConfig";
import { updateProfile, updatePassword, updateEmail } from "firebase/auth";

export type profileInfoType = {
  background?: "none";
  src: string;
};

type dataInput = {
  email: string;
  username: string;
  title: string;
  password: string;
};

export default function index() {
  const [isEditingUser, setIsEditingUser] = useState(false);
  const [dataInput, setDataInput] = useState<dataInput>();
  const [userData, setUserData] = useState({});

  const {
    isLoading,
    handlePhoto,
    handlePhotoUpload,
    currentUser,
    photo,
    photoURL,
  } = useContext(UserContext);

  // Edit user

  const handleDataInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setDataInput({ ...dataInput, [id]: value });
  };

  const handleEditUser = async () => {
    try {
      updateProfile(currentUser, {
        displayName: dataInput.username,
      });
      updateEmail(currentUser, dataInput.email);
      updatePassword(currentUser, dataInput.password);

      await setDoc(doc(db, "users", auth.currentUser.uid), {
        ...dataInput,
      });
    } catch (err) {
      console.log(err);
    }
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
      <ProfileContentForm onSubmit={() => handleEditUser()}>
        <ProfileData>
          <DataPlaceholder>Email</DataPlaceholder>
          {isEditingUser ? (
            <EditDataValue
              onChange={handleDataInput}
              id="email"
              placeholder={currentUser?.email}
            />
          ) : (
            <DataValue>{currentUser?.email}</DataValue>
          )}
        </ProfileData>
        <ProfileData>
          <DataPlaceholder>Password</DataPlaceholder>
          {isEditingUser ? (
            <EditDataValue
              onChange={handleDataInput}
              id="password"
              placeholder="super secrete password"
            />
          ) : (
            <DataValue>**********</DataValue>
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
              onChange={handleDataInput}
              id="username"
              placeholder={currentUser?.displayName || "Not provided"}
            />
          ) : (
            <DataValue>{currentUser?.displayName || "Not provided"}</DataValue>
          )}
        </ProfileData>
        <ProfileData>
          <DataPlaceholder>Title</DataPlaceholder>
          {isEditingUser ? (
            <EditDataValue
              onChange={handleDataInput}
              id="usertitle"
              placeholder={"calma"}
            />
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
