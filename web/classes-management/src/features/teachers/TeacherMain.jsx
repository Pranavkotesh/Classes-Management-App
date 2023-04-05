import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import AppTextInput from "../../shared/components/app-text-input/AppTextInput";
import AppCard from "../../shared/components/app-card/AppCard";
import AppLayout from "../../shared/components/app-layout/AppLayout";
import AppButton from "../../shared/components/app-button/AppButton";
import BoxElement from "../../shared/components/app-box-component/AppBoxComponent";
import BasicSelect from "../../shared/components/app-select-box/AppSelectInput";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import AppTable from "../../shared/components/app-table-component/AppTableComponent";
import { teacherArr } from "../../shared/components/app-constants/DataConstant";
import { teachersAbout, teachersAssigned } from "../../shared/components/app-headings/AppHeadings";


const TeacherMain = ({onClick}) => {
  const [searchObj, setSearchObj] = useState({
    class: "",
    search: "",
  });
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");


  const handleSearchObjChange = (event) => {
    const { name, value } = event.target;
    setSearchObj({
      ...searchObj,
      [name]: value,
    });
  };

  return (
    <AppLayout
      title="Teachers"
      onClick={onClick}
      selectedSchool={selectedSchool}
      selectedYear={selectedYear}
      onSchoolChange={(event) => setSelectedSchool(event.target.value)}
      onYearChange={(event) => setSelectedYear(event.target.value)}
    >
      <Grid container spacing={2}>
        <BoxElement elementOne="Management" elementTwo="Teachers" />
        <Grid item xs={12}>
          <AppCard padding="0 32px 16px 32px">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} sm={5} md={5} lg={5} sx={{ marginTop: 3 }}>
                <BasicSelect
                  name="class"
                  label="Get Teachers by Class"
                  onChange={handleSearchObjChange}
                  value={searchObj.class}
                  menuItems={teacherArr}
                  icon={<LocalLibraryIcon />}
                  color="#808080"
                />
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Typography>OR</Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={5} md={5} lg={5}>
                <AppTextInput
                  name="search"
                  label="Search a Teacher"
                  placeholder="e.g. First Name / Last Name"
                  onChange={handleSearchObjChange}
                  value={searchObj.search}
                />
              </Grid>
            </Grid>
          </AppCard>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <AppCard title="Teachers List" minHeight={130} />
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <AppCard title="About">
                    <Grid container spacing={1} style={{ paddingTop: 16 }}>
                      <AppTable
                        titles={teachersAbout}
                        minHeight="10vh"
                        color="#bfbfbf"
                        borderBody="2px solid rgba(217,217,217)"
                      />
                      <Grid item xs={1}>
                        <AppButton btnText="Notes:" />
                      </Grid>
                    </Grid>
                  </AppCard>
                </Grid>
                <Grid item xs={12}>
                  <AppCard title="Classes Assigned">
                    <Grid container spacing={1} style={{ paddingTop: 16 }}>
                      <AppTable
                        titles={teachersAssigned}
                        minHeight="0vh"
                        color="#bfbfbf"
                        borderBody="white"
                      />
                    </Grid>
                  </AppCard>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default TeacherMain;
