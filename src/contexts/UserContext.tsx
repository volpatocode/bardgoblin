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
  updateCurrentUser,
} from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { UserModalContext } from "./UserModalContext";

type UserContextProps = {
  children: ReactNode;
};

type UserContextType = {
  isLoading: boolean;
  setIsLoading: (newState: boolean) => void;
  createUser: (data: UserFormData) => void;
  loginUser: (data: UserFormData) => void;
  logOut: () => void;
  forgotPassword: (data: UserFormData) => void;
  isAuthorized: boolean;
  setIsAuthorized: (newState: boolean) => void;
  errorFirebase: string;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const { handleUserModal } = useContext(UserModalContext);

  const [isLoading, setIsLoading] = useState(false);
  const [errorFirebase, setErrorFirebase] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [photoURL, setPhotoURL] = useState(
    "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
  );



  useEffect(() => {
    if(auth?.currentUser?.photoURL) {
      setPhotoURL(auth.currentUser.photoURL)
    }
  }, [auth.currentUser])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    });
  }, []);

  async function createUser(data: UserFormData) {
    setIsLoading(true);
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((value) => {
        handleUserModal();
        console.log("Cadastrado com sucesso!");
      })
      .catch((error) => setErrorFirebase(error.message))
      .finally(() => setIsLoading(false));
  }

  async function loginUser(data: UserFormData) {
    setIsLoading(true);
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((value) => {
        handleUserModal();
        console.log("Logado com sucesso!");
      })
      .catch((error) => setErrorFirebase(error.message))
      .finally(() => setIsLoading(false));
  }

  async function logOut() {
    setIsLoading(true);
    await signOut(auth)
      .then(() => {
        console.log("Deslogado com sucesso!");
      })
      .finally(() => setIsLoading(false));
  }

  async function forgotPassword(data: UserFormData) {
    setIsLoading(true);
    await sendPasswordResetEmail(auth, data.email)
      .then((value) => {
        console.log("Email enviado com sucesso!");
      })
      .catch((error) => setErrorFirebase(error.message))
      .finally(() => setIsLoading(false));
  }

  return (
    <UserContext.Provider
      value={{
        isLoading,
        setIsLoading,
        createUser,
        loginUser,
        logOut,
        forgotPassword,
        isAuthorized,
        setIsAuthorized,
        errorFirebase,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
