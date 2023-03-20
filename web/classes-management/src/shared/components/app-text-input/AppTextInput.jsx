import React from "react";
import { FormControl, TextField, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import ErrorIcon from "@mui/icons-material/Error";
function AppTextInput({
  type,
  name,
  onChange,
  onBlur,
  value,
  rows,
  placeholder,
  className,
  label,
  error,
  icon,
  errorText,
  helperText,
 endIcon,
  ...rest
}) {
  return (
    
    <FormControl fullWidth margin="normal">
      {label && <Typography style={{ color: "grey" }}>{label}</Typography>}
      <TextField
        size="small"
        name={name}
        type={type || "text"}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        error={error||errorText ? true : false}
        helperText={errorText||helperText}
        value={value}
        disabled={rest.disabled}
        multiline
        rows={rows||1}
        {...rest}
        InputProps={{
          startAdornment:(
            <InputAdornment position="start">
                {icon}
            </InputAdornment>
          ),
          endAdornment:( 
            <InputAdornment position="end" sx={{color:'#e60000'}}>
              {errorText ? <ErrorIcon/>:" "}
                
            </InputAdornment>
            
          )}}
      />
    </FormControl>
  );
}

export default AppTextInput;
