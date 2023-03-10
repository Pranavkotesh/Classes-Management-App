import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IconButton } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { Grid } from "@mui/material";

export default function BasicSelect({
  background,
  marginR,
  icon,
  label,
  arr,
  value,
  onChange,
}) {
  return (
    <Grid container spacing={2} style={{ paddingTop: 4 }}>
      <Grid item>
        <IconButton
          style={{
            marginRight: -80,
            fontSize: 14,
            color: "whitesmoke",
            zIndex: "1",
            marginTop: -5,
          }}
        >
          <SchoolIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <Box>
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              style={{
                color: "whitesmoke",
                fontSize: 14,
                marginTop: -12,
                marginLeft: 12,
              }}
            >
              {label}
            </InputLabel>
            <Select
              display="inline"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label={label}
              value={value}
              sx={{
                width: 150,
                height: 30,
                color: "white",
                fontSize: 14,
                backgroundColor: { background },
                marginRight: { marginR },
                marginLeft: -1,
                textAlign: "center",
              }}
              onChange={onChange}
            >
              {arr.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
}
