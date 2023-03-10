import React, { useState } from "react";
import { FormControl, Grid, Typography } from "@mui/material";
import AppTextInput from "../../shared/components/app-text-input/AppTextInput";
import AppSelect from "../../shared/components/app-select/AppSelect";
import AppCard from "../../shared/components/app-card/AppCard";
import AppLayout from "../../shared/components/app-layout/AppLayout";

const CLASS_ARRAY = [
  { value: 1, label: "I" },
  { value: 2, label: "II" },
  { value: 3, label: "III" },
  { value: 4, label: "IV" },
  { value: 5, label: "V" },
  { value: 6, label: "VI" },
  { value: 7, label: "VII" },
  { value: 8, label: "VIII" },
  { value: 9, label: "IX" },
  { value: 10, label: "X" },
];

const TeacherMain = () => {
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
      selectedSchool={selectedSchool}
      selectedYear={selectedYear}
      onSchoolChange={(event) => setSelectedSchool(event.target.value)}
      onYearChange={(event) => setSelectedYear(event.target.value)}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AppCard padding="0 32px 16px 32px">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} sm={5} md={5} lg={5}>
                <AppSelect
                  name="class"
                  label="Get Teachers by Class"
                  onChange={handleSearchObjChange}
                  value={searchObj.class}
                  menuItems={CLASS_ARRAY}
                />
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Typography>OR</Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={5} md={5} lg={5}>
                <FormControl margin="normal" fullWidth>
                  <AppTextInput
                    name="search"
                    label="Search a Teacher"
                    placeholder="e.g. First Name / Last Name"
                    onChange={handleSearchObjChange}
                    value={searchObj.search}
                  />
                </FormControl>
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
                    <Typography>About details need to show here</Typography>
                  </AppCard>
                </Grid>
                <Grid item xs={12}>
                  <AppCard title="Classes Assigned">
                    <Typography>
                      Classes Assigned details need to show here
                    </Typography>
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
