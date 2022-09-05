import { createContext, ReactNode } from "react";

type UtilsContextProps = {
  children: ReactNode;
};

type UtilsContextType = {};

export const UtilsContext = createContext<UtilsContextType>(
  {} as UtilsContextType
);

export const UtilsContextProvider = ({ children }: UtilsContextProps) => {
  return <UtilsContext.Provider value={{}}>{children}</UtilsContext.Provider>;
};
