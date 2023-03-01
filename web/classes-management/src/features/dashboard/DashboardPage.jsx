import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const DashboardPage = () => {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <Paper className={classes.dashboardSection}>
        <Typography variant="h5">Dashboard</Typography>
      </Paper>
    </main>
  );
};

const useStyles = makeStyles((theme) => ({
  main: {
    padding: 16,
  },
  dashboardSection: {
    padding: 16,
  },
}));

export default DashboardPage;
