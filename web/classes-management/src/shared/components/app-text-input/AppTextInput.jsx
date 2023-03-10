import React from "react";
import { FormControl, TextField, Typography } from "@mui/material";

function AppTextInput({
  type,
  name,
  onChange,
  onBlur,
  value,
  placeholder,
  className,
  label,
  error,
  errorText,
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
        error={errorText ? true : false}
        helperText={errorText}
        value={value}
        disabled={rest.disabled}
        {...rest}
      />
    </FormControl>
  );
}

export default AppTextInput;
