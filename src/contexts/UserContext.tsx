import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";
import { useRouter } from "next/router";

import { UserModalContext } from "./UserModalContext";
import { UtilsContext } from "./UtilsContext";
import { UserFormData } from "../types/types";

import { auth, db, storage } from "../config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  updateProfile,
  deleteUser as deleteFirebaseUser,
} from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { AccountCircle } from "../components/AvatarIcon/styles";

type UserContextProps = {
  children: ReactNode;
};

type UserContextType = {
  isAuthorized: boolean;
  setIsAuthorized: (newState: boolean) => void;
  isLoading: boolean;
  setIsLoading: (newState: boolean) => void;
  isUserLoading: boolean;
  setIsUserLoading: (newState: boolean) => void;
  createUser: (data: UserFormData) => void;
  loginUser: (data: UserFormData) => void;
  logOut: () => void;
  resetPassword: (data: UserFormData) => void;
  errorFirebase: string;
  handlePhoto: (e: any) => void;
  handlePhotoUpload: () => void;
  photo: any;
  photoURL: any;
  currentUser: any;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const { setIsUserMenuOpen, setIsNavbarMenuOpen } =
    useContext(UserModalContext);
  const { screenMd, forceHome, refreshPage } = useContext(UtilsContext);
  const currentUser = auth?.currentUser;
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [errorFirebase, setErrorFirebase] = useState("");
  const [photoURL, setPhotoURL] = useState(<AccountCircle size="sm" />);

  const router = useRouter();

  // User listener

  useEffect(() => {
    setIsUserLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthorized(true);
        setIsUserLoading(false);
      } else {
        setIsAuthorized(false);
        setIsUserLoading(false);
      }
    });
  }, []);

  async function createUser(data: UserFormData) {
    setIsLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data?.email,
        data?.password
      );
      try {
        await setDoc(doc(db, "users", res?.user?.uid), {
          email: data?.email,
          uid: res?.user?.uid,
        }).then(() => {
          setIsUserMenuOpen(false), screenMd && setIsNavbarMenuOpen(false);
          forceHome();
        });
      } catch (error) {
        setErrorFirebase(error.message);
      }
    } catch (error) {
      setErrorFirebase(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function loginUser(data: UserFormData) {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password).then(
        () => {
          setIsUserMenuOpen(false), screenMd && setIsNavbarMenuOpen(false);
          forceHome();
        }
      );
    } catch (error) {
      setErrorFirebase(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function logOut() {
    setIsLoading(true);
    try {
      await signOut(auth).then(() => {
        setIsUserMenuOpen(false), screenMd && setIsNavbarMenuOpen(false);
        forceHome();
      });
    } catch (error) {
      setErrorFirebase(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function resetPassword(data: UserFormData) {
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, data.email).then(() => {
        router.push("/help/emailsent");
      });
    } catch (error) {
      setErrorFirebase(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteUser(currentUser) {
    setIsLoading(true);
    try {
      deleteFirebaseUser(currentUser).then(() => {
        forceHome();
      });
    } catch (error) {
      setErrorFirebase(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  // Profile picture

  useEffect(() => {
    if (currentUser?.photoURL) {
      //@ts-ignore
      setPhotoURL(currentUser?.photoURL);
    } else {
      setPhotoURL(<AccountCircle size="sm" />);
    }
  }, [currentUser?.photoURL]);

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
        isUserLoading,
        setIsUserLoading,
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
