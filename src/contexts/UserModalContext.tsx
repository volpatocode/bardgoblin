import { createContext, ReactNode, useState } from "react";

type UserModalContextProps = {
  children: ReactNode;
};

type UserModalContextType = {
  isUserMenuOpen: boolean;
  setIsUserMenuOpen: (newState: boolean) => void;
  isNavbarMenuOpen: boolean;
  setIsNavbarMenuOpen: (newState: boolean) => void;
  isOnLogin: boolean;
  setIsOnLogin: (newState: boolean) => void;
  isOnRegister: boolean;
  setIsOnRegister: (newState: boolean) => void;
  handleUserMenu: () => void;
  handleNavbarMenu: () => void;
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
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isOnRegister, setIsOnRegister] = useState(false);
  const [isOnLogin, setIsOnLogin] = useState(true);

  const handleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  const handleNavbarMenu = () => setIsNavbarMenuOpen(!isNavbarMenuOpen);

  const handleUserModalLogin = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
    toggleLogin();
  };
  const handleUserModalRegister = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
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
        isUserMenuOpen,
        setIsUserMenuOpen,
        isNavbarMenuOpen,
        setIsNavbarMenuOpen,
        handleUserMenu,
        handleNavbarMenu,
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
