import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      dark: "#DD3E0E",
      light: "#DD3E0E",
      main: "#DD3E0E",
    },
    secondary: {
      dark: "#DD3E0E",
      light: "#DD3E0E",
      main: "#DD3E0E",
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "#DD3E0E",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#DD3E0E",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "rgba(255, 255, 255, 0.75)",
          borderColor: "#DD3E0E",
        },
      },
    },
  },
});
