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
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { editUserValidationSchema } from "../../../utils/validations";
import InputError from "../../InputError";
import { EditUserData } from "../../../types/user";

export type profileInfoType = {
  background?: "none";
  src: string;
};

export default function index() {
  const [isEditingUser, setIsEditingUser] = useState(false);
  const [dataInput, setDataInput] = useState<EditUserData>();
  const [userData, setUserData] = useState({});
  const [errorFirebase, setErrorFirebase] = useState("");

  const {
    isLoading,
    handlePhoto,
    handlePhotoUpload,
    currentUser,
    photo,
    photoURL,
  } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors: editUserErrors },
  } = useForm({
    resolver: yupResolver(editUserValidationSchema),
  });

  // Edit user

  const handleDataInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setDataInput({ ...dataInput, [id]: value });
  };

  const handleEditUser = async () => {
    updateProfile(currentUser, {
      displayName: dataInput?.username,
    })
      .then(() => {
        console.log("trocou o username");
      })
      .catch((error) => {
        setErrorFirebase(error.message);
      });
    updateEmail(currentUser, dataInput?.email)
      .then(() => {
        console.log("trocou o email");
      })
      .catch((error) => {
        setErrorFirebase(error.message);
      });
    updatePassword(currentUser, dataInput?.password)
      .then(() => {
        console.log("trocou a password");
      })
      .catch((error) => {
        setErrorFirebase(error.message);
      });

    await setDoc(doc(db, "users", auth.currentUser.uid), {
      ...dataInput,
    })
      .then(() => {
        console.log("sucesso total");
      })
      .catch((error) => {
        setErrorFirebase(error.message);
      });
  };

  useEffect(() => {
    console.log(dataInput);
  }, [dataInput]);

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
              {...register("email")}
              onChange={handleDataInput}
              id="email"
              placeholder={currentUser?.email}
            />
          ) : (
            <DataValue>{currentUser?.email}</DataValue>
          )}
          {editUserErrors?.email && (
            <InputError error={editUserErrors?.email?.message} />
          )}
        </ProfileData>
        <ProfileData>
          <DataPlaceholder>Password</DataPlaceholder>
          {isEditingUser ? (
            <EditDataValue
              {...register("password")}
              onChange={handleDataInput}
              id="password"
              placeholder="super secrete password"
            />
          ) : (
            <DataValue>**********</DataValue>
          )}
          {editUserErrors?.password && (
            <InputError error={editUserErrors?.password?.message} />
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
              {...register("username")}
              onChange={handleDataInput}
              id="username"
              placeholder={currentUser?.displayName || "Not provided"}
            />
          ) : (
            <DataValue>{currentUser?.displayName || "Not provided"}</DataValue>
          )}
          {editUserErrors?.username && (
            <InputError error={editUserErrors?.username?.message} />
          )}
        </ProfileData>
        <ProfileData>
          <DataPlaceholder>Title</DataPlaceholder>
          {isEditingUser ? (
            <EditDataValue
              {...register("title")}
              onChange={handleDataInput}
              id="title"
              placeholder={"calma"}
            />
          ) : (
            <DataValue>Fantasy Writer</DataValue>
          )}
          {editUserErrors?.title && (
            <InputError error={editUserErrors?.title?.message} />
          )}
        </ProfileData>
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
            onClick={() => {
              handleEditUser();
              setIsEditingUser(false);
            }}
          >
            {isLoading ? <StyledCircularProgress size="30px" /> : "Upload"}
          </UploadButton>
        ) : (
          <EditButton
            disabled={isLoading}
            onClick={() => {
              setIsEditingUser(true);
            }}
          >
            {isLoading ? <StyledCircularProgress size="30px" /> : "Edit"}
          </EditButton>
        )}
      </ProfileContentForm>
    </ProfileInfo>
  );
}
