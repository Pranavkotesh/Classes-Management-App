import AppLayout from "../../shared/components/app-layout/AppLayout";
import { Divider, Grid, Typography } from "@mui/material";
import AppCard from "../../shared/components/app-card/AppCard";
import { Formik } from "formik";
import AppTextInput from "../../shared/components/app-text-input/AppTextInput";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import BasicSelect from "../../shared/components/app-select-box/AppSelectInput";
import * as React from "react";
import LabelIcon from "@mui/icons-material/Label";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import AppButton from "../../shared/components/app-button/AppButton";
import { makeStyles } from "@mui/styles";
import {
  courseArr,
  classArr,
  locationArr,
} from "../../shared/components/app-constants/DataConstant";
import AppDateSelector from "../../shared/components/app-date-select/AppDateSelect";

const ManageClasses = ({ onClose, data }) => {
  const editing = useStyles();
  // const [classes, setClasses] = React.useState("");
  // const handleChange = (e) => {
  //   setClasses(e.target.value);
  // };
  return (
    <>
      <Formik
        initialValues={{
          fee: "",
          minAge: "",
          maxAge: "",
          course: "",
          schedule: null,
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
          onClose(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          setFieldValue,
          handleBlur,
          handleSubmit,
          setFieldTouched,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid
              container
              spacing={1}
              alignItems="center"
              sx={{ marginTop: 3, backgroundColor: "background.grid", px: 2 }}
            >
              <Grid
                item
                xs={12}
                sm={5}
                sx={{ marginLeft: { xs: 0, sm: 2.8 }, marginBottom: 2 }}
              >
                <Box sx={{ marginBottom: 1 }}>
                  <AppDateSelector
                    label="Schedule"
                    value={values.schedule}
                    name="schedule"
                    onChange={(value) => {
                      setFieldValue("schedule", value, true);
                    }}
                    onTouched={() => {
                      setFieldTouched("schedule", true, true);
                    }}
                    errorText={
                      errors.schedule &&
                      !values.schedule &&
                      touched.schedule &&
                      errors.schedule
                    }
                  />
                </Box>
                <Box>
                  <Typography>Course</Typography>
                  <BasicSelect
                    name="course"
                    marginY="2%"
                    onChange={handleChange}
                    placeholder="Select Course"
                    onBlur={handleBlur}
                    menuItems={courseArr}
                    icon={<MenuBookIcon />}
                    color="primary.icon"
                    value={values.course}
                    errorText={errors.course && touched.course && errors.course}
                  />
                </Box>

                <Box>
                  <Typography>Location</Typography>
                  <BasicSelect
                    name="location"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.location}
                    placeholder="Select Location "
                    menuItems={locationArr}
                    icon={<LocationOnIcon />}
                    color="primary.icon"
                    errorText={
                      errors.location && touched.location && errors.location
                    }
                  />
                </Box>
                <AppTextInput
                  name="fee"
                  label="Fee/Discounts"
                  type="number"
                  onChange={handleChange}
                  placeholder="Add a Fee/Discount "
                  icon={<LabelIcon />}
                  onBlur={handleBlur}
                  value={values.fee}
                  errorText={errors.fee && touched.fee && errors.fee}
                />
                <AppTextInput
                  name="minAge"
                  label="Min Age"
                  icon={<FormatListNumberedIcon />}
                  placeholder="Enter min age eligibility.. "
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.minAge}
                  errorText={errors.minAge && touched.minAge && errors.minAge}
                  // sx={{ marginBottom: 2 }}
                />

                <AppTextInput
                  name="maxAge"
                  label="Max Age"
                  onChange={handleChange}
                  placeholder="Enter max age eligibility.. "
                  type="number"
                  onBlur={handleBlur}
                  icon={<FormatListNumberedIcon />}
                  value={values.maxAge}
                  errorText={errors.maxAge && touched.maxAge && errors.maxAge}
                />
              </Grid>

              <Divider
                orientation="vertical"
                variant="fullWidth"
                flexItem
                sx={{ borderWidth: 1, mx: "6%" }}
              ></Divider>
              <Grid item xs={12} sm={5}>
                <AppTextInput
                  name="classCapacity"
                  label="Class Capacity"
                  onChange={handleChange}
                  placeholder="Enter max allowed enrollemnts.. "
                  type="number"
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
                  label="Class Timings"
                  onChange={handleChange}
                  placeholder='use format [{"day":"Monday","startTime":"10AM","endTime":"11AM"}]'
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
                  placeholder='use format [{"date":"1-1-202-","reason":"newyear"}]'
                  value={values.excludeDates}
                  rows={5}
                  errorText={
                    errors.excludeDates &&
                    touched.excludeDates &&
                    errors.excludeDates
                  }
                  mBottom="2.5"
                  // sx={{ marginBottom: 2.5 }}
                />
              </Grid>
            </Grid>
            <Box
              textAlign="center"
              sx={{ marginRight: { lg: 2 }, marginTop: 2 }}
            >
              <Grid
                container
                spacing={0}
                alignItems="center"
                justifyContent="center"
              >
                <Grid
                  item
                  xs={5}
                  sm={2.5}
                  md={2}
                  lg={1.5}
                  xl={1.2}
                  sx={{ marginBottom: 3 }}
                >
                  
                  <AppButton
                    btnText="Create"
                    type="submit"
                    className={editing.button}
                    startIcon={<ArrowCircleRightOutlinedIcon />}
                  />
                  <Box marginTop='7%'>
                  <AppButton
                    btnText="Cancel"
                    variant='outlined'
                    className={editing.button}
                    onClick={()=>onClose()}
                    // startIcon={<ArrowCircleRightOutlinedIcon />}
                  /></Box>
                </Grid>
              </Grid>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};
export default ManageClasses;

const useStyles = makeStyles(() => ({
  button: {
    font: 10,
  },
}));
