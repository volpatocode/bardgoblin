import { createContext, ReactNode, useState, useEffect } from "react";

import { UserFormData } from "../types/user";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../config/firebaseConfig";

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
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isAuthorized, setIsAuthorized] = useState(false);

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
        console.log("Cadastrado com sucesso!");
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }

  async function loginUser(data: UserFormData) {
    setIsLoading(true);
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((value) => {
        console.log("Logado com sucesso!");
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }

  async function logOut() {
    setIsLoading(true);
    await signOut(auth)
      .then(() => {
        console.log("Deslogado com sucesso!");
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }

  async function forgotPassword(data: UserFormData) {
    setIsLoading(true);
    await sendPasswordResetEmail(auth, data.email)
      .then((value) => {
        console.log("Email enviado com sucesso!");
      })
      .catch((error) => console.log(error))
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};