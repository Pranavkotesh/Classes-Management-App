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

    mode: "dark",
    primary: {
      500: "#6666ff",
      add: "#6666ff",
      
      switchMode:'white',
      openIcon:'#4747d1'
    },
    secondary: {
      main: "#8c8c8c",
    },
    background: {
      default: "#000000",
      card: "#333333",
      button: "#ccccff",
      grid: "#333333",
      schedule:'#262626'
    },
  },
});

export const lTHEME = createTheme({
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
    mode: "light",
    primary: {
      500: "#3f51b5",
      add: "#6666ff",
      // iconColor:'#808080',
      switchMode:'#ffcc00',
      openIcon:'#3333cc'
    },
    secondary: {
      main: "#009de1",
      contrastText: "#fff",
    },
    background: {
      default: "#e6e6e6",
      card: "white",
      button: "#ccccff",
      grid: "#f2f2f2",
      schedule:'#f2f2f2'
      
    },
  },
});

export const GS = () => ({
  p8: {
    padding: 8,
  },
});
