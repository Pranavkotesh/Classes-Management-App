import AppLayout from "../../shared/components/app-layout/AppLayout";
import AppCard from "../../shared/components/app-card/AppCard";
import BoxElement from "../../shared/components/app-box-component/AppBoxComponent";
import {
  Divider,
  Grid,
  IconButton,
  Typography,
  Button,
  FormControl,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import * as React from "react";
import EventIcon from "@mui/icons-material/Event";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import BasicSelect from "../../shared/components/app-select-box/AppSelectInput";
import AbcIcon from '@mui/icons-material/Abc';
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

const schedule = [1, 2, 3, 4];

const DefineSchedule = () => {
  const [date, setDate] = React.useState("");

  const handleChange = (event) => {
    setDate(event.target.value);
  };
  return (
    <AppLayout title="Define Schedule">
      <Grid container spacing={2}>
        <BoxElement elementOne="Admin" elementTwo="Setup & Maintenance" />
        <Grid item xs={12}>
          <AppCard title="Create / Update Schedule">
            <Divider orientation="horizontal" sx={{ marginTop: 1 }}></Divider>
            <Grid container spacing={0} sx={{ marginTop: 2 }}>
              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  marginLeft: { xs: 0, sm: 0, md: 4 },
                  marginBottom: { xs: 1, sm: 1, md: 0 },
                }}
              >
                <AppCard sx={{ boxShadow: 0 }} minHeight={150} boxShadow='0'>
                  <Typography textAlign="center" sx={{ fontWeight: "bold" }}>
                    Create Schedule
                  </Typography>
                  <Box sx={{ textAlign: "center", marginTop: 1 }}>
                    <IconButton>
                      <AddIcon
                        sx={{
                          backgroundColor: "#ccccff",
                          fontSize: 15,
                          borderRadius: 6,
                          color: "#6666ff",
                          width: 50,
                          height: 50,
                        }}
                      />
                    </IconButton>
                  </Box>
                </AppCard>
              </Grid>
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                textAlign="left"
                sx={{
                  borderWidth: 1,
                  color: "black",
                  mx: { md: 1, lg: 4, xl: 6 },
                  display: { xs: "none", sm: "none", md: "flex" },
                }}
              >
                OR
              </Divider>
              <Grid item xs={12} md={5}>
                <AppCard minHeight={150} boxShadow='0'>
                  <Typography textAlign="center" sx={{ fontWeight: "bold",marginBottom:2 }}>
                    Select Schedule to Update
                  </Typography>
                  <Box textAlign="center">
                    <BasicSelect
                      label="Select"
                      icon={<EventIcon />}
                      menuItems={schedule}
                      value={date}
                      onChange={handleChange}
                      height={35}
                      color="#e6e6e6"
                      sx={{ width: "50%"}}
                    />
                  </Box>
                </AppCard>
              </Grid>
            </Grid>
            <Grid container spacing={0} sx={{ marginTop: 5 }}>
              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  marginLeft: { xs: 0, sm: 0, md: 4 },
                  marginBottom: { xs: 1, sm: 1, md: 0 },
                }}
              >
                <AppCard minHeight={220} boxShadow='0'>
                    
                  <FormControl sx={{ width:'100%' }} variant="outlined">
                    <InputLabel>
                      Name</InputLabel>
                    <OutlinedInput
                      startAdornment={
                        <InputAdornment position="start">
                          <IconButton
                            edge="start"
                          >
                            <AbcIcon/>
                          </IconButton>
                        </InputAdornment>
                      }
                      
                      label="Enter Schedule Name"
                      sx={{height:35}}
                    />
                  </FormControl>
                  <Box sx={{ my: 3 }}>
                    <BasicSelect
                      label="Start Date"
                      icon={<EventIcon />}
                      menuItems={schedule}
                      value={date}
                      onChange={handleChange}
                      height={35}
                      color="#e6e6e6"
                      sx={{ width: "50%" }}
                    />
                  </Box>
                  <BasicSelect
                    label="End Date"
                    icon={<EventIcon />}
                    menuItems={schedule}
                    value={date}
                    onChange={handleChange}
                    height={35}
                    color="#e6e6e6"
                    sx={{ width: "50%" }}
                  />
                </AppCard>
              </Grid>
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{
                  borderWidth: 1,
                  color: "black",
                  mx: { md: 4, lg: 7, xl: 9 },
                  display: { xs: "none", sm: "none", md: "flex" },
                }}
              ></Divider>
              <Grid item xs={12} md={5}>
                <AppCard minHeight={220} boxShadow='0'>
                    <FormControl sx={{width:'100%'}}><InputLabel>Excluded Dates</InputLabel>
                    <OutlinedInput sx={{height:150}}></OutlinedInput>
                    </FormControl>
                </AppCard>
              </Grid>
            </Grid>
            <Box textAlign="center" sx={{ marginTop: 2 }}>
              <Button
                startIcon={<ArrowCircleRightOutlinedIcon />}
                sx={{
                  backgroundColor: "#0000b3",
                  color: "white",
                  fontSize: 12,
                  padding: 1,
                }}
              >
                Create
              </Button>
            </Box>
          </AppCard>
        </Grid>
      </Grid>
    </AppLayout>
  );
};
export default DefineSchedule;
