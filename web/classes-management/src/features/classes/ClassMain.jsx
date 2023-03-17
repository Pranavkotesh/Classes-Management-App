import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import AppCard from "../../shared/components/app-card/AppCard";
import Button from "@mui/material/Button";
import AppLayout from "../../shared/components/app-layout/AppLayout";
import BoxElement from "../../shared/components/app-box-component/AppBoxComponent";
import AppTextInput from "../../shared/components/app-text-input/AppTextInput";

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
                          <Typography
                            sx={{
                              fontSize: 10,
                              paddingLeft:{xs:0,sm:0,md:5},
                              fontWeight: "bold",
                              color: "#bfbfbf",
                            }}
                          >
                            NAME
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Typography
                            sx={{
                              fontSize: 10,
                             
                              fontWeight: "bold",
                              color: "#bfbfbf",
                            }}
                          >
                            SCHEDULE
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Typography
                            sx={{
                              fontSize: 10,
                              
                              fontWeight: "bold",
                              color: "#bfbfbf",
                            }}
                          >
                            CAPACITY
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography
                            sx={{
                              fontSize: 10,
                              
                              fontWeight: "bold",
                              color: "#bfbfbf",
                            }}
                          >
                            REGISTERED/(PAID)
                          </Typography>
                        </Grid>
                        <Grid item xs={1}>
                          <Typography
                            sx={{
                              fontSize: 10,
                            
                              fontWeight: "bold",
                              color: "#bfbfbf",
                            }}
                          >
                            STATUS
                          </Typography>
                        </Grid>
                      </Grid>
                      <AppTextInput
                      rows={4}
                      />
                      <Button
                        variant="oulined"
                        sx={{
                          backgroundColor: "#1aa3ff",
                          marginLeft: 1,
                          marginTop: 2,
                          minWidth: 45,
                          color: "white",
                          paddingTop: "5px",
                          paddingLeft: "5px",
                          paddingRight: "5px",
                          textAlign: "center",
                          fontSize: 8,
                          ":hover": { bgcolor: "black", color: "white" },
                        }}
                      >
                        Notes :
                      </Button>
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