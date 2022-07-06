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
import { auth, storage } from "../config/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

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
  forgotPassword: (data: UserFormData) => void;
  errorFirebase: string;
  handlePhoto: (e: any) => void;
  handlePhotoUpload: () => void;
  photo: boolean;
  photoURL: string;
  currentUser: any;
  forceHome: () => void;
  refreshPage: () => void;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const { handleUserModal } = useContext(UserModalContext);
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
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((value) => {
        handleUserModal();
        console.log("Cadastrado com sucesso!");
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
        handleUserModal();
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

  async function forgotPassword(data: UserFormData) {
    setIsLoading(true);
    await sendPasswordResetEmail(auth, data.email)
      .then((value) => {
        document.location.href = "/help/emailsent";
        console.log("Email enviado com sucesso!");
      })
      .catch((error) => setErrorFirebase(error.message))
      .finally(() => setIsLoading(false));
  }

  // Profile picture
  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser?.photoURL);
    }
  }, [currentUser]);

  async function upload(file, currentUser, loading) {
    const fileRef = ref(
      storage,
      `user/profilepicture/${currentUser?.uid + ".png"}`
    );
    setIsLoading(true);
    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);
    updateProfile(currentUser, { photoURL: photoURL });

    setIsLoading(false);
  }

  function handlePhoto(e) {
    if (e.target.files[0]) {
      setIsLoading(true);
      setPhoto(e.target.files[0]);
      setIsLoading(false);
    }
  }

  async function handlePhotoUpload() {
    await upload(photo, currentUser, isLoading).then(() => refreshPage());
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
        forgotPassword,
        errorFirebase,
        handlePhoto,
        handlePhotoUpload,
        photo,
        currentUser,
        photoURL,
        forceHome,
        refreshPage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
