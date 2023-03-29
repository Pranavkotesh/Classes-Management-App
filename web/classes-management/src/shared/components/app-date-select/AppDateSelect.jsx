import * as React from "react";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormControl, FormHelperText, Grid, Typography } from "@mui/material";
// import Box from "@mui/material/Box";
import ErrorIcon from "@mui/icons-material/Error";
import { Box } from "@mui/system";
export default function AppDateSelector({
  label,
  onChange,
  onBlur,
  error,
  errorText,
  color,
  value,
  name,
  icon,
  ...rest
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={2}>
        <FormControl>
          <Typography sx={{ color: color || "grey" }}>{label}</Typography>
          <Grid container spacing={0} direction="row">
            <Grid item xs={12} position="relative">
              <DatePicker
                onBlur={onBlur}
                slotProps={{
                  textField: { size: "small", fullWidth: true },
                  inputAdornment: { position: "start" },
                }}
                name={name}
                inputFormat="MM/DD/YYYY"
                className={`${errorText ? "date-error" : "date-picker"}`}
                value={value}
                onChange={onChange}
                sx={{
                  position: "relative",
                  "&.date-picker": { flexDirection: "row-reverse" },
                  "&.date-error": {
                    border: "0.3px solid rgba(255,0,0)",
                    borderRadius: 1,
                  },
                }}
              />
            </Grid>
            <Grid container spacing={0} position="absolute">
              <Grid item xs={11.2}></Grid>
              <Grid item xs={0.8}>
                <Box>
                  <ErrorIcon
                    className={`${errorText ? "icon-error" : "icon-non-error"}`}
                    sx={{
                      color: "#e60000",
                      marginTop: 1,
                      "&.icon-error": { display: "flex" },
                      "&.icon-non-error": { display: "none" },
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {errorText && (
            <FormHelperText sx={{ color: "#cc0000" }}>
              {errorText}
            </FormHelperText>
          )}
        </FormControl>
      </Stack>
    </LocalizationProvider>
  );
}
