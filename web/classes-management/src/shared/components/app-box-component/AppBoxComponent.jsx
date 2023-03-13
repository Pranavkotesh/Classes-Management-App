import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import { Button, IconButton } from "@mui/material";
import { Typography } from "@mui/material";

function BoxElement({ elementOne, elementTwo }) {
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
        sx={{
          fontSize: 33,
          marginLeft: 0,
          marginRight: 1,
          color: "#a6a6a6",
        }}
      >
        .
      </Typography>
      <Button sx={{ fontSize: 12, color: "#a6a6a6" }}>{elementOne}</Button>
      <Typography
        display="inline"
        sx={{
          fontSize: 33,
          marginLeft: 1,
          marginRight: 1,
          color: "#a6a6a6",
        }}
      >
        .
      </Typography>
      <Button sx={{ fontSize: 12, color: "#a6a6a6" }}>{elementTwo}</Button>
    </Box>
  );
}
export default BoxElement;
