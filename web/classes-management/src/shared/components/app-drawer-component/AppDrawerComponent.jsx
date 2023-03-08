import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
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
import PersonIcon from '@mui/icons-material/Person';
import { makeStyles } from "@mui/styles";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MainAppBar from '../app-main-bar/AppMainBar';




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
let drawerWidth =240;


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

const MiniDrawer=() =>{
  const editing=useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    drawerWidth=160
  };

  const handleDrawerClose = () => {
    setOpen(false);
    drawerWidth=200
  };

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <MainAppBar title='Classes'
        onClick={handleDrawerOpen} />
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
        <List sx={{marginTop:{
          sm:33,
          md:34,
          lg:40,
          xl:47
        },color:'white'}}>
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