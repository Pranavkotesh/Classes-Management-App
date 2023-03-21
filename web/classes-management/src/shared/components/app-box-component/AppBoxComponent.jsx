import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";


function BoxElement({ elementOne, elementTwo,elementThree}) {
  const classes=useStyles()
  return (
    <Box
      sx={{
        backgroundColor: "#e6e6e6",
        marginLeft: "2vh",
      }}
    >
      <IconButton>
        <HomeIcon
          sx={{
            backgroundColor: "#a6a6a6",
            borderRadius: "50%",
            padding: "1px",
            color: "white",
            fontSize: 18,
          }}
        />
      </IconButton>
      <Typography
        display="inline"
        className={classes.typography}
      >
        .
      </Typography>
      <Typography display="inline" className={classes.typographyText}>{elementOne}</Typography>
      {/* <Button sx={{ fontSize: 12, color: "#a6a6a6" }}>{elementOne}</Button> */}
      <Typography
        display="inline"
        className={classes.typography}
      >
        .
      </Typography>
      <Typography display="inline" className={classes.typographyText}>{elementTwo}</Typography>
      <Typography
        display="inline"
        className={classes.typography}
      >
        .
      </Typography>
      <Typography display="inline" className={classes.typographyText}>{elementThree}</Typography>
    </Box>
  );
}
export default BoxElement;

const useStyles = makeStyles(()=>({
typographyText:{
  fontSize:12,
  color:"#a6a6a6",
},
typography:{
  fontSize:33,
  color:"#a6a6a6",
  mx:2
}
}))