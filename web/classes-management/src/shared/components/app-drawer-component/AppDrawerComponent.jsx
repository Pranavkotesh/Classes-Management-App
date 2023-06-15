import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Settings from "@mui/icons-material/Settings";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DvrIcon from "@mui/icons-material/Dvr";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import GroupIcon from "@mui/icons-material/Group";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ScheduleIcon from "@mui/icons-material/Schedule";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CreateIcon from "@mui/icons-material/Create";

const itemsList = [
  {
    text: "Classes Summary",
    icon: <DvrIcon />,
    route: "classessummary",
  },
  {
    text: "Teachers",
    icon: <LocalLibraryIcon />,
    route: "teachers",
  },
  {
    text: "Classes",
    icon: <LibraryBooksIcon />,
    route: "classes",
  },
  {
    text: "Schedule",
    icon: <ScheduleIcon />,
    route: "schedule",
  },
  {
    text: "Create Class",
    icon: <AddBoxIcon />,
    route: "createclass",
  },
  {
    text: "Create Teachers",
    icon: <CreateIcon />,
    route: "createteachers",
  },

  {
    text: "Products",
    icon: <CreateIcon />,
    route: "newpage",
  },
  
];
const itemsList2 = [
 
  {
    text: "Settings",
    icon: <Settings />,
  },
  {
    text: "Accounts",
    icon: <GroupIcon />,
  },
  {
    text: "User",
    icon: <AccountCircle />,
  },
];

const MiniDrawer = ({ open, handleDrawerClose }) => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = React.useState("classessummary");

  React.useEffect(() => {
    let selectedTab = "classessummary";
    let pathName = window.location.pathname;

    itemsList.forEach((item) => {
      if (`/${item.route}` === pathName) selectedTab = item.route;
    });

    setSelectedTab(selectedTab);
  }, []);

  const handleListItemClick = (route) => {
    setSelectedTab(route);
    navigate(`/${route}`);
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.drawerBg",
          height: "100vh",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: open ? "space-between" : "center",
            padding: open ? "12px 20px 12px 20px" : "12px 0px 12px 0px",
          }}
        >
          <img src="/images/now.png" alt="" width="40" height="40" />
          {open && (
            <IconButton
              onClick={handleDrawerClose}
              sx={{ color: "white", marginLeft: 5 }}
            >
              <ChevronLeftIcon />
            </IconButton>
          )}
        </div>
        <Divider sx={{ color: "#3333cc" }} />
        <List>
          {itemsList.map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              sx={{ display: "block", color: "white", fontSize: 12 }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                selected={selectedTab === item.route}
                onClick={() => handleListItemClick(item.route)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    marginRight: "32px",
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <Divider /> */}
        <List sx={{ position: "absolute", bottom: 0, width: "100%" }}>
          {itemsList2.map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              sx={{ display: "block", color: "white", fontSize: 12 }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    marginRight: "32px",
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};
export default MiniDrawer;
