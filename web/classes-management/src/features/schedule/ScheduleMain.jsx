import AppLayout from "../../shared/components/app-layout/AppLayout";
import AppCard from "../../shared/components/app-card/AppCard";
import BoxElement from "../../shared/components/app-box-component/AppBoxComponent";
import {
  Divider,
  Grid,
  IconButton,
  Typography,
  Button,
  TextField
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import * as React from "react";
import EventIcon from "@mui/icons-material/Event";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import BasicSelect from "../../shared/components/app-select-box/AppSelectInput";
import AbcIcon from '@mui/icons-material/Abc';

import InputAdornment from "@mui/material/InputAdornment";
import AppTextInput from "../../shared/components/app-text-input/AppTextInput";
import ErrorIcon from '@mui/icons-material/Error';

const schedule = [1, 2, 3, 4];



const DefineSchedule = () => {
  const [date, setDate] = React.useState("");
  const [name,setName]= React.useState('');
  const [sDate,setSdate]= React.useState('');
  const [eDate,setEdate]= React.useState('');
  const [excluded,setExcluded]=React.useState('');
  const [nameError,setNameError] = React.useState(false);
  const [sDateError,setSdateError] = React.useState(false);
  const [eDateError,setEdateError] = React.useState(false);
  const [excludedError,setExcludedError] = React.useState(false);
  const [nameText,setNameText] = React.useState('')
  const [startText,setStartText] = React.useState('')
  const [endText,setEndText] = React.useState('')
  const [excludeText,setExcludeText] = React.useState('')
  const [nameIcon,setNameIcon]=React.useState(<></>)
  const [startIcon,setStartIcon]=React.useState(<></>)
  const [endIcon,setEndIcon]=React.useState(<></>)
  const [excludeIcon,setExcludeIcon]=React.useState(<></>)
  
  const handleChange0=(event)=>{
    setDate(event.target.value)
  }
  const handleChange = (event) => {
    setSdate(event.target.value);
  };
  const handleChange1 = (event) => {
    setEdate(event.target.value);
  };
  const handleChange2 = (event) => {
    setExcluded(event.target.value);
  };
  const handleSubmit = (e)=>{
    setNameText('')
    setEndText('')
    setStartText('')
    setExcludeText('')
    e.preventDefault()
    setNameError(false)
    setExcludedError(false)
    setSdateError(false)
    setEdateError(false)
    setNameIcon(<></>)
    setStartIcon(<></>)
    setEndIcon(<></>)
    setExcludeIcon(<></>)
    
    if(!name){
      setNameError(true)
      setNameText('This field is required')
      setNameIcon(<ErrorIcon/>)
    }
    if(!sDate){
      setSdateError(true)
      setStartText('This field is required')
      setStartIcon(<ErrorIcon/>)
    }
    if(!eDate){
      setEdateError(true)
      setEndText('This field is required')
      setEndIcon(<ErrorIcon/>)
    }
    if(!excluded){
      setExcludedError(true)
      setExcludeText('This field is required')
      setExcludeIcon(<ErrorIcon/>)
    }

    if(name){
      console.log(name)
    }
  }

  
  return (
    <AppLayout title="Define Schedule">
      <Grid container spacing={2}>
        <BoxElement elementOne="Admin" elementTwo="Setup & Maintenance" elementThree="Define Schedules" />
        <Grid item xs={12}>
          <AppCard title="Create / Update Schedule" minHeight={640}>
            <Divider orientation="horizontal" sx={{ marginTop: 1 }}></Divider>
            <Grid container spacing={0} sx={{ marginTop: 2 }}>
              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  marginLeft:'4%',
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
                  mx:{md:'1.5%',lg:'2%',xl:'2.5%'},
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
                      onChange={handleChange0}
                      height={35}
                      color="#e6e6e6"
                      sx={{ width: "50%"}}
                    />
                  </Box>
                </AppCard>
              </Grid>
            </Grid>
            <form onSubmit={handleSubmit}>
            <Grid container spacing={0} sx={{ marginTop: 5 }}>
              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  marginLeft: '4%',
                  marginBottom: { xs: 1, sm: 1, md: 0 },
                }}
              >
                <AppCard minHeight={220} boxShadow='0'>
                    
                  
                    <AppTextInput
                    InputProps={{
                      startAdornment:(
                        <InputAdornment position="start">
                          <IconButton
                            edge="start"
                          >
                            <AbcIcon/>
                          </IconButton>
                        </InputAdornment>
                      ),
                      endAdornment:(
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            sx={{color:'#e60000'}}
                          >
                            {nameIcon}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                      onChange={(e)=> setName(e.target.value)}
                      onBlur={(e)=>setName(e.target.value)}
                      value={name}
                      label="Name"
                      sx={{height:35}}
                      error={nameError}
                      helperText={nameText}
                    />
                  
                  <Box sx={{ my: 3 }} textAlign='center'>
                    <BasicSelect
                      label="Start Date"
                      icon={<EventIcon />}
                      menuItems={schedule}
                      onChange={handleChange}
                      onBlur={(e)=>setSdate(e.target.value)}
                      value={sDate}
                      height={35}
                      color="#e6e6e6"
                      sx={{ width: "50%" }}
                      error={sDateError}
                      helperText={startText}
                      iconEnd={startIcon}
                    />
                  </Box>
                  <Box textAlign='center'>
                  <BasicSelect
                    label="End Date"
                    icon={<EventIcon />}
                    menuItems={schedule}
                    onChange={handleChange1}
                    onBlur={(e)=>setEdate(e.target.value)}
                    value={eDate}
                    height={35}
                    color="#e6e6e6"
                    sx={{ width: "50%" }}
                    error={eDateError}
                    helperText={endText}
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
                  mx:'4%',
                  display: { xs: "none", sm: "none", md: "flex" },
                }}
              ></Divider>
              <Grid item xs={12} md={5}>
                <AppCard minHeight={220} boxShadow='0'>
                    

                    <TextField
                    label='Excluded dates'
                    fullWidth
                    error={excludedError}
                    helperText={excludeText}
                    onChange={handleChange2}
                    onBlur={(e)=>setExcluded(e.target.value)}
                    value={excluded}
                    multiline
                    rows={4}
                    sx={{marginTop:4}}
                    InputProps={{
                      endAdornment:(
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            sx={{color:'#e60000'}}
                          >
                            {excludeIcon}
                          </IconButton>
                        </InputAdornment>
                      )}}
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
                  fontSize: 12,
                  padding: 1,
                  ":hover": { bgcolor: "black", color: "white" },
                }}
                type='Submit'
              >
                Create
              </Button>
            </Box>
            </form>
          </AppCard>
        </Grid>
      </Grid>
    </AppLayout>
  );
};
export default DefineSchedule;




