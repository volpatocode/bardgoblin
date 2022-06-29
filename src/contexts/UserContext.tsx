import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";

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
import { doc, getDoc } from "firebase/firestore";
import { UserModalContext } from "./UserModalContext";

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
  const [userData, setUserData] = useState({});

  // Util functions

  function forceHome() {
    document.location.href = "/";
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

  // useEffect(() => {
  //   async function fetchUserData() {
  //     try {
  //       const docRef = doc(db, "users", currentUser?.uid);
  //       const docSnapshot = await getDoc(docRef);

  //       if (docSnapshot.exists()) {
  //         setUserData(docSnapshot.data());
  //       } else {
  //         console.log("No such document!");
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   console.log(userData);
  //   fetchUserData();
  // }, []);

  // User Login/register functions
  async function createUser(data: UserFormData) {
    setIsLoading(true);
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((value) => {
        handleUserModal();
        console.log("Cadastrado com sucesso!");
      })
      .catch((error) => setErrorFirebase(error.message))
      .finally(() => {
        setIsLoading(false);
        forceHome();
      });
  }

  async function loginUser(data: UserFormData) {
    setIsLoading(true);
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((value) => {
        handleUserModal();
        console.log("Logado com sucesso!");
      })
      .catch((error) => setErrorFirebase(error.message))
      .finally(() => {
        setIsLoading(false);
        forceHome();
      });
  }

  async function logOut() {
    setIsLoading(true);
    await signOut(auth)
      .then(() => {
        console.log("Deslogado com sucesso!");
      })
      .finally(() => {
        setIsLoading(false);
        forceHome();
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

  function handlePhotoUpload() {
    upload(photo, currentUser, isLoading);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
