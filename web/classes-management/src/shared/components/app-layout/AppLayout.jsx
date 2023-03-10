import React from "react";
import PropTypes from "prop-types";
import AppMainBar from "../app-main-bar/AppMainBar";

const AppLayout = ({
  title,
  selectedSchool,
  selectedYear,
  onYearChange,
  onSchoolChange,
  children,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <AppMainBar
        title={title}
        onSchoolChange={onSchoolChange}
        onYearChange={onYearChange}
        selectedSchool={selectedSchool}
        selectedYear={selectedYear}
      />
      {children}
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
