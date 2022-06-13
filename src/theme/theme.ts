import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      contrastText: "rgba(255, 255, 255, 0.75)",
      dark: "#DD3E0E",
      light: "#DD3E0E",
      main: "#DD3E0E",
    },
    secondary: {
      contrastText: "#000",
      dark: "#FF9900",
      light: "#FF9900",
      main: "#FF9900",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.75)",
      secondary: "#000",
    },
  },
});
