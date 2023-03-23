import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import AppLayout from "../../shared/components/app-layout/AppLayout";
import BoxElement from "../../shared/components/app-box-component/AppBoxComponent";
import AppCard from "../../shared/components/app-card/AppCard";
import AppTable from "../../shared/components/app-table-component/AppTableComponent";
const names=["Class Name","Age Eligibility","Schedule Dates","Schedule Times","Capacity/Registered(Paid)","Teachers"]

const ClassesSummary = () => {
  return (
    <AppLayout title="Classes Summary">
      <Grid container spacing={2}>
        <BoxElement elementOne="Reports" elementTwo="Classes Summary" />
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <AppCard minHeight={130}>
                <Grid container>
                  <Grid
                    item
                    xs={1}
                    sx={{
                      display: { xs: "none", sm: "flex" },
                      marginTop: { sm: 4, md: 1,lg:0 },
                      marginRight:{xs:0,sm:1,md:2,lg:0}
                    }}
                  >
                    <img
                      src="/images/Summary.png"
                      alt=""
                      width="65"
                      height="50"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      sx={{
                        fontSize: { xs: 16, sm: 18 },
                        fontWeight: "bolder",
                        marginTop: { xs: 2, sm: 2, md: 0 },
                        marginLeft: { xs: 0, sm: 3, md: 0 },
                      }}
                    >
                      Classes
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: 16, sm: 18 },
                        fontWeight: "bolder",
                        marginLeft: { xs: 0, sm: 3, md: 0 },
                      }}
                    >
                      Summary Report
                    </Typography>
                  </Grid>

                  <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    sx={{
                      borderWidth: 1,
                      marginRight: "5vh",
                      marginLeft: { xs: 6, sm: 6, md: 2,lg:0 },
                    }}
                  />

                  <Grid item xs={1} md={2} sx={{ alignItems: "center" }}>
                    <Typography sx={{ paddingTop: 2, color: "#999999" }}>
                      All classes under a school
                    </Typography>
                  </Grid>
                </Grid>
              </AppCard>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: { xs: 0, sm: 4 } }}>
              <AppCard title="Classes" minHeight={270}>
                <Grid item={10}>
                  <AppTable titles={names}
                  border="2px solid rgba(217,217,217)"
                  />
                  
                  
                </Grid>
              </AppCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default ClassesSummary;
