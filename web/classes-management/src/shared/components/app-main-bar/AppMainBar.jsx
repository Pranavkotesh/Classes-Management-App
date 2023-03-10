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
import { useTheme, makeStyles, createStyles } from "@mui/styles";
import { THEME } from "../../../styles";
import { Event, School } from "@mui/icons-material";

const schools = ["abc", "def", "ghi"];
const years = ["2015", "2016", "2017", "2018"];
const openDrawerWidth = 240;
const closeDrawerWidth = 72;

function useWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || "md"
  );
}

function AppMainBar({
  title,
  onSchoolChange,
  onYearChange,
  selectedYear,
  selectedSchool,
}) {
  // custom hooks
  const width = useWidth();

  const [open, setOpen] = React.useState(
    width === "xs" || width === "sm" ? false : true
  );

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

  const getAppBarClassName = () => {
    let className = classes.appBar;
    if (open) {
      className = classes.appBarShift;
    } else {
      if (["sm", "xs"].includes(width)) className = classes.appBarShiftSmXs;
    }
    return className;
  };

  return (
    <>
      {!isTokenExpired() ? (
        <>
          <AppBar
            color="default"
            position="fixed"
            className={`${classes.commonAppBarClass} ${getAppBarClassName()}`}
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
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                <BasicSelect
                  label="Select Year"
                  bgColor="#1aa3ff"
                  icon={<Event />}
                  menuItems={years}
                  value={selectedYear}
                  onChange={onYearChange}
                  width={180}
                  height={35}
                />
                <BasicSelect
                  label="Select School"
                  bgColor="#33ff99"
                  icon={<School />}
                  menuItems={schools}
                  value={selectedSchool}
                  onChange={onSchoolChange}
                  width={180}
                  height={35}
                />
              </Box>
              <Box sx={{ paddingLeft: 2 }}>
                <IconButton
                  sx={{
                    color: "#ffcc00",
                  }}
                >
                  <LightModeIcon />
                </IconButton>
                <IconButton>
                  <ExitToAppOutlinedIcon
                    sx={{
                      color: THEME.palette.primary.main,
                    }}
                  />
                </IconButton>
              </Box>
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
            className={open ? classes.drawerPaper : classes.drawerPaperClose}
            classes={{
              paper: `${classes.drawerPaper} ${
                !open && `${classes.drawerPaperClose} menu-collapsed`
              } `,
            }}
            open={open}
          >
            <MiniDrawer open={open} handleDrawerClose={handleDrawerClose} />
          </Drawer>
        </>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </>
  );
}

const styles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    toolbar: {
      paddingRight: 16, // keep right padding when drawer closed
      paddingLeft: 16,
    },
    toolbarIcon: {
      ...theme.mixins.toolbar,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      minHeight: "48px !important",
    },
    commonAppBarClass: {
      boxShadow: "none !important",
      border: "1px solid #ddd",
    },
    appBar: {
      marginLeft: closeDrawerWidth,
      width: `calc(100% - ${closeDrawerWidth}px) !important`,
      zIndex: theme.zIndex.drawer + 1,
      transition: `${theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      })} !important`,
    },
    appBarShift: {
      marginLeft: openDrawerWidth,
      width: `calc(100% - ${openDrawerWidth}px) !important`,
      transition: `${theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })} !important`,
    },
    appBarShiftSmXs: {
      marginLeft: 0,
      width: `100% !important`,
      transition: `${theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
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
      border: "none !important",
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

AppMainBar.propTypes = {
  title: PropTypes.string.isRequired,
  selectedYear: PropTypes.string,
  selectedSchool: PropTypes.string,
  onSchoolChange: PropTypes.func,
  onYearChange: PropTypes.func,
};

export default AppMainBar;
