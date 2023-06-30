import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesMain from "./shared/RoutesMain";
import { THEME, lTHEME } from "./styles";
import "./index.css";
import * as React from 'react';
import { createContext } from "react";


export const ToggleContext = createContext();
export const NameChanger = createContext();

function App() {
  const [isDark, setIsDark] = useState(false);
  const [name,setName]=useState("Not pressed")

  const changeName=()=>{
    setName("Button Pressed");
  }

  const toggleMode = () => {
    setIsDark(!isDark);
  };

  return (
    
    <ToggleContext.Provider value={toggleMode}>
      <NameChanger.Provider value={{changeName,name}}>
      <ThemeProvider theme={isDark ? THEME : lTHEME}>
        <div>
          <CssBaseline />
          <BrowserRouter>
            <RoutesMain />
          </BrowserRouter>
        </div>
      </ThemeProvider>
      </NameChanger.Provider>
    </ToggleContext.Provider>
  );
}

export default App;