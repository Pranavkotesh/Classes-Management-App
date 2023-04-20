import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesMain from "./shared/RoutesMain";
import { THEME, lTHEME } from "./styles";
import "./index.css";
import * as React from 'react';
import { createContext } from "react";


export const ToggleContext = createContext();

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleMode = () => {
    setIsDark(!isDark);
  };

  return (
    <ToggleContext.Provider value={toggleMode}>
      <ThemeProvider theme={isDark ? THEME : lTHEME}>
        <div>
          <CssBaseline />
          <BrowserRouter>
            <RoutesMain />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </ToggleContext.Provider>
  );
}

export default App;