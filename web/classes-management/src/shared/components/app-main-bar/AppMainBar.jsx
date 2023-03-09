import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SortIcon from "@mui/icons-material/Sort";
import { Drawer, Grid, useMediaQuery } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import BasicSelect from "../app-select-box/AppSelectInput";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import MiniDrawer from "../app-drawer-component/AppDrawerComponent";
// import { useTheme } from "@emotion/react";
import { useTheme, makeStyles, createStyles } from "@mui/styles";

const schools = ["abc", "def", "ghi"];
const years = ["2015", "2016", "2017", "2018"];
const openDrawerWidth = 240;
const closeDrawerWidth = 80;

// function useWidth() {
//   const theme = useTheme();
//   const keys = [...theme.breakpoints.keys].reverse();
//   return (
//     keys.reduce((output, key) => {
//       // eslint-disable-next-line react-hooks/rules-of-hooks
//       const matches = useMediaQuery(theme.breakpoints.up(key));
//       return !output && matches ? key : output;
//     }, null) || "md"
//   );
// }

function AppMainBar() {
  // custom hooks
  const width = "md";
  // const width = useWidth();
  // console.log("width", width);

  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("Classes");
  const isTokenExpired = () => {
    return false;
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const classes = styles();

  return (
    <>
      {!isTokenExpired() ? (
        <>
          <AppBar
            color="default"
            position="fixed"
            className={`${classes.appBar} ${open && classes.appBarShift}`}
          >
            <Toolbar
              disableGutters={!open}
              className={`${classes.toolbar}`}
              variant="regular"
            >
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={handleDrawerOpen}
                className={`${classes.menuButton} ${
                  open && classes.menuButtonHidden
                }`}
              >
                <SortIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                className={`${classes.title}`}
              >
                {title}
              </Typography>
              <Grid
                container
                alignItems="center"
                justifyContent="end"
                spacing={1}
                style={{ width: "auto" }}
              >
                <Grid item>
                  <BasicSelect
                    label="Select Year"
                    background="#1aa3ff"
                    icon="EventIcon"
                    arr={years}
                    value=""
                  />
                </Grid>
                <Grid item>
                  <BasicSelect
                    label="Select School"
                    background="#33ff99"
                    icon="SchoolIcon"
                    arr={schools}
                    value=""
                  />
                </Grid>
                <Grid item>
                  <IconButton
                    sx={{
                      marginLeft: 2,
                      color: "#ffcc00",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    <LightModeIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <ExitToAppOutlinedIcon
                      sx={{
                        color: "#1aa3ff",
                        fontSize: 18,
                        fontWeight: "bold",
                        marginRight: -1,
                      }}
                    />
                  </IconButton>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <Drawer
            variant={
              width
                ? width === "sm" || width === "xs"
                  ? "temporary"
                  : "permanent"
                : "permanent"
            }
            classes={{
              paper: `${classes.drawerPaper} ${
                !open && `${classes.drawerPaperClose} menu-collapsed`
              } `,
            }}
            open={open}
          >
            {/* <div className={`${classes.toolbarIcon}`}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeft />
              </IconButton>
            </div> */}
            {/* <Divider /> */}
            <MiniDrawer open={open} handleDrawerClose={handleDrawerClose} />
          </Drawer>
        </>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </>
    // <Box sx={{ display: "flex" }}>
    //   <AppBar
    //     component="nav"
    //     sx={{
    //       backgroundColor: "#e6e6e6",
    //       boxShadow: 0,
    //       zIndex: "1",
    //       width: "100%",
    //     }}
    //   >
    //     <Toolbar sx={{ marginTop: 1 }}>
    //       <IconButton
    //         aria-label="open drawer"
    //         onClick={onClick}
    //         edge="start"
    //         sx={{
    //           color: "#3333cc",
    //           marginRight: "5px",
    //           marginLeft: { xs: 5, sm: 16, md: 16, lg: 16, xl: 16 },
    //           //   ...(open && { display: 'none' }),
    //         }}
    //       >
    //         <SortIcon />
    //       </IconButton>
    //       <Typography
    //         variant="h6"
    //         component="div"
    //         sx={{
    //           fontWeight: "bold",
    //           color: "#000000",
    //           maxWidth: {
    //             xs: "17%",
    //             sm: "43%",
    //             md: "46%",
    //             lg: "54%",
    //             xl: "62%",
    //           },
    //           flexGrow: 1,
    //           display: { xs: "flex", sm: "block" },
    //         }}
    //       >
    //         {title}
    //       </Typography>
    //       <Box sx={{ display: { xs: "none", sm: "block" } }}>
    //         <Grid container spacing={2}>
    //           <Grid item>
    //             <BasicSelect
    //               label="Select Year"
    //               background="#1aa3ff"
    //               icon="EventIcon"
    //               arr={years}
    //             />
    //           </Grid>
    //           <Grid item>
    //             <BasicSelect
    //               label="Select School"
    //               background="#33ff99"
    //               icon="SchoolIcon"
    //               arr={schools}
    //             />
    //           </Grid>
    //         </Grid>
    //       </Box>
    //
    //
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  );
}

const styles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      ...theme.mixins.toolbar,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      minHeight: "48px !important",
    },
    appBar: {
      marginLeft: closeDrawerWidth,
      width: `calc(100% - ${closeDrawerWidth}px) !important`,
      zIndex: theme.zIndex.drawer + 1,
      transition: `${theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      })} !important`,
      boxShadow: "none !important",
      border: "1px solid #ddd",
    },
    appBarShift: {
      marginLeft: openDrawerWidth,
      width: `calc(100% - ${openDrawerWidth}px) !important`,
      transition: `${theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })} !important`,
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36,
    },
    menuButtonHidden: {
      display: "none",
    },
    title: {
      flexGrow: 1,
      display: "flex",
      alignItems: "center",
    },
    temLogo: {
      // marginTop: 8,
      height: 30,
      marginRight: 16,
    },
    drawerPaper: {
      position: "relative",
      whiteSpace: "nowrap",
      width: openDrawerWidth,
      transition: `${theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })} !important`,
    },
    drawerPaperClose: {
      width: closeDrawerWidth,
      overflowX: "hidden",
      transition: `${theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      })} !important`,
      // width: theme.spacing(7),
      // [theme.breakpoints.up("sm")]: {
      //   width: theme.spacing(9),
      // },
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      height: "100vh",
      overflow: "auto",
    },
    chartContainer: {
      marginLeft: -22,
    },
    tableContainer: {
      height: 320,
    },
    h5: {
      marginBottom: theme.spacing(2),
    },
    avatar: {
      backgroundColor: "#1976d2",
    },
  })
);

AppMainBar.propTypes = {};

export default AppMainBar;
