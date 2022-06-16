import { createContext, ReactNode, useState } from "react";

type UserModalContextProps = {
  children: ReactNode;
};

type UserModalContextType = {
    isOpen  : boolean;
    setIsOpen : (newState: boolean) => void;
    isOnLogin : boolean;
    setIsOnLogin : (newState: boolean) => void;
    isOnRegister : boolean;
    setIsOnRegister : (newState: boolean) => void;
    handleUserModal : () => void,
    toggleLogin : () => void;
    toggleRegister : () => void;
};

export const UserModalContext = createContext<UserModalContextType>({} as UserModalContextType);

export const UserModalContextProvider = ({ children }: UserModalContextProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleUserModal = () => setIsOpen(!isOpen);

  const [isOnLogin, setIsOnLogin] = useState(true);
  const toggleLogin = () => {
    setIsOnLogin(true);
    setIsOnRegister(false);
  };

  const [isOnRegister, setIsOnRegister] = useState(false);
  const toggleRegister = () => {
    setIsOnRegister(true);
    setIsOnLogin(false);
  };

  return (
    <UserModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        handleUserModal,
        isOnLogin,
        setIsOnLogin,
        toggleLogin,
        isOnRegister,
        setIsOnRegister,
        toggleRegister
      }}
    >
      {children}
    </UserModalContext.Provider>
  );
};
