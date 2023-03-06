import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';


import { OutlinedInput } from '@mui/material';





export default function GridComponent() {
  return (
    <section>
      
        
        
      <Grid sx={{backgroundColor:'#e6e6e6',paddingTop:3,paddingBottom:'50%'}} container spacing={2} columns={16}>
        <div sx={{boxShadow:6}}></div>
        <Grid className='classList' item xs={4}>
          <Item sx={{width:280 ,height:90, paddingTop:0,marginLeft:20,borderRadius:2,paddingRight:3}}>
            <Typography sx={{textAlign:'left',paddingLeft:1,paddingTop:2,fontWeight:900,fontSize:9,color:'black'}}>
            CLASS LIST
            </Typography></Item>
        </Grid>
        <Grid className='About'item xs={12}>
          <Item sx={{width:1100,height:230,marginLeft:7,paddingRight:5,borderRadius:2}}>
            <Typography sx={{fontWeight: 900,fontSize:9,textAlign:'left',marginLeft:2,paddingTop:2,paddingBottom:1,color:'black'}}>
                ABOUT</Typography>
                <Typography display='inline' sx={{fontSize:8,paddingLeft:5,textAlign:'left',marginLeft:-43,fontWeight:'bold',color:'#bfbfbf'}}>NAME</Typography>
                <Typography display='inline'sx={{fontSize:8,paddingLeft:5,fontWeight:'bold',color:'#bfbfbf',marginLeft:5,marginRight:5}}>SCHEDULE</Typography>
                <Typography display='inline'sx={{fontSize:8,paddingLeft:5,fontWeight:'bold',color:'#bfbfbf'}}>CAPACITY</Typography>
                <Typography display='inline'sx={{fontSize:8,paddingLeft:5,fontWeight:'bold',color:'#bfbfbf',marginLeft:5,marginRight:3}}>REGISTERED/(PAID)</Typography>
                <Typography display='inline'sx={{fontSize:8,paddingLeft:5,fontWeight:'bold',color:'#bfbfbf'}}>STATUS</Typography>
                <div>
                <OutlinedInput sx={{width:950,height:80,marginTop:1,marginLeft:2}}/>
                </div>
                <Button variant="oulined"
                sx={{marginTop:4,marginRight:111,backgroundColor:'#1aa3ff',marginLeft:2,width:7,
                color:'white',paddingTop:'5px',paddingLeft:'5px',paddingRight:'5px',textAlign:'center',fontSize:6,
                ':hover': { bgcolor: 'black', color:'white',}}}
                >Notes</Button>



          </Item>
        </Grid>
        <Grid className='classInfo' item xs={12}>
          <Item sx={{marginLeft:'455px',width:1100,height:110,borderRadius:2}}>
            <Typography sx={{marginLeft:2,textAlign:'left',fontWeight:900,fontSize:9,paddingTop:2,color:'black'}}>CLASS INFO</Typography></Item>
        </Grid>
        <Grid className='classTeachers' item xs={12}>
          <Item sx={{marginLeft:'455px',width:1100,height:90,borderRadius:2}}>
            <Typography sx={{marginLeft:2,textAlign:'left',fontWeight:900,fontSize:9,paddingTop:2,color:'black'}}>CLASS TEACHERS</Typography></Item>
        </Grid>
      </Grid>
    </section>
  );
}



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

