import AppLayout from "../../shared/components/app-layout/AppLayout";
import AppCard from "../../shared/components/app-card/AppCard";
import BoxElement from "../../shared/components/app-box-component/AppBoxComponent";
import { Divider, Grid, IconButton, Typography, Button } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import * as React from "react";
import EventIcon from "@mui/icons-material/Event";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import BasicSelect from "../../shared/components/app-select-box/AppSelectInput";
import AbcIcon from "@mui/icons-material/Abc";
import AppTextInput from "../../shared/components/app-text-input/AppTextInput";
import ErrorIcon from "@mui/icons-material/Error";
import { Formik } from "formik";

const schedule = [1, 2, 3, 4];

const DefineSchedule = () => {
  const [date, setDate] = React.useState("");

  const [nameIcon, setNameIcon] = React.useState(<></>);
  const [startIcon, setStartIcon] = React.useState(<></>);
  const [endIcon, setEndIcon] = React.useState(<></>);
  const [excludeIcon, setExcludeIcon] = React.useState(<></>);

  const handleChange0 = (event) => {
    setDate(event.target.value);
  };

  return (
    <AppLayout title="Define Schedule">
      <Grid container spacing={2}>
        <BoxElement
          elementOne="Admin"
          elementTwo="Setup & Maintenance"
          elementThree="Define Schedules"
        />
        <Grid item xs={12}>
          <AppCard title="Create / Update Schedule" minHeight={640}>
            <Divider orientation="horizontal" sx={{ marginTop: 1 }}></Divider>
            <Grid container spacing={0} sx={{ marginTop: 2 }}>
              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  marginLeft: "4%",
                  marginBottom: { xs: 1, sm: 1, md: 0 },
                }}
              >
                <AppCard sx={{ boxShadow: 0 }} minHeight={150} boxShadow="0">
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
                  mx: { md: "1.5%", lg: "2%", xl: "2.5%" },
                  display: { xs: "none", sm: "none", md: "flex" },
                }}
              >
                OR
              </Divider>
              <Grid item xs={12} md={5}>
                <AppCard minHeight={150} boxShadow="0">
                  <Typography
                    textAlign="center"
                    sx={{ fontWeight: "bold", marginBottom: 2 }}
                  >
                    Select Schedule to Update
                  </Typography>
                  <Box textAlign="center">
                    <BasicSelect
                      label="Select"
                      icon={<EventIcon />}
                      menuItems={schedule}
                      value={date}
                      onChange={handleChange0}
                      height={35}
                      color="#e6e6e6"
                      sx={{ width: "50%" }}
                    />
                  </Box>
                </AppCard>
              </Grid>
            </Grid>

            <Formik
              initialValues={{ name: "", sDate: "", eDate: "", exclude: "" }}
              validate={(values) => {
                let errors = {};

                if (!values.name) {
                  errors.name = "This field is required";
                  setNameIcon(<ErrorIcon />);
                }
                if (!values.sDate) {
                  errors.sDate = "This field is required";
                  setStartIcon(<ErrorIcon />);
                }
                if (!values.eDate) {
                  errors.eDate = "This field is required";
                  setEndIcon(<ErrorIcon />);
                }
                if (!values.exclude) {
                  errors.exclude = "This field is required";
                  setExcludeIcon(<ErrorIcon />);
                }
                return errors;
              }}
              onSubmit={async (values) => {
                console.log(values);
                setNameIcon(<></>);
                setEndIcon(<></>);
                setStartIcon(<></>);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Grid
                    container
                    spacing={0}
                    sx={{ marginTop: 5, backgroundColor: " #f2f2f2" }}
                  >
                    <Grid
                      item
                      xs={12}
                      md={5}
                      sx={{
                        marginLeft: "4%",
                        marginBottom: { xs: 1, sm: 1, md: 0 },
                      }}
                    >
                      <AppCard minHeight={220} boxShadow="0" color=" #f2f2f2">
                        <AppTextInput
                          icon={<AbcIcon />}
                          endIcon={nameIcon}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          name="name"
                          label="Name"
                          sx={{ height: 35, marginBottom: 2 }}
                          errorText={errors.name && touched.name && errors.name}
                        />

                        <Box sx={{ my: 3 }} textAlign="center">
                          <BasicSelect
                            label="Start Date"
                            icon={<EventIcon />}
                            menuItems={schedule}
                            name="sDate"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.sDate}
                            height={35}
                            color="#e6e6e6"
                            sx={{ width: "50%" }}
                            errorText={
                              errors.sDate && touched.sDate && errors.sDate
                            }
                            iconEnd={startIcon}
                          />
                        </Box>
                        <Box textAlign="center">
                          <BasicSelect
                            label="End Date"
                            icon={<EventIcon />}
                            menuItems={schedule}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.eDate}
                            name="eDate"
                            height={35}
                            color="#e6e6e6"
                            sx={{ width: "50%" }}
                            errorText={
                              errors.eDate && touched.eDate && errors.eDate
                            }
                            iconEnd={endIcon}
                          />
                        </Box>
                      </AppCard>
                    </Grid>
                    <Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      sx={{
                        borderWidth: 1,
                        color: "black",
                        mx: "4%",
                        display: { xs: "none", sm: "none", md: "flex" },
                      }}
                    ></Divider>
                    <Grid item xs={12} md={5}>
                      <AppCard minHeight={220} boxShadow="0" color="#f2f2f2">
                        <AppTextInput
                          label="Excluded dates"
                          fullWidth
                          // error={errors.exclude}
                          // helperText={excludeText}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.exclude}
                          name="exclude"
                          errorText={
                            errors.exclude && touched.exclude && errors.exclude
                          }
                          rows="5"
                          endIcon={excludeIcon}
                        />
                      </AppCard>
                    </Grid>
                  </Grid>
                  <Box textAlign="center" sx={{ marginTop: 2 }}>
                    <Button
                      startIcon={<ArrowCircleRightOutlinedIcon />}
                      sx={{
                        backgroundColor: "#0000b3",
                        color: "white",
                        marginRight: { xs: 0, sm: 0, md: 3 },
                        fontSize: 12,
                        padding: 1,
                        ":hover": { bgcolor: "black", color: "white" },
                      }}
                      type="Submit"
                    >
                      Create
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </AppCard>
        </Grid>
      </Grid>
    </AppLayout>
  );
};
export default DefineSchedule;
