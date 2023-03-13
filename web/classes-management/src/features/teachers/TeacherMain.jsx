import React, { useState } from "react";
import { FormControl, Grid, Typography } from "@mui/material";
import AppTextInput from "../../shared/components/app-text-input/AppTextInput";
import AppSelect from "../../shared/components/app-select/AppSelect";
import AppCard from "../../shared/components/app-card/AppCard";
import AppLayout from "../../shared/components/app-layout/AppLayout";
import AppButton from "../../shared/components/app-button/AppButton";
import BoxElement from "../../shared/components/app-box-component/AppBoxComponent";

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

const Heading = ({ heading }) => {
  return (
    <Typography variant="subtitle2" color="lightgrey">
      {heading}
    </Typography>
  );
};

const TeacherMain = () => {
  const [searchObj, setSearchObj] = useState({
    class: "",
    search: "",
  });
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [notes, setNotes] = useState("");

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
        <BoxElement elementOne='Management'
          elementTwo='Teachers'/>
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
                      <Grid item xs={3}>
                        <Heading heading="NAME" />
                      </Grid>
                      <Grid item xs={3}>
                        <Heading heading="DOB" />
                      </Grid>
                      <Grid item xs={3}>
                        <Heading heading="RESIDENCE" />
                      </Grid>
                      <Grid item xs={3}>
                        <Heading heading="STATUS" />
                      </Grid>
                      <Grid item xs={12}>
                        <AppTextInput
                          name="notes"
                          label=""
                          onChange={(event) => setNotes(event.target.value)}
                          value={notes}
                          multiline
                          minRows={3}
                        />
                      </Grid>
                      <Grid item xs={1}>
                        <AppButton btnText="Notes:" />
                      </Grid>
                    </Grid>
                  </AppCard>
                </Grid>
                <Grid item xs={12}>
                  <AppCard title="Classes Assigned">
                    <Grid container spacing={1} style={{ paddingTop: 16 }}>
                      <Grid item xs={3}>
                        <Heading heading="CLASS" />
                      </Grid>
                      <Grid item xs={3}>
                        <Heading heading="SCHEDULE" />
                      </Grid>
                      <Grid item xs={3}>
                        <Heading heading="ROLL" />
                      </Grid>
                      <Grid item xs={3}>
                        <Heading heading="CLASS STATUS" />
                      </Grid>
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
