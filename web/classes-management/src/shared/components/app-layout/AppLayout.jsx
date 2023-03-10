import React from "react";
import PropTypes from "prop-types";
import AppMainBar from "../app-main-bar/AppMainBar";
import { makeStyles } from "@mui/styles";


const useStyles= makeStyles(({
  section:{padding: 16, width: "100%",minHeight: "calc(100vh - 64px)",
  overflow: "auto",background: "#e6e6e6"}
}))
const AppLayout = ({
  title,
  selectedSchool,
  selectedYear,
  onYearChange,
  onSchoolChange,
  children,
}) => {
  const editing=useStyles();
  return (
    <div style={{ display: "flex" }}>
      <AppMainBar
        title={title}
        onSchoolChange={onSchoolChange}
        onYearChange={onYearChange}
        selectedSchool={selectedSchool}
        selectedYear={selectedYear}
      />
      <section className={editing.section}>{children}</section>
    </div>
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
