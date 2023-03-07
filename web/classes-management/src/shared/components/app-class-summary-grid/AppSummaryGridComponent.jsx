import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { IconButton, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SummaryGrid() {
  return (
    <Box sx={{ flexGrow: 1,backgroundColor:'#e6e6e6',height:'93vh',marginTop:-9 }}>
        <Box sx={{backgroundColor:'#e6e6e6',marginLeft:21,width:'100%' }}>
            <IconButton>
                <HomeIcon sx={{backgroundColor:'#a6a6a6',borderRadius:'50%',padding:'1px',color:'white',fontSize:18}}/>
            </IconButton>
            <Typography display='inline'sx={{fontSize:33,marginLeft:0,marginRight:1,color:'#a6a6a6'}}>.</Typography>
            <Typography display='inline'sx={{fontSize:12,color:'#a6a6a6'}}>Management</Typography>
            <Typography display='inline'sx={{fontSize:33,marginLeft:1,marginRight:1,color:'#a6a6a6'}}>.</Typography>
            <Typography display='inline'sx={{fontSize:12,color:'#a6a6a6'}}>Classes</Typography>
            </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <Item
          sx={{marginLeft:20}}>xs=12</Item>
        </Grid>
        <Grid item xs={12}>
          <Item
          sx={{marginLeft:20}}>xs=12</Item>
        </Grid>
      </Grid>
    </Box>
  );
}