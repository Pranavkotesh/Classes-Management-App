import React, { useState } from "react";
import GridComponent from "../../shared/components/app-grid-component/AppGridComponent";
import AppLayout from "../../shared/components/app-layout/AppLayout";

const ClassMain = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");

  return (
    <AppLayout
      title="Classes"
      selectedSchool={selectedSchool}
      selectedYear={selectedYear}
      onSchoolChange={(event) => setSelectedSchool(event.target.value)}
      onYearChange={(event) => setSelectedYear(event.target.value)}
    >
      <section style={{ padding: 16 }}>
        <GridComponent />
      </section>
    </AppLayout>
  );
};
export default ClassMain;
