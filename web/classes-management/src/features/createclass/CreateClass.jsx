import AppLayout from "../../shared/components/app-layout/AppLayout";
import { Button, Divider, Grid, Typography } from "@mui/material";
import AppCard from "../../shared/components/app-card/AppCard";
import { Formik } from "formik";
import AppTextInput from "../../shared/components/app-text-input/AppTextInput";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import BasicSelect from "../../shared/components/app-select-box/AppSelectInput";
import EventIcon from "@mui/icons-material/Event";
import * as React from "react";
import LabelIcon from "@mui/icons-material/Label";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const class1 = ["Class1", "Class2", "Class3", "Class4"];
const course = ["MPC", "BIPC", "MEC"];
const location = [
  "Telangana",
  "Andra Pradesh",
  "Tamil Nadu",
  "Kerala",
  "karnataka",
];
const schedule = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const CreateClass = () => {
  const [classes, setClasses] = React.useState("");
  const handleChange = (e) => {
    setClasses(e.target.value);
  };
  return (
    <AppLayout title="Create class">
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <AppCard minHeight={690}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12} md={5}>
                <Box textAlign="center">
                  <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                    Create a new Class
                  </Typography>

                  <Box textAlign="center">
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
                </Box>
              </Grid>

              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{
                  borderWidth: 1,
                  color: "#black",
                  mx: { md: "4.5%", lg: "5.6%", xl: "6.2%" },
                  display: { xs: "none", sm: "none", md: "flex" },
                }}
              >
                OR
              </Divider>

              <Grid
                item
                xs={12}
                sm={12}
                md={5}
                sx={{ marginTop: { xs: 2, sm: 2, md: 0 } }}
              >
                <Box textAlign="center">
                  <Typography
                    sx={{ fontSize: 18, fontWeight: "bold", marginBottom: 3 }}
                  >
                    Search Class to Update
                  </Typography>

                  <BasicSelect
                    label="Select"
                    icon={<AccessibilityIcon />}
                    menuItems={class1}
                    value={classes}
                    onChange={handleChange}
                    height={35}
                    color="#808080"
                  />
                </Box>
              </Grid>
            </Grid>
            <Divider
              orientation="horizontal"
              flexItem
              sx={{
                borderWidth: 1,
                display: { xs: "flex", sm: "flex", md: "none" },
                marginTop: 5,
              }}
            ></Divider>
            <Formik
              initialValues={{
                fee: "",
                minAge: "",
                maxAge: "",
                course: "",
                schedule: "",
                classCapacity: "",
                classTimings: "",
                location: "",
                excludeDates: "",
              }}
              validate={(values) => {
                let errors = {};
                if (!values.fee) {
                  errors.fee = "This field is required";
                }

                if (!values.minAge) {
                  errors.minAge = "This field is required";
                }
                if (!values.maxAge) {
                  errors.maxAge = "This field is required";
                }
                if (!values.course) {
                  errors.course = "This field is required";
                }
                if (!values.schedule) {
                  errors.schedule = "This field is required";
                }
                if (!values.classTimings) {
                  errors.classTimings = "This field is required";
                }
                if (!values.classCapacity) {
                  errors.classCapacity = "This field is required";
                }
                if (!values.city) {
                  errors.city = "This field is required";
                }

                if (!values.location) {
                  errors.location = "This field is required";
                }
                if (!values.excludeDates) {
                  errors.excludeDates = "This field is required";
                }
                return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
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
                    spacing={1}
                    alignItems="center"
                    sx={{ marginTop: 3 }}
                  >
                    <Grid item xs={12} sm={5}>
                      <Box>
                        <Typography>Schedule</Typography>
                        <BasicSelect
                          name="schedule"
                          marginY="4%"
                          onChange={handleChange}
                          icon={<EventIcon />}
                          color="#808080"
                          menuItems={schedule}
                          onBlur={handleBlur}
                          value={values.schedule}
                          errorText={
                            errors.schedule &&
                            touched.schedule &&
                            errors.schedule
                          }
                        />
                      </Box>
                      <Box>
                        <Typography>Course</Typography>
                        <BasicSelect
                          name="course"
                          marginY="4%"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          menuItems={course}
                          icon={<MenuBookIcon />}
                          color="#808080"
                          value={values.course}
                          errorText={
                            errors.course && touched.course && errors.course
                          }
                        />
                      </Box>

                      <Box>
                        <Typography>Location</Typography>
                        <BasicSelect
                          name="location"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.location}
                          menuItems={location}
                          icon={<LocationOnIcon />}
                          color="#808080"
                          errorText={
                            errors.location &&
                            touched.location &&
                            errors.location
                          }
                        />
                      </Box>
                      <AppTextInput
                        name="fee"
                        label="Fee/Discounts"
                        onChange={handleChange}
                        icon={<LabelIcon />}
                        onBlur={handleBlur}
                        value={values.fee}
                        
                        errorText={errors.fee && touched.fee && errors.fee}
                      />
                      <AppTextInput
                        name="minAge"
                        label="Min Age"
                        icon={<FormatListNumberedIcon />}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.minAge}
                        errorText={
                          errors.minAge && touched.minAge && errors.minAge
                        }
                        sx={{ marginBottom: 2 }}
                      />

                      <AppTextInput
                        name="maxAge"
                        label="Max Age"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        icon={<FormatListNumberedIcon />}
                        value={values.maxAge}
                        errorText={
                          errors.maxAge && touched.maxAge && errors.maxAge
                        }
                      />
                    </Grid>

                    <Divider
                      orientation="vertical"
                      variant="fullWidth"
                      flexItem
                      sx={{ borderWidth: 1, mx: "7.8%" }}
                    ></Divider>
                    <Grid item xs={12} sm={5}>
                      <AppTextInput
                        name="classCapacity"
                        label="Class Capacity"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        icon={<FormatListNumberedIcon />}
                        value={values.classCapacity}
                        errorText={
                          errors.classCapacity &&
                          touched.classCapacity &&
                          errors.classCapacity
                        }
                      />

                      <AppTextInput
                        name="classTimings"
                        label="Address Line 1"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.classTimings}
                        rows={4}
                        errorText={
                          errors.classTimings &&
                          touched.classTimings &&
                          errors.classTimings
                        }
                      />

                      <AppTextInput
                        name="excludeDates"
                        label="Exclude Dates"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.excludeDates}
                        rows={5}
                        errorText={
                          errors.excludeDates &&
                          touched.excludeDates &&
                          errors.excludeDates
                        }
                        sx={{ marginBottom: 2.5 }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Box textAlign="center">
                        <Button
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
                    </Grid>
                  </Grid>
                </form>
              )}
            </Formik>
          </AppCard>
        </Grid>
      </Grid>
    </AppLayout>
  );
};
export default CreateClass;
