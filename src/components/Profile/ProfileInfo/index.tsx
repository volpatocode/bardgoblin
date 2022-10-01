import React, { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { UserModalContext } from "../../../contexts/UserModalContext";
import { UtilsContext } from "../../../contexts/UtilsContext";

import { auth, db } from "../../../config/firebaseConfig";
import { updateProfile, updateEmail } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { editUserValidationSchema } from "../../../utils/validations";
import { UserFormData } from "../../../types/types";

import EmailStatus from "../EmailStatus";
import HelpPopover from "../../HelpPopover";
import InputError from "../../InputError";

import {
  ProfileInfo,
  ProfileImageBox,
  ProfileImage,
  ProfileContentForm,
  ProfileDataBox,
  ProfileData,
  DataPlaceholder,
  DataValue,
  EditButton,
  UploadButton,
  InputImage,
  EditDataValue,
} from "./styles";
import { StyledCircularProgress } from "../../UserModal/styles";

export type profileInfoType = {
  background?: "none";
  src: string;
};

export default function index() {
  const {
    isLoading,
    handlePhoto,
    handlePhotoUpload,
    currentUser,
    photo,
    photoURL,
  } = useContext(UserContext);
  const { refreshPage } = useContext(UtilsContext);

  const [isEditingUser, setIsEditingUser] = useState(false);
  const [errorFirebase, setErrorFirebase] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors: editUserErrors },
  } = useForm({
    resolver: yupResolver(editUserValidationSchema),
  });

  function updateUserDisplayName(data: UserFormData) {
    Promise.all([
      updateProfile(auth?.currentUser, {
        displayName: data?.username,
      }),
      updateDoc(doc(db, "users", auth?.currentUser?.uid), {
        displayName: data?.username,
      }),
    ])
      .then(() => {
        console.log("sucesso");
        refreshPage();
      })
      .catch((error) => {
        console.log(error.message);
        setErrorFirebase(error.message);
      });
  }

  function updateUserEmail(data: UserFormData) {
    Promise.all([
      updateEmail(auth?.currentUser, data?.email),
      updateDoc(doc(db, "users", auth?.currentUser?.uid), {
        email: data?.email,
      }),
    ])
      .then(() => {
        console.log("sucesso");
        refreshPage();
      })
      .catch((error) => {
        console.log(error.message);
        setErrorFirebase(error.message);
      });
  }

  const handleEditUser = async (data: UserFormData) => {
    if (currentUser?.displayName != data?.username) {
      updateUserDisplayName(data);
      setIsEditingUser(false);
    }
    if (currentUser?.email != data?.email) {
      updateUserEmail(data);
      setIsEditingUser(false);
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
            onClick={handlePhotoUpload}
          >
            {isLoading ? <StyledCircularProgress size="32px" /> : "Upload"}
          </UploadButton>
        ) : (
          <InputImage>
            <input
              onChange={handlePhoto}
              style={{ display: "none" }}
              type="file"
              id="handleimage"
            />
            Search Image
          </InputImage>
        )}
      </ProfileImageBox>
      <ProfileContentForm onSubmit={handleSubmit(handleEditUser)}>
        <ProfileDataBox>
          <ProfileData>
            <DataPlaceholder>Email</DataPlaceholder>
            {isEditingUser ? (
              <EditDataValue
                {...register("email")}
                id="email"
                placeholder={currentUser?.email}
                type="email"
                defaultValue={currentUser?.email}
              />
            ) : (
              <DataValue>{currentUser?.email}</DataValue>
            )}
          </ProfileData>
          {editUserErrors?.email && (
            <InputError error={editUserErrors?.email?.message} />
          )}
        </ProfileDataBox>
        <ProfileData>
          <DataPlaceholder>UUID</DataPlaceholder>
          <DataValue background="none">
            {currentUser?.uid}
            <HelpPopover />
          </DataValue>
        </ProfileData>
        <ProfileDataBox>
          <ProfileData>
            <DataPlaceholder>Username</DataPlaceholder>
            {isEditingUser ? (
              <EditDataValue
                {...register("username")}
                id="username"
                placeholder={currentUser?.displayName || "Not provided"}
                type="text"
                defaultValue={currentUser?.displayName || "Not provided"}
              />
            ) : (
              <DataValue>
                {currentUser?.displayName || "Not provided"}
              </DataValue>
            )}
          </ProfileData>
          {editUserErrors?.username && (
            <InputError error={editUserErrors?.username?.message} />
          )}
        </ProfileDataBox>
        <ProfileData>
          <DataPlaceholder>Email verification</DataPlaceholder>
          <DataValue background="none">
            <EmailStatus status={currentUser?.emailVerified} />
          </DataValue>
        </ProfileData>
        {errorFirebase && <InputError error={errorFirebase} />}
        {isEditingUser ? (
          <UploadButton
            type="submit"
            disabled={isLoading}
            onClick={handleSubmit(handleEditUser)}
          >
            {isLoading ? <StyledCircularProgress size="32px" /> : "Upload"}
          </UploadButton>
        ) : (
          <EditButton
            disabled={isLoading}
            onClick={() => {
              setIsEditingUser(true);
            }}
          >
            {isLoading ? <StyledCircularProgress size="32px" /> : "Edit"}
          </EditButton>
        )}
      </ProfileContentForm>
    </ProfileInfo>
  );
}
