import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { UserModalContext } from "../../../contexts/UserModalContext";

import { auth, db } from "../../../config/firebaseConfig";
import { updateProfile, updatePassword, updateEmail } from "firebase/auth";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { editUserValidationSchema } from "../../../utils/validations";
import { UserFormData } from "../../../types/user";

import EmailStatus from "../EmailStatus";
import HelpPopover from "../../HelpPopover";
import { StyledCircularProgress } from "../../UserModal/styles";
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
import { collection, doc, getDoc, getDocs, QuerySnapshot } from "firebase/firestore";

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
  const { handleUserModal } = useContext(UserModalContext);

  const [isEditingUser, setIsEditingUser] = useState(false);
  const [errorFirebase, setErrorFirebase] = useState("");
  const [userData, setUserData] = useState<UserFormData>({});

  const {
    register,
    handleSubmit,
    formState: { errors: editUserErrors },
  } = useForm({
    resolver: yupResolver(editUserValidationSchema),
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const querySnapshot = await getDoc(doc(db, "users", currentUser?.uid));
        querySnapshot &&
          setUserData({...querySnapshot?.data() });
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    console.log(userData.password)
  }, [userData])



  // Edit user

  async function updateUserDisplayName(data: UserFormData) {
    await updateProfile(auth?.currentUser, { displayName: data?.username })
      .then(() => {
        console.log("Trocou o username");
      })
      .catch((error) => {
        setErrorFirebase(error.message);
        handleUserModal();
      });
  }

  async function updateUserEmail(data: UserFormData) {
    await updateEmail(auth?.currentUser, data?.email)
      .then(() => {
        console.log("Trocou o email");
      })
      .catch((error) => {
        setErrorFirebase(error.message);
        handleUserModal();
      });
  }

  async function updateUserPassword(data: UserFormData) {
    await updatePassword(auth?.currentUser, data?.password)
      .then(() => {
        console.log("Trocou a senha");
      })
      .catch((error) => {
        setErrorFirebase(error.message);
        handleUserModal();
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
    if (userData?.password != data?.password) {
      updateUserPassword(data);
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

        <ProfileDataBox>
          <ProfileData>
            <DataPlaceholder>Password</DataPlaceholder>
            {isEditingUser ? (
              <EditDataValue
                {...register("password")}
                id="password"
                placeholder="******"
                type="password"
              />
            ) : (
              <DataValue>******</DataValue>
            )}
          </ProfileData>
          {editUserErrors?.password && (
            <InputError error={editUserErrors?.password?.message} />
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
