import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { IconButton, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import { OutlinedInput } from '@mui/material';


const Item1 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


let marginVal=19;

export default function GridComponent() {
  return (
    <section>
    <Box sx={{flexGrow:1,backgroundColor:'#e6e6e6',height:'93vh',marginTop:-9}}>
        
      <Grid sx={{backgroundColor:'#e6e6e6',paddingTop:3}} container spacing={2} columns={16}>
        <Box sx={{backgroundColor:'#e6e6e6',marginLeft:21,width:'100%' }}>
            <IconButton>
                <HomeIcon sx={{backgroundColor:'#a6a6a6',borderRadius:'50%',padding:'1px',color:'white',fontSize:18}}/>
            </IconButton>
            <Typography display='inline'sx={{fontSize:33,marginLeft:0,marginRight:1,color:'#a6a6a6'}}>.</Typography>
            <Typography display='inline'sx={{fontSize:12,color:'#a6a6a6'}}>Management</Typography>
            <Typography display='inline'sx={{fontSize:33,marginLeft:1,marginRight:1,color:'#a6a6a6'}}>.</Typography>
            <Typography display='inline'sx={{fontSize:12,color:'#a6a6a6'}}>Classes</Typography>
            </Box>
            <Grid item xs={1}></Grid>
        <Grid className='classList' item xs={3}>
          <Item1 sx={{width:{
            xs:140,
            md:200,
            lg:260,
            xl:300
          },height:{
            xs:50,
            md:65,
            lg:80,
            xl:95
          },
            paddingTop:0,borderRadius:2}}>
            <Typography sx={{textAlign:'left',paddingLeft:1,paddingTop:2,fontWeight:900,fontSize:9,color:'black'}}>
            CLASS LIST
            </Typography></Item1>
        </Grid>
        <Grid className='About'item xs={12}>
          <Item1 sx={{width:{
            xs:200,
            md:500,
            lg:800,
            xl:1100
          },height:{
            xs:185,
            md:200,
            lg:215,
            xl:230
          },borderRadius:2,marginRight:1}}>
            <Typography sx={{fontWeight: 900,fontSize:9,textAlign:'left',marginLeft:2,paddingTop:2,paddingBottom:1,color:'black'}}>
                ABOUT</Typography>
                <Typography display='inline' sx={{fontSize:8,paddingLeft:5,textAlign:'left',marginLeft:{
                  xs:0,
                  md:-5,
                  lg:-20,
                  xl:-43
                },fontWeight:'bold',color:'#bfbfbf'}}>NAME</Typography>
                <Typography display='inline'sx={{fontSize:8,paddingLeft:5,fontWeight:'bold',color:'#bfbfbf',marginLeft:5,marginRight:5}}>SCHEDULE</Typography>
                <Typography display='inline'sx={{fontSize:8,paddingLeft:5,fontWeight:'bold',color:'#bfbfbf'}}>CAPACITY</Typography>
                <Typography display='inline'sx={{fontSize:8,paddingLeft:5,fontWeight:'bold',color:'#bfbfbf',marginLeft:5,marginRight:3}}>REGISTERED/(PAID)</Typography>
                <Typography display='inline'sx={{fontSize:8,paddingLeft:5,fontWeight:'bold',color:'#bfbfbf'}}>STATUS</Typography>
                <div>
                <OutlinedInput sx={{width:{
                  xs:50,
                  md:350,
                  lg:650,
                  xl:950
                },height:80,marginTop:1,marginLeft:2}}/>
                </div>
                <Button variant="oulined"
                sx={{marginTop:4,marginRight:111,backgroundColor:'#1aa3ff',marginLeft:2,width:7,
                color:'white',paddingTop:'5px',paddingLeft:'5px',paddingRight:'5px',textAlign:'center',fontSize:6,
                ':hover': { bgcolor: 'black', color:'white',}}}
                >Notes</Button>
          </Item1>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid className='classInfo' item xs={12}>
          <Item1 sx={{width:{
            xs:200,
            md:500,
            lg:800,
            xl:1100
          },height:110,borderRadius:2}}>
            <Typography sx={{marginLeft:2,textAlign:'left',
            fontWeight:900,fontSize:9,paddingTop:2,color:'black'}}>
            CLASS INFO</Typography></Item1>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid className='classTeachers' item xs={12}>
          <Item1 sx={{width:{
            xs:200,
            md:500,
            lg:800,
            xl:1100
          },height:90,borderRadius:2}}>
            <Typography sx={{marginLeft:2,textAlign:'left',
            fontWeight:900,fontSize:9,paddingTop:2,color:'black'}}>
            CLASS TEACHERS</Typography></Item1>
        </Grid>
      </Grid>
      </Box>
    </section>
  );
}





