import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import AppCard from "../../shared/components/app-card/AppCard";
import AppLayout from "../../shared/components/app-layout/AppLayout";
import BoxElement from "../../shared/components/app-box-component/AppBoxComponent";
import AppButton from "../../shared/components/app-button/AppButton";
import AppTable from "../../shared/components/app-table-component/AppTableComponent";
import { classAbout } from "../../shared/components/app-headings/AppHeadings";
import { NameChanger } from "../../App";
import Box from "@mui/material/Box";

const ClassMain = () => {
  const {name,changeName}=React.useContext(NameChanger)
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
      <main>
        {/* <Typography>{name}</Typography> */}
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "background.default",
          }}
        >
          <BoxElement elementOne="Management" elementTwo="classes" />
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <AppCard title="CLASS LIST" minHeight={120} />
              </Grid>
              <Grid item xs={12} sm={12} md={9} lg={9}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <AppCard title="ABOUT" minHeight={170}>
                      <Grid container spacing={0}>
                        <AppTable
                          titles={classAbout}
                          minHeight="10vh"
                          color="#bfbfbf"
                          borderBody="2px solid rgba(217,217,217)"
                        />
                      </Grid>
                      <Grid item xs={1}>
                        <AppButton btnText="notes:" />
                      </Grid>
                    </AppCard>
                  </Grid>
                  <Grid item xs={12}>
                    <AppCard title="CLASS INFO" minHeight={120}></AppCard>
                  </Grid>
                  <Grid item xs={12}>
                    <AppCard title="CLASS TEACHERS" minHeight={100}></AppCard>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{marginTop:2}}>
        <AppButton btnText="Press here" onClick={changeName}/>
        </Box>
      </main>
    </AppLayout>
  );
};
export default ClassMain;
