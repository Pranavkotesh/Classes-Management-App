import * as React from "react";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormControl, FormHelperText } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
export default function AppDateSelector({
  label,
  onChange,
  onBlur,
  error,
  errorText,
  value,
  name,
  icon,
  ...rest
}) {




  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={2}>
        <FormControl >
          <DatePicker
            label={label}
            name={name}
            inputFormat="MM/DD/YYYY"
            className={`${errorText?'date-error':''}`}
            value={value}
            onChange={onChange}
           
            
            sx={{ 
                '&.date-error':{
                border:'0.3px solid rgba(255,0,0)',
                
                borderRadius:1
            }}}
          />
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


