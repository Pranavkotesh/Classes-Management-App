import { Divider, Grid, Typography } from "@mui/material";
import AppLayout from "../../shared/components/app-layout/AppLayout";
import AppCard from "../../shared/components/app-card/AppCard";
import { Formik } from "formik";
import AppTextInput from "../../shared/components/app-text-input/AppTextInput";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import BasicSelect from "../../shared/components/app-select-box/AppSelectInput";
import * as React from "react";
import { AbcRounded } from "@mui/icons-material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import HomeIcon from "@mui/icons-material/Home";
import ApartmentIcon from "@mui/icons-material/Apartment";
import WcIcon from "@mui/icons-material/Wc";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import AppButton from "../../shared/components/app-button/AppButton";
import {
  teacherArr,
  genderArr,
  stateArr,
} from "../../shared/components/app-constants/DataConstant";
import AppDateSelector from "../../shared/components/app-date-select/AppDateSelect";

const ManageTeachers = ({ data, onClose }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        gender: "",
        dOb: null,
        primaryNo: "",
        addressLine: "",
        city: "",
        state: "",
        zipCode: "",
        secondaryNo: "",
        addressLine2: "",
      }}
      validate={(values) => {
        let errors = {};
        if (/^\d+$/.test(values.firstName)) {
          errors.firstName = "Please enter valid characters";
        }
        if (/^\d+$/.test(values.lastName)) {
          errors.lastName = "Please enter valid characters";
        }
        if (!values.email) {
          errors.email = "This field is required";
        }
        if (
          values.email &&
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.firstName) {
          errors.firstName = "This field is required";
        }
        if (!values.lastName) {
          errors.lastName = "This field is required";
        }
        if (!values.gender) {
          errors.gender = "This field is required";
        }
        if (!values.dOb) {
          errors.dOb = "This field is required";
        }
        if (!values.primaryNo) {
          errors.primaryNo = "This field is required";
        }
        if (!values.addressLine) {
          errors.addressLine = "This field is required";
        }
        if (!values.city) {
          errors.city = "This field is required";
        }

        if (!values.state) {
          errors.state = "This field is required";
        }
        if (!values.zipCode) {
          errors.zipCode = "This field is required";
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
        setFieldValue,
        setFieldTouched,
      }) => (
        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={1}
            alignItems="center"
            sx={{
              marginTop: 3,
              backgroundColor: "background.grid",
              px: 2,
            }}
          >
            <Grid item xs={12} sm={5} sx={{ marginLeft: { xs: 0, sm: 2 } }}>
              <AppTextInput
                name="firstName"
                label="First Name"
                onChange={handleChange}
                placeholder="Enter First name"
                icon={<AbcRounded />}
                onBlur={handleBlur}
                value={values.firstName}
                errorText={
                  errors.firstName && touched.firstName && errors.firstName
                }
              />
              <AppTextInput
                name="lastName"
                label="Last Name"
                icon={<AbcRounded />}
                placeholder="Enter Last name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                errorText={
                  errors.lastName && touched.lastName && errors.lastName
                }
                mBottom="1"
                // sx={{ marginBottom: 1 }}
              />
              <Box>
                <Typography>Gender</Typography>
                <BasicSelect
                  name="gender"
                  marginY="4%"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Select Gender"
                  menuItems={genderArr}
                  icon={<WcIcon />}
                  color="primary.icon"
                  value={values.gender}
                  errorText={errors.gender && touched.gender && errors.gender}
                />
              </Box>
              <Box>
                <AppDateSelector
                  value={values.dOb}
                  label="Date Of Birth"
                  name="dOb"
                  onChange={(value) => {
                    setFieldValue("dOb", value, true);
                  }}
                  onTouched={() => {
                    setFieldTouched("dOb", true, true);
                  }}
                  errorText={
                    errors.dOb && !values.dOb && touched.dOb && errors.dOb
                  }
                />
              </Box>

              <AppTextInput
                name="email"
                label="Email"
                onChange={handleChange}
                placeholder="Enter email "
                onBlur={handleBlur}
                icon={<EmailIcon />}
                value={values.email}
                errorText={errors.email && touched.email && errors.email}
              />

              <AppTextInput
                name="primaryNo"
                label="Primary Number"
                onChange={handleChange}
                placeholder="Enter primary ph#"
                type="number"
                onBlur={handleBlur}
                icon={<PhoneIcon />}
                value={values.primaryNo}
                errorText={
                  errors.primaryNo && touched.primaryNo && errors.primaryNo
                }
              />
            </Grid>

            <Divider
              orientation="vertical"
              variant="fullWidth"
              flexItem
              sx={{ borderWidth: 1, mx: "6%" }}
            ></Divider>
            <Grid item xs={12} sm={5} sx={{ marginTop: 2 }}>
              <AppTextInput
                name="secondaryNo"
                label="Secondary number"
                onChange={handleChange}
                placeholder="Enter secondary ph#"
                icon={<PhoneIcon />}
                onBlur={handleBlur}
                value={values.secondaryNo}
              />
              <AppTextInput
                name="addressLine"
                label="Address Line 1"
                onChange={handleChange}
                placeholder="Enter address line 1..."
                icon={<AbcRounded />}
                onBlur={handleBlur}
                value={values.addressLine}
                errorText={
                  errors.addressLine &&
                  touched.addressLine &&
                  errors.addressLine
                }
              />
              <AppTextInput
                name="addressLine2"
                label="Address Line 2"
                onChange={handleChange}
                icon={<AbcRounded />}
                placeholder="Enter address line 2..."
                onBlur={handleBlur}
                value={values.addressLine2}
              />
              <AppTextInput
                name="city"
                label="City"
                onChange={handleChange}
                placeholder="Enter city..."
                onBlur={handleBlur}
                icon={<ApartmentIcon />}
                value={values.city}
                errorText={errors.city && touched.city && errors.city}
                sx={{ marginBottom: 1 }}
              />
              <Box>
                <Typography>State</Typography>
                <BasicSelect
                  name="state"
                  onChange={handleChange}
                  placeholder="Select state..."
                  onBlur={handleBlur}
                  value={values.state}
                  menuItems={stateArr}
                  icon={<HomeIcon />}
                  color="primary.icon"
                  errorText={errors.state && touched.state && errors.state}
                />
              </Box>
              <AppTextInput
                name="zipCode"
                label="Zip Code"
                onChange={handleChange}
                placeholder="Enter Zipcode..."
                icon={<HomeIcon />}
                onBlur={handleBlur}
                value={values.zipCode}
                errorText={errors.zipCode && touched.zipCode && errors.zipCode}
                sx={{ marginBottom: 2 }}
              />
            </Grid>
          </Grid>
          <Box textAlign="center" sx={{ marginRight: { lg: 2 }, marginTop: 2 }}>
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
                  startIcon={<ArrowCircleRightOutlinedIcon />}
                />
                <Box marginTop='7%'>
                  <AppButton
                    btnText="Cancel"
                    variant="outlined"
                    onClick={() => onClose()}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </form>
      )}
    </Formik>
  );
};
export default ManageTeachers;
