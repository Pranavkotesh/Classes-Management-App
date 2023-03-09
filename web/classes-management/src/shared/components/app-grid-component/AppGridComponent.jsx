import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { IconButton, Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';
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

export default function GridComponent() {
  return (
    <section>
    <Box sx={{flexGrow:1,backgroundColor:'#e6e6e6',height:{xs:'100vh',sm:'150vh',md:'116vh',xl:'94vh'}
    ,marginTop:-9,width:{
      xs:'106%',sm:'263vh',
      md:'120%',
      lg:'110%',
      xl:'100%'
    }
    }}>
        
      <Grid sx={{backgroundColor:'#e6e6e6',paddingTop:3}} container spacing={2} columns={16}>
        <Box sx={{backgroundColor:'#e6e6e6',marginLeft:{xs:15,sm:21,md:21,lg:21,xl:21},width:'100%',marginBottom:{xs:2,sm:0,md:0} }}>
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
            xs:'36vh',
            sm:140,
            md:200,
            lg:280,
            xl:280
          },height:{
            xs:60,
            sm:50,
            md:65,
            lg:100,
            xl:110
          },marginLeft:{xs:'15px',sm:0},
            paddingTop:0,borderRadius:2}}>
            <Typography sx={{textAlign:'left',paddingLeft:1,paddingTop:2,fontWeight:900,fontSize:9,color:'black'}}>
            CLASS LIST
            </Typography></Item1>
        </Grid>
        <Grid className='About'item xs={10}>
          <Item1 sx={{borderRadius:2,marginRight:1,width:{
            xs:'36vh',
            sm:700,
            md:850,
            lg:900,
            xl:'125vh'
          },marginTop:{xs:10,sm:0,md:0,lg:0,xl:0},marginLeft:{xs:'-8vh',sm:0,md:0}}}>
            <Typography sx={{fontWeight:900,fontSize:9,textAlign:'left',marginLeft:2,paddingTop:2,paddingBottom:1,color:'black'}}>
                ABOUT</Typography>
                <Box sx={{display:{xs:'none',sm:'none',md:'block',lg:'block',xl:'block'}}}>
                <Typography display='inline' sx={{fontSize:8,paddingLeft:5,textAlign:'left',marginLeft:{
                  xs:0,
                  sm:0,
                  md:-5,
                  lg:-20,
                  xl:-43
                },fontWeight:'bold',color:'#bfbfbf'}}>NAME</Typography>
                <Typography display='inline'sx={{fontSize:8,paddingLeft:5,fontWeight:'bold',color:'#bfbfbf',marginLeft:5,marginRight:5}}>SCHEDULE</Typography>
                <Typography display='inline'sx={{fontSize:8,paddingLeft:5,fontWeight:'bold',color:'#bfbfbf'}}>CAPACITY</Typography>
                <Typography display='inline'sx={{fontSize:8,paddingLeft:5,fontWeight:'bold',color:'#bfbfbf',marginLeft:5,marginRight:3}}>REGISTERED/(PAID)</Typography>
                <Typography display='inline'sx={{fontSize:8,paddingLeft:5,fontWeight:'bold',color:'#bfbfbf'}}>STATUS</Typography>
                </Box>
                <div>
                <OutlinedInput sx={{width:{
                  xs:'92%',
                  md:'90%',
                  lg:'90%',
                  xl:'90%'
                },height:{xs:'13vh',sm:'11vh'},marginTop:1,marginLeft:0}}/>
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
            xs:'36vh',
            sm:700,
            md:850,
            lg:900,
            xl:'125vh'
          },height:{
            xs:130,
            sm:110,
            md:120,
            lg:150,
            xl:190
          },borderRadius:2,marginLeft:{xs:'-8vh',sm:0,md:0}}}>
            <Typography sx={{marginLeft:2,textAlign:'left',
            fontWeight:900,fontSize:9,paddingTop:2,color:'black'}}>
            CLASS INFO</Typography></Item1>
        </Grid>
        <Grid item xs={5}></Grid>
        <Grid className='classTeachers' item xs={11}>
          <Item1 sx={{width:{
            xs:'36vh',
            sm:700,
            md:850,
            lg:900,
            xl:'125vh'
          },height:{
            xs:110,
            sm:90,
            md:100,
            lg:130,
            xl:170
          },borderRadius:2,marginLeft:{xs:'-8vh',sm:0,md:0}}}>
            <Typography sx={{marginLeft:2,textAlign:'left',
            fontWeight:900,fontSize:9,paddingTop:2,color:'black'}}>
            CLASS TEACHERS</Typography></Item1>
        </Grid>
      </Grid>
      </Box>
    </section>
  );
}



