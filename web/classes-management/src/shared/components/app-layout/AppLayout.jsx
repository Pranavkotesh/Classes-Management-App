import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import AppMainBar from "../app-main-bar/AppMainBar";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@emotion/react";
import { THEME } from "../../../styles";
const useStyles= makeStyles(({
  section:{padding: 16, width: "100%",minHeight: "calc(100vh - 64px)",
  overflow: "auto",background:'background.default'}
}))
const AppLayout = ({
  title,
  selectedSchool,
  selectedYear,
  onYearChange,
  onSchoolChange,
  children,
  
}) => {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
    }else{
      setMode('light');
    }
  }
  const editing=useStyles();
  return (
    <ThemeProvider theme={THEME}>
    <div style={{ display: "flex" }}>
      <AppMainBar
        title={title}
        onSchoolChange={onSchoolChange}
        onYearChange={onYearChange}
        selectedSchool={selectedSchool}
        selectedYear={selectedYear}
        onClick={toggleMode}
      />
      <section className={editing.section}>{children}</section>
    </div>
    </ThemeProvider>
  );
};

AppLayout.prototype = {
  title: PropTypes.string.isRequired,
  selectedYear: PropTypes.string,
  selectedSchool: PropTypes.string,
  onYearChange: PropTypes.func,
  onSchoolChange: PropTypes.func,
  children: PropTypes.any.isRequired,
};

export default AppLayout;
