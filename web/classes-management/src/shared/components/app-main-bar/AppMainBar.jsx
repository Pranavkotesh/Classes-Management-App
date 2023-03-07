import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SortIcon from '@mui/icons-material/Sort';
import { Grid } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import BasicSelect from '../app-select-box/AppSelectInput';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const schools=['abc','def','ghi'];
const years = ['2015','2016','2017','2018'];

//const drawerWidth = 240;



function MainAppBar({props,onClick,title}) {
//   const { window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{backgroundColor:'#e6e6e6',boxShadow:0,zIndex:'1'}} >
        <Toolbar sx={{marginTop:1}}>
        <IconButton
            aria-label="open drawer"
            onClick={onClick}
            edge="start"
            sx={{
              color:"#3333cc",
              marginRight:'5px',
              marginLeft:16,
            //   ...(open && { display: 'none' }),
            }}
          >
            <SortIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight:'bold',color:'#000000',maxWidth:908,flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            {title}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Grid container spacing={2}>
            <Grid item >
            <BasicSelect label='Select Year'
              background='#1aa3ff'
              icon='EventIcon'
              arr={years}
             />
            </Grid>
            <Grid item>
            <BasicSelect label='Select School'
            background='#33ff99'
            icon='SchoolIcon'
            arr={schools}/>
            </Grid>
          </Grid>
          </Box>
          <IconButton sx={{marginLeft:2,color:'#ffcc00',fontSize:18,fontWeight:'bold'}}>
          <LightModeIcon/>
          </IconButton>
          <IconButton sx={{marginLeft:1,marginRight:-5}}>
          <ExitToAppOutlinedIcon sx={{color:'#1aa3ff',fontSize:18,fontWeight:'bold',marginRight:-1}}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}

MainAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MainAppBar;