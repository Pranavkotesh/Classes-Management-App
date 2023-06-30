import * as React from "react";
import { Typography, Paper, Fab } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Home from "@mui/icons-material/Home";
import AppLayout from "../app-layout/AppLayout";
const MyLink = (props) => <Link to="/dashboard" {...props} />;

const App404Page = () => {
  const classes = styles();
  return (
    <AppLayout title="Not Found">
      <Paper className={classes.root}>
        <Typography variant="h3" gutterBottom>
          4
          <span role="img" aria-labelledby="lost" style={{ color: "red" }}>
            🚫
          </span>
          4
        </Typography>
        <Typography variant="h5" gutterBottom>
          Looks like you are stranded... Lets go home
        </Typography>
        <br />
        <Fab component={MyLink} color="primary" aria-label="home">
          <Home />
        </Fab>
      </Paper>
    </AppLayout>
  );
};

const styles = makeStyles((theme) =>
  createStyles({
    root: {
      textAlign: "center",
      padding: theme.spacing(4),
      width: "400px",
      margin: "16px auto",
    },
    paper: {},
    button: {},
  })
);

export default App404Page;
