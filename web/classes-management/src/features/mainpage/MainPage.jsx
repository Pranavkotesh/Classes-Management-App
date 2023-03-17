import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import AppLayout from "../../shared/components/app-layout/AppLayout";
import AppCard from "../../shared/components/app-card/AppCard";
import { Formik } from "formik";
import AppTextInput from "../../shared/components/app-text-input/AppTextInput";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import BasicSelect from "../../shared/components/app-select-box/AppSelectInput";
import EventIcon from "@mui/icons-material/Event";
import * as React from "react";
import { AbcRounded } from "@mui/icons-material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import WcIcon from '@mui/icons-material/Wc';






const teacher = ['teacher1','teacher2','teacher3','teacher4'];
const gender =['Male','Female','Other'];
const state =['Telangana','Andra Pradesh','Tamil Nadu','Kerala','karnataka'];
const date =[1,2,3,4,5,6,7,8,9];


const MainPage = () => {
const [teachers,setTeachers]= React.useState('');
const handleChange=(e)=>{setTeachers(e.target.value)};
  return (
    <AppLayout title='Create Teachers'>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <AppCard minHeight={690}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12} md={5}>
                <Box textAlign="center">
                  <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                    Create a new Teacher
                  </Typography>
                  <Grid container spacing={0} sx={{ marginTop: 2 }}>
                    <Grid item xs={7} sm={6.5} md={5}>
                      <Box textAlign="end">
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
                    </Grid>
                    <Divider
                      orientation="vertical"
                      variant="middle"
                      sx={{ mx:'1%',display:{xs:'none',sm:'none',md:'flex'} }}
                    >
                      OR
                    </Divider>
                    <Grid item xs={12} sm={12} md={5}>
                      <Box textAlign="start">
                        <TextField label="Search teachers" type="search" fullWidth />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
                        
            
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{ borderWidth: 1, color: "#black",mx:{md:'4.5%',lg:'5.6%',xl:'6.5%'},display:{xs:'none',sm:'none',md:'flex'}}}
              >
                OR
              </Divider>

              <Grid item xs={12} sm={12} md={5} sx={{marginTop:{xs:2,sm:2,md:0}}}>
                <Box textAlign="center">
                  <Typography sx={{ fontSize: 18, fontWeight: "bold",marginBottom:3 }}>
                    Search Teachers Here
                  </Typography>
                  
                  <BasicSelect
                      label="Select"
                      icon={<AccessibilityIcon />}
                      menuItems={teacher}
                      value={teachers}
                      onChange={handleChange}
                      height={35}
                      color="#808080"
                    
                    />
                </Box>
              </Grid>
            </Grid>
            <Divider orientation="horizontal" flexItem sx={{borderWidth:1,display:{xs:'flex',sm:'flex',md:'none'},marginTop:5}}></Divider>
            <Formik
              initialValues={{ email: "", firstName: "",lastName:"",gender:"",dOb:"",primaryNo:"",addressLine:"",city:"",state:"",zipCode:"",secondaryNo:"",addressLine2:"" }}
              validate={(values) => {
                let errors = {};
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
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={1} alignItems="center" sx={{marginTop:3}}>
                    <Grid item xs={12} sm={5}>
                    <AppTextInput
                        name='firstName'
                        label='First Name'
                        onChange={handleChange}
                        icon={<AbcRounded/>}
                        onBlur={handleBlur}
                        value={values.firstName}
                        errorText={errors.firstName&&touched.firstName&&errors.firstName}/>
                        <AppTextInput
                        name='lastName'
                        label='Last Name'
                        icon={<AbcRounded/>}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        errorText={errors.lastName&&touched.lastName&&errors.lastName}
                        sx={{marginBottom:2}}/>
                        <Box>
                            <Typography>Gender</Typography>
                        <BasicSelect
                        name='gender'
                        marginY='4%'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        menuItems={gender}
                        icon={<WcIcon/>}
                        color='#808080'
                        value={values.gender}
                        errorText={errors.gender&&touched.gender&&errors.gender}
                        />
                        </Box>
                        <Box>
                            <Typography>Date Of Birth</Typography>
                        <BasicSelect
                        name='dOb'
                        
                        onChange={handleChange}
                        icon={<EventIcon />}
                        color='#808080'
                        menuItems={date}
                        onBlur={handleBlur}
                        value={values.dOb}
                        errorText={errors.dOb&&touched.dOb&&errors.dOb}/></Box>

                      <AppTextInput
                        name="email"
                        label="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        icon={<EmailIcon/>}
                        value={values.email}
                        errorText={
                          errors.email && touched.email && errors.email
                        }
                      />

                        <AppTextInput
                        name="primaryNo"
                        label="Primary Number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        icon={<PhoneIcon/>}
                        value={values.primaryNo}
                        errorText={
                          errors.primaryNo && touched.primaryNo && errors.primaryNo
                        }
                      />
                      

                    </Grid>
                    
                    <Divider orientation="vertical" variant="fullWidth" flexItem sx={{borderWidth:1,mx:'7.8%'}}></Divider>
                    <Grid item xs={12} sm={5}>
                    <AppTextInput
                        name="secondaryNo"
                        label="Secondary number"
                        onChange={handleChange}
                        icon={<PhoneIcon/>}
                        onBlur={handleBlur}
                        value={values.secondaryNo}
                      />
                      <AppTextInput
                        name="addressLine"
                        label="Address Line 1"
                        onChange={handleChange}
                        icon={<AbcRounded/>}
                        onBlur={handleBlur}
                        value={values.addressLine}
                        errorText={
                          errors.addressLine && touched.addressLine && errors.addressLine
                        }
                      />
                      <AppTextInput
                        name="addressLine2"
                        label="Address Line 2"
                        onChange={handleChange}
                        icon={<AbcRounded/>}
                        onBlur={handleBlur}
                        value={values.addressLine2}
                        
                      />
                      <AppTextInput
                        name="city"
                        label="City"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        icon={<ApartmentIcon/>}
                        value={values.city}
                        errorText={
                          errors.city && touched.city && errors.city
                        }
                        sx={{marginBottom:2.5}}
                      />
                      <Box>
                        <Typography>State</Typography>
                      <BasicSelect
                        name="state"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.state}
                        menuItems={state}
                        icon={<HomeIcon/>}
                        color='#808080'
                        errorText={
                          errors.state && touched.state && errors.state
                        }
                      /></Box>
                      <AppTextInput
                        name="zipCode"
                        label="Zip Code"
                        onChange={handleChange}
                        icon={<HomeIcon/>}
                        onBlur={handleBlur}
                        value={values.zipCode}
                        errorText={
                          errors.zipCode && touched.zipCode && errors.zipCode
                        }
                      />
                    </Grid>
                    
                    <Grid item xs={12}>
                   <Box textAlign='center'>
                   <Button
               
                sx={{
                  backgroundColor: "#0000b3",
                  color: "white",
                  fontSize: 12,
                  marginRight:{xs:0,sm:0,md:3},
                  padding: 1,
                  ":hover": { bgcolor: "black", color: "white" },
                }}
                type='Submit'
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
export default MainPage;