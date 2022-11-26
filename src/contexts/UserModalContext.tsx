import { createContext, ReactNode, useState } from "react";

type UserModalContextProps = {
  children: ReactNode;
};

type UserModalContextType = {
  isMenuOpen: boolean;
  setIsMenuOpen: (newState: boolean) => void;
  isNavbarMenuOpen: boolean;
  setIsNavbarMenuOpen: (newState: boolean) => void;
  isOnLogin: boolean;
  setIsOnLogin: (newState: boolean) => void;
  isOnRegister: boolean;
  setIsOnRegister: (newState: boolean) => void;
  handleUserModal: () => void;
  handleMobileUserModal: () => void;
  handleUserModalLogin: () => void;
  handleUserModalRegister: () => void;
  toggleLogin: () => void;
  toggleRegister: () => void;
};

export const UserModalContext = createContext<UserModalContextType>(
  {} as UserModalContextType
);

export const UserModalContextProvider = ({
  children,
}: UserModalContextProps) => {
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOnRegister, setIsOnRegister] = useState(false);
  const [isOnLogin, setIsOnLogin] = useState(true);

  const handleUserModal = () => setIsMenuOpen(!isMenuOpen);

  const handleMobileUserModal = () => setIsNavbarMenuOpen(!isNavbarMenuOpen);

  const handleUserModalLogin = () => {
    setIsMenuOpen(!isMenuOpen);
    toggleLogin();
  };
  const handleUserModalRegister = () => {
    setIsMenuOpen(!isMenuOpen);
    toggleRegister();
  };

  const toggleLogin = () => {
    setIsOnLogin(true);
    setIsOnRegister(false);
  };

  const toggleRegister = () => {
    setIsOnRegister(true);
    setIsOnLogin(false);
  };

  return (
    <UserModalContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        isNavbarMenuOpen,
        setIsNavbarMenuOpen,
        handleUserModal,
        handleMobileUserModal,
        handleUserModalLogin,
        handleUserModalRegister,
        isOnLogin,
        setIsOnLogin,
        toggleLogin,
        isOnRegister,
        setIsOnRegister,
        toggleRegister,
      }}
    >
      {children}
    </UserModalContext.Provider>
  );
};
