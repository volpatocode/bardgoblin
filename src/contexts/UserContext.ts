import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";
import { useRouter } from "next/router";

import { UserModalContext } from "./UserModalContext";
import { UserFormData } from "../types/user";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, db, storage } from "../config/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { useMediaQuery } from "@mui/material";

type UserContextProps = {
  children: ReactNode;
};

type UserContextType = {
  isAuthorized: boolean;
  setIsAuthorized: (newState: boolean) => void;
  isLoading: boolean;
  setIsLoading: (newState: boolean) => void;
  createUser: (data: UserFormData) => void;
  loginUser: (data: UserFormData) => void;
  logOut: () => void;
  resetPassword: (data: UserFormData) => void;
  errorFirebase: string;
  handlePhoto: (e: any) => void;
  handlePhotoUpload: () => void;
  photo: boolean;
  photoURL: string;
  currentUser: any;
  forceHome: () => void;
  refreshPage: () => void;
  screenSm: boolean;
  screenMd: boolean;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const { handleUserModal, handleMobileUserModal } = useContext(UserModalContext);
  const currentUser = auth?.currentUser;
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [errorFirebase, setErrorFirebase] = useState("");
  const [photoURL, setPhotoURL] = useState(
    "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
  );

  const router = useRouter();

  // Util functions
  function forceHome() {
    router.push("/");
  }

  function refreshPage() {
    router.reload();
  }

  const screenSm = useMediaQuery("(max-width:600px)");
  const screenMd = useMediaQuery("(max-width:1000px)");

  // User listener

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    });
  }, []);

  // User Login/register functions
  async function createUser(data: UserFormData) {
    setIsLoading(true);
    const res = await createUserWithEmailAndPassword(
      auth,
      data?.email,
      data?.password
    );
    await setDoc(doc(db, "users", res?.user?.uid), {
      email: data?.email,
      password: data?.password,
      uid: res?.user?.uid,
    })
      .then(() => {
        screenMd ? handleMobileUserModal() : handleUserModal();
        console.log(" Cadastrado com sucesso!");
        forceHome();
      })
      .catch((error) => setErrorFirebase(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function loginUser(data: UserFormData) {
    setIsLoading(true);
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((value) => {
        screenMd ? handleMobileUserModal() : handleUserModal();
        console.log("Logado com sucesso!");
        forceHome();
      })
      .catch((error) => setErrorFirebase(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function logOut() {
    setIsLoading(true);
    await signOut(auth)
      .then(() => {
        console.log("Deslogado com sucesso!");
        forceHome();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function resetPassword(data: UserFormData) {
    setIsLoading(true);
    await sendPasswordResetEmail(auth, data.email)
      .then((value) => {
        router.push("/help/emailsent");
        console.log("Email enviado com sucesso!");
      })
      .catch((error) => setErrorFirebase(error.message))
      .finally(() => setIsLoading(false));
  }

  // Profile picture

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser?.photoURL);
    } else {
      setPhotoURL(
        "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
      );
    }
  }, [currentUser, currentUser?.photoURL, photoURL]);

  async function upload(file, currentUser, loading) {
    setIsLoading(true);
    const randomstring = new Date().getTime();
    const fileRef = ref(
      storage,
      `user/profilepicture/${currentUser?.uid + randomstring + ".png"}`
    );

    await uploadBytes(fileRef, file);
    const updatedPhotoURL = await getDownloadURL(fileRef);

    await updateProfile(currentUser, { photoURL: updatedPhotoURL });
    await updateDoc(doc(db, "users", currentUser?.uid), {
      photoURL: updatedPhotoURL,
    }).then(() => {
      refreshPage();
    });
  }

  async function handlePhotoUpload() {
    await upload(photo, currentUser, isLoading);

    setIsLoading(false);
  }

  function handlePhoto(e) {
    if (e.target.files[0]) {
      setIsLoading(true);
      setPhoto(e.target.files[0]);
      setIsLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{
        isAuthorized,
        setIsAuthorized,
        isLoading,
        setIsLoading,
        createUser,
        loginUser,
        logOut,
        resetPassword,
        errorFirebase,
        handlePhoto,
        handlePhotoUpload,
        photo,
        currentUser,
        photoURL,
        forceHome,
        refreshPage,
        screenMd,
        screenSm
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
