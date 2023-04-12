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
      500: "#EEEEEE",
      add: "#0E8388",
      switchMode:'white',
      openIcon:'white',
      exitButton:'white',
      typo:'white',
      basicIcon:'#808080'
    },
    secondary: {
      main: "#8c8c8c",
    },
    background: {
      default: "#334257",
      
      card: "#476072",
      button: "#CBE4DE",
      grid: "#476072",
      drawerBg:'#394960',
      selectedItem:'#476072'
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
      exitButton:'#354497',
      500: "#3f51b5",
      add: "#6666ff",
      switchMode:'#ffcc00',
      openIcon:'#3333cc',
      typo:'#999999',
      basicIcon:'#808080'
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
      drawerBg:'#3333cc',
      selectedItem: '#2e3b84'
      
    },
  },
});

export const GS = () => ({
  p8: {
    padding: 8,
  },
});
