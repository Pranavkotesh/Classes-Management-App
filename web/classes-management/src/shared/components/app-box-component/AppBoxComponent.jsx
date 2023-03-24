import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";

function BoxElement({ elementOne, elementTwo, elementThree,marginTop,xs,sm,md,lg,xl }) {
  const classes = useStyles();
  return (
    <Grid container spacing={1} sx={{marginTop:marginTop,display:{xs:xs,sm:sm,md:md,lg:lg,xl:xl} }}>
      <Grid item xs={0} sx={{ marginLeft: 3}}>
        <IconButton>
          <HomeIcon className={classes.icon} fontSize="18" />
        </IconButton>
      </Grid>
      <Grid item xs={0}>
        <Typography className={classes.typography}>.</Typography>
      </Grid>
      <Grid item xs={0}>
        <Typography className={classes.typographyText}>{elementOne}</Typography>
      </Grid>
      <Grid item xs={0}>
        <Typography className={classes.typography}>.</Typography>
      </Grid>
      <Grid item xs={0}>
        <Typography className={classes.typographyText}>{elementTwo}</Typography>
      </Grid>
      <Grid item xs={0}>
        <Typography className={classes.typography}>.</Typography>
      </Grid>
      <Grid item xs={0}>
        <Typography className={classes.typographyText}>
          {elementThree}
        </Typography>
      </Grid>
    </Grid>
  );
}
export default BoxElement;

const useStyles = makeStyles(() => ({
  icon: {
    backgroundColor: "#a6a6a6",
    borderRadius: "50%",
    padding: "1px",
    color: "white",
    fontSize: 18,
  },
  typographyText: {
    paddingTop: 4,
    fontSize: 12,
    color: "#a6a6a6",
  },
  typography: {
    fontSize: 33,
    color: "#a6a6a6",
  },
}));
