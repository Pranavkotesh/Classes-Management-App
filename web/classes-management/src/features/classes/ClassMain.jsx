import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import AppCard from "../../shared/components/app-card/AppCard";
import AppLayout from "../../shared/components/app-layout/AppLayout";
import BoxElement from "../../shared/components/app-box-component/AppBoxComponent";
import AppTextInput from "../../shared/components/app-text-input/AppTextInput";
import AppButton from "../../shared/components/app-button/AppButton";

const Heading = ({ heading }) => {
  return (
    <Typography variant="subtitle2" color="#bfbfbf" sx={{fontSize:11}}>
      {heading}
    </Typography>
  );
};

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
      <main>
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "#e6e6e6",
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
                      <Grid
                        container
                        spacing={0}
                        sx={{ display: { xs: "none", sm: "flex" } }}
                      >
                        <Grid item xs={2}>
                          
                          <Heading heading='NAME'/>
                        </Grid>
                        <Grid item xs={2}>
                          <Heading heading="SCHEDULE"/>
                        </Grid>
                        <Grid item xs={2}>
                        <Heading heading="CAPACITY"/>
                        </Grid>
                        <Grid item xs={3}>
                        <Heading heading="REGISTERED/(PAID)"/>
                        </Grid>
                        <Grid item xs={1}>
                          <Heading heading="STATUS"/>
                        </Grid>
                      </Grid>
                      <AppTextInput rows={4} />
                      <Grid item xs={1}>
                      <AppButton
                      btnText='notes:'/></Grid>
                      
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
      </main>
    </AppLayout>
  );
};
export default ClassMain;
