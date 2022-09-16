import { createContext, ReactNode, useContext, useState } from "react";

type SearchContextProps = {
  children: ReactNode;
};

type SearchContextType = {};

export const SearchContext = createContext<SearchContextType>(
  {} as SearchContextType
);

export const SearchContextProvider = ({ children }: SearchContextProps) => {
  return <SearchContext.Provider value={{}}>{children}</SearchContext.Provider>;
};
