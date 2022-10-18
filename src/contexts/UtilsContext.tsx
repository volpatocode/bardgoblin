import { createContext, ReactNode, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { UserModalContext } from "./UserModalContext";

import useMediaQuery from "@mui/material/useMediaQuery";

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
  const { isMenuOpen, isMenuMobileOpen } = useContext(UserModalContext);

  const router = useRouter();

  function forceHome() {
    router.push("/").then(() => {
      router.reload();
    });
  }

  function refreshPage() {
    router.reload();
  }

  const screenSm = useMediaQuery("(max-width:600px)");
  const screenMd = useMediaQuery("(max-width:1000px)");
  const screenLg = useMediaQuery("(max-width:1500px)");

  // prevent modal scrolling
  useEffect(() => {
    if (isMenuMobileOpen || isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isMenuMobileOpen, isMenuOpen]);

  return (
    <UtilsContext.Provider
      value={{ screenMd, screenSm, screenLg, refreshPage, forceHome }}
    >
      {children}
    </UtilsContext.Provider>
  );
};
