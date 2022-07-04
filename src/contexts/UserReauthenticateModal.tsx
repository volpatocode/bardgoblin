import { createContext, ReactNode, useState } from "react";

type UserReauthenticateModalContextProps = {
  children: ReactNode;
};

type UserReauthenticateModalContextType = {
  isOpen: boolean;
  setIsOpen: (newState: boolean) => void;
  handleReauthenticateModal: () => void;
};

export const UserReauthenticateModalContext = createContext<UserReauthenticateModalContextType>(
  {} as UserReauthenticateModalContextType
);

export const UserReauthenticateModalContextProvider = ({
  children,
}: UserReauthenticateModalContextProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleReauthenticateModal = () => setIsOpen(!isOpen)


  return (
    <UserReauthenticateModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        handleReauthenticateModal,
      }}
    >
      {children}
    </UserReauthenticateModalContext.Provider>
  );
};
