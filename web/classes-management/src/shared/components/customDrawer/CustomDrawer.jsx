import React from "react";

import {
  IconButton,
  Typography,
  Drawer,
  AppBar,
  Toolbar,
  Grid,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CustomDrawerComponent = (props) => {
  const theme = useTheme();
  
  return (
    <>
      <Drawer
        anchor="right"
        variant="temporary"
        className={`drawer ${
          props.variant ? `${props.variant}` : "small"
        }`}
        disableEscapeKeyDown={true}
        open={props?.isOpen === false ? false : true}
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          // width: props.variant === "fullDrawer" ? undefined : DrawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            // width: props.variant === "fullDrawer" ? undefined : DrawerWidth,
            boxSizing: "border-box",
          },
        }}
        // onClose={() => props.onClose()}
      >
        {props.title && (
          <AppBar
            component="div"
            color="default"
            position="relative"
            sx={{ display: "flex" }}
          >
            <Toolbar
              variant="dense"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography component="h1" variant="h6" color="inherit" noWrap>
                {props.title}
              </Typography>
              <Grid>
                <IconButton onClick={() => props.onClose()}>
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Toolbar>
          </AppBar>
        )}
        <>{props.children}</>
      </Drawer>
    </>
  );
};

export default CustomDrawerComponent;
