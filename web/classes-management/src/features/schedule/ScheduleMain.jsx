import AppLayout from "../../shared/components/app-layout/AppLayout";
import AppCard from "../../shared/components/app-card/AppCard";
import BoxElement from "../../shared/components/app-box-component/AppBoxComponent";
import { Divider, Grid, IconButton, Typography } from "@mui/material";
import { dateVal } from "../../shared/components/app-constants/DataConstant";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import * as React from "react";
import EventIcon from "@mui/icons-material/Event";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import AbcIcon from "@mui/icons-material/Abc";
import AppTextInput from "../../shared/components/app-text-input/AppTextInput";
import { Formik } from "formik";
import AppButton from "../../shared/components/app-button/AppButton";
import AppDateSelector from "../../shared/components/app-date-select/AppDateSelect";



const DefineSchedule = () => {
  // const [date, setDate] = React.useState("");

  // const handleChange0 = (event) => {
  //   setDate(event.target.value);
  // };

  return (
    <AppLayout title="Define Schedule">
      <Grid container spacing={2}>
        <BoxElement
          elementOne="Admin"
          elementTwo="Setup & Maintenance"
          elementThree="Define Schedules"
          xs='none'
          sm='flex'
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
                  <Box >
                    {/* <BasicSelect
                      label="Select"
                      icon={<EventIcon />}
                      menuItems={Data}
                      value={date}
                      onChange={handleChange0}
                      height={35}
                      color="#808080"
                      sx={{ width: "50%" }}
                    /> */}
                    <AppDateSelector label="Select"/>
                  </Box>
                </AppCard>
              </Grid>
            </Grid>

            <Formik
              initialValues={{ name: "", sDate:null, eDate:null, exclude: "" }}
              initialTouched={{
                name: false,
                sDate: false,
                eDate: false,
                exclude: false,
              }}
              validate={(values) => {
                let errors = {};

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
              }) => (
                <form onSubmit={handleSubmit}>
                  <Grid
                    container
                    spacing={0}
                    sx={{ marginTop: 5, backgroundColor: " #f2f2f2",px:2}}
                  >
                    <Grid
                      item
                      xs={12}
                      md={5}
                      sx={{
                        marginLeft:{xs:0,md:"4%"},
                        marginBottom: { xs: 1, sm: 1, md: 0 },
                      }}
                    >
                      <AppCard minHeight={220} boxShadow="0" color=" #f2f2f2">
                        <AppTextInput
                          icon={<AbcIcon />}
                          placeholder="Enter Schedule name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          name="name"
                          label="Name"
                          sx={{ height: 35, marginBottom:2 }}
                          errorText={errors.name && touched.name && errors.name}
                        />

                        <Box sx={{marginBottom:1}}>
                          <AppDateSelector
                          label='Start Date'
                          value={values.sDate} 
                          name="sDate"
                          onChange={(value)=>{
                            setFieldValue("sDate",value,true)
                          }}
                          onBlur={handleBlur}
                          errorText={errors.sDate && touched.sDate && errors.sDate}
                          />
                          
                        </Box>
                        <Box>
                        <AppDateSelector
                          label="End Date"
                          value={values.eDate} 
                          name="eDate"
                          onChange={(value)=>{
                            setFieldValue("eDate",value,true)
                          }}
                          onBlur={handleBlur}
                          errorText={errors.eDate && touched.eDate && errors.eDate}
                          />
                          {/* <BasicSelect
                            label="End Date"
                            icon={<EventIcon />}
                            menuItems={dateVal}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Click to select"
                            value={values.eDate}
                            name="eDate"
                            height={35}
                            color="#808080"
                            sx={{ width: "50%" }}
                            errorText={
                              errors.eDate && touched.eDate && errors.eDate
                            }
                          /> */}
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
                      </AppCard>
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
                      <Grid item xs={5} sm={2} md={2} lg={1} >
                        <AppButton
                          btnText="Create"
                          type='submit'
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
