import { createContext, ReactNode } from "react";

import { useRouter } from "next/router";
import useMediaQuery from '@mui/material/useMediaQuery';

type UtilsContextProps = {
  children: ReactNode;
};

type UtilsContextType = {
  screenSm: boolean;
  screenMd: boolean;
  screenLg: boolean;
  forceHome: () => void;
  refreshPage: () => void;
};

export const UtilsContext = createContext<UtilsContextType>(
  {} as UtilsContextType
);

export const UtilsContextProvider = ({ children }: UtilsContextProps) => {
  const router = useRouter();

  function forceHome() {
    router.push("/");
  }

  function refreshPage() {
    router.reload();
  }

  const screenSm = useMediaQuery("(max-width:600px)");
  const screenMd = useMediaQuery("(max-width:1000px)");
  const screenLg = useMediaQuery("(max-width:1500px)");


  return (
    <UtilsContext.Provider
      value={{ screenMd, screenSm, screenLg, refreshPage, forceHome }}
    >
      {children}
    </UtilsContext.Provider>
  );
};
