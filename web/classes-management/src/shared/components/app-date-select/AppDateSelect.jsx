import * as React from "react";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormControl, FormHelperText, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
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
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <Stack spacing={2}>
        <FormControl>
           <Typography sx={{color:color||'grey'}}>{label}</Typography>
          <DatePicker
            onBlur={onBlur}
            slotProps={{textField:{size:'small',fullWidth:'true'},inputAdornment:{position:'start'}}}
            name={name}
            inputFormat="MM/DD/YYYY"
            className={`${errorText?'date-error':'date-picker'}`}
            
            value={value}
            onChange={onChange}
            sx={{
                '&.date-picker':{flexDirection:'row-reverse'},
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
          
          {icon && (
        <div style={{ position: "absolute", color:"#e60000", right:10, top: 5 }}>
          {errorText?<ErrorIcon/>:""}
        </div>
      )}
        </FormControl>
      </Stack>
    </LocalizationProvider>
  );
}


