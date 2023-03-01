import { createTheme } from "@mui/material";

export const THEME = createTheme({
  typography: {
    fontFamily: [
      "Montserrat",
      "Rubik",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  props: {
    MuiTextField: {
      variant: "outlined",
      size: "small",
    },
    MuiFormControl: {
      variant: "outlined",
      size: "small",
    },
  },
  palette: {
    primary: {
      500: "#3f51b5",
    },
    secondary: {
      main: "#009de1",
      contrastText: "#fff",
    },
  },
});

export const GS = () => ({
  p8: {
    padding: 8,
  },
});
