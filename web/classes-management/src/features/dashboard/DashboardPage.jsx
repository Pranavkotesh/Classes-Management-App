import React from "react";
import { Divider, Grid, TableBody, TableContainer, Typography } from "@mui/material";
import AppLayout from "../../shared/components/app-layout/AppLayout";
import BoxElement from "../../shared/components/app-box-component/AppBoxComponent";
import AppCard from "../../shared/components/app-card/AppCard";
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';


const DashboardPage = () => {
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
                      marginTop: { sm: 4, md: 0 },
                    }}
                  >
                    <img
                      src="/images/Summary.png"
                      alt=""
                      width="65"
                      height="50"
                    />
                  </Grid>
                  <Grid xs={2}>
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
                      marginLeft: { xs: 6, sm: 6, md: 0 },
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
                  <TableContainer component={Paper} sx={{boxShadow:0,border: "1px solid rgba(166,166,166)",mt:2,mb:4}}>
                    <Table >
                      <TableHead >
                        <TableRow>
                          <TableCell>Class Name</TableCell>
                          <TableCell>Age Eligibility</TableCell>
                          <TableCell>Schedule Dates</TableCell>
                          <TableCell>Schedule Times</TableCell>
                          <TableCell>Capacity/Registered(paid)</TableCell>
                          <TableCell>Teachers</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableCell>
                        <Grid item xs={12} sx={{minHeight:170}}></Grid>
                        </TableCell>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  
                </Grid>
              </AppCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default DashboardPage;
