import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Settings from '@mui/icons-material/Settings';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DvrIcon from '@mui/icons-material/Dvr';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GroupIcon from '@mui/icons-material/Group';
import SortIcon from '@mui/icons-material/Sort';
import { Grid } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import EventIcon from '@mui/icons-material/Event';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import { makeStyles } from "@mui/styles";
import HomeIcon from '@mui/icons-material/Home';
import BasicSelect from '../app-select-box/AppSelectInput';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import IconButton from '@mui/material/IconButton';
//import { Icon } from '@mui/material';

let marginVal=10;

const useStyles = makeStyles((theme) => ({
  textField1: {
    height:'3px',
  },
  textField2:{
    height:'3px'
  },
  img:{
    marginRight:8,
    marginLeft:10
  }
}));
let drawerWidth =200;
let appWidth=`cal(100%-${drawerWidth}px)`;


const schools=['abc','def','ghi'];



const years = ['2015','2016','2017','2018'];


const itemsList =[
  {
  text:"Main",
  icon :<DvrIcon sx={{fontSize:20}}/>,
},
{
  text:"Teachers",
  icon:<LocalLibraryIcon sx={{fontSize:20}}/>
},
{
  text:"Classes",
  icon:<LibraryBooksIcon sx={{fontSize:20}}/>
},
]
const itemsList2=[{
  text:"Settings",
  icon:<Settings sx={{fontSize:20}}/>
},
{
  text:"Accounts",
  icon:<GroupIcon sx={{fontSize:20}}/>
},
{
  text:"User",
  icon:<PersonIcon sx={{fontSize:40,color:'white',backgroundColor:'#bfbfbf',borderRadius:'50%'}}/>
}]

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
let marginLval=-110;
const MiniDrawer=() =>{
  const editing=useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    drawerWidth=160;
    appWidth=`cal(100%-${drawerWidth}px)`;
    marginVal=1;
    marginLval=-100
  };

  const handleDrawerClose = () => {
    setOpen(false);
    drawerWidth=200;
    appWidth=`cal(100%-${drawerWidth}px)`;
    marginVal=10;
    marginLval=-110;
  };

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <AppBar sx={{backgroundColor:'#e6e6e6',boxShadow:0,marginLeft:`(${drawerWidth})px`,width:appWidth,paddingBottom:3,zIndex:'1'}}position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="white"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              color:'#3333cc',
              marginRight:'5px',
              marginLeft:6,
              ...(open && { display: 'none' }),
            }}
          >
            <SortIcon />
          </IconButton>
          <Typography sx={{color:'black',marginRight:68,paddingRight:12,fontWeight:'bold'}} variant="h6" noWrap>
            Classes
          </Typography>
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
          <IconButton sx={{marginLeft:marginLval,color:'#ffcc00',fontSize:18,fontWeight:'bold'}}>
          <LightModeIcon/>
          </IconButton>
          <IconButton sx={{marginLeft:1,marginRight:-5}}>
          <ExitToAppOutlinedIcon sx={{color:'#1aa3ff',fontSize:18,fontWeight:'bold',marginRight:-1}}/>
          </IconButton>

        </Toolbar>
        <Box sx={{backgroundColor:'#e6e6e6',marginLeft:marginVal,marginTop:'-34px' }}>
            <IconButton>
                <HomeIcon sx={{backgroundColor:'#a6a6a6',borderRadius:'50%',padding:'1px',color:'white',fontSize:18}}/>
            </IconButton>
            <Typography display='inline'sx={{fontSize:33,marginLeft:0,marginRight:1,color:'#a6a6a6'}}>.</Typography>
            <Typography display='inline'sx={{fontSize:12,color:'#a6a6a6'}}>Management</Typography>
            <Typography display='inline'sx={{fontSize:33,marginLeft:1,marginRight:1,color:'#a6a6a6'}}>.</Typography>
            <Typography display='inline'sx={{fontSize:12,color:'#a6a6a6'}}>Classes</Typography>
            </Box>
        
      </AppBar>
      <Drawer  sx={{zIndex:'2'}}PaperProps={{
    sx: {
      backgroundColor: "#3333cc"
    }
  }} variant="permanent" open={open}>
        <DrawerHeader>
        <IconButton onClick={handleDrawerClose} sx={{color:'white',marginLeft:5}}>
            {theme.direction === 'rtl' ?<ChevronLeftIcon />:<ChevronLeftIcon/> }
            
          </IconButton>
        <img src='/images/now.png' alt=''width='30' height='30' className={editing.img} />
          
          
        </DrawerHeader>
        <Divider sx={{color:"#3333cc"}}/>
        <List>
          {itemsList.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' ,color:'white',fontSize:12}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    marginRight:'32px',
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color:'white'
                  }}
                >
                  {item.icon}
          
                </ListItemIcon>
                <ListItemText primary={item.text}sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List sx={{marginTop:40,color:'white'}}>
          {itemsList2.map((item, index) => (
            <ListItem key={item.text} disablePadding sx={{ display:'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    marginRight:'32px',
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color:'white'
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
      </Box>
    </Box>
    </>
  );
}
export default MiniDrawer;