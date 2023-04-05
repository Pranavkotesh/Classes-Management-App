import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesMain from "./shared/RoutesMain";
import { THEME, lTHEME } from "./styles";
import "./index.css";
import * as React from 'react';


function App() {
  const [isDark,setIsDark]= useState(false);

  const toggleMode=()=>{
    if(!isDark){
      setIsDark(true)
    }else{
      setIsDark(false)
    }
  }

  return (
    <ThemeProvider theme={isDark?THEME:lTHEME}>
      <div> 
        <CssBaseline />
        <BrowserRouter>
          <RoutesMain onClick={toggleMode} />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
