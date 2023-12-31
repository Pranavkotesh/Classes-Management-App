import AppLayout from "../../shared/components/app-layout/AppLayout";
import AppCard from "../../shared/components/app-card/AppCard";
import BoxElement from "../../shared/components/app-box-component/AppBoxComponent";
import { Divider, Grid, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import * as React from "react";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import AbcIcon from "@mui/icons-material/Abc";
import AppTextInput from "../../shared/components/app-text-input/AppTextInput";
import { Formik } from "formik";
import AppButton from "../../shared/components/app-button/AppButton";
import AppDateSelector from "../../shared/components/app-date-select/AppDateSelect";

const DefineSchedule = () => {


  return (
    <AppLayout title="Define Schedule" >
      <Grid container spacing={2} >
        <BoxElement
          elementOne="Admin"
          elementTwo="Setup & Maintenance"
          elementThree="Define Schedules"
          xs="none"
          sm="flex"
        />
        <Grid item xs={12}>
          <AppCard title="Create / Update Schedule" minHeight={640} padding='15px 15px'>
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
                          backgroundColor: "background.button",
                          fontSize: 15,
                          borderRadius: 6,
                          color: "primary.add",
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

                  <AppDateSelector label="Select" />
                </AppCard>
              </Grid>
            </Grid>

            <Formik
              initialValues={{
                name: "",
                sDate: null,
                eDate: null,
                exclude: "",
              }}
              initialTouched={{
                name: false,
                sDate: false,
                eDate: false,
                exclude: false,
              }}
              validate={(values) => {
                let errors = {};
                if(/^\d+$/.test(values.name)){
                  errors.name='Please enter valid characters'
                }
                if (!values.name) {
                  errors.name = "This field is required";
                }
                if (!values.sDate) {
                  errors.sDate = "This field is required";
                }
                if (!values.eDate) {
                  errors.eDate = "This field is required";
                }
                if (!values.exclude) {
                  errors.exclude = "This field is required";
                }
                return errors;
              }}
              onSubmit={async (values) => {
                console.log(values);
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
                    spacing={0}
                    sx={{ marginTop: 5, backgroundColor: "background.grid", px:0 ,
                  '&.MuiPaper-root':{padding:0}}}
                  >
                    <Grid
                      item
                      xs={12}
                      md={5}
                      sx={{
                        marginLeft: { xs: '2.5%', md: "4%" },
                        marginBottom: { xs: 1, sm: 1, md: 0 },
                      
                      }}
                    >
                      <Grid xs={11} item sx={{backgroundColor:"background.grid",marginBottom:4}}>
                        <AppTextInput
                          icon={<AbcIcon />}
                          placeholder="Enter Schedule name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          name="name"
                          label="Name"
                          sx={{ height: 35, marginBottom: 2 }}
                          errorText={errors.name && touched.name && errors.name}
                        />

                        <Box sx={{ marginBottom: 1 }}>
                          <AppDateSelector
                            label="Start Date"
                            value={values.sDate}
                            name="sDate"
                            onChange={(value) => {
                              setFieldValue("sDate", value, true);
                            }}
                            onTouched={() => {
                              setFieldTouched("sDate", true, true);
                            }}
                            errorText={
                              errors.sDate &&
                              !values.sDate &&
                              touched.sDate &&
                              errors.sDate
                            }
                          />
                        </Box>

                        <AppDateSelector
                          label="End Date"
                          value={values.eDate}
                          name="eDate"
                          onChange={(value) => {
                            setFieldValue("eDate", value, true);
                          }}
                          onTouched={() => {
                            setFieldTouched("eDate", true, true);
                          }}
                          errorText={
                            errors.eDate &&
                            !values.eDate &&
                            touched.eDate &&
                            errors.eDate
                          }
                          
                        />
                      </Grid>
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
                      <Grid item xs={11} sx={{backgroundColor:"background.grid",marginLeft:{xs:'2.5%',md:'4%'}}}>
                        <AppTextInput
                          label="Excluded dates"
                          fullWidth
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.exclude}
                          placeholder="use format [{date:'1/1/2021',New Year'}]"
                          name="exclude"
                          errorText={
                            errors.exclude && touched.exclude && errors.exclude
                          }
                          rows="5"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Box
                    textAlign="center"
                    sx={{ marginTop: 2, marginRight: { lg: 2 } }}
                  >
                    <Grid
                      container
                      spacing={0}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid item xs={5} sm={2.5} md={2} lg={1.5} xl={1.2} >
                        <AppButton
                          btnText="Create"
                          type="submit"
                          startIcon={<ArrowCircleRightOutlinedIcon />}
                        />
                      </Grid>
                    </Grid>
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
