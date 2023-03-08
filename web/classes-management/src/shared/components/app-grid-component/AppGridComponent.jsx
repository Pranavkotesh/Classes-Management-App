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
    <Box sx={{flexGrow:1,backgroundColor:'#e6e6e6',height:{sm:'150vh',md:'116vh',xl:'94vh'}
    ,marginTop:-9,width:{sm:'300vh',md:'250vh',lg:'221vh',xl:'100%'}
    }}>
        
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
            <Grid item xs={2}></Grid>
        <Grid className='classList' item xs={3}>
          <Item1 sx={{width:{
            xs:80,
            sm:140,
            md:200,
            lg:280,
            xl:280
          },height:{
            sm:50,
            md:65,
            lg:100,
            xl:110
          },
            paddingTop:0,borderRadius:2}}>
            <Typography sx={{textAlign:'left',paddingLeft:1,paddingTop:2,fontWeight:900,fontSize:9,color:'black'}}>
            CLASS LIST
            </Typography></Item1>
        </Grid>
        <Grid className='About'item xs={10}>
          <Item1 sx={{width:{
            sm:700,
            md:850,
            lg:900,
            xl:'125vh'
          },height:{
            sm:225,
            md:230,
            lg:235,
            xl:240
          },borderRadius:2,marginRight:1}}>
            <Typography sx={{fontWeight: 900,fontSize:9,textAlign:'left',marginLeft:2,paddingTop:2,paddingBottom:1,color:'black'}}>
                ABOUT</Typography>
                <Typography display='inline' sx={{fontSize:8,paddingLeft:5,textAlign:'left',marginLeft:{
                  sm:0,
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
                  sm:650,
                  md:750,
                  lg:850,
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
        <Grid item xs={5}></Grid>
        <Grid className='classInfo' item xs={11}>
          <Item1 sx={{width:{
            sm:700,
            md:850,
            lg:900,
            xl:'125vh'
          },height:{
            sm:110,
            md:120,
            lg:150,
            xl:190
          },borderRadius:2}}>
            <Typography sx={{marginLeft:2,textAlign:'left',
            fontWeight:900,fontSize:9,paddingTop:2,color:'black'}}>
            CLASS INFO</Typography></Item1>
        </Grid>
        <Grid item xs={5}></Grid>
        <Grid className='classTeachers' item xs={11}>
          <Item1 sx={{width:{
            sm:700,
            md:850,
            lg:900,
            xl:'125vh'
          },height:{
            sm:90,
            md:100,
            lg:130,
            xl:170
          },borderRadius:2}}>
            <Typography sx={{marginLeft:2,textAlign:'left',
            fontWeight:900,fontSize:9,paddingTop:2,color:'black'}}>
            CLASS TEACHERS</Typography></Item1>
        </Grid>
      </Grid>
      </Box>
    </section>
  );
}





