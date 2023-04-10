import * as React from "react";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormControl, FormHelperText, Grid, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import { DesktopDatePicker } from "@mui/x-date-pickers";
export default function AppDateSelector({
  label,
  onChange,
  onBlur,
  onTouched,
  errorText,
  color,
  value,
  name,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={2}>
        <FormControl>
          <Typography >{label}</Typography>
          <Grid container spacing={0} direction="row">
            <Grid item xs={12} position="relative">
              <DesktopDatePicker
                onBlur={onBlur}
                slotProps={{
                  textField: { size: "small", fullWidth: true},
                  inputAdornment: { position: "start" },
                }}
                onClose={onTouched}
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
                    backgroundColor:'background.card'
                  },
                }}
              />
            </Grid>
            <Grid
              container
              spacing={0}
              position="absolute"
              sx={{ marginLeft:'10%' }}
            >
              <Grid
                item
                xs={10} lg={10.5}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <ErrorIcon
                  className={`${errorText ? "icon-error" : "icon-non-error"}`}
                  sx={{
                    color: "#e60000",
                    marginTop: 1,
                    "&.icon-error": { display: "flex" },
                    "&.icon-non-error": { display: "none" },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          {errorText && (
            <FormHelperText sx={{ color: "#ff0000",backgroundColor:'background.card' }}>
              {errorText}
            </FormHelperText>
          )}
        </FormControl>
      </Stack>
    </LocalizationProvider>
  );
}
