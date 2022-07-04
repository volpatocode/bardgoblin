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
import { auth, db } from "../../../config/firebaseConfig";
import {
  updateProfile,
  updatePassword,
  updateEmail,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { editUserValidationSchema } from "../../../utils/validations";
import InputError from "../../InputError";
import { EditUserData, UserFormData } from "../../../types/user";
import { UserModalContext } from "../../../contexts/UserModalContext";

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
    refreshPage,
  } = useContext(UserContext);
  const { handleUserModal } = useContext(UserModalContext);

  const [isEditingUser, setIsEditingUser] = useState(false);
  const [dataInput, setDataInput] = useState<EditUserData>();
  const [userData, setUserData] = useState({});
  const [errorFirebase, setErrorFirebase] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors: editUserErrors },
  } = useForm({
    resolver: yupResolver(editUserValidationSchema),
  });

  // Edit user

  async function reauthenticate(data: UserFormData) {
    const credential = EmailAuthProvider.credential(data.email, data.password);
    reauthenticateWithCredential(auth.currentUser, credential)
      .then(() => {
        console.log("User re-authenticated");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  const handleDataInput = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const value = e.target.value;
    setDataInput({ ...dataInput, [id]: value });
  };

  async function updateUserDisplayName() {
    await updateProfile(auth?.currentUser, { displayName: dataInput?.username })
      .then(() => {
        console.log("Trocou o username");
      })
      .catch((error) => {
        setErrorFirebase(error.message);
        handleUserModal();
      });
  }

  async function updateUserEmail() {
    await updateEmail(auth?.currentUser, dataInput?.email)
      .then(() => {
        console.log("Trocou o email");
      })
      .catch((error) => {
        setErrorFirebase(error.message);
        handleUserModal();
      });
  }

  async function updateUserPassword() {
    await updatePassword(auth?.currentUser, dataInput?.password)
      .then(() => {
        console.log("Trocou a senha");
      })
      .catch((error) => {
        setErrorFirebase(error.message);
        handleUserModal();
      });
  }

  const handleEditUser = async () => {
    try {
      if (dataInput?.email && !errorFirebase) {
        updateUserEmail();
      }
      if (dataInput?.password && !errorFirebase) {
        updateUserPassword();
      }
      if (dataInput?.username && !errorFirebase) {
        updateUserDisplayName();
      }
    } finally {
      setIsEditingUser(false);
    }
  };

  // useEffect(() => {
  //   if (errorFirebase) {
  //     handleUserModalLogin();
  //   }
  // }, [errorFirebase]);

  // useEffect(() => {
  //   console.log(dataInput);
  // }, [dataInput]);

  // useEffect(() => {
  //   console.log(editUserErrors);
  //   console.log(errorFirebase);
  // }, [errorFirebase, editUserErrors]);

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
        <ProfileData>
          <DataPlaceholder>Email</DataPlaceholder>
          {isEditingUser ? (
            <EditDataValue
              {...register("email")}
              onChange={handleDataInput}
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
        <ProfileData>
          <DataPlaceholder>Password</DataPlaceholder>
          {isEditingUser ? (
            <EditDataValue
              {...register("password")}
              onChange={handleDataInput}
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
              type="text"
              defaultValue={currentUser?.displayName || "Not provided"}
            />
          ) : (
            <DataValue>{currentUser?.displayName || "Not provided"}</DataValue>
          )}
        </ProfileData>
        {editUserErrors?.username && (
          <InputError error={editUserErrors?.username?.message} />
        )}
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
